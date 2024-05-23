"use client";
import React from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { Button } from "./ui/button";
import { Bug } from "lucide-react";

export default function ReportIssuesButton() {
  const pageURL = usePathname();
  const subject = "Better USIS issue on " + pageURL;

  const body = `
  Error Description:


  Steps to Reproduce:
  1. [Step 1]
  2. [Step 2]
  3. [Step 3]
  ...
  
  Expected Behavior:
  [Describe the expected behavior or outcome that should have occurred.]
  
  Actual Behavior:
  [Describe the actual behavior or outcome that occurred instead.]
  

  Environment Details:
  - Operating System (if applicable): [Your OS version]
  - Browser (if applicable): [Browser name and version]
  - Device (if applicable): [Device type and/or model]
  - Any other relevant details: [Additional information about the environment]
  
  Attachments:
  [If applicable, mention any relevant attachments, such as screenshots, log files, or error reports.]
  
`;

  const encodedSubject = encodeURIComponent(subject);
  const encodedBody = encodeURIComponent(body);
  return (
    <Link
      href={`mailto:mail.nuruzzaman+betterusisissues@gmail.com?subject=${encodedSubject}&body=${encodedBody}`}
    >
      <Button variant={"link"}>
        <Bug /> Report Issues
      </Button>
    </Link>
  );
}
