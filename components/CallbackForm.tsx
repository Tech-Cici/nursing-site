"use client";

import { useState } from "react";
import { services } from "@/data/services";
import { site } from "@/data/site";

const ENDPOINT = "https://api.web3forms.com/submit";

type Props = {
  variant?: "callback" | "enquiry" | "job";
  defaultService?: string;
  bordered?: boolean;
};

export default function CallbackForm({ variant = "callback", defaultService, bordered }: Props) {
  const [status, setStatus] = useState<"idle" | "sending" | "ok" | "err">("idle");
  const [error, setError] = useState("");
  const key = process.env.NEXT_PUBLIC_WEB3FORMS_KEY;

  const titles = {
    callback: "Request a call back",
    enquiry: "Send us an enquiry",
    job: "Apply to join our team",
  };

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    if (!key) {
      setStatus("err");
      setError(`Online enquiries aren't available just now — please call us on ${site.phone}.`);
      return;
    }
    setStatus("sending");
    const data = new FormData(form);
    data.append("access_key", key);
    data.append("subject", `Website: ${titles[variant]}`);
    data.append("from_name", site.name);
    try {
      const res = await fetch(ENDPOINT, { method: "POST", body: data });
      const json = await res.json();
      if (!res.ok || !json.success) throw new Error(json.message || "Request failed");
      setStatus("ok");
      form.reset();
    } catch {
      setStatus("err");
      setError(`Sorry, something went wrong. Please try again or call us on ${site.phone}.`);
    }
  }

  return (
    <form className={`form-card${bordered ? " bordered" : ""}`} onSubmit={onSubmit} noValidate={false}>
      <h3>{titles[variant]}</h3>
      <input type="checkbox" name="botcheck" className="hp" tabIndex={-1} autoComplete="off" aria-hidden="true" />
      <div className={variant === "callback" ? "" : "two-col"}>
        <div className="field">
          <label htmlFor={`${variant}-name`}>Your name</label>
          <input id={`${variant}-name`} name="name" autoComplete="name" required />
        </div>
        <div className="field">
          <label htmlFor={`${variant}-phone`}>Phone number</label>
          <input id={`${variant}-phone`} name="phone" type="tel" autoComplete="tel" required />
        </div>
      </div>
      {variant !== "callback" && (
        <div className="field">
          <label htmlFor={`${variant}-email`}>Email</label>
          <input id={`${variant}-email`} name="email" type="email" autoComplete="email" required />
        </div>
      )}
      {variant !== "job" && (
        <div className="field">
          <label htmlFor={`${variant}-service`}>Type of care</label>
          <select id={`${variant}-service`} name="care_type" defaultValue={defaultService ?? ""}>
            <option value="">Not sure yet</option>
            {services.map((s) => (
              <option key={s.slug} value={s.title}>
                {s.title}
              </option>
            ))}
          </select>
        </div>
      )}
      {variant === "callback" && (
        <div className="field">
          <label htmlFor="callback-time">Best time to call</label>
          <select id="callback-time" name="best_time" defaultValue="Any time">
            <option>Any time</option>
            <option>Morning</option>
            <option>Afternoon</option>
            <option>Early evening</option>
          </select>
        </div>
      )}
      {variant === "job" && (
        <div className="field">
          <label htmlFor="job-experience">Care experience</label>
          <select id="job-experience" name="experience" defaultValue="">
            <option value="">Please choose</option>
            <option>No experience — keen to learn</option>
            <option>Less than 1 year</option>
            <option>1–3 years</option>
            <option>3+ years</option>
          </select>
        </div>
      )}
      {variant !== "callback" && (
        <div className="field">
          <label htmlFor={`${variant}-message`}>{variant === "job" ? "Tell us a little about you" : "How can we help?"}</label>
          <textarea id={`${variant}-message`} name="message" />
        </div>
      )}
      <button className="btn btn-primary" type="submit" disabled={status === "sending"}>
        {status === "sending" ? "Sending…" : variant === "callback" ? "Call me back" : "Send"}
      </button>
      {status === "ok" && (
        <p className="form-msg ok" role="status">
          Thank you — we&apos;ve received your message and will be in touch soon.
        </p>
      )}
      {status === "err" && (
        <p className="form-msg err" role="alert">
          {error}
        </p>
      )}
      <small className="form-note">We&apos;ll only use your details to respond to your enquiry.</small>
    </form>
  );
}
