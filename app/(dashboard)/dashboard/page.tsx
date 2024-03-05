import UpcomingEvents from "@/components/upcoming-events";
import { CourseTable } from "@/components/tables/course-sequence-table/course-sequence-table";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { CGPAPlot } from "@/components/cgpa";
import { Suspense } from "react";

import { semesterEvents } from "@/constants/data";
import Loading from "./loading";
import { ClassRoutineTable } from "@/components/tables/class-routine-table/class-routine-table";
import { cookies } from "next/headers";
import getClassRoutineData, {
  getOngoingAndUpcomingClasses,
} from "@/usis/usisClassRoutine";
import getClient from "@/usis/usisSession";
import { AxiosInstance } from "axios";
import OngoingClassCard from "@/components/ongoing-class-card";
import UpcominClassesCard from "@/components/upcoming-classes";
import { getGradeSheetData } from "@/usis/usisGradeSheet";
import NextSemResult from "@/components/NextSemResult";

export default async function page() {
  const cookieStore = cookies();
  const email = cookieStore.get("username")?.value || "";
  const password = cookieStore.get("pwd")?.value || "";

  const client: AxiosInstance | undefined = await getClient(email, password);
  // console.log(cookieStore);
  // console.log(email, password);
  if (!client) {
    throw new Error("Could not login");
  }

  const classRoutineData = await getClassRoutineData(client);
  if (!classRoutineData) {
    throw new Error("Could not fetch Class Routine Data");
  }
  const classDetails = getOngoingAndUpcomingClasses(classRoutineData);
  const gradesheetData = await getGradeSheetData(client);
  return (
    <Suspense fallback={<Loading></Loading>}>
      <ScrollArea className="h-full">
        <div className="flex-1 space-y-4 p-4 md:p-8 pt-6">
          <div className="flex items-center justify-between space-y-2">
            <h2 className="text-3xl font-bold tracking-tight">
              HI, {gradesheetData.name || "user"} 👋
            </h2>
          </div>
          <Tabs defaultValue="overview" className="space-y-4">
            <TabsList>
              <TabsTrigger value="overview">Overview</TabsTrigger>
              <TabsTrigger value="analytics">Analytics</TabsTrigger>
            </TabsList>
            <TabsContent value="overview" className="space-y-4">
              <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
                {classDetails.ongoingClass && (
                  <OngoingClassCard ongoingClass={classDetails.ongoingClass} />
                )}

                {classDetails.upcomingClasses && (
                  <UpcominClassesCard
                    upcomingClasses={classDetails.upcomingClasses}
                  />
                )}
              </div>
              <div className="grid gap-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-7">
                <Card className="col-span-4">
                  <CardHeader>
                    <CardTitle>Class Routine</CardTitle>
                  </CardHeader>
                  <CardContent className="pl-2">
                    {classRoutineData.length > 0 && (
                      <ClassRoutineTable data={classRoutineData} />
                    )}
                  </CardContent>
                </Card>
                <Card className="col-span-4 md:col-span-3">
                  <CardHeader>
                    <CardTitle>Upcoming events</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <UpcomingEvents
                      events={semesterEvents.Spring_2024.events}
                    />
                  </CardContent>
                </Card>
              </div>
            </TabsContent>

            <TabsContent value="analytics" className="space-y-4">
              <div className="">
                {gradesheetData && (
                  <NextSemResult
                    currentCGPA={
                      gradesheetData.semesters[
                        gradesheetData.semesters.length - 1
                      ].overallResult.CGPA
                    }
                    totalEarnedCredits={
                      gradesheetData.semesters[
                        gradesheetData.semesters.length - 1
                      ].overallResult.creditsEarned
                    }
                  />
                )}
              </div>
              <div className="grid gap-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-8">
                <Card className="col-span-4">
                  <CardHeader>
                    <CardTitle>CPGA Plot</CardTitle>
                  </CardHeader>
                  <CardContent className="pl-2">
                    <CGPAPlot gradeSheetData={gradesheetData} />
                  </CardContent>
                </Card>
                <Card className="col-span-4">
                  <CardHeader>
                    <CardTitle>Course Plan Table</CardTitle>
                  </CardHeader>
                  <CardContent className="pl-2">
                    <CourseTable client={client} />
                  </CardContent>
                </Card>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </ScrollArea>
    </Suspense>
  );
}
