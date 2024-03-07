import { ScrollArea } from "@/components/ui/scroll-area";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Suspense } from "react";

import Loading from "./loading";
import { cookies } from "next/headers";
import getClient from "@/usis/usisSession";
import { AxiosInstance } from "axios";
import AnalyticsTab from "@/components/tabs/analytics-tab";
import TabContentSkeleton from "@/components/skeletons/TabContentSkeleton";
import OverviewTab from "@/components/tabs/overview-tab";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Better USIS :: Dashboard",
  description: "View your dashboard",
};
export default async function page() {
  const cookieStore = cookies();
  const email = cookieStore.get("username")?.value || "";
  const password = cookieStore.get("pwd")?.value || "";

  const client: AxiosInstance | undefined = await getClient(email, password);
  // console.log(cookieStore);
  // console.log(email, password);
  if (!client) {
    throw new Error("Could not login");
  }

  return (
    <Suspense fallback={<Loading></Loading>}>
      <ScrollArea className="h-full">
        <div className="flex-1 space-y-4 p-4 md:p-8 pt-6">
          <div className="flex items-center justify-between space-y-2">
            <h2 className="text-3xl font-bold tracking-tight">
              HI, There 👋
            </h2>
          </div>
          <Tabs defaultValue="overview" className="space-y-4">
            <TabsList>
              <TabsTrigger value="overview">Overview</TabsTrigger>
              <TabsTrigger value="analytics">Analytics</TabsTrigger>
            </TabsList>
            <TabsContent value="overview" className="space-y-4">
              <Suspense fallback={<TabContentSkeleton/>}>
                <OverviewTab client={client}/>
                </Suspense>
            </TabsContent>

            <TabsContent value="analytics" className="space-y-4">
              <Suspense fallback ={<TabContentSkeleton/>}>
            <AnalyticsTab client={client}/>
            </Suspense>
            </TabsContent>
          </Tabs>
        </div>
      </ScrollArea>
    </Suspense>
  );
}
