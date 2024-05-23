"use client";

import { preReqData } from "@/types/usisTypes";
import { ColumnDef } from "@tanstack/react-table";

export const columns: ColumnDef<preReqData>[] = [
  {
    accessorKey: "id",
    header: "ID",
  },
  {
    accessorKey: "course",
    header: "Course",
    cell: ({ row }) =>
      `${row.original.course.code} (${row.original.course.name})`,
  },
  {
    accessorKey: "prereq",
    header: "Prerequisites",
    cell: ({ row }) => {
      if (row.original.prereq.length === 0) {
        return "-";
      }
      return (
        <>
          {row.original.prereq.map((course, index) => (
            <div key={index}>
              {course.code} ({course.name})
            </div>
          ))}
        </>
      );
    },
  },
];
