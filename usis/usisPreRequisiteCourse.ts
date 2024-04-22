import { AxiosInstance } from "axios";
import { preReqApiResponse, preReqData, preReqCourse } from "@/types/usisTypes";

function parsePrereqApiResponse(response: preReqApiResponse): preReqData[] {
  const apiResponse: preReqApiResponse = response;
  const parsedData: preReqData[] = [];

  apiResponse.rows.forEach((row) => {
    const [id, courseData, prereqData] = row.cell;
    const [code, name] =
      courseData.match(/^([A-Z0-9]+)\((.+)\)$/)?.slice(1) || [];
    const course: preReqCourse = { code, name };
    const prereq: preReqCourse[] = prereqData
      ? prereqData.split("\n").map((course) => {
          const [code, name] = course.match(/^([A-Z0-9]+)\((.+)\)$/)!.slice(1);
          return { code, name };
        })
      : [];

    const data: preReqData = {
      id: id,
      course: course,
      prereq: prereq,
    };
    parsedData.push(data);
  });

  return parsedData;
}

// Example usage:
//   const apiResponseString = '{"page":1,"total":146,"records":727,"rows":[{"cell":["1","STA510(RESEARCH METHODOLOGIES)","STA501(BUSINESS STATISTICS)","3"],"class":"com.docu.common.GridEntity","id":null},{"cell":["2","SOC420(SOCIOLOGY OF RELIGION)","SOC101(INTRODUCTION TO SOCIOLOGY)LINE_BREAKSOC301(SOCIOLOGICAL THEORY)LINE_BREAKSOC390(SOCIOLOGY OF DEVIANCE)","3LINE_BREAK3LINE_BREAK3"],"class":"com.docu.common.GridEntity","id":null},{"cell":["3","SOC410(THE INDIVIDUAL, SOCIETY AND SOCIAL CONTROL)","SOC301(SOCIOLOGICAL THEORY)LINE_BREAKSOC390(SOCIOLOGY OF DEVIANCE)LINE_BREAKSOC101(INTRODUCTION TO SOCIOLOGY)","3LINE_BREAK3LINE_BREAK3"],"class":"com.docu.common.GridEntity","id":null},{"cell":["4","SOC401(GENDER AND DEVELOPMENT)","SOC101(INTRODUCTION TO SOCIOLOGY)","3"],"class":"com.docu.common.GridEntity","id":null},{"cell":["5","SOC390(SOCIOLOGY OF DEVIANCE)","SOC101(INTRODUCTION TO SOCIOLOGY)","3"],"class":"com.docu.common.GridEntity","id":null}]}';

//   const parsedCourses = parseApiResponse(apiResponseString);
//   console.log(parsedCourses);

export default async function getPrereqCourseInfo(client: AxiosInstance) {
  const apiResponse = await client.get(
    "https://usis.bracu.ac.bd/academia/academicCoursePreRequisite/preRequsitelist?rows=9999",
  );
  // const apiResponse =
  //   '{"page":1,"total":146,"records":727,"rows":[{"cell":["1","STA510(RESEARCH METHODOLOGIES)","STA501(BUSINESS STATISTICS)","3"],"class":"com.docu.common.GridEntity","id":null},{"cell":["2","SOC420(SOCIOLOGY OF RELIGION)","SOC101(INTRODUCTION TO SOCIOLOGY)LINE_BREAKSOC301(SOCIOLOGICAL THEORY)LINE_BREAKSOC390(SOCIOLOGY OF DEVIANCE)","3LINE_BREAK3LINE_BREAK3"],"class":"com.docu.common.GridEntity","id":null},{"cell":["3","SOC410(THE INDIVIDUAL, SOCIETY AND SOCIAL CONTROL)","SOC301(SOCIOLOGICAL THEORY)LINE_BREAKSOC390(SOCIOLOGY OF DEVIANCE)LINE_BREAKSOC101(INTRODUCTION TO SOCIOLOGY)","3LINE_BREAK3LINE_BREAK3"],"class":"com.docu.common.GridEntity","id":null},{"cell":["4","SOC401(GENDER AND DEVELOPMENT)","SOC101(INTRODUCTION TO SOCIOLOGY)","3"],"class":"com.docu.common.GridEntity","id":null},{"cell":["5","SOC390(SOCIOLOGY OF DEVIANCE)","SOC101(INTRODUCTION TO SOCIOLOGY)","3"],"class":"com.docu.common.GridEntity","id":null}]}';

  const parsedApiResponse = parsePrereqApiResponse(apiResponse.data);
  return parsedApiResponse;
}
