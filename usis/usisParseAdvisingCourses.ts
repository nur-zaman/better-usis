import routine from "@/components/tables/course-planning-table/data";
import { load } from "cheerio";
import axios from "axios";
import { advisingCoursesNoLogin } from "./usisApiRoutes";
import { ParsedData, Course } from "@/types/usisTypes";

async function parseRoutine(): Promise<ParsedData> {
  const routine = await axios.get(advisingCoursesNoLogin);
  const html: string = routine.data;

  const $ = load(html);

  const parsedData: ParsedData = {
    courses: [],
  };

  $("table#customers tbody tr").each((index, element) => {
    const course: Course = {
      courseCode: $(element).find("td:nth-child(2)").text().trim(),
      program: $(element).find("td:nth-child(3)").text().trim(),
      faculty: $(element).find("td:nth-child(4)").text().trim(),
      credit: parseFloat($(element).find("td:nth-child(5)").text().trim()),
      section: $(element).find("td:nth-child(6)").text().trim(),
      dayTimeRoom: parseDayTimeRoom(
        $(element).find("td:nth-child(7)").text().trim(),
      ),
      totalSeat: parseInt($(element).find("td:nth-child(8)").text().trim()),
      seatBooked: parseInt($(element).find("td:nth-child(9)").text().trim()),
      seatRemaining: parseInt(
        $(element).find("td:nth-child(10)").text().trim(),
      ),
    };

    parsedData.courses.push(course);
  });

  function parseDayTimeRoom(dayTimeRoomString: string) {
    let parts = dayTimeRoomString.split(/\)/);

    parts = parts.filter((part) => part.trim() !== "");

    const dayRegex = /[A-Za-z]{2}/;
    const timeRegex = /\d{2}:\d{2} [APMapm]{2}-\d{2}:\d{2} [APMapm]{2}/;
    const roomRegex = /\d{2}[A-Za-z]-\d{2}[A-Za-z]/;

    // Extract day, time, and room number from each part
    const extractedInfo = parts.map((part) => {
      const day = part.match(dayRegex)![0];
      const time = part.match(timeRegex)![0];
      const roomNumber = part.match(roomRegex) ? part.match(roomRegex)![0] : "";
      return { day, time, roomNumber };
    });

    return extractedInfo;
  }
  return parsedData;

  console.log(parsedData);
}

export { parseRoutine };
