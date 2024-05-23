"use client";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

import { ParsedData, Course } from "@/types/usisTypes";

import React from "react";
import CourseListTable from "./courseListTable";
import { Button } from "@/components/ui/button";
import { ColumnDef } from "@tanstack/react-table";
import { Separator } from "@/components/ui/separator";
import { Badge } from "@/components/ui/badge";
import { Plus } from "lucide-react";
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";
import { Card } from "@/components/ui/card";
type Props = {
  data: ParsedData;
};

type Days = string;

type TimeSlot = {
  [key in Days]: string[];
};

type RowsState = {
  [key: string]: TimeSlot;
};

const shortToFullDayMapper = (shortDay: string): string => {
  const dayMappings: { [key: string]: string } = {
    Sa: "Saturday",
    Su: "Sunday",
    Mo: "Monday",
    Tu: "Tuesday",
    We: "Wednesday",
    Th: "Thursday",
    Fr: "Friday",
  };

  return dayMappings[shortDay] || shortDay;
};

export default function CoursePlanningTable({ data }: Props) {
  const timeSlots = [
    "08:00 AM-09:20 AM",
    "09:30 AM-10:50 AM",
    "11:00 AM-12:20 PM",
    "12:30 PM-01:50 PM",
    "02:00 PM-03:20 PM",
    "03:30 PM-04:50 PM",
    "05:00 PM-06:20 PM",
    "06:00 PM-09:00 PM",
  ];

  const days = ["Sa", "Su", "Mo", "Tu", "We", "Th", "Fr"];

  const [rows, setRows] = React.useState<RowsState>(
    Object.fromEntries(
      timeSlots.map((slot) => [
        slot,
        Object.fromEntries(days.map((day) => [day, []])),
      ]),
    ),
  );

  const updateRow = (timeSlot: string, day: string, newValue: string) => {
    const updatedRows = { ...rows };

    if (!updatedRows[timeSlot][day].includes(newValue)) {
      updatedRows[timeSlot][day].push(newValue);
      setRows(updatedRows);
    }
  };

  const removeRow = (value: string) => {
    const updatedRows = { ...rows };

    for (const timeSlot in updatedRows) {
      for (const day in updatedRows[timeSlot]) {
        const index = updatedRows[timeSlot][day].indexOf(value);
        if (index > -1) {
          updatedRows[timeSlot][day].splice(index, 1);
        }
      }
    }

    setRows(updatedRows);
  };

  const columns: ColumnDef<Course>[] = [
    {
      accessorKey: "add",
      header: "Add courses",
      cell: ({ row }) => {
        return (
          <Button
            onClick={() => {
              row.original.dayTimeRoom.forEach((schedule) => {
                updateRow(
                  schedule.time,
                  schedule.day,
                  `${row.original.courseCode}-${row.original.section}`,
                );
              });
            }}
          >
            <Plus />
          </Button>
        );
      },
      enableSorting: false,
      enableHiding: false,
    },
    {
      accessorKey: "courseCode",
      header: "COURSE",
      enableHiding: false,
    },
    {
      accessorKey: "section",
      header: "SECTION",
    },
    {
      accessorKey: "faculty",
      header: "FACULTY",
    },
    {
      accessorKey: "time",
      header: "TIME",
      cell: ({ row }) => {
        return (
          <div>
            {row.original.dayTimeRoom.map((schedule, index) => (
              <div key={index}>
                {schedule.day} {schedule.time} {schedule.roomNumber}
              </div>
            ))}
          </div>
        );
      },
    },
  ];

  return (
    <>
      <ScrollArea className="rounded-md border h-[calc(50vh)] ">
        <Table className="relative">
          <TableCaption>Click on the course to remove from table</TableCaption>
          <TableHeader>
            <TableRow>
              <TableHead className="font-medium text-center"></TableHead>
              {days.map((day) => (
                <TableHead
                  key={day}
                  className="border border-[hsl(var(--muted-foreground))] text-center"
                >
                  {shortToFullDayMapper(day)}
                </TableHead>
              ))}
            </TableRow>
          </TableHeader>
          <TableBody>
            {timeSlots.map((slot) => (
              <TableRow key={slot}>
                <TableHead className="font-medium text-center">
                  {slot}
                </TableHead>
                {days.map((day) => (
                  <TableCell
                    key={day}
                    className="border border-[hsl(var(--muted-foreground))]"
                  >
                    {rows[slot][day].map((course, index) => (
                      <Button
                        className="m-1 w-fit h-fit"
                        key={index}
                        onClick={() => removeRow(course)}
                      >
                        {course}
                      </Button>
                    ))}
                  </TableCell>
                ))}
              </TableRow>
            ))}
          </TableBody>
        </Table>
        <ScrollBar orientation="horizontal" />
      </ScrollArea>
      <Separator />
      <div>
        <CourseListTable
          columns={columns}
          data={data.courses}
        ></CourseListTable>
      </div>
    </>
  );
}
