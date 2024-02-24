import React from "react";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

import { load } from "cheerio";
type Props = {};

const htmlBody = `<script type="text/javascript">
$(document).ready(function() {
    $('#ui-widget-header-text').html('Show Course Sequence');
    });
</script>

<style type="text/css">
.course-sequence-table {
    width: 100%;
    border-collapse: collapse;
}

    /* Zebra striping */
.course-sequence-table tr:nth-of-type(odd) {
    background: #eee;
}

.course-sequence-table th {
    background: #0c1899;
    color: white;
    font-weight: bold;
}

.course-sequence-table td, th {
    padding: 6px;
    border: 1px solid #ccc;
    text-align: center;
}
</style>

<div style="width:100%;">
<fieldset class="ui-state-default ui-corner-all">
  <legend class="ui-jqgrid-titlebar ui-widget-header ui-helper-clearfix">
    Course Sequence Information
  </legend>

  <table class="course-sequence-table" border="1">
    <tr>
      <th>Semester</th>

      <th>Course 1</th>

      <th>Course 2</th>

      <th>Course 3</th>

      <th>Course 4</th>
    </tr>

    <tr>
      <td>1</td>
      <td>
        <div style="color: green;">ENG101</div>
      </td>

      <td>
        <div style="color: green;">MAT110</div>
      </td>

      <td>
        <div style="color: green;">CSE110</div>
      </td>

      <td>
        <div style="color: green;">CSE110</div>
      </td>

      <td>
        <div style="color: green;">PHY111</div>
      </td>

      <td>
        <div style="color: green;">PHY111</div>
      </td>

      <td>
        <div style="color: green;">PHY111</div>
      </td>
    </tr>

    <tr>
      <td>2</td>
      <td>
        <div style="color: green;">ENG102</div>
      </td>

      <td>
        <div style="color: green;">MAT120</div>
      </td>

      <td>DEV101</td>

      <td>
        <div style="color: green;">HUM103</div>
      </td>
    </tr>

    <tr>
      <td>3</td>
      <td>
        <div style="color: green;">CSE111</div>
      </td>

      <td>
        <div style="color: green;">PHY112</div>
      </td>

      <td>
        <div style="color: green;">MAT215</div>
      </td>

      <td>COD001</td>
    </tr>

    <tr>
      <td>4</td>
      <td>
        <div style="color: green;">CSE220</div>
      </td>

      <td>
        <div style="color: green;">CSE220</div>
      </td>

      <td>
        <div style="color: green;">CSE230</div>
      </td>

      <td>
        <div style="color: green;">CSE250</div>
      </td>

      <td>COD002</td>
    </tr>

    <tr>
      <td>5</td>
      <td>
        <div style="color: green;">MAT216</div>
      </td>

      <td>
        <div style="color: green;">CSE221</div>
      </td>

      <td>
        <div style="color: green;">CSE251</div>
      </td>

      <td>
        <div style="color: green;">CSE260</div>
      </td>

      <td>
        <div style="color: green;">CSE260</div>
      </td>
    </tr>

    <tr>
      <td>6</td>
      <td>
        <div style="color: green;">CSE330</div>
      </td>

      <td>
        <div style="color: green;">CSE340</div>
      </td>

      <td>
        <div style="color: green;">CSE340</div>
      </td>

      <td>COD003</td>

      <td>COD004</td>
    </tr>

    <tr>
      <td>7</td>
      <td>
        <div style="color: green;">CSE341</div>
      </td>

      <td>
        <div style="color: green;">CSE341</div>
      </td>

      <td>
        <div style="color: green;">CSE341</div>
      </td>

      <td>
        <div style="color: green;">CSE350</div>
      </td>

      <td>
        <div style="color: green;">CSE350</div>
      </td>

      <td>COD005</td>

      <td>COD006</td>
    </tr>

    <tr>
      <td>8</td>
      <td>CSE310</td>

      <td>
        <div style="color: green;">CSE321</div>
      </td>

      <td>
        <div style="color: green;">CSE321</div>
      </td>

      <td>
        <div style="color: green;">CSE321</div>
      </td>

      <td>
        <div style="color: green;">CSE331</div>
      </td>

      <td>
        <div style="color: green;">CSE360</div>
      </td>
    </tr>

    <tr>
      <td>9</td>
      <td>
        <div style="color: green;">CSE320</div>
      </td>

      <td>
        <div style="color: green;">CSE470</div>
      </td>

      <td>
        <div style="color: green;">CSE370</div>
      </td>

      <td>
        <div style="color: green;">CSE370</div>
      </td>

      <td>
        <div style="color: green;">CSE423</div>
      </td>

      <td>
        <div style="color: green;">CSE423</div>
      </td>
    </tr>

    <tr>
      <td>10</td>
      <td>
        <div style="color: green;">CSE420</div>
      </td>

      <td>
        <div style="color: green;">CSE420</div>
      </td>

      <td>
        <div style="color: green;">CSE421</div>
      </td>

      <td>
        <div style="color: green;">CSE460</div>
      </td>

      <td>
        <div style="color: green;">CSE471</div>
      </td>
    </tr>

    <tr>
      <td>11</td>
      <td>
        <div style="color: green;">CSE400</div>
      </td>

      <td>
        <div style="color: green;">CSE422</div>
      </td>

      <td>
        <div style="color: green;">CSE422</div>
      </td>

      <td>
        <div style="color: green;">CSE422</div>
      </td>

      <td>CSE461</td>

      <td>COD007</td>
    </tr>
  </table>
</fieldset>
</div>
`;

const $ = load(htmlBody);
const tableRows = $(".course-sequence-table tr");

// const courseSequence = [];

// for (let i = 1; i < tableRows.length; i++) {
//   const row = tableRows.eq(i);
//   const columns = row.find("td");

//   const semester = columns.eq(0).text();
//   const coursesSet = new Set();

//   // Loop through all columns starting from the second column
//   for (let j = 1; j < columns.length; j++) {
//     const courseCode = columns.eq(j).find("div").text() || columns.eq(j).text();
//     const courseColor = $(cell).find('div').attr('style') || '';
//     coursesSet.add(courseCode);
//   }

//   const uniqueCourses = [...coursesSet];

//   courseSequence.push({ semester, courses: uniqueCourses });
// }
const courseSequence = [];

// Helper function to check for duplicates
function isDuplicate(courses, courseText) {
  return courses.some((course) => course.course === courseText);
}

// Iterate over each row in the table (skipping the header row)
$(".course-sequence-table tr:not(:first-child)").each((index, row) => {
  const semester = $(row).find("td:first-child").text();
  const courses = [];

  // Iterate over each cell in the row (skipping the first cell which contains the semester)
  $(row)
    .find("td:not(:first-child)")
    .each((index, cell) => {
      const courseText = $(cell).find("div").text() || $(cell).text();
      const courseColor = $(cell).find("div").attr("style") || "";

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

export function CourseTable({}: Props) {
  return (
    <Table>
      <TableCaption>Green indicates completed courses</TableCaption>
      <TableHeader>
        <TableRow>
          <TableHead>Semester</TableHead>
          {courseSequence[0].courses.map((course, index) => (
            <TableHead key={index}>Course {index + 1}</TableHead>
          ))}
        </TableRow>
      </TableHeader>
      <TableBody>
        {courseSequence.map((semester, index) => (
          <TableRow key={index}>
            <TableCell>{semester.semester}</TableCell>
            {semester.courses.map((course, index) => (
              <TableCell
                key={index}
                className={course.color ? "text-green-500" : ""}
              >
                {course.course || "-"}
              </TableCell>
            ))}
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
}
