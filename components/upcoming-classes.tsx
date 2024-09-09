import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "./ui/separator";
import { School, GraduationCap } from "lucide-react";
import { convertedTimeSlot } from "@/usis/usisClassRoutine";

type Props = {
  upcomingClasses: Array<convertedTimeSlot & { day: string; time: string }>;
};

export default function UpcominClassesCard({ upcomingClasses }: Props) {
  return (
    <>
      {upcomingClasses.map((upcomingClass, index) => (
        <Card key={index}>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">
              <>
                <School size={16} strokeWidth={1} />
                {upcomingClass.room}
              </>
            </CardTitle>
            {/* <CardDescription>Upcoming Classes</CardDescription> */}

            <div className="text-muted-foreground">
              <GraduationCap size={16} strokeWidth={1} />
              {upcomingClass.faculty}
            </div>
          </CardHeader>
          {/* Render upcoming class details here using upcomingClass object */}
          <CardContent>
            <div className="text-2xl font-bold">{upcomingClass.courseId}</div>
            <div className="flex flex-row">
              <div className="text-xs text-muted-foreground">
                {upcomingClass.day}
              </div>
              <Separator className="mx-1" orientation="vertical" />
              <div className="text-xs text-muted-foreground flex flex-row">
                <span> {upcomingClass.time} </span>
                <span className="text-[0.6rem] pl-2">(UPCOMING)</span>
              </div>
              <Separator className="mx-1" orientation="vertical" />
            </div>
          </CardContent>
        </Card>
      ))}
    </>
  );
}
