import { DataTable } from "@/components/ui/data-table";
import React from "react";
import { ExamRoutineType, columns } from "./column";
import axios from "axios";



type Props = {};

interface examData {
  exam:string;
  columns: string[];
  data: (string)[][];
}

export default async function ExamRoutineTable({}: Props) {
  const response = await axios.get("https://cdn.jsdelivr.net/gh/nur-zaman/forCDN@main/busis/mid_05_03_24.json");
  const parsedData = parseData(response.data);

  return (
    <>
    <div className="flex flex-col gap-1"><span>{response.data.exam}</span><span className=" text-xs">Please cross-check your schedule beforehand.</span></div>
      <DataTable columns={columns} data={parsedData} searchKey="course"/>
    </>
  );
}


function parseData(responseData:examData){
  const originalData: ExamRoutineType[] = responseData.data.map(item => {
    return {
      course: item[0] as string,
      sec: item[1] as string,
      date: item[2] as string,
      start: item[3] as string,
      end: item[4] as string,
      room: item[5] as string,
    };
  });

  return originalData;
}