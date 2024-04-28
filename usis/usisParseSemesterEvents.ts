import axios from "axios";
import { load } from "cheerio";
import { Event } from "@/types/usisTypes";
import { semesterEventEndpoint } from "./usisApiRoutes";

async function parseSemesterEvent(): Promise<Event[]> {
  const response = await axios.get(semesterEventEndpoint);
  const xmlData = response.data;
  const $ = load(xmlData, { xmlMode: true });

  const events: Event[] = [];

  $("event").each((index, element) => {
    const event: Event = {
      title: $(element).find("title").text().trim(),
      link: $(element).find("link").text().trim(),
      from_date: $(element).find("start-date").text().trim(),
      to_date: $(element).find("end-date").text().trim(),
      details: $(element).find("details").text().trim(),
      date: $(element).find("date").text().trim(),
    };
    events.push(event);
  });

  return events;
}

export { parseSemesterEvent };
