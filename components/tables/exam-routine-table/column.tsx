import { ColumnDef } from "@tanstack/react-table";

export type ExamRoutineType = {
  course:string;
  sec:string;
  date:string;
  start:string;
  end:string;
  room:string
}
export const columns: ColumnDef<ExamRoutineType>[] = [
  {
    accessorKey: "course",
    header: "Course",
  },
  {
    accessorKey: "sec",
    header: "Section",
  },
  {
    accessorKey: "date",
    header: "Date",
  },
  {
    accessorKey: "start",
    header: "Start Time",
  },
  {
    accessorKey: "end",
    header: "End Time",
  },
  {
    accessorKey: "room",
    header: "Room",
  },

];
