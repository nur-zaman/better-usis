import { GradeSheetParsedData } from "@/types/usisTypes";
import { AxiosInstance } from "axios";

export interface AcademicSession {
  id: number;
  version: number;
  academic_session_id: number;
  end_date: string;
  note: null | string;
  start_date: string;
  academia_year_id: number;
  title: string;
  order_no: number;
}

export function getSessionID(semester: string, year: number): number {
  const baseValue = 627119;
  let semesterValue: number;
  switch (semester.toLowerCase()) {
    case "spring":
      semesterValue = 0;
      break;
    case "summer":
      semesterValue = 1;
      break;
    case "fall":
      semesterValue = 2;
      break;
    default:
      throw new Error("Invalid semester name");
  }
  const code = baseValue + (year - 2022) * 3 + semesterValue;
  return code;
}

export function getSemesterName(code: number): {
  semester: string;
  year: number;
} {
  const baseValue = 627120;

  // Extract semesterValue
  const semesterValue = (code - baseValue) % 3;

  // Extract year
  const year = Math.floor((code - baseValue - semesterValue) / 3) + 2023;

  // Map semesterValue back to semester string
  let semester: string;
  switch (semesterValue) {
    case 0:
      semester = "spring";
      break;
    case 1:
      semester = "summer";
      break;
    case 2:
      semester = "fall";
      break;
    default:
      throw new Error("Invalid semester value");
  }

  return { semester, year };
}

export async function getCurrentSemesterFromAPI(client: AxiosInstance) {
  // console.log(client)

  // Dynamically calculate the current year
  const currentYear = new Date().getFullYear();
  const url = `http://usis.bracu.ac.bd/academia/academiaSession/getAllSessionByYear?year=${currentYear}`;
  console.log(url);
  await client.get("https://usis.bracu.ac.bd/academia/");
  const response = await client.get<AcademicSession[]>(url);
  // const response = await client.get<ClassScheduleResponse>(ClassScheduleURL);
  const semesters = response.data;
  console.log(semesters);

  if (!semesters || semesters.length === 0) {
    console.log("No semesters found for the current year.");
    return;
  }

  const currentDate = new Date();

  const currentSemester = semesters.find((semester) => {
    const startDate = new Date(semester.start_date);
    const endDate = new Date(semester.end_date);

    return currentDate >= startDate && currentDate <= endDate;
  });

  if (currentSemester) {
    console.log(`The current semester is: ${currentSemester.title}`);
    console.log(`The current semester id is: ${currentSemester.id}`);
    return currentSemester;
  } else {
    console.log("No current semester found.");
  }
}
interface semCourse {
  credit: number;
  gpa: number;
}

export const calculateNextSemesterResult = (
  // currentGradeSheet: GradeSheetParsedData,
  currentCGPA: number,
  totalEarnedCredits: number,
  nextSemesterCourses: {
    credit: number;
    gpa: number;
  }[],
): { nextSemesterGPA: number; nextSemesterCGPA: number } => {
  // Calculate next semester's GPA
  let nextSemesterTotalCredits = 0;
  let nextSemesterTotalGradePoints = 0;

  nextSemesterCourses.forEach((course) => {
    const credit = course.credit;
    const GPA = course.gpa;

    nextSemesterTotalCredits += credit;
    nextSemesterTotalGradePoints += GPA * credit;
  });

  const nextSemesterGPA =
    nextSemesterTotalGradePoints / nextSemesterTotalCredits;

  // Calculate next semester's CGPA
  // const nextSemesterCreditsAttemped = totalEarnedCredits + nextSemesterTotalCredits;
  const nextSemesterCreditsEarned =
    totalEarnedCredits + nextSemesterTotalCredits;
  const nextSemesterCGPA =
    (currentCGPA * totalEarnedCredits + nextSemesterTotalGradePoints) /
    nextSemesterCreditsEarned;

  return { nextSemesterGPA, nextSemesterCGPA };
};

// export {getSessionID,getSemesterName,getCurrentSemesterFromAPI}
