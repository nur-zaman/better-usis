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

import getCourseSeq from "@/usis/usisCourseSeq";
import { AxiosInstance } from "axios";

export async function CourseTable({ client }: { client: AxiosInstance }) {
  const courseSequence = await getCourseSeq(client);
  if (courseSequence.length === 0) {
    return <div>No data found in USIS....</div>;
  }

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
