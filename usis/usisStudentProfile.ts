import { CheerioAPI, load } from "cheerio";
import { AxiosInstance } from "axios";
import { studentProfileEndpoint } from "./usisApiRoutes";

// Function to extract program information
const extractProgramInfo = ($: CheerioAPI) => {
  const program = {
    programName: $(".element-input-value-program font.choice-color")
      .text()
      .trim(),
    studentType: $(".element-input-value-program").eq(1).text().trim(),
  };
  return program;
};

// Function to extract student information
const extractStudentInfo = ($: CheerioAPI) => {
  const student = {
    studentID: $(".element-input-value").eq(0).text().trim(),
    fullName: $(".element-input-value").eq(1).text().trim(),
    gender: $(".element-input-value").eq(2).text().trim(),
    dateOfBirth: $(".element-input-value").eq(3).text().trim(),
    placeOfBirth: $(".element-input-value").eq(4).text().trim(),
    maritalStatus: $(".element-input-value").eq(5).text().trim(),
    mobileNumber: $(".element-input-value").eq(6).text().trim(),
    nationality: $(".element-input-value").eq(7).text().trim(),
    religion: $(".element-input-value").eq(8).text().trim(),
    mailingAddress: $(".element-input-address").eq(0).text().trim(),
    permanentAddress: $(".element-input-address").eq(1).text().trim(),
    homePhone: $(".element-input-value").eq(9).text().trim(),
    email: $(".element-input-value").eq(10).text().trim(),
    nationalID: $(".element-input-value").eq(11).text().trim(),
    bloodGroup: $(".element-input-value").eq(12).text().trim(),
    passportNo: $(".element-input-value").eq(13).text().trim(),
    district: $(".element-input-value").eq(14).text().trim(),
    country: $(".element-input-value").eq(15).text().trim(),
  };
  return student;
};

// Function to extract educational information
interface RowData {
  institute: string;
  board: string;
  passingYear: string;
  academicGroup: string;
  resultType: string;
  gpaWithAdditional: string;
  gpaWithoutAdditional: string;
  medium: string;
}

interface ExamDetails {
  examTitle: string;
  data: RowData[];
}

const extractEducationalInfo = ($: CheerioAPI): ExamDetails[] => {
  const exams: ExamDetails[] = [];
  $(".exam-title").each((index, element) => {
    const examTitle: string = $(element).text().trim();
    const table = $(element).next(".body-table-main-div").find(".table-body");
    const rows = table.find("tr").slice(1); // Skip header row
    const examDetails: ExamDetails = {
      examTitle,
      data: [],
    };
    rows.each((rowIndex, row) => {
      const columns = $(row).find(".table-tr-td-body");
      const rowData: RowData = {
        institute: columns.eq(0).text().trim(),
        board: columns.eq(1).text().trim(),
        passingYear: columns.eq(2).text().trim(),
        academicGroup: columns.eq(3).text().trim(),
        resultType: columns.eq(4).text().trim(),
        gpaWithAdditional: columns.eq(5).text().trim(),
        gpaWithoutAdditional: columns.eq(6).text().trim(),
        medium: columns.eq(7).text().trim(),
      };
      examDetails.data.push(rowData);
    });
    exams.push(examDetails);
  });
  return exams;
};

// Function to extract guardian information
const extractGuardianInfo = ($: CheerioAPI) => {
  const guardian = {
    fatherName: $(".element-input-value").eq(16).text().trim(),
    fatherOccupation: $(".element-input-value").eq(17).text().trim(),
    fatherEmail: $(".element-input-value").eq(18).text().trim(),
    fatherHomePhone: $(".element-input-value").eq(19).text().trim(),
    fatherMobile: $(".element-input-value").eq(20).text().trim(),
    fatherOfficePhone: $(".element-input-value").eq(21).text().trim(),
    motherName: $(".element-input-value").eq(22).text().trim(),
    motherOccupation: $(".element-input-value").eq(23).text().trim(),
    motherEmail: $(".element-input-value").eq(24).text().trim(),
    motherHomePhone: $(".element-input-value").eq(25).text().trim(),
    motherMobile: $(".element-input-value").eq(26).text().trim(),
    localGuardian: $(".element-input-value").eq(27).text().trim(),
    localGuardianName: $(".element-input-value").eq(28).text().trim(),
    localGuardianRelation: $(".element-input-value").eq(29).text().trim(),
    localGuardianPhone: $(".element-input-value").eq(30).text().trim(),
    localGuardianAddress: $(".element-input-value").eq(31).text().trim(),
    earningMember: $(".element-input-value").eq(32).text().trim(),
    monthlyIncome: $(".element-input-value").eq(33).text().trim(),
    currency: $(".element-input-value").eq(34).text().trim(),
  };
  return guardian;
};

