import { AxiosInstance } from "axios";

interface ApiResponse {
  page: number;
  total: number;
  records: number;
  rows: Row[];
}

interface Row {
  cell: string[];
  class: string;
  id: number;
}

function parseApiResponse(response: string): ApiResponse {
  try {
    const parsedResponse: ApiResponse = JSON.parse(response);
    return parsedResponse;
  } catch (error) {
    console.error("Error parsing API response:", error);
    throw new Error("Failed to parse API response");
  }
}

// Example usage:
//   const apiResponseString = '{"page":1,"total":1,"records":5,"rows":[{"cell":["1","629282","TSL606","TEACHING LANGUAGE THROUGH LITERATURE","3.0"],"class":"com.docu.common.GridEntity","id":629282},{"cell":["2","629283","TSL604","ELT Leadership and Management","3.0"],"class":"com.docu.common.GridEntity","id":629283},{"cell":["3","629251","TSL603","ENGLISH FOR SPECIFIC AND ACADEMIC PURPOSE","3.0"],"class":"com.docu.common.GridEntity","id":629251},{"cell":["4","629284","TSL602","Pragmatics and Discourse Analysis","3.0"],"class":"com.docu.common.GridEntity","id":629284},{"cell":["5","629285","TSL601","Sociolinguistics and New Englishes","3.0"],"class":"com.docu.common.GridEntity","id":629285}]}';

export default async function getCourseInfo(client: AxiosInstance) {
  // const apiResponse = await client.get<ApiResponse>(
  //   "https://usis.bracu.ac.bd/academia/academicCourse/courseListForStudent?rows=99999"
  // );
  const apiResponse =
    '{"page":1,"total":1,"records":5,"rows":[{"cell":["1","629282","TSL606","TEACHING LANGUAGE THROUGH LITERATURE","3.0"],"class":"com.docu.common.GridEntity","id":629282},{"cell":["2","629283","TSL604","ELT Leadership and Management","3.0"],"class":"com.docu.common.GridEntity","id":629283},{"cell":["3","629251","TSL603","ENGLISH FOR SPECIFIC AND ACADEMIC PURPOSE","3.0"],"class":"com.docu.common.GridEntity","id":629251},{"cell":["4","629284","TSL602","Pragmatics and Discourse Analysis","3.0"],"class":"com.docu.common.GridEntity","id":629284},{"cell":["5","629285","TSL601","Sociolinguistics and New Englishes","3.0"],"class":"com.docu.common.GridEntity","id":629285}]}';

  const parsedApiResponse = parseApiResponse(apiResponse);
  return parsedApiResponse;
}
