import React from "react";
import { AxiosInstance } from "axios";
import { CourseTable } from "@/components/tables/course-sequence-table/course-sequence-table";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { CGPAPlot } from "@/components/cgpa";

import { getGradeSheetData } from "@/usis/usisGradeSheet";
import NextSemResult from "@/components/NextSemResult";
import GradeDistributionPieChart from "../GradeDistributionPieChart";
import SemesterContributionToGPATreemap from "../SemesterContributionToGPATreemap";

export default async function AnalyticsTab({
  client,
}: {
  client: AxiosInstance;
}) {
  const gradesheetData = await getGradeSheetData(client);
  return (
    <>
      <div className="">
        {gradesheetData && (
          <NextSemResult
            currentCGPA={
              gradesheetData.semesters[gradesheetData.semesters.length - 1]
                .overallResult.CGPA
            }
            totalEarnedCredits={
              gradesheetData.semesters[gradesheetData.semesters.length - 1]
                .overallResult.creditsEarned
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
            <CardTitle>Grade Pie</CardTitle>
          </CardHeader>
          <CardContent className="pl-2">
            <GradeDistributionPieChart gradeSheetData={gradesheetData} />
          </CardContent>
        </Card>

        <Card className="col-span-4">
          <CardHeader>
            <CardTitle>Semester&apos; Contribution To GPA</CardTitle>
          </CardHeader>
          <CardContent className="pl-2">
            <SemesterContributionToGPATreemap gradeSheetData={gradesheetData} />
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
    </>
  );
}
