import { NavItem, SidebarNavItem, SemesterEvents } from "@/types";

export const navItems: NavItem[] = [
  {
    title: "Dashboard",
    href: "/dashboard",
    icon: "dashboard",
    label: "Dashboard",
  },
  {
    title: "Course Details",
    href: "/dashboard/course-details",
    icon: "book",
    label: "Course Details",
  },

  {
    title: "Course Planning",
    href: "/dashboard/course-planning",
    icon: "kanban",
    label: "course-planning",
  },
  {
    title: "Contacts",
    href: "/dashboard/contacts",
    icon: "contact",
    label: "contacts",
  },
  {
    title: "Exam Routine",
    href: "/dashboard/exam-routine",
    icon: "CalendarCheck",
    label: "Exam Routine",
  },

  {
    title: "Profile",
    href: "/dashboard/profile",
    icon: "profile",
    label: "profile",
  },
];
