"use client";

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

const data = [
  {
    name: "Jan",
    total: Math.floor(Math.random() * 5000) + 1000,
  },
  {
    name: "Feb",
    total: Math.floor(Math.random() * 5000) + 1000,
  },
  {
    name: "Mar",
    total: Math.floor(Math.random() * 5000) + 1000,
  },
];

export function Overview() {
  return (
    // <ResponsiveContainer width="100%" height={350}>
    //   <BarChart data={data}>
    //     <XAxis
    //       dataKey="name"
    //       stroke="#888888"
    //       fontSize={12}
    //       tickLine={false}
    //       axisLine={false}
    //     />
    //     <YAxis
    //       stroke="#888888"
    //       fontSize={12}
    //       tickLine={false}
    //       axisLine={false}
    //       tickFormatter={(value) => `$${value}`}
    //     />
    //     <Bar dataKey="total" fill="#adfa1d" radius={[4, 4, 0, 0]} />
    //   </BarChart>
    // </ResponsiveContainer>
    <ResponsiveContainer width="100%" height={350}>
      <LineChart data={data}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Line type="monotone" dataKey="total" stroke="#82ca9d" />
      </LineChart>
    </ResponsiveContainer>
  );
}
