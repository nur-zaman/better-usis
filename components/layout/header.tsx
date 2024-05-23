import ThemeToggle from "@/components/layout/ThemeToggle/theme-toggle";
import { cn } from "@/lib/utils";
import { MobileSidebar } from "./mobile-sidebar";
import Link from "next/link";
import { School } from "lucide-react";
import LogoutButton from "../logout-button";
import ReportIssuesButton from "@/components/report-issues-button";

export default function Header() {
  return (
    <div className="fixed top-0 left-0 right-0 supports-backdrop-blur:bg-background/60 border-b bg-background/95 backdrop-blur z-20">
      <nav className="h-14 flex items-center justify-between px-4">
        <div className="hidden lg:block">
          <Link href={"#"} className="flex-row flex gap-2">
            <School />
            <span>Better USIS</span>
          </Link>
        </div>
        <div className={cn("block lg:!hidden")}>
          <MobileSidebar />
        </div>

        <div className="flex items-center gap-2">
          <ReportIssuesButton />
          <ThemeToggle />
          <LogoutButton />
        </div>
      </nav>
    </div>
  );
}
