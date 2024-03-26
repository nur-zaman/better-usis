import axios from 'axios';
import { load } from 'cheerio';
import { Event } from '@/types/usisTypes';
import { semesterEventEndpoint } from './usisApiRoutes';

async function parseSemesterEvent(): Promise<Event[]> {
  const response = await axios.get(semesterEventEndpoint);
  const xmlData = response.data;
  const $ = load(xmlData, { xmlMode: true });

  const events: Event[] = [];

  $('event').each((index, element) => {
    const event: Event = {
      title: $(element).find('title').text().trim(),
      link: $(element).find('link').text().trim(),
      startDate: $(element).find('start-date').text().trim(),
      endDate: $(element).find('end-date').text().trim(),
      details: $(element).find('details').text().trim(),
      date: $(element).find('date').text().trim(),
    };
    events.push(event);
  });

  console.log(events);
  return events;
}

export { parseSemesterEvent };

