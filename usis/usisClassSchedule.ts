import { ClassScheduleForCourseDetails } from "@/types/usisTypes";
import { AxiosInstance } from "axios";

interface ClassScheduleResponse {
  page: number;
  total: number;
  records: number;
  rows: ClassScheduleRow[];
  totalEntry: number;
  marksNotEntry: number;
}

interface ClassScheduleRow {
  cell: [
    string, // Example: "1"
    string, // Example: "ACT201"
    string, // Example: "FINANCIAL ACCOUNTING"
    string, // Example: "01"
    number, // Example: 30
    string, // Example: "BRAC BUSINESS SCHOOL"
    string, // Example: "BBS"
    string, // Example: "Mr. Saif Hossain"
    string, // Example: "SHO"
    string, // Example: "04-09-2023"
    string, // Example: "Reserved Day 2(02:00 PM-04:00 PM)"
    string, // Example: "02:00 PM-03:20 PM"
    string, // You need to replace these nulls with the actual data types
    string, // Example: "02:00 PM-03:20 PM"
    string, // You need to replace these nulls with the actual data types
    string, // You need to replace these nulls with the actual data types
    string, // You need to replace these nulls with the actual data types
    string, // You need to replace these nulls with the actual data types
  ];
  class: string;
  id: string;
}

interface TimeSlotDay {
  class: string;
  id: number;
  version: number;
  colorCode: string;
  dayName: string;
  isActive: boolean;
  orderNo: number;
}

const extractExamTime = (input: string): string | null => {
  const examTimeRegex = /\((\d{2}:\d{2} [APap][Mm]-\d{2}:\d{2} [APap][Mm])\)/;
  const match = input.match(examTimeRegex);
  return match ? match[1] : null;
};

export const convertToClassSchedule = (cell: any) => {
  return {
    id: cell[0],
    course: cell[1],
    section: cell[3],
    seat: parseInt(cell[4]),
    faculty: cell[7],
    instructor: cell[8],
    examDate: cell[9],
    examTime:
      cell[10] && typeof cell[10] === "string"
        ? extractExamTime(cell[10])
        : null,
    sunday: cell[11],
    monday: cell[12],
    tuesday: cell[13],
    wednesday: cell[14],
    thursday: cell[15],
    friday: cell[16],
    saturday: cell[17],
  };
};

async function getClassSchedule(
  client: AxiosInstance,
  sessionID: string,
  rows: number,
  page: number,
) {
  // const ClassScheduleURL = `https://usis.bracu.ac.bd/academia/academicSection/listAcademicSectionWithSchedule?academiaSession=${sessionID}&rows=${rows}&page=${page}`;
  // console.log(ClassScheduleURL)
  try {
    // const response = await client.get<ClassScheduleResponse>(ClassScheduleURL);
    // const res = response.data;
    const mockResponse: ClassScheduleResponse = {
      page: 1,
      total: 1,
      records: 1,
      rows: [
        {
          cell: [
            "1",                             // id
            "CSE110",                        // course code
            "Programming Language I",        // course title
            "1",                             // section
            30,                              // seat
            "Department of Computer Science",// department
            "CSE",                           // department short code
            "Mr. Mock Faculty",              // faculty name
            "MF",                            // faculty initial
            "01-01-2024",                    // examDate
            "Sunday (02:00 PM-03:20 PM)",    // examTime raw
            "02:00 PM-03:20 PM",             // sunday
            null,                            // monday
            null,                            // tuesday
            "02:00 PM-03:20 PM",             // wednesday
            null,                            // thursday
            null,                            // friday
            null,                            // saturday
          ],
          class: "some-class-info",
          id: "1",
        },
        {
          cell: [
            "2",
            "MAT110",
            "Mathematics I",
            "3",
            35,
            "Department of Mathematics",
            "MAT",
            "Ms. Another Mock",
            "AM",
            "02-01-2024",
            "Monday (10:00 AM-11:20 AM)",
            null,
            "10:00 AM-11:20 AM",
            null,
            null,
            "10:00 AM-11:20 AM",
            null,
            null,
          ],
          class: "some-other-class-info",
          id: "2",
        },
      ],
      totalEntry: 1,
      marksNotEntry: 0,
    };

    const classSchedule: ClassScheduleForCourseDetails[] = mockResponse.rows.map(
      (item) => convertToClassSchedule(item.cell),
    );
    return classSchedule;
  } catch (error) {
    console.error("Error during data scraping:", error);
    return undefined;
  }
}

async function getClassScheduleColumns(
  client: AxiosInstance,
): Promise<TimeSlotDay[] | undefined> {
  // const url = `https://usis.bracu.ac.bd/academia/academicSection/loadAcademicSectionWithScheduleGrid`;

  try {
    // const response = await client.get<TimeSlotDay[]>(url);
    // return response.data;
    const mockColumns: TimeSlotDay[] = [
      { class: "css-class-for-sunday", id: 1, version: 0, colorCode: "#DAF7A6", dayName: "Sunday", isActive: true, orderNo: 7 },
      { class: "css-class-for-monday", id: 2, version: 0, colorCode: "#FFC300", dayName: "Monday", isActive: true, orderNo: 1 },
      { class: "css-class-for-tuesday", id: 3, version: 0, colorCode: "#FF5733", dayName: "Tuesday", isActive: true, orderNo: 2 },
      { class: "css-class-for-wednesday", id: 4, version: 0, colorCode: "#C70039", dayName: "Wednesday", isActive: true, orderNo: 3 },
      { class: "css-class-for-thursday", id: 5, version: 0, colorCode: "#900C3F", dayName: "Thursday", isActive: true, orderNo: 4 },
      { class: "css-class-for-friday", id: 6, version: 0, colorCode: "#581845", dayName: "Friday", isActive: true, orderNo: 5 },
      { class: "css-class-for-saturday", id: 7, version: 0, colorCode: "#123456", dayName: "Saturday", isActive: true, orderNo: 6 },
    ];
    return mockColumns;
  } catch (error) {
    console.error("Error during data fetching:", error);
    return undefined;
  }
}

export { getClassSchedule, getClassScheduleColumns };
