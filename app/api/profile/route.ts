import { NextResponse } from "next/server";
import getProfilePage from "@/usis/usisStudentProfile";
import axios from "axios";

export async function GET() {
  try {
    const client = axios.create({
      withCredentials: true,
    });

    const profileData = await getProfilePage(client);
    console.log("Profile Data:", profileData);

    return NextResponse.json(profileData);
  } catch (error) {
    console.error("Error fetching profile data:", error);
    return NextResponse.json(
      { error: "Failed to fetch profile data" },
      { status: 500 },
    );
  }
}