// Function to extract miscellaneous information
const extractMiscellaneousInfo = ($: CheerioAPI) => {
  const miscellaneous = {
    academicHonors: $(".element-input-value-otherInfo").eq(0).text().trim(),
    scholarshipDetails: $(".element-input-value-otherInfo").eq(1).text().trim(),
    awardDetails: $(".element-input-value-otherInfo").eq(2).text().trim(),
    honorDetails: $(".element-input-value").eq(35).text().trim(),
    dismissedFromInstitution: $(".element-input-value-otherInfo")
      .eq(4)
      .text()
      .trim(),
    dismissalDetails: $(".element-input-value-otherInfo").eq(5).text().trim(),
    admittedToBRACUniversity: $(".element-input-value-otherInfo")
      .eq(6)
      .text()
      .trim(),
    bracAdmissionDetails: {
      admissionYear: $(".element-input-value").eq(36).text().trim(),
      semester: $(".element-input-value").eq(37).text().trim(),
      studentID: $(".element-input-value").eq(38).text().trim(),
    },
    admittedToOtherUniversity: $(".element-input-value-otherInfo")
      .eq(8)
      .text()
      .trim(),
    otherUniversityName: $(".element-input-value").eq(39).text().trim(),
    studyPeriod: {
      from: $(".element-input-value").eq(40).text().trim(),
      to: $(".element-input-value").eq(41).text().trim(),
    },
    ieltsScore: $(".element-input-value").eq(42).text().trim(),
    ieltsValidity: $(".element-input-value").eq(43).text().trim(),
    toeflScore: $(".element-input-value").eq(44).text().trim(),
    toeflValidity: $(".element-input-value").eq(45).text().trim(),
    satScore: $(".element-input-value").eq(46).text().trim(),
    satValidity: $(".element-input-value").eq(47).text().trim(),
    greGmatScore: $(".element-input-value").eq(48).text().trim(),
    greGmatValidity: $(".element-input-value").eq(49).text().trim(),
    otherLanguageProficiency: $(".element-input-value").eq(50).text().trim(),
    hasExperience: $(".element-input-value-otherInfo").eq(12).text().trim(),
    experienceYears: $(".element-input-value").eq(51).text().trim(),
    organizationsWorkedAt: $(".element-input-value").eq(52).text().trim(),
    coCurricularActivities: $(".element-input-value-otherInfo")
      .eq(14)
      .text()
      .trim(),
    coCurricularDetails: $(".element-input-value").eq(53).text().trim(),
    coCurricularAwards: $(".element-input-value-otherInfo")
      .eq(16)
      .text()
      .trim(),
    coCurricularAwardsDetails: $(".element-input-value").eq(54).text().trim(),
  };
  return miscellaneous;
};

export default async function getProfilePage(client: AxiosInstance) {
  await client.get("https://usis.bracu.ac.bd/academia/");
  const response = await client.get(studentProfileEndpoint);
  const profilePage = response.data;
  const $ = load(profilePage);
  const programInfo = extractProgramInfo($);
  const studentInfo = extractStudentInfo($);
  const educationalInfo = extractEducationalInfo($);
  const guardianInfo = extractGuardianInfo($);
  const miscellaneousInfo = extractMiscellaneousInfo($);
  console.log(programInfo);
  return {
    programInfo,
    studentInfo,
    educationalInfo,
    guardianInfo,
    miscellaneousInfo,
  };
}
