"use client";

import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip } from "recharts";
import { GradeSheetParsedData } from "@/types/usisTypes";

const COLORS = ["#2c2c2c80"]; // High-contrast green palette

export default function GradeDistributionPieChart({
  gradeSheetData,
}: {
  gradeSheetData: GradeSheetParsedData;
}) {
  // 1. Extract all grades from all semesters
  const allGrades: string[] = gradeSheetData.semesters.flatMap((semester) =>
    semester.courses.map((course) => course.grade),
  );

  // 2. Count occurrences of each grade
  const gradeCounts: Record<string, number> = {};
  allGrades.forEach((grade) => {
    gradeCounts[grade] = (gradeCounts[grade] || 0) + 1;
  });

  // 3. Format the data for Recharts
  const formattedData: { name: string; value: number }[] = Object.entries(
    gradeCounts,
  ).map(([grade, count]) => ({
    name: grade,
    value: count,
  }));

  // Custom label renderer to display grade letter
  const CustomLabel = ({
    name,
    value,
    x,
    y,
    midAngle,
    innerRadius,
    outerRadius,
    fill,
  }: any) => {
    const RADIAN = Math.PI / 180;
    const radius = innerRadius + (outerRadius - innerRadius) * 0.1;
    const x1 = x + radius * Math.cos(-midAngle * RADIAN);
    const y1 = y + radius * Math.sin(-midAngle * RADIAN);

    return (
      <text
        x={x1}
        y={y1}
        textAnchor={x1 > x ? "start" : "end"}
        dominantBaseline="central"
        fill="#22c55e"
      >
        {name}
      </text>
    );
  };

  // Custom tooltip renderer to show grade count
  const CustomTooltip = ({
    active,
    payload,
    label,
  }: {
    active?: boolean;
    payload?: { name: string; value: number }[];
    label?: string;
  }) => {
    if (active && payload && payload.length) {
      return (
        <div
          className="custom-tooltip"
          style={{ backgroundColor: "#333", color: "#fff", padding: "8px" }}
        >
          <p className="label">{`Grade: ${payload[0].name}`}</p>
          <p className="value">{`Count: ${payload[0].value}`}</p>
        </div>
      );
    }

    return null;
  };

  return (
    <ResponsiveContainer width="100%" height={300}>
      <PieChart>
        <Pie
          dataKey="value"
          data={formattedData}
          cx="50%"
          cy="50%"
          outerRadius={100}
          label={<CustomLabel />}
          stroke="#fff"
        >
          {formattedData.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
          ))}
        </Pie>
        <Tooltip content={<CustomTooltip />} />
      </PieChart>
    </ResponsiveContainer>
  );
}
