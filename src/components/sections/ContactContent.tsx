"use client";

import { useActionState } from "react";
import { contactPage, site } from "@/data/site";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Mail, MapPin, Clock, Send, CheckCircle2, AlertCircle } from "lucide-react";
import { LinkedInIcon } from "@/components/ui/LinkedInIcon";

interface FormState {
  status: "idle" | "submitting" | "success" | "error";
  message: string;
}

export function ContactContent() {
  async function submitAction(
    prevState: FormState,
    formData: FormData
  ): Promise<FormState> {
    try {
      const res = await fetch(site.formEndpoint, {
        method: "POST",
        body: formData,
        headers: { Accept: "application/json" },
      });

      if (res.ok) {
        return {
          status: "success",
          message:
            "Thank you! Your project enquiry has been sent. We will reply within 24 hours.",
        };
      } else {
        const data = await res.json().catch(() => null);
        return {
          status: "error",
          message:
            data?.errors?.[0]?.message ||
            "Unable to send message right now. Please email info@dtsolutions.pk directly.",
        };
      }
    } catch {
      return {
        status: "error",
        message:
          "Network error submitting form. Please send your enquiry to info@dtsolutions.pk.",
      };
    }
  }

  const initialState: FormState = {
    status: "idle",
    message: "",
  };

  const [state, formAction, isPending] = useActionState(submitAction, initialState);

  return (
    <div className="pt-28 pb-20 sm:pt-36 sm:pb-32">
      {/* Header */}
      <section className="container-x">
        <SectionHeading
          as="h1"
          eyebrow={contactPage.eyebrow}
          title={contactPage.title}
          description={contactPage.description}
        />
      </section>

      {/* Main Grid */}
      <section id="enquiry" className="container-x mt-16 sm:mt-24 scroll-mt-28">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:gap-8 items-start">
          {/* Form */}
          <div className="lg:col-span-7 rounded-3xl border border-line bg-white p-8 sm:p-10 shadow-[0_15px_45px_rgba(5,11,26,0.04)]">
            <span className="text-xs font-bold uppercase tracking-widest text-brand">
              {contactPage.formEyebrow}
            </span>
            <h2 className="mt-3 font-display text-2xl font-bold tracking-tight text-heading sm:text-3xl">
              {contactPage.formTitle}
            </h2>
            <p className="mt-2 text-sm text-muted">
              {contactPage.formDescription}
            </p>

            {/* Notification alert */}
            {state.status === "success" && (
              <div className="mt-6 flex items-start gap-3 rounded-2xl bg-emerald-50 border border-emerald-200 p-4 text-sm text-emerald-800">
                <CheckCircle2 className="size-5 shrink-0 text-emerald-600 mt-0.5" />
                <p>{state.message}</p>
              </div>
            )}

            {state.status === "error" && (
              <div className="mt-6 flex items-start gap-3 rounded-2xl bg-red-50 border border-red-200 p-4 text-sm text-red-800">
                <AlertCircle className="size-5 shrink-0 text-red-600 mt-0.5" />
                <p>{state.message}</p>
              </div>
            )}

            <form action={formAction} className="mt-8 space-y-6">
              <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                <div>
                  <label htmlFor="fullName" className="block text-xs font-bold uppercase tracking-wider text-heading">
                    Full name <span className="text-amber">*</span>
                  </label>
                  <input
                    type="text"
                    id="fullName"
                    name="fullName"
                    required
                    placeholder="e.g. Faraz Ahmed"
                    className="mt-2 w-full rounded-2xl border border-line bg-paper/40 px-4 py-3 text-sm text-heading placeholder:text-muted/60 focus:border-brand focus:bg-white focus:outline-none"
                  />
                </div>

                <div>
                  <label htmlFor="companyName" className="block text-xs font-bold uppercase tracking-wider text-heading">
                    Company name
                  </label>
                  <input
                    type="text"
                    id="companyName"
                    name="companyName"
                    placeholder="e.g. Acme Corp"
                    className="mt-2 w-full rounded-2xl border border-line bg-paper/40 px-4 py-3 text-sm text-heading placeholder:text-muted/60 focus:border-brand focus:bg-white focus:outline-none"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                <div>
                  <label htmlFor="email" className="block text-xs font-bold uppercase tracking-wider text-heading">
                    Email <span className="text-amber">*</span>
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    placeholder="you@company.com"
                    className="mt-2 w-full rounded-2xl border border-line bg-paper/40 px-4 py-3 text-sm text-heading placeholder:text-muted/60 focus:border-brand focus:bg-white focus:outline-none"
                  />
                </div>

                <div>
                  <label htmlFor="phone" className="block text-xs font-bold uppercase tracking-wider text-heading">
                    Phone <span className="text-amber">*</span>
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    required
                    placeholder="+92 300 1234567"
                    className="mt-2 w-full rounded-2xl border border-line bg-paper/40 px-4 py-3 text-sm text-heading placeholder:text-muted/60 focus:border-brand focus:bg-white focus:outline-none"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                <div>
                  <label htmlFor="projectType" className="block text-xs font-bold uppercase tracking-wider text-heading">
                    Project type <span className="text-amber">*</span>
                  </label>
                  <select
                    id="projectType"
                    name="projectType"
                    required
                    defaultValue=""
                    className="mt-2 w-full rounded-2xl border border-line bg-paper/40 px-4 py-3 text-sm text-heading focus:border-brand focus:bg-white focus:outline-none"
                  >
                    <option value="" disabled>Select an option</option>
                    {contactPage.projectTypes.map((type) => (
                      <option key={type} value={type}>
                        {type}
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <label htmlFor="budgetRange" className="block text-xs font-bold uppercase tracking-wider text-heading">
                    Budget range
                  </label>
                  <select
                    id="budgetRange"
                    name="budgetRange"
                    defaultValue=""
                    className="mt-2 w-full rounded-2xl border border-line bg-paper/40 px-4 py-3 text-sm text-heading focus:border-brand focus:bg-white focus:outline-none"
                  >
                    <option value="" disabled>Select an option</option>
                    {contactPage.budgets.map((b) => (
                      <option key={b} value={b}>
                        {b}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              <div>
                <label htmlFor="message" className="block text-xs font-bold uppercase tracking-wider text-heading">
                  Message <span className="text-amber">*</span>
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  required
                  placeholder={contactPage.messagePlaceholder}
                  className="mt-2 w-full rounded-2xl border border-line bg-paper/40 px-4 py-3 text-sm text-heading placeholder:text-muted/60 focus:border-brand focus:bg-white focus:outline-none"
                />
              </div>

              <button
                type="submit"
                disabled={isPending}
                className="btn-shine inline-flex w-full sm:w-auto items-center justify-center gap-2 rounded-full bg-gradient-to-br from-brand to-brand-deep px-8 py-3.5 text-sm font-semibold text-white shadow-lg shadow-brand/20 transition-all hover:-translate-y-0.5 active:scale-95 disabled:opacity-50"
              >
                <span>{isPending ? "Sending..." : "Send enquiry"}</span>
                <Send className="size-4" />
              </button>
            </form>
          </div>

          {/* Right Direct Contact Info */}
          <div className="lg:col-span-5 rounded-3xl bg-ink text-white p-8 sm:p-10 relative overflow-hidden">
            <div aria-hidden className="bg-grid mask-radial pointer-events-none absolute inset-0 opacity-20" />
            <div className="relative z-10">
              <span className="text-xs font-bold uppercase tracking-widest text-sky">
                Direct Contact
              </span>
              <h2 className="mt-3 font-display text-2xl font-bold text-white">
                Get in touch with engineering
              </h2>

              <div className="mt-8 space-y-6 text-sm">
                <div>
                  <span className="text-xs font-semibold uppercase tracking-wider text-white/50 block">
                    Email
                  </span>
                  <a
                    href={`mailto:${site.email}`}
                    className="mt-1 inline-flex items-center gap-2 text-base font-medium text-white hover:text-sky transition-colors"
                  >
                    <Mail className="size-4 text-sky" />
                    {site.email}
                  </a>
                </div>

                <div>
                  <span className="text-xs font-semibold uppercase tracking-wider text-white/50 block">
                    Location
                  </span>
                  <div className="mt-1 flex items-center gap-2 text-base font-medium text-white">
                    <MapPin className="size-4 text-sky" />
                    {site.location}
                  </div>
                </div>

                <div className="border-t border-white/10 pt-6">
                  <span className="text-xs font-semibold uppercase tracking-wider text-white/50 block">
                    Working hours
                  </span>
                  <div className="mt-2 flex items-center gap-2 text-sm text-white/80">
                    <Clock className="size-4 text-sky" />
                    <span>
                      {site.hours.days}: {site.hours.time}
                    </span>
                  </div>
                </div>

                <div className="rounded-2xl bg-white/10 p-4 border border-white/10">
                  <div className="flex items-center gap-2 text-xs font-semibold text-emerald-400">
                    <span className="size-2 rounded-full bg-emerald-400 animate-pulse" />
                    {site.replyTime}
                  </div>
                  <p className="mt-1 text-xs text-white/70">
                    All business inquiries receive direct analysis from our technical lead.
                  </p>
                </div>

                <div className="pt-2">
                  <a
                    href={site.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-xs font-semibold text-white/80 hover:text-white"
                  >
                    <LinkedInIcon className="size-4" />
                    Connect on LinkedIn
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
