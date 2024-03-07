import CoursePlanningTable from "@/components/tables/course-planning-table/course-planning-table";
import { parseRoutine } from "@/usis/usisParseAdvisingCourses";
import { ParsedData } from "@/types/usisTypes";
import { ScrollArea } from "@/components/ui/scroll-area";
import BreadCrumb from "@/components/breadcrumb";

import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Better USIS :: Course Planning",
  description: "Plan your next advising courses",
};
const breadcrumbItems = [
  { title: "Course Planning", link: "/dashboard/course-planning" },
];

export default async function page() {
  const data: ParsedData = await parseRoutine();
  return (
    <ScrollArea className="h-full overflow-x-auto">
      <div className="flex-1 space-y-4  p-4 md:p-8 pt-6">
        <BreadCrumb items={breadcrumbItems} />

        <div className="flex-1 space-y-4  p-4 md:p-8 pt-6">
          <CoursePlanningTable data={data} />
        </div>
      </div>
    </ScrollArea>
  );
}
