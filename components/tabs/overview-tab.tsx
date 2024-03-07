import React from 'react'
import { AxiosInstance } from 'axios';
import UpcomingEvents from "@/components/upcoming-events";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

import { semesterEvents } from "@/constants/data";
import { ClassRoutineTable } from "@/components/tables/class-routine-table/class-routine-table";
import OngoingClassCard from "@/components/ongoing-class-card";
import UpcominClassesCard from "@/components/upcoming-classes";
import getClassRoutineData, { getOngoingAndUpcomingClasses } from '@/usis/usisClassRoutine';

export default async function OverviewTab({client}: {client:AxiosInstance}) {
    
  const classRoutineData = await getClassRoutineData(client);
  if (!classRoutineData) {
    throw new Error("Could not fetch Class Routine Data");
  }
  const classDetails = getOngoingAndUpcomingClasses(classRoutineData);

  return (
    <>
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
    </>
  )
}