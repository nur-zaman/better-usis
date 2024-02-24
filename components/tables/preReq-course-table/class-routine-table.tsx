import React from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

import { ClassRoutineTimeSlot } from "@/types/usisTypes";

type Props = { data: ClassRoutineTimeSlot[] };

export function ClassRoutineTable({ data }: Props) {
  return (
    <Table>
      {/* <TableCaption>Green indicates completed courses</TableCaption> */}
      <TableHeader>
        <TableRow>
          <TableHead className="text-center">Time/Days</TableHead>
          {Object.keys(data[0].days).map((day) => (
            <TableHead key={day} className="text-center">
              {day}
            </TableHead>
          ))}
        </TableRow>
      </TableHeader>
      <TableBody>
        {data.map((timeSlot, index) => (
          <TableRow key={index} className="">
            <TableHead className="text-center">{timeSlot.time}</TableHead>
            {Object.values(timeSlot.days).map((daySchedule, index) => (
              <TableCell key={index} className="text-center ">
                {daySchedule.courseId ? (
                  <div className="flex flex-col">
                    <span>{daySchedule.courseId}</span>
                    <span>{daySchedule.faculty}</span>
                    <span>{daySchedule.room}</span>
                  </div>
                ) : (
                  <></>
                )}
              </TableCell>
            ))}
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
}
