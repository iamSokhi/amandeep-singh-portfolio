"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Loader2, CheckCircle2, AlertCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { siteConfig } from "@/data/site";

const contactSchema = z.object({
  name: z.string().min(2, "Enter your full name."),
  email: z.string().email("Enter a valid email address."),
  subject: z.string().min(3, "Give it a short subject."),
  message: z.string().min(10, "Message should be at least 10 characters."),
});

type ContactFormValues = z.infer<typeof contactSchema>;

type Status = "idle" | "submitting" | "success" | "error";

export function ContactForm() {
  const [status, setStatus] = useState<Status>("idle");

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<ContactFormValues>({
    resolver: zodResolver(contactSchema),
  });

  async function onSubmit(values: ContactFormValues) {
    setStatus("submitting");
    try {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          access_key: siteConfig.web3formsAccessKey,
          ...values,
        }),
      });
      const result = await res.json();
      if (result.success) {
        setStatus("success");
        reset();
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-5" noValidate>
      <div className="grid gap-5 sm:grid-cols-2">
        <div className="space-y-1.5">
          <Label htmlFor="name">Name</Label>
          <Input id="name" placeholder="Jane Doe" {...register("name")} />
          {errors.name && (
            <p className="text-xs text-red-500">{errors.name.message}</p>
          )}
        </div>
        <div className="space-y-1.5">
          <Label htmlFor="email">Email</Label>
          <Input
            id="email"
            type="email"
            placeholder="jane@company.com"
            {...register("email")}
          />
          {errors.email && (
            <p className="text-xs text-red-500">{errors.email.message}</p>
          )}
        </div>
      </div>

      <div className="space-y-1.5">
        <Label htmlFor="subject">Subject</Label>
        <Input
          id="subject"
          placeholder="Frontend lead role at..."
          {...register("subject")}
        />
        {errors.subject && (
          <p className="text-xs text-red-500">{errors.subject.message}</p>
        )}
      </div>

      <div className="space-y-1.5">
        <Label htmlFor="message">Message</Label>
        <Textarea
          id="message"
          placeholder="Tell me a bit about the project or role..."
          {...register("message")}
        />
        {errors.message && (
          <p className="text-xs text-red-500">{errors.message.message}</p>
        )}
      </div>

      <Button
        type="submit"
        variant="amber"
        size="lg"
        disabled={status === "submitting"}
        className="w-full sm:w-auto"
      >
        {status === "submitting" && (
          <Loader2 className="h-4 w-4 animate-spin" />
        )}
        {status === "submitting" ? "Sending..." : "Send message"}
      </Button>

      {status === "success" && (
        <p className="flex items-center gap-2 text-sm text-teal">
          <CheckCircle2 className="h-4 w-4" /> Message sent — I'll get back to
          you shortly.
        </p>
      )}
      {status === "error" && (
        <p className="flex items-center gap-2 text-sm text-red-500">
          <AlertCircle className="h-4 w-4" /> Something went wrong. Please
          email me directly instead.
        </p>
      )}
    </form>
  );
}
