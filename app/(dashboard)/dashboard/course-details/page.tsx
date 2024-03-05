import BreadCrumb from "@/components/breadcrumb";
import getClient from "../../../../usis/usisSession";
import { currentSemester } from "@/constants/globalConfigs";
import { AxiosInstance } from "axios";
import { Suspense } from "react";
import Loading from "./loading";
import { cookies } from "next/headers";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ScrollArea } from "@/components/ui/scroll-area";
import CourseDetailsLoader from "@/components/tables/course-details-table/course-details-loader";

const breadcrumbItems = [
  { title: "Course Details", link: "/dashboard/course-details" },
];

type paramsProps = {
  searchParams: {
    [key: string]: string | undefined;
  };
};

export default async function page({ searchParams }: paramsProps) {
  const cookieStore = cookies();
  const email = cookieStore.get("username")?.value || "";
  const password = cookieStore.get("pwd")?.value || "";

  const client: AxiosInstance | undefined = await getClient(email, password);

  const sem: string = searchParams.sem || currentSemester.id;

  return (
    <div className="grow space-y-4  p-4 md:p-8 pt-6 w-auto static">
      <BreadCrumb items={breadcrumbItems} />
      <Tabs defaultValue="Course Time Schedule">
        <TabsList>
          <TabsTrigger value="Course Time Schedule">
            Course Time Schedule
          </TabsTrigger>
          <TabsTrigger value="prereq">Prerequisites</TabsTrigger>
        </TabsList>
        <TabsContent value="Course Time Schedule" className="space-y-4">
          {client && (
            <Suspense fallback={<Loading />}>
              <CourseDetailsLoader
                client={client}
                sem={sem}
              ></CourseDetailsLoader>
            </Suspense>
          )}
        </TabsContent>
      </Tabs>
    </div>
  );
}
