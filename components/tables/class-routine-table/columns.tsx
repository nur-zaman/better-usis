"user client";
import { ClassSchedule } from "@/constants/data";
import { ColumnDef } from "@tanstack/react-table";

export const columns: ColumnDef<ClassSchedule>[] = [
  {
    accessorKey: "id",
    header: "ID",
  },
  {
    accessorKey: "course",
    header: "COURSE",
  },
  {
    accessorKey: "section",
    header: "SECTION",
  },
  {
    accessorKey: "seat",
    header: "SEAT",
  },
  {
    accessorKey: "faculty",
    header: "FACULTY NAME",
  },
  {
    accessorKey: "instructor",
    header: "FACULTY INITIAL",
  },
  {
    accessorKey: "examDate",
    header: "EXAM DATE",
  },
  {
    accessorKey: "examTime",
    header: "EXAM TIME",
  },
  {
    accessorKey: "sunday",
    header: "SUNDAY",
  },
  {
    accessorKey: "monday",
    header: "MONDAY",
  },
  {
    accessorKey: "tuesday",
    header: "TUESDAY",
  },
  {
    accessorKey: "wednesday",
    header: "WEDNESDAY",
  },
  {
    accessorKey: "thursday",
    header: "THURSDAY",
  },
  {
    accessorKey: "friday",
    header: "FRIDAY",
  },
  {
    accessorKey: "saturday",
    header: "SATURDAY",
  },
];
