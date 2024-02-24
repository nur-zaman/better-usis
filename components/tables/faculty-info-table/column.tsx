"use client";
import { FacultyInfoType } from "@/constants/facultyData";
import { ColumnDef } from "@tanstack/react-table";
import FacultyTableColActions from "./column-actions";

export const columns: ColumnDef<FacultyInfoType>[] = [
  {
    accessorKey: "initial",
    header: "Initial",
  },
  {
    accessorKey: "faculty",
    header: "Faculty",
  },
  {
    accessorKey: "email",
    header: "Email",
  },
  {
    accessorKey: "room",
    header: "Room",
  },
  {
    id: "actions",
    cell: ({ row }) => {
      return <FacultyTableColActions row={row} />;
    },
  },
];
