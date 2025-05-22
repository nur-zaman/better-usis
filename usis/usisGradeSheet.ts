import { load } from "cheerio";
import {
  GradeSheetCourseInfo,
  GradeSheetOverallResult,
  GradeSheetParsedData,
  GradeSheetSemester,
  GradeSheetSemesterResult,
} from "@/types/usisTypes";
import { AxiosInstance } from "axios";
import { gradeSheetEndpoint } from "./usisApiRoutes";

export async function getGradeSheetData(
  client: AxiosInstance,
): Promise<GradeSheetParsedData> {
  // await client.get("https://usis.bracu.ac.bd/academia/");
  // const routine = await client.get(gradeSheetEndpoint);
  // const html: string = routine.data;
  // // console.log(html);
  // // console.log(client.defaults.headers.common);
  // return parseGradeSheet(html);

  const mockGradeSheetData: GradeSheetParsedData = {
    studentIdNo: "20101001",
    name: "Test Student",
    program: "Computer Science and Engineering",
    semesters: [
      {
        semester: "Spring 2023",
        courses: [
          { courseNo: "CSE110", courseTitle: "Programming I", courseCredit: 3.0, creditEarned: 3.0, grade: "A", gradePoint: 4.0 },
          { courseNo: "MAT110", courseTitle: "Mathematics I", courseCredit: 3.0, creditEarned: 3.0, grade: "A-", gradePoint: 3.7 },
          { courseNo: "ENG101", courseTitle: "English Reading Skills", courseCredit: 3.0, creditEarned: 3.0, grade: "B+", gradePoint: 3.3 },
        ],
        semesterResult: { creditsAttemped: 9.0, creditsEarned: 9.0, GPA: 3.67 },
        overallResult: { creditsAttemped: 9.0, creditsEarned: 9.0, CGPA: 3.67 },
      },
      {
        semester: "Summer 2023",
        courses: [
          { courseNo: "CSE111", courseTitle: "Programming II", courseCredit: 3.0, creditEarned: 3.0, grade: "A", gradePoint: 4.0 },
          { courseNo: "PHY111", courseTitle: "Physics I", courseCredit: 3.0, creditEarned: 3.0, grade: "B", gradePoint: 3.0 },
          { courseNo: "HUM103", courseTitle: "Ethics and Culture", courseCredit: 3.0, creditEarned: 0.0, grade: "F", gradePoint: 0.0 },
        ],
        semesterResult: { creditsAttemped: 9.0, creditsEarned: 6.0, GPA: 2.33 },
        overallResult: { creditsAttemped: 18.0, creditsEarned: 15.0, CGPA: 3.0 },
      },
      {
        semester: "Fall 2023",
        courses: [
          { courseNo: "CSE220", courseTitle: "Data Structures", courseCredit: 3.0, creditEarned: 3.0, grade: "A-", gradePoint: 3.7 },
          { courseNo: "STA201", courseTitle: "Statistics for Engineers", courseCredit: 3.0, creditEarned: 3.0, grade: "A", gradePoint: 4.0 },
        ],
        semesterResult: { creditsAttemped: 6.0, creditsEarned: 6.0, GPA: 3.85 },
        overallResult: { creditsAttemped: 24.0, creditsEarned: 21.0, CGPA: 3.21 },
      },
    ],
  };
  return mockGradeSheetData;
}

function parseCreditsAttempted(text: string): number {
  const creditsAttemptedMatch = text.match(/\d+\.\d+/);

  if (creditsAttemptedMatch) {
    return parseFloat(creditsAttemptedMatch[0]);
  } else {
    return 0;
  }
}

function parseGradeSheet(htmlString: string): GradeSheetParsedData {
  const $ = load(htmlString);

  const gradeSheetObj: GradeSheetParsedData = {
    studentIdNo: $("#studentIdNo").val()?.toString() || "",
    name: "",
    program: "",
    semesters: [],
  };

  // Extract student information from the appropriate div
  const studentInfoDiv = $("fieldset > div > div");
  // console.log(studentInfoDiv.text());
  studentInfoDiv.children().each((index, child) => {
    const textContent = $(child).text().trim();
    console.log(textContent);
    if (textContent.startsWith("Name")) {
      console.log(textContent);
      gradeSheetObj.name = textContent.split(":")[1].trim();
    } else if (textContent.startsWith("Program")) {
      console.log(textContent);
      gradeSheetObj.program = textContent
        .split(":")[1]
        .replace(/\s+/g, " ")
        .trim();
    }
  });

  // Parse result table
  const resultTable = $(".previous-result-table");
  let currentSemester: GradeSheetSemester | undefined;

  resultTable.find("tr").each((index, row) => {
    const cells = $(row).find("td, th");
    const firstCellText = cells.eq(0).text().trim();

    if (firstCellText !== "Course No") {
      if (cells.length === 2 && firstCellText.startsWith("SEMESTER")) {
        // Start of a new semester
        if (currentSemester) {
          gradeSheetObj.semesters.push(currentSemester);
        }
        currentSemester = {
          semester: cells.eq(1).text().trim(),
          courses: [],
          semesterResult: {} as GradeSheetSemesterResult,
          overallResult: {} as GradeSheetOverallResult,
        };
      } else if (
        cells.length === 6 &&
        !firstCellText.startsWith("SEMESTER") &&
        !firstCellText.startsWith("CUMULATIVE")
      ) {
        // Course information row
        const courseInfo: GradeSheetCourseInfo = {
          courseNo: cells.eq(0).text().trim(),
          courseTitle: cells.eq(1).text().trim(),
          courseCredit: parseFloat(cells.eq(2).text().trim()),
          creditEarned: parseFloat(cells.eq(3).text().trim()),
          grade: cells.eq(4).text().trim(),
          gradePoint: parseFloat(cells.eq(5).text().trim()),
        };
        currentSemester!.courses.push(courseInfo);
      } else if (cells.length === 6 && firstCellText.startsWith("SEMESTER")) {
        // Semester result row
        const semesterResult: GradeSheetSemesterResult = {
          creditsAttemped: parseCreditsAttempted(cells.eq(1).text()),
          creditsEarned: parseFloat(cells.eq(3).text().trim()),
          GPA: parseFloat(cells.eq(5).text().trim()),
        };
        currentSemester!.semesterResult = semesterResult;
      }
      if (firstCellText.startsWith("CUMULATIVE")) {
        // Overall result row
        const overallResult: GradeSheetOverallResult = {
          creditsAttemped: parseCreditsAttempted(cells.eq(1).text()),
          creditsEarned: parseFloat(cells.eq(3).text().trim()),
          CGPA: parseFloat(cells.eq(5).text().trim()),
        };
        currentSemester!.overallResult = overallResult;
      }
    }
  });

  // Add the last semester if it wasn't added yet
  if (currentSemester) {
    gradeSheetObj.semesters.push(currentSemester);
  }
  // console.log(gradeSheetObj);
  return gradeSheetObj;
}
