export interface Course {
    courseCode: string;
    program: string;
    faculty: string;
    credit: number;
    section: string;
    dayTimeRoom: { day: string; time: string; roomNumber: string }[];
    totalSeat: number;
    seatBooked: number;
    seatRemaining: number;
  }
  
export interface ParsedData {
    courses: Course[];
  }



  export interface ClassRoutineDaySchedule {
    id: string;
    courseId: string | null;
    faculty: string | null;
    room: string | null;
  }
  
export interface ClassRoutineTimeSlot {
    time: string;
    days: Record<string, ClassRoutineDaySchedule>;
  }
  
export interface ClassRoutineDetail {
    id: string;
    courseId: string;
    faculty: string;
    room: string;
  }

  export type ClassScheduleForCourseDetails = {
    id: string;
    course: string;
    section: string;
    seat: number;
    faculty: string | null;
    instructor: string | null;
    examDate?: string | null; // Consider using a proper date type if possible
    examTime?: string | null;
    sunday?: string | null;
    monday?: string | null;
    tuesday?: string | null;
    wednesday?: string | null;
    thursday?: string | null; // Optional field
    friday?: string | null; // Optional field
    saturday?: string | null;
  };


//GradeSheet
export  type GradeSheetCourseInfo = {
    courseNo: string;
    courseTitle: string;
    courseCredit: number;
    creditEarned: number;
    grade: string;
    gradePoint: number;
  };
  
  export type GradeSheetSemesterResult = {
    creditsAttemped: number;
    creditsEarned: number;
    GPA: number;
  };
  
 export type GradeSheetOverallResult = {
    creditsAttemped: number;
    creditsEarned: number;
    CGPA: number;
  };
  
  export type GradeSheetSemester = {
    semester: string;
    courses: GradeSheetCourseInfo[];
    semesterResult: GradeSheetSemesterResult;
    overallResult: GradeSheetOverallResult;
  };
  
 export type GradeSheetParsedData = {
    studentIdNo: string;
    name: string;
    program: string;
    semesters: GradeSheetSemester[];
  };

//preReq Course table
  export interface preReqApiResponse {
    page: number;
    total: number;
    records: number;
    rows: preReqRow[];
  }
  
  export interface preReqRow {
    cell: string[];
    class: string;
    id: string | null;
  }
  
  export interface preReqData {
    id: string;
    course: preReqCourse;
    prereq:preReqCourse[] 
  }
  export interface preReqCourse{
    code:string;
    name:string;
  }

  export interface Event {
    title: string;
    link: string;
    startDate: string;
    endDate: string;
    details: string;
    date: string;
}
