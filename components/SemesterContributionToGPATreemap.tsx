"use client";

import {
  Treemap,
  ResponsiveContainer,
  Tooltip,
  Label,
  LabelList,
} from "recharts";
import { GradeSheetParsedData } from "@/types/usisTypes";

interface CustomTooltipContentProps {
  active?: boolean;
  payload?: any[];
  label?: string;
}

const CustomTooltipContent: React.FC<CustomTooltipContentProps> = ({
  active,
  payload,
  label,
}) => {
  if (active && payload && payload.length) {
    return (
      <div
        className="custom-tooltip"
        style={{ backgroundColor: "#333", color: "#fff", padding: "8px" }}
      >
        <p className="label">{`Semester: ${payload[0].payload.semester}`}</p>
        <p className="value">{`Contribution: ${(payload[0].value * 100).toFixed(
          2,
        )}%`}</p>
      </div>
    );
  }

  return null;
};

export default function SemesterContributionToGPATreemap({
  gradeSheetData,
}: {
  gradeSheetData: GradeSheetParsedData;
}) {
  // 1. Extract the CGPA and credits attempted for each semester
  const semesterData = gradeSheetData.semesters.map((semester) => ({
    semester: semester.semester,
    cgpa: semester.overallResult.CGPA,
    creditsAttempted: semester.overallResult.creditsAttemped,
  }));

  // 2. Calculate the weighted contribution of each semester to the overall CGPA
  const totalCreditsAttempted = semesterData.reduce(
    (total, semester) => total + semester.creditsAttempted,
    0,
  );
  const semesterContribution = semesterData.map((semester) => ({
    name: semester.semester,
    semester: semester.semester,
    contribution:
      (semester.cgpa * semester.creditsAttempted) / totalCreditsAttempted,
  }));

  return (
    <ResponsiveContainer width="100%" height={300}>
      <Treemap
        data={semesterContribution}
        dataKey="contribution"
        stroke="#22c55e"
        aspectRatio={4 / 3}
        fill="#fcfcfc20"
      >
        <LabelList dataKey="contribution" position="top" />
        <Tooltip
          content={<CustomTooltipContent />}
          label="Semester Contribution to GPA"
        />
      </Treemap>
    </ResponsiveContainer>
  );
}
