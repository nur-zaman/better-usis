"use client";
import React from "react";

import { Event } from "@/types";

// type Event = {
//   from_date: string;
//   to_date: string;
//   day: string;
//   title: string;
// };

type UpcomingEventsProps = {
  events: Event[];
};

function UpcomingEvents({ events }: UpcomingEventsProps) {
  // Function to get the current date in the "YYYY-MM-DD" format
  const getCurrentDate = () => {
    const today = new Date();
    const year = today.getFullYear();
    const month = String(today.getMonth() + 1).padStart(2, "0");
    const day = String(today.getDate()).padStart(2, "0");
    return `${year}-${month}-${day}`;
  };

  // Function to filter and sort upcoming events
  const getUpcomingEvents = () => {
    const currentDate = getCurrentDate();
    const upcomingEvents = events
      .filter((event) => event.from_date >= currentDate)
      .sort((a, b) => a.from_date.localeCompare(b.from_date))
      .slice(0, 7);

    return upcomingEvents;
  };

  return (
    <div className="space-y-8">
      {getUpcomingEvents().map((event) => (
        <div
          key={`${event.from_date}-${event.to_date}`}
          className="flex items-center"
        >
          <div className="ml-4 space-y-1">
            <p className="text-sm font-medium leading-none">{event.title}</p>
            <p className="text-sm text-muted-foreground">
              {`${event.from_date} - ${event.to_date}`}
            </p>
          </div>
          <div className="ml-auto font-medium">{event.day}</div>
        </div>
      ))}
    </div>
  );
}

export default UpcomingEvents;
