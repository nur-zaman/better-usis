"use client";
import { Button } from "@/components/ui/button";
import { Heading } from "@/components/ui/heading";

import { ClassScheduleForCourseDetails } from "@/types/usisTypes";
// import { Plus } from "lucide-react";
import { usePathname, useRouter, useSearchParams } from "next/navigation";

import React from "react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { ChevronDownIcon } from "lucide-react";

import { getSemesterName } from "@/usis/usisUtils";

interface CourseDetailsProps {
  data: ClassScheduleForCourseDetails[];
  currentSemesterName: string;
  currentSemesterID: string;
}

export const UserClient: React.FC<CourseDetailsProps> = ({
  data,
  currentSemesterName,
  currentSemesterID,
}) => {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const createQueryString = React.useCallback(
    (params: Record<string, string | number | null>) => {
      const newSearchParams = new URLSearchParams(searchParams?.toString());

      for (const [key, value] of Object.entries(params)) {
        if (value === null) {
          newSearchParams.delete(key);
        } else {
          newSearchParams.set(key, String(value));
        }
      }

      return newSearchParams.toString();
    },
    [searchParams],
  );

  // const [semesterID, setSemesterID] = React.useState("627119");
  const [semesterID, setSemesterID] = React.useState(currentSemesterID);

  React.useEffect(() => {
    router.push(
      `${pathname}?${createQueryString({
        sem: semesterID,
      })}`,
      {
        scroll: false,
      },
    );
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [semesterID]);

  return (
    <>
      <div className="flex items-start justify-between">
        <Heading
          title={`Course Details (${data.length})`}
          description="View Details about courses."
        />
        {/* <Button
          className="text-xs md:text-sm"
          onClick={() => router.push(`/dashboard/user/new`)}
        >
          <Plus className="mr-2 h-4 w-4" /> Add New
        </Button> */}

        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="outline" className="ml-auto">
              Select Semester <ChevronDownIcon className="ml-2 h-4 w-4" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            <DropdownMenuSeparator />
            <DropdownMenuRadioGroup
              value={semesterID}
              onValueChange={(value) => {
                setSemesterID(value);
              }}
            >
              {[
                parseInt(currentSemesterID) - 2,
                parseInt(currentSemesterID) - 1,
                parseInt(currentSemesterID),
                parseInt(currentSemesterID) + 1,
              ].map((item) => {
                return (
                  <DropdownMenuRadioItem
                    key={item}
                    value={`${item}`}
                    className="capitalize"
                  >
                    {`${getSemesterName(item).semester} ${
                      getSemesterName(item).year
                    }`}
                  </DropdownMenuRadioItem>
                );
              })}
            </DropdownMenuRadioGroup>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </>
  );
};
