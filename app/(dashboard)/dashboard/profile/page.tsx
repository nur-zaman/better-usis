import BreadCrumb from "@/components/breadcrumb";
import { ScrollArea } from "@/components/ui/scroll-area";
import StudentProfile from "@/components/profile";
import getClient from "@/usis/usisSession";
import getProfilePage from "@/usis/usisStudentProfile";
import { getGradeSheetData } from "@/usis/usisGradeSheet";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";

const breadcrumbItems = [{ title: "Profile", link: "/dashboard/profile" }];

export default async function Page() {
  const cookieStore = cookies();
  const email = cookieStore.get("username")?.value || "";
  const password = cookieStore.get("pwd")?.value || "";

  if (!email || !password) {
    redirect("/");
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

  const fullProfileData = { ...profileData, cgpa };

  return (
    <ScrollArea className="h-full">
      <div className="flex-1 space-y-4 p-4 md:p-8 pt-6">
        <BreadCrumb items={breadcrumbItems} />
        <StudentProfile profileData={fullProfileData} />
      </div>
    </ScrollArea>
  );
}
