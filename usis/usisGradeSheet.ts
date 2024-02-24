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
  await client.get("https://usis.bracu.ac.bd/academia/");
  const routine = await client.get(gradeSheetEndpoint);
  const html: string = routine.data;
  // console.log(html);
  // console.log(client.defaults.headers.common);
  return parseGradeSheet(html);
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
