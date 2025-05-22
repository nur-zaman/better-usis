"use client"; // Required for useState

import Header from "@/components/layout/header";
import Sidebar from "@/components/layout/sidebar";
import type { Metadata } from "next";
import { useState } from "react";
import { DemoNotificationModal } from "@/components/modal/demo-notification-modal";

// export const metadata: Metadata = { // Metadata needs to be defined in a server component or on page level
//   title: "Better USIS",
//   description: "The better version of USIS that my Uni didn't make for me.",
// };

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [showDemoNotification, setShowDemoNotification] = useState(true);

  return (
    <>
      <Header />
      <DemoNotificationModal
        isOpen={showDemoNotification}
        onClose={() => setShowDemoNotification(false)}
      />
      <div className="flex h-screen overflow-hidden">
        <Sidebar />
        <main className="w-full pt-16">{children}</main>
      </div>
    </>
  );
}
