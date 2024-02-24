import { AxiosInstance } from "axios";
import { load } from "cheerio";
import {
  ClassRoutineDaySchedule,
  ClassRoutineDetail,
  ClassRoutineTimeSlot,
} from "@/types/usisTypes";

export default async function getClassRoutineData(client: AxiosInstance) {
  try {
    await client.get("https://usis.bracu.ac.bd/academia/");
    const response = await client.get(
      "https://usis.bracu.ac.bd/academia/academicSection/showStudentClassSchedule",
    ); // Replace with your actual API endpoint
    const html = response.data;
    const schedule = getScheduleTableStructure(html);
    const details = extractCourseDetails(html);
    return combineData(schedule, details);
  } catch (error) {
    console.error("Error fetching data:", error);
  }
}

function getScheduleTableStructure(html: string): ClassRoutineTimeSlot[] {
  const $ = load(html);
  const schedule: ClassRoutineTimeSlot[] = [];

  // Iterate over each row in the table
  $("table.simple-table-css tr").each((index, row) => {
    if (index === 0) {
      // Skip the header row
      return;
    }

    const time = $(row).find("td:first-child").text().trim();
    const days = [
      "Sunday",
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
    ];
    const scheduleRow: ClassRoutineTimeSlot = {
      time,
      days: {},
    };

    // Iterate over each cell in the row
    $(row)
      .find("td:not(:first-child)")
      .each((i, cell) => {
        const id = $(cell).find("div").attr("id") || "";
        const content = $(cell).find("div").text().trim();

        const courseIdMatch = content.match(/([A-Za-z0-9]+) -/);
        const facultyMatch = content.match(/- ([A-Za-z]+) -/);
        const roomMatch = content.match(/- ([A-Za-z0-9-]+)$/);

        const courseId = courseIdMatch ? courseIdMatch[1] : null;
        const faculty = facultyMatch ? facultyMatch[1] : null;
        const room = roomMatch ? roomMatch[1] : null;

        scheduleRow.days[days[i]] = {
          id,
          courseId,
          faculty,
          room,
        };
      });

    schedule.push(scheduleRow);
  });

  return schedule;
}

function extractCourseDetails(scriptContent: string): ClassRoutineDetail[] {
  const $ = load(scriptContent);
  const results: ClassRoutineDetail[] = [];

  const regex =
    /\$\("#([\d]+_[\d]+)"\)\.append\('([^]+?) - ([^]+?) - ([^]+?)<br\/>\'\)/g;
  let match;

  $("script").each(function () {
    const scriptContent = $(this).html() || "";

    while ((match = regex.exec(scriptContent)) !== null) {
      const id = match[1];
      const courseId = match[2];
      const faculty = match[3];
      const room = match[4];

      results.push({
        id,
        courseId,
        faculty,
        room,
      });
    }
  });

  return results;
}

function combineData(
  schedule: ClassRoutineTimeSlot[],
  details: ClassRoutineDetail[],
): ClassRoutineTimeSlot[] {
  // Create a map to store details based on their IDs
  const detailsMap = new Map<string, ClassRoutineDetail>();
  details.forEach((detail) => detailsMap.set(detail.id, detail));

  // Combine schedule and details based on IDs
  const combinedData = schedule.map((timeSlot) => {
    const combinedDays: Record<string, ClassRoutineDaySchedule> = {};
    Object.keys(timeSlot.days).forEach((day) => {
      const id = timeSlot.days[day].id;
      const detail = detailsMap.get(id);

      if (detail) {
        combinedDays[day] = { ...timeSlot.days[day], ...detail };
      } else {
        combinedDays[day] = timeSlot.days[day];
      }
    });

    return { time: timeSlot.time, days: combinedDays };
  });

  return combinedData;
}

export type convertedTimeSlot = {
  courseId: string | null;
  faculty: string | null;
  room: string | null;
};

type convertedTimeSlots = {
  [timeRange: string]: convertedTimeSlot;
};

type convertedScheduleDay = {
  day: string;
  timeSlots: convertedTimeSlots;
};

function convertScheduleArray(scheduleArray: ClassRoutineTimeSlot[]) {
  let convertedSchedule: convertedScheduleDay[] = [];

  scheduleArray.forEach((course) => {
    Object.keys(course.days).forEach((day) => {
      let dayIndex = convertedSchedule.findIndex((item) => item.day === day);

      if (dayIndex === -1) {
        dayIndex = convertedSchedule.length;
        convertedSchedule.push({ day, timeSlots: {} });
      }

      convertedSchedule[dayIndex].timeSlots[course.time] = {
        courseId: course.days[day].courseId,
        faculty: course.days[day].faculty,
        room: course.days[day].room,
      };
    });
  });

  return convertedSchedule;
}

interface OngoingAndUpcomingClasses {
  ongoingClass: convertedTimeSlot | null;
  upcomingClasses: Array<convertedTimeSlot & { day: string; time: string }>;
}

export function getOngoingAndUpcomingClasses(
  scheduleArray: ClassRoutineTimeSlot[],
): OngoingAndUpcomingClasses {
  const scheduleData = convertScheduleArray(scheduleArray);
  const currentDate = new Date(2024, 1, 12, 8, 30);
  const currentDay = currentDate.toLocaleDateString("en-US", {
    weekday: "long",
  });
  const currentTime = currentDate.toLocaleTimeString("en-US", {
    hour12: false,
  });

  let ongoingClass: convertedTimeSlot | null = null;
  const upcomingClasses: Array<
    convertedTimeSlot & { day: string; time: string }
  > = [];
  let count = 0;

  for (const dayData of scheduleData) {
    if (dayData.day === currentDay) {
      for (const timeSlot in dayData.timeSlots) {
        const slot = dayData.timeSlots[timeSlot];
        if (slot.courseId !== null && currentTime < timeSlot.split("-")[1]) {
          if (!ongoingClass && currentTime >= timeSlot.split("-")[0]) {
            ongoingClass = slot;
            count++;
          } else {
            upcomingClasses.push({ ...slot, day: dayData.day, time: timeSlot });
            count++;
            if (count === 4) {
              return { ongoingClass, upcomingClasses };
            }
          }
        }
      }
    }
  }

  for (const dayData of scheduleData) {
    if (dayData.day !== currentDay) {
      for (const timeSlot in dayData.timeSlots) {
        const slot = dayData.timeSlots[timeSlot];
        if (slot.courseId !== null) {
          upcomingClasses.push({ ...slot, day: dayData.day, time: timeSlot });
          count++;
          if (count === 4) {
            return { ongoingClass, upcomingClasses };
          }
        }
      }
    }
  }

  return { ongoingClass, upcomingClasses };
}
