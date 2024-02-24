
import { NavItem, SidebarNavItem,SemesterEvents } from "@/types";




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
    title: "Profile",
    href: "/dashboard/profile",
    icon: "profile",
    label: "profile",
  },

];

export const semesterEvents:SemesterEvents<"Spring_2024">={
  "Spring_2024": {
    "events": [
      {
        "from_date": "2024-01-01",
        "to_date": "2024-01-01",
        "day": "Monday",
        "title": "New Year Day - University closed"
      },
      {
        "from_date": "2024-01-14",
        "to_date": "2024-02-22",
        "day": "Sunday to Thursday",
        "title": "Payment for Spring 2024"
      },
      {
        "from_date": "2024-01-15",
        "to_date": "2024-01-18",
        "day": "Monday to Thursday",
        "title": "Course add/drop of Current Students for Spring 2024"
      },
      {
        "from_date": "2024-01-20",
        "to_date": "2024-01-20",
        "day": "Saturday",
        "title": "Classes of Spring 2024 Begin"
      },
      {
        "from_date": "2024-01-25",
        "to_date": "2024-01-25",
        "day": "Thursday",
        "title": "Last Day to Add / Swap / Section Change Courses"
      },
      {
        "from_date": "2024-01-25",
        "to_date": "2024-01-25",
        "day": "Thursday",
        "title": "Last date for drop of courses/semester with 100% refund"
      },
      {
        "from_date": "2024-02-01",
        "to_date": "2024-02-01",
        "day": "Thursday",
        "title": "Last date for drop of courses/semester with 75% refund"
      },
      {
        "from_date": "2024-02-06",
        "to_date": "2024-02-06",
        "day": "Tuesday",
        "title": "Last Day To Withdraw With W Grade (No Refund)"
      },
      {
        "from_date": "2024-02-21",
        "to_date": "2024-02-21",
        "day": "Wednesday",
        "title": "International Mother Language Day - University closed"
      },
      {
        "from_date": "2024-02-26",
        "to_date": "2024-02-26",
        "day": "Monday",
        "title": "Shab-E-Barat* -University closed"
      },
      {
        "from_date": "2024-03-03",
        "to_date": "2024-03-10",
        "day": "Sunday",
        "title": "Mid-Term Exams week (PHR)"
      },
      {
        "from_date": "2024-03-09",
        "to_date": "2024-03-16",
        "day": "Saturday",
        "title": "Mid-Term Exams week"
      },
      {
        "from_date": "2024-03-17",
        "to_date": "2024-03-17",
        "day": "Sunday",
        "title": "Birthday of Father of the Nation - University closed"
      },
      {
        "from_date": "2024-03-26",
        "to_date": "2024-03-26",
        "day": "Tuesday",
        "title": "Independence Day - University closed"
      },
      {
        "from_date": "2024-04-07",
        "to_date": "2024-04-07",
        "day": "Sunday",
        "title": "Shab-e-Qadr*-University closed"
      },
      {
        "from_date": "2024-04-08",
        "to_date": "2024-04-13",
        "day": "Monday to Saturday",
        "title": "Eid-ul-Fitr-University closed"
      },
      {
        "from_date": "2024-04-14",
        "to_date": "2024-04-14",
        "day": "Sunday",
        "title": "Naba Barsha - University closed"
      },
      {
        "from_date": "2024-04-30",
        "to_date": "2024-04-30",
        "day": "Tuesday",
        "title": "Classes of Spring 2024 End"
      },
      {
        "from_date": "2024-05-01",
        "to_date": "2024-05-01",
        "day": "Wednesday",
        "title": "May Day - University closed"
      },
      {
        "from_date": "2024-05-02",
        "to_date": "2024-05-10",
        "day": "Thursday to Friday",
        "title": "Final Examinations"
      },
      {
        "from_date": "2024-05-13",
        "to_date": "2024-05-13",
        "day": "Monday",
        "title": "Last Day of Submitting Grades"
      },
      {
        "from_date": "2024-05-15",
        "to_date": "2024-05-15",
        "day": "Wednesday",
        "title": "Publication of Results"
      },
      {
        "from_date": "2024-05-26",
        "to_date": "2024-06-01",
        "day": "Sunday to Saturday",
        "title": "Final Exam - LLB"
      },
      {
        "from_date": "2024-06-01",
        "to_date": "2024-06-12",
        "day": "Saturday to Wednesday",
        "title": "Final Examinations (PHR)"
      }
    ]
  }
}
