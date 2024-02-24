import { Metadata } from "next";
import Link from "next/link";
import UserAuthForm from "@/components/forms/user-auth-form";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { Github, School } from "lucide-react";
import { Meteors } from "@/components/ui/meteors";

export const metadata: Metadata = {
  title: "Better USIS",
  description: "Login to access your dashboard",
};

export default function AuthenticationPage() {
  return (
    <div className="relative h-screen flex-col items-center justify-center md:grid lg:max-w-none lg:grid-cols-2 lg:px-0">
      {/* <Link
        href="/examples/authentication"
        className={cn(
          buttonVariants({ variant: "ghost" }),
          "absolute right-4 hidden top-4 md:right-8 md:top-8",
        )}
      >
        Login
      </Link> */}
      <div className="relative hidden h-full flex-col bg-muted p-10 text-white dark:border-r lg:flex">
        <div className="absolute inset-0 bg-zinc-900" />
        <div className="relative z-20 flex items-center text-lg font-medium">
          <School size={24} />
        </div>
        <div className="relative text-[6rem] flex flex-grow flex-col self-center justify-center items-end">
          <span className="flex font-slab flex-col items-end">
            <span className="text-xl pb-0 mb-0 pr-2">THE</span>
            <span className="pt-0 mt-0 leading-tight"> BETTER</span>
          </span>
          <span className=" font-slab">USIS</span>
        </div>
        <div className="relative z-20 mt-auto">
          <div className="flex place-content-between">
            <i className="text-lg">
              Experience the elegance of your academic demise with a sleek UI.
            </i>
            <Link
              href={"https://github.com/nur-zaman/better-usis"}
              className={cn(buttonVariants({ variant: "ghost" }))}
            >
              <Github />
            </Link>
          </div>
        </div>
        <Meteors number={50} />
      </div>
      <div className="p-4 lg:p-8 h-full flex items-center">
        <div className="mx-auto flex w-full flex-col justify-center space-y-6 sm:w-[350px]">
          <div className="flex flex-col space-y-2 text-center">
            <h1 className="text-5xl font-semibold pb-15 flex justify-center">
              <School size={48} />
            </h1>
            <h1 className="text-2xl font-semibold tracking-tight">
              Login To Better USIS
            </h1>
            <p className="text-sm text-muted-foreground">
              Enter your credentials below to login
            </p>
          </div>
          <UserAuthForm />
          <p className="px-8 text-center text-sm text-muted-foreground">
            By clicking continue, you agree to{" "}
            <Link
              href="/terms"
              className="underline underline-offset-4 hover:text-primary"
            >
              Terms of Service & Privacy Policy
            </Link>
            .
          </p>
        </div>
      </div>
    </div>
  );
}
