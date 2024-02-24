"user client";
import { preReqData } from "@/types/usisTypes";
import { ColumnDef } from "@tanstack/react-table";

export const columns: ColumnDef<preReqData>[] = [
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
];
