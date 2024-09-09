import BreadCrumb from "@/components/breadcrumb";

import { AxiosInstance } from "axios";
import { Suspense } from "react";
import Loading from "./loading";
import { cookies } from "next/headers";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import CourseDetailsLoader from "@/components/tables/course-details-table/course-details-loader";

import { Metadata } from "next";
import { getCurrentSemesterFromAPI } from "@/usis/usisUtils";
import ErrorComponent from "@/components/ErrorComponent";
import { redirect } from "next/navigation";
import getClient from "@/usis/usisSession";
import getPrereqCourseInfo from "@/usis/usisPreRequisiteCourse";
import { PreReqTable } from "@/components/tables/preReq-course-table/preReq-course-table";

export const metadata: Metadata = {
  title: "Better USIS :: Course Details",
  description: "View details about courses",
};

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

  if (!client) {
    redirect("/");
  }

  const currentSemesterFromApi = await getCurrentSemesterFromAPI(client);

  const sem: string | undefined =
    searchParams.sem || currentSemesterFromApi?.id.toString();

  if (!sem || !currentSemesterFromApi) {
    return <ErrorComponent message="Semester not provided" />;
  }

  const preReqData = await getPrereqCourseInfo(client);

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
          {
            <Suspense fallback={<Loading />}>
              <CourseDetailsLoader
                client={client}
                sem={sem}
                currentSemesterFromApi={currentSemesterFromApi}
              ></CourseDetailsLoader>
            </Suspense>
          }
        </TabsContent>
        <TabsContent value="prereq" className="space-y-4">
          {
            <Suspense fallback={<Loading />}>
              {/* <UnderConstruction /> */}
              <PreReqTable data={preReqData} />
            </Suspense>
          }
        </TabsContent>
      </Tabs>
    </div>
  );
}
