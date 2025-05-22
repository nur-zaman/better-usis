import axios from "axios";
import { load } from "cheerio";
import { Event } from "@/types/usisTypes";
import { semesterEventEndpoint } from "./usisApiRoutes";

async function parseSemesterEvent(): Promise<Event[]> {
  // const response = await axios.get(semesterEventEndpoint);
  // const xmlData = response.data;
  // const $ = load(xmlData, { xmlMode: true });
  //
  // const events: Event[] = [];
  //
  // $("event").each((index, element) => {
  //   const event: Event = {
  //     title: $(element).find("title").text().trim(),
  //     link: $(element).find("link").text().trim(),
  //     from_date: $(element).find("start-date").text().trim(),
  //     to_date: $(element).find("end-date").text().trim(),
  //     details: $(element).find("details").text().trim(),
  //     date: $(element).find("date").text().trim(),
  //   };
  //   events.push(event);
  // });
  //
  // return events;

  const mockEvents: Event[] = [
    {
      title: "Last day of classes for Spring 2024",
      link: "http://www.bracu.ac.bd/academic/academic-calendar",
      from_date: "2024-04-20",
      to_date: "2024-04-20",
      details: "Last day of classes for Spring 2024 semester.",
      date: "2024-04-20",
    },
    {
      title: "Final Exams for Spring 2024 Begin",
      link: "http://www.bracu.ac.bd/academic/academic-calendar",
      from_date: "2024-04-23",
      to_date: "2024-05-05",
      details: "Final examinations for the Spring 2024 semester.",
      date: "2024-04-23",
    },
    {
      title: "Semester Break for Spring 2024",
      link: "http://www.bracu.ac.bd/academic/academic-calendar",
      from_date: "2024-05-06",
      to_date: "2024-05-11",
      details: "Semester break after final exams.",
      date: "2024-05-06",
    },
    {
      title: "Advising for Summer 2024",
      link: "http://www.bracu.ac.bd/admissions",
      from_date: "2024-04-15",
      to_date: "2024-04-25", // Example date range
      details: "Pre-registration and advising period for Summer 2024.",
      date: "2024-04-15",
    },
    {
      title: "Classes for Summer 2024 Begin",
      link: "http://www.bracu.ac.bd/academic/academic-calendar",
      from_date: "2024-05-12",
      to_date: "2024-05-12",
      details: "First day of classes for the Summer 2024 semester.",
      date: "2024-05-12",
    },
  ];
  return mockEvents;
}

export { parseSemesterEvent };
