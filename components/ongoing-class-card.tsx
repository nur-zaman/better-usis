"use client";
import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { GraduationCap, School } from "lucide-react";

type Props = {
  ongoingClass: any;
};

export default function OngoingClassCard({ ongoingClass }: Props) {
  return (
    <Card>
      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
        <CardTitle className="text-sm font-medium">Ongoing Class</CardTitle>

        <div className="text-muted-foreground">
          <GraduationCap size={16} strokeWidth={1} />
          {ongoingClass.faculty}
        </div>
      </CardHeader>

      <CardContent>
        <div className="text-2xl font-bold">{ongoingClass.courseId}</div>
        <div className="flex flex-row">
          <div className="text-xs text-muted-foreground flex-row flex self-baseline">
            <School size={16} />
            {ongoingClass.room}
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
