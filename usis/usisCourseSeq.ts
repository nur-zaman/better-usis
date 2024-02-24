import { AxiosInstance, AxiosResponse } from "axios";
import { load } from "cheerio";
import { courseSequenceEndpoint } from "./usisApiRoutes";

// Define interfaces for the data structures
interface Course {
  course: string;
  color: string;
}

interface CourseSequence {
  semester: string;
  courses: Course[];
}

// Define the return type of the function
type CourseSequenceResponse = CourseSequence[];

// Define the Axios response type with the data property containing CourseSequenceResponse
type AxiosResponseWithCourseSequence = AxiosResponse<CourseSequenceResponse>;

// Define the function with proper types
export default async function getCourseSeq(
  client: AxiosInstance,
): Promise<CourseSequenceResponse> {
  const response: AxiosResponseWithCourseSequence = await client.get(
    courseSequenceEndpoint,
  );
  const htmlBody: any = response.data;
  const $ = load(htmlBody);
  const tableRows = $(".course-sequence-table tr");

  const courseSequence: CourseSequence[] = [];

  // Helper function to check for duplicates
  function isDuplicate(courses: Course[], courseText: string): boolean {
    return courses.some((course) => course.course === courseText);
  }

  // Iterate over each row in the table (skipping the header row)
  $(".course-sequence-table tr:not(:first-child)").each((index, row) => {
    const semester: string = $(row).find("td:first-child").text();
    const courses: Course[] = [];

    // Iterate over each cell in the row (skipping the first cell which contains the semester)
    $(row)
      .find("td:not(:first-child)")
      .each((index, cell) => {
        const courseText: string = $(cell).find("div").text() || $(cell).text();
        const courseColor: string = $(cell).find("div").attr("style") || "";

        // Check for duplicates before adding a course
        if (!isDuplicate(courses, courseText)) {
          courses.push({
            course: courseText,
            color: courseColor,
          });
        }
      });

    courseSequence.push({
      semester,
      courses,
    });
  });
  return courseSequence;
}
