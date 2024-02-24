import React, { Suspense } from "react";
import { UserClient } from "./client";
import { Separator } from "@/components/ui/separator";
import { DataTable } from "./course-data-table";
import { AxiosInstance } from "axios";
import { getClassSchedule } from "@/usis/usisClassSchedule";
import { currentSemester } from "@/constants/globalConfigs";
import { columns as courseDetailsColumn } from "@/components/tables/course-details-table/columns";

type ClientProps = {
  client: AxiosInstance;
  sem: string;
};

export default async function CourseDetailsLoader({
  client,
  sem,
}: ClientProps) {
  const classSchedule = await getClassSchedule(client, sem, 99999, 1);
  return (
    <>
      <UserClient
        data={classSchedule ? classSchedule : []}
        currentSemesterName={currentSemester.title}
        currentSemesterID={currentSemester.id}
      />
      <Separator />
      <DataTable
        searchKey="course"
        columns={courseDetailsColumn}
        data={classSchedule ? classSchedule : []}
      />
    </>
  );
}
