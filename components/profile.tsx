"use client";

import { useEffect, useState } from "react";
import { User } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { TabsContent, Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Image from "next/image";

interface Course {
  courseCode: string;
  courseTitle: string;
  section: string;
  faculty: string;
  credit: number;
  totalSeat: number;
  seatRemaining: number;
}

interface ProfileData {
  cgpa?: number;
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
  educationalInfo: Course[];
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
}

export default function StudentProfile() {
  const [profileData, setProfileData] = useState<ProfileData | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProfileData = async () => {
      try {
        const res = await fetch("/api/profile", { credentials: "include" });
        if (!res.ok) {
          throw new Error("Network response was not ok");
        }
        const data = await res.json();
        console.log("Fetched Profile Data:", data);
        setProfileData(data);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching profile data:", error);
        setLoading(false);
      }
    };

    fetchProfileData();
  }, []);

  if (loading) {
    return <p>Loading...</p>;
  }

  if (!profileData) {
    return <p>Profile data not available.</p>;
  }

  const { studentInfo, programInfo, educationalInfo, guardianInfo, cgpa } =
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

          {/* <Card>
            <CardContent className="flex flex-col items-center justify-center h-full">
              <div className="w-32 h-32 rounded-full bg-muted flex items-center justify-center mt-4 mb-4">
                {studentInfo.photoUrl ? (
                  <Image
                    className="rounded-full"
                    src={`/api/profile/photo?url=${encodeURIComponent(
                      studentInfo.photoUrl,
                    )}`}
                    alt={`${studentInfo.fullName} profile`}
                    width={128}
                    height={128}
                  />
                ) : (
                  <User className="w-20 h-20" />
                )}
              </div>
              <h2 className="text-xl font-semibold">{studentInfo.fullName}</h2>
              <p className="text-muted-foreground">
                Student ID: {studentInfo.studentID}
              </p>
            </CardContent>
          </Card> */}
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
                {educationalInfo.map((course: Course, index: number) => (
                  <TableRow key={index}>
                    <TableCell>{course.courseCode}</TableCell>
                    <TableCell>{course.courseTitle}</TableCell>
                    <TableCell>{course.section}</TableCell>
                    <TableCell>{course.faculty}</TableCell>
                    <TableCell>{course.credit}</TableCell>
                    <TableCell>{course.credit}</TableCell>
                    <TableCell>{course.totalSeat}</TableCell>
                  </TableRow>
                ))}
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
