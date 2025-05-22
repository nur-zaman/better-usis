import routine from "@/components/tables/course-planning-table/data";
import { load } from "cheerio";
import axios from "axios";
import { advisingCoursesNoLogin } from "./usisApiRoutes";
import { ParsedData, Course } from "@/types/usisTypes";

async function parseRoutine(): Promise<ParsedData> {
  // const routine = await axios.get(advisingCoursesNoLogin);
  // const html: string = routine.data;
  //
  // const $ = load(html);
  //
  // const parsedData: ParsedData = {
  //   courses: [],
  // };
  //
  // $("table#customers tbody tr").each((index, element) => {
  //   const course: Course = {
  //     courseCode: $(element).find("td:nth-child(2)").text().trim(),
  //     program: $(element).find("td:nth-child(3)").text().trim(),
  //     faculty: $(element).find("td:nth-child(4)").text().trim(),
  //     credit: parseFloat($(element).find("td:nth-child(5)").text().trim()),
  //     section: $(element).find("td:nth-child(6)").text().trim(),
  //     dayTimeRoom: parseDayTimeRoom(
  //       $(element).find("td:nth-child(7)").text().trim(),
  //     ),
  //     totalSeat: parseInt($(element).find("td:nth-child(8)").text().trim()),
  //     seatBooked: parseInt($(element).find("td:nth-child(9)").text().trim()),
  //     seatRemaining: parseInt(
  //       $(element).find("td:nth-child(10)").text().trim(),
  //     ),
  //   };
  //
  //   parsedData.courses.push(course);
  // });
  //
  // function parseDayTimeRoom(dayTimeRoomString: string) {
  //   let parts = dayTimeRoomString.split(/\)/);
  //
  //   parts = parts.filter((part) => part.trim() !== "");
  //
  //   const dayRegex = /[A-Za-z]{2}/;
  //   const timeRegex = /\d{2}:\d{2} [APMapm]{2}-\d{2}:\d{2} [APMapm]{2}/;
  //   const roomRegex = /\d{2}[A-Za-z]-\d{2}[A-Za-z]/;
  //
  //   // Extract day, time, and room number from each part
  //   const extractedInfo = parts.map((part) => {
  //     const day = part.match(dayRegex)![0];
  //     const time = part.match(timeRegex)![0];
  //     const roomNumber = part.match(roomRegex) ? part.match(roomRegex)![0] : "";
  //     return { day, time, roomNumber };
  //   });
  //
  //   return extractedInfo;
  // }
  // return parsedData;
  //
  // console.log(parsedData);

  const mockParsedData: ParsedData = {
    courses: [
      {
        courseCode: "CSE110",
        program: "CSE",
        faculty: "Mr. Mock Faculty A",
        credit: 3.0,
        section: "1",
        dayTimeRoom: [
          { day: "SA", time: "08:00 AM-09:20 AM", roomNumber: "UB10101" },
          { day: "TH", time: "08:00 AM-09:20 AM", roomNumber: "UB10101" },
        ],
        totalSeat: 40,
        seatBooked: 35,
        seatRemaining: 5,
      },
      {
        courseCode: "MAT110",
        program: "MAT",
        faculty: "Ms. Mock Faculty B",
        credit: 3.0,
        section: "3",
        dayTimeRoom: [
          { day: "MO", time: "10:00 AM-11:20 AM", roomNumber: "UB50102" },
          { day: "WE", time: "10:00 AM-11:20 AM", roomNumber: "UB50102" },
        ],
        totalSeat: 35,
        seatBooked: 30,
        seatRemaining: 5,
      },
      {
        courseCode: "ENG101",
        program: "ENG",
        faculty: "Dr. Mock Faculty C",
        credit: 3.0,
        section: "5",
        dayTimeRoom: [
          { day: "TU", time: "01:00 PM-02:20 PM", roomNumber: "UB20304" },
        ],
        totalSeat: 30,
        seatBooked: 29,
        seatRemaining: 1,
      },
      {
        courseCode: "PHY111",
        program: "PHY",
        faculty: "Mr. Mock Faculty D",
        credit: 4.0, // Includes lab
        section: "2",
        dayTimeRoom: [
          { day: "SA", time: "11:30 AM-12:50 PM", roomNumber: "UB40401" },
          { day: "TH", time: "11:30 AM-12:50 PM", roomNumber: "UB40401" },
          { day: "MO", time: "02:30 PM-04:20 PM", roomNumber: "UB70701L" }, // Lab
        ],
        totalSeat: 25,
        seatBooked: 25,
        seatRemaining: 0,
      },
    ],
  };
  return mockParsedData;
}

export { parseRoutine };
