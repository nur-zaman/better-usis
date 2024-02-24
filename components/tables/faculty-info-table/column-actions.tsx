import React from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { FacultyInfoType } from "@/constants/facultyData";
import { Row } from "@tanstack/react-table";
import { EmailTemplateForm } from "@/components/forms/email-template-form";

type Props = {
  row: Row<FacultyInfoType>;
};

export default function FacultyTableColActions({ row }: Props) {
  return (
    <>
      <Dialog>
        <DialogTrigger>
          <div className="border-2 border-gray-200 rounded-md p-2">
            <Mail />
          </div>
        </DialogTrigger>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Send Email</DialogTitle>
            {/* <DialogDescription>
              Make changes to your profile here. Click save when you're done.
            </DialogDescription> */}
          </DialogHeader>
<EmailTemplateForm facultyMail={row.original.email} />

        </DialogContent>
      </Dialog>
    </>
  );
}
