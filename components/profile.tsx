"use client";

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { TabsContent, Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";

interface AdvisedCourse {
  courseCode: string;
  courseTitle: string;
  section: string;
  courseInstructor: string;
  creditTaken: string;
  courseCredit: string;
  seat: string;
}

interface ProfileData {
  cgpa?: number | null;
  studentInfo: {
    studentID: string;
    fullName: string;
    photoUrl?: string;
    gender: string;
    dateOfBirth: string;
    email: string;
    nationality: string;
    mobileNumber: string;
    homePhone: string;
  };
  programInfo: {
    programName: string;
    studentType: string;
  };
  guardianInfo: {
    fatherName: string;
    fatherOccupation: string;
    fatherMobile: string;
    motherName: string;
    motherOccupation: string;
    motherMobile: string;
    localGuardian: string;
    localGuardianName: string;
    localGuardianRelation: string;
    localGuardianPhone: string;
    localGuardianAddress: string;
  };
  advisedCoursesList: AdvisedCourse[];
}

interface StudentProfileProps {
  profileData: ProfileData;
}

export default function StudentProfile({ profileData }: StudentProfileProps) {
  const { studentInfo, programInfo, guardianInfo, advisedCoursesList, cgpa } =
    profileData;

  return (
    <div className="min-h-screen">
      <div className="container mx-auto p-4 space-y-6 bg-background text-foreground">
        <header className="flex justify-between items-center">
          <h1 className="text-2xl font-bold">Student Profile</h1>
        </header>

        <div className="grid md:grid-cols-2 gap-6">
          <Card className="md:col-span-2">
            <CardHeader>
              <CardTitle>Basic Information</CardTitle>
            </CardHeader>
            <CardContent className="grid sm:grid-cols-2 gap-4">
              <div className="space-y-2">
                <p>
                  <strong>Student ID:</strong> {studentInfo.studentID}
                </p>
                <p>
                  <strong>Full Name:</strong> {studentInfo.fullName}
                </p>
                <p>
                  <strong>Date of Birth:</strong> {studentInfo.dateOfBirth}
                </p>
                <p>
                  <strong>Gender:</strong> {studentInfo.gender}
                </p>
              </div>
              <div className="space-y-2">
                <p>
                  <strong>Email:</strong> {studentInfo.email}
                </p>
                <p>
                  <strong>Nationality:</strong> {studentInfo.nationality}
                </p>
                <p>
                  <strong>Mobile Phone:</strong> {studentInfo.mobileNumber}
                </p>
                <p>
                  <strong>Home Phone:</strong> {studentInfo.homePhone}
                </p>
              </div>
            </CardContent>
          </Card>
        </div>

        <Card>
          <CardHeader>
            <CardTitle>Academic Information</CardTitle>
          </CardHeader>
          <CardContent className="space-y-2">
            <p>
              <strong>Program Name:</strong> {programInfo.programName}
            </p>
            <p>
              <strong>Cumulative GPA (CGPA):</strong>{" "}
              {cgpa !== null ? cgpa : "CGPA not available"}
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Course Details</CardTitle>
          </CardHeader>
          <CardContent>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Course Code</TableHead>
                  <TableHead>Course Title</TableHead>
                  <TableHead>Section</TableHead>
                  <TableHead>Course Instructor</TableHead>
                  <TableHead>Credit Taken</TableHead>
                  <TableHead>Course Credit</TableHead>
                  <TableHead>Seat</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {advisedCoursesList.map(
                  (course: AdvisedCourse, index: number) => (
                    <TableRow key={index}>
                      <TableCell>{course.courseCode}</TableCell>
                      <TableCell>{course.courseTitle}</TableCell>
                      <TableCell>{course.section}</TableCell>
                      <TableCell>{course.courseInstructor}</TableCell>
                      <TableCell>{course.creditTaken}</TableCell>
                      <TableCell>{course.courseCredit}</TableCell>
                      <TableCell>{course.seat}</TableCell>
                    </TableRow>
                  ),
                )}
              </TableBody>
            </Table>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Guardian Information</CardTitle>
          </CardHeader>
          <CardContent>
            <Tabs defaultValue="parents">
              <TabsList className="mb-4">
                <TabsTrigger value="parents">Parents</TabsTrigger>
                <TabsTrigger value="local">Local Guardian</TabsTrigger>
              </TabsList>
              <TabsContent value="parents" className="space-y-4">
                <div>
                  <h3 className="font-semibold mb-2">
                    Father&apos;s Information
                  </h3>
                  <p>
                    <strong>Name:</strong> {guardianInfo.fatherName}
                  </p>
                  <p>
                    <strong>Occupation:</strong> {guardianInfo.fatherOccupation}
                  </p>
                  <p>
                    <strong>Contact:</strong> {guardianInfo.fatherMobile}
                  </p>
                </div>
                <div>
                  <h3 className="font-semibold mb-2">
                    Mother&apos;s Information
                  </h3>
                  <p>
                    <strong>Name:</strong> {guardianInfo.motherName}
                  </p>
                  <p>
                    <strong>Occupation:</strong> {guardianInfo.motherOccupation}
                  </p>
                  <p>
                    <strong>Contact:</strong> {guardianInfo.motherMobile}
                  </p>
                </div>
              </TabsContent>
              <TabsContent value="local">
                <h3 className="font-semibold mb-2">
                  Local Guardian Information
                </h3>
                <p>
                  <strong>Name:</strong> {guardianInfo.localGuardianName}
                </p>
                <p>
                  <strong>Relation:</strong>{" "}
                  {guardianInfo.localGuardianRelation}
                </p>
                <p>
                  <strong>Contact:</strong> {guardianInfo.localGuardianPhone}
                </p>
                <p>
                  <strong>Address:</strong> {guardianInfo.localGuardianAddress}
                </p>
              </TabsContent>
            </Tabs>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
