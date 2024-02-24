import { ClassSchedule } from '@/constants/data';
import { AxiosInstance } from 'axios';



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
    string,   // You need to replace these nulls with the actual data types
    string, // Example: "02:00 PM-03:20 PM"
    string,   // You need to replace these nulls with the actual data types
    string,   // You need to replace these nulls with the actual data types
    string,   // You need to replace these nulls with the actual data types
    string    // You need to replace these nulls with the actual data types
  ];
  class: string;
  id: string; // You need to replace this null with the actual data type
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
        ? cell[10].match(
            /\((\d{2}:\d{2} [APap][Mm]-\d{2}:\d{2} [APap][Mm])\)/,
          )[1]
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

async function getClassSchedule( client: AxiosInstance, sessionID: string,rows: number, page:number){
  const ClassScheduleURL = `https://usis.bracu.ac.bd/academia/academicSection/listAcademicSectionWithSchedule?academiaSession=${sessionID}&rows=${rows}&page=${page}`;
// console.log(ClassScheduleURL)
  try {
    const response = await client.get<ClassScheduleResponse>(ClassScheduleURL);
    const res = response.data;

    const classSchedule: ClassSchedule[] = res.rows.map((item) =>
    convertToClassSchedule(item.cell),
  );
  return classSchedule;
  } catch (error) {
    console.error('Error during data scraping:', error);
    return undefined;
  }
}

async function getClassScheduleColumns( client: AxiosInstance): Promise<TimeSlotDay[] | undefined> {
  const url = `https://usis.bracu.ac.bd/academia/academicSection/loadAcademicSectionWithScheduleGrid`;

  try {
    const response = await client.get<TimeSlotDay[]>(url);
    return response.data;
  } catch (error) {
    console.error('Error during data fetching:', error);
    return undefined;
  }
}


export{getClassSchedule,getClassScheduleColumns};