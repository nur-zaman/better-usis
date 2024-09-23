import { NextRequest, NextResponse } from "next/server";
import getProfilePage from "@/usis/usisStudentProfile";
import {getGradeSheetData} from "@/usis/usisGradeSheet";
import getClient from "@/usis/usisSession";

export async function GET(req: NextRequest) {
  try {
    const email = req.cookies.get("username")?.value || "";
    const password = req.cookies.get("pwd")?.value || "";

    if (!email || !password) {
      throw new Error("User is not authenticated");
    }

    const client = await getClient(email, password);

    if (!client) {
      throw new Error("Failed to authenticate with USIS");
    }

    const profileData = await getProfilePage(client);

    const gradeSheetData = await getGradeSheetData(client);

    let cgpa = null;
    if (gradeSheetData) {
      const lastSemester =
        gradeSheetData.semesters[gradeSheetData.semesters.length - 1];
      if (lastSemester && lastSemester.overallResult) {
        cgpa = lastSemester.overallResult.CGPA;
      }
    }

    return NextResponse.json({ ...profileData, cgpa });
  } catch (error) {
    console.error("Error fetching profile data:", error);
    return NextResponse.json(
      { error: "Failed to fetch profile data" },
      { status: 500 },
    );
  }
}
