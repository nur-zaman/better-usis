import BreadCrumb from "@/components/breadcrumb";
import ExamRoutineTable from "@/components/tables/exam-routine-table/exam-routine-table";
import { Metadata } from "next";
export const metadata: Metadata = {
  title: "Better USIS::Exam Routine",
  description: "Upcoming Exam Routine",
};


const breadcrumbItems = [{ title: "Exam Routine", link: "/dashboard/exam-routine" }];

export default async function page(){
  return (
    <div className="flex-1 space-y-4  p-4 md:p-8 pt-6">
      <BreadCrumb items={breadcrumbItems} />

      <div className="flex-1 space-y-4  p-4 md:p-8 pt-6">
        <ExamRoutineTable />
      </div>
    </div>
  );
}
