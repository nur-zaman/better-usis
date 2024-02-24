"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

const formSchema = z.object({
  email: z.string().email({ message: "Enter a valid email address" }),
  subject: z.string().min(1, { message: "Enter your subject" }),
  body: z.string().min(1, { message: "Enter your body" }),
});

export function EmailTemplateForm({ facultyMail }: { facultyMail: string }) {
  // 1. Define your form.
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: facultyMail,
      subject: "",
      body: "",
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    const url = `https://mail.google.com/mail/u/0/?view=cm&fs=1&to=${encodeURIComponent(
      values.email,
    )}&su=${encodeURIComponent(values.subject)}&body=${encodeURIComponent(
      values.body,
    )}`;
    window.open(url, "_blank");
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              {/* <FormLabel>{"To"}</FormLabel> */}
              <FormControl>
                <Input placeholder="Enter Email" {...field} />
              </FormControl>
              {/* <FormDescription>
                This is your public display name.
              </FormDescription> */}
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="subject"
          render={({ field }) => (
            <FormItem>
              {/* <FormLabel>Username</FormLabel> */}
              <FormControl>
                <Input placeholder="Subject" {...field} />
              </FormControl>
              {/* <FormDescription>
                This is your public display name.
              </FormDescription> */}
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="body"
          render={({ field }) => (
            <FormItem>
              {/* <FormLabel>Username</FormLabel> */}
              <FormControl>
                <Textarea placeholder="Write your e-mail" {...field} />
              </FormControl>
              {/* <FormDescription>
                This is your public display name.
              </FormDescription> */}
              <FormMessage />
            </FormItem>
          )}
        />
        <Button type="submit">Send</Button>
      </form>
    </Form>
  );
}
