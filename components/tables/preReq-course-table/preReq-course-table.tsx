import React from "react";

import { preReqData } from "@/types/usisTypes";
import { DataTable } from "@/components/ui/data-table";
import { columns } from "./columns";

type Props = { data: preReqData[] };

export function PreReqTable({ data }: Props) {
  return <DataTable columns={columns} data={data} searchKey="course" />;
}
