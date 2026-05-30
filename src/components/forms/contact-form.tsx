"use client";

import { useState, type FormEvent } from "react";
import { ArrowRight, CheckCircle2, Loader2 } from "lucide-react";
import { cn } from "@/lib/utils";
import { PROJECT_TYPES } from "@/lib/constants";

type FormState = "idle" | "submitting" | "success" | "error";

const inputClass =
  "w-full rounded-lg border border-white/15 bg-white/[0.08] px-4 py-3 text-sm text-white placeholder:text-muted-light outline-none transition-colors focus:border-brand-green/50 focus:ring-1 focus:ring-brand-green/30";

export function ContactForm() {
  const [state, setState] = useState<FormState>("idle");
  const [errorMessage, setErrorMessage] = useState("");

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setState("submitting");
    setErrorMessage("");

    const form = e.currentTarget;
    const data = Object.fromEntries(new FormData(form));

    try {
      const res = await fetch("/api/enquiry", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      const json = (await res.json()) as { ok?: boolean; error?: string };

      if (!res.ok || !json.ok) {
        throw new Error(json.error ?? "Something went wrong. Please try calling us directly.");
      }

      setState("success");
      form.reset();
    } catch (err) {
      setState("error");
      setErrorMessage(
        err instanceof Error ? err.message : "Unable to send enquiry. Please call us instead."
      );
    }
  }

  if (state === "success") {
    return (
      <div className="flex flex-col items-center justify-center rounded-xl border border-brand-green/30 bg-brand-green/10 px-8 py-16 text-center">
        <CheckCircle2 className="mb-4 h-12 w-12 text-brand-green" aria-hidden />
        <h3 className="text-xl font-medium text-white">Enquiry received</h3>
        <p className="mt-3 max-w-sm text-sm text-muted-light">
          Thank you. Our team will respond within one business day. For urgent faults, use the
          emergency line.
        </p>
        <button
          type="button"
          onClick={() => setState("idle")}
          className="mt-8 text-sm text-brand-gold underline-offset-4 hover:underline"
        >
          Send another enquiry
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div className="grid gap-4 sm:grid-cols-2">
        <div>
          <label htmlFor="name" className="mb-1.5 block text-xs uppercase tracking-wider text-muted">
            Full name *
          </label>
          <input
            id="name"
            name="name"
            type="text"
            required
            autoComplete="name"
            className={inputClass}
            placeholder="Your name"
          />
        </div>
        <div>
          <label htmlFor="phone" className="mb-1.5 block text-xs uppercase tracking-wider text-muted">
            Phone *
          </label>
          <input
            id="phone"
            name="phone"
            type="tel"
            required
            autoComplete="tel"
            className={inputClass}
            placeholder="082 000 0000"
          />
        </div>
      </div>

      <div>
        <label htmlFor="email" className="mb-1.5 block text-xs uppercase tracking-wider text-muted">
          Email *
        </label>
        <input
          id="email"
          name="email"
          type="email"
          required
          autoComplete="email"
          className={inputClass}
          placeholder="you@company.co.za"
        />
      </div>

      <div>
        <label
          htmlFor="projectType"
          className="mb-1.5 block text-xs uppercase tracking-wider text-muted"
        >
          Project type *
        </label>
        <select
          id="projectType"
          name="projectType"
          required
          defaultValue=""
          className={cn(inputClass, "cursor-pointer")}
        >
          <option value="" disabled>
            Select a service
          </option>
          {PROJECT_TYPES.map((type) => (
            <option key={type} value={type} className="bg-dark text-white">
              {type}
            </option>
          ))}
        </select>
      </div>

      <div>
        <label htmlFor="message" className="mb-1.5 block text-xs uppercase tracking-wider text-muted">
          Message *
        </label>
        <textarea
          id="message"
          name="message"
          required
          rows={4}
          className={cn(inputClass, "resize-none")}
          placeholder="Briefly describe your facility, timeline, and requirements..."
        />
      </div>

      {state === "error" && errorMessage && (
        <p className="text-sm text-red-400" role="alert">
          {errorMessage}
        </p>
      )}

      <button
        type="submit"
        disabled={state === "submitting"}
        className="btn btn-primary btn-md flex w-full items-center justify-center gap-2 disabled:opacity-60"
      >
        {state === "submitting" ? (
          <>
            <Loader2 className="h-4 w-4 animate-spin" aria-hidden />
            Sending...
          </>
        ) : (
          <>
            Submit enquiry
            <ArrowRight className="h-4 w-4" aria-hidden />
          </>
        )}
      </button>
    </form>
  );
}
