import { DataTable } from "@/components/ui/data-table";
import React from "react";
import { columns } from "./column";
import { facultyData } from "@/constants/facultyData";

type Props = {};

export default function FacultyInfoTable({}: Props) {
  return (
    <>
      <DataTable columns={columns} data={facultyData.CSE} searchKey="faculty"/>
    </>
  );
}
