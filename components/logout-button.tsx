"use client";
import { LogOut } from "lucide-react";
import { signOut } from "next-auth/react";
import React from "react";
import { Button } from "./ui/button";

type Props = {};

export default function LogoutButton({}: Props) {
  return (
    <Button variant={"ghost"} onClick={async () => await signOut()}>
      <LogOut />
    </Button>
  );
}
