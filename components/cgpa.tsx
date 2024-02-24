"use client";
import { GradeSheetParsedData } from "@/types/usisTypes";
import {
  CartesianGrid,
  Legend,
  Line,
  LineChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";



// Override console.error
// This is a hack to suppress the warning about missing defaultProps in recharts library as of version 2.12
// @link https://github.com/recharts/recharts/issues/3615
// eslint-disable-next-line no-console
const error = console.error;
// eslint-disable-next-line no-console
console.error = (...args: any) => {
  if (/defaultProps/.test(args[0])) return;
  error(...args);
};

export function CGPAPlot({gradeSheetData}:{gradeSheetData:GradeSheetParsedData}) {
  // console.log(gradeSheetData)
  const data = gradeSheetData.semesters.map((semester) => ({
    semester: semester.semester,
    GPA: semester.semesterResult.GPA,
  }));
  // console.log(data);
  const yMin = Math.min(...data.map(d => d.GPA));
  const yMax = Math.max(...data.map(d => d.GPA));
  return (
    <ResponsiveContainer width="100%" height={350}>
      <LineChart data={data}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="semester" />
        <YAxis domain={[yMin, yMax]} padding={{ top: 30, bottom: 30 }} />
        <Tooltip />
        <Legend />
        <Line type="monotone" dataKey="GPA" stroke="#82ca9d" />
      </LineChart>
    </ResponsiveContainer>
  );
}
