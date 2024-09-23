import { NextRequest, NextResponse } from "next/server";
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

    const photoUrl = req.nextUrl.searchParams.get("url");

    if (!photoUrl) {
      throw new Error("Photo URL not provided");
    }

    const response = await client.get(photoUrl, {
      responseType: "arraybuffer",
    });
    const contentType = response.headers["content-type"];

    return new NextResponse(response.data, {
      status: 200,
      headers: {
        "Content-Type": contentType,
        "Cache-Control": "public, max-age=31536000, immutable",
      },
    });
  } catch (error) {
    console.error("Error fetching profile photo:", error);
    return new NextResponse(
      JSON.stringify({ error: "Failed to fetch profile photo" }),
      { status: 500, headers: { "Content-Type": "application/json" } },
    );
  }
}
