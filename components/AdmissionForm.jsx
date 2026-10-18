"use client";

import { useState } from "react";

export const PROGRAMME_OPTIONS = [
  "Computer Science and Engineering",
  "Artificial Intelligence and Data Science",
  "Information Technology",
  "Electronics and Communication Engineering",
  "Electrical and Electronics Engineering",
  "Mechanical Engineering",
  "Civil Engineering",
];

/** The call-back form, shared by both page styles. */
export default function AdmissionForm() {
  const [state, setState] = useState("idle"); // idle | sending | done

  const submit = (e) => {
    e.preventDefault();
    setState("sending");
    // Wire this to your admissions inbox, CRM or WhatsApp number.
    setTimeout(() => setState("done"), 1100);
  };

  if (state === "done") {
    return (
      <div className="done" role="status">
        <svg viewBox="0 0 80 80" width="80" height="80" aria-hidden="true">
          <circle cx="40" cy="40" r="36" />
          <path d="M24 42L35 53L57 29" />
        </svg>
        <h3>Request received</h3>
        <p>Thank you. A counsellor will call you back to talk through your options.</p>
        <button className="btn btn-ghost" onClick={() => setState("idle")}>Send another request</button>
      </div>
    );
  }

  return (
    <form className="form" onSubmit={submit}>
      <h3>Request a call back</h3>
      <label className="field">
        <span>Student name</span>
        <input name="name" type="text" autoComplete="name" required placeholder="Full name" />
      </label>
      <label className="field">
        <span>Mobile number</span>
        <input name="phone" type="tel" inputMode="tel" autoComplete="tel" required pattern="[0-9+\s\-]{10,15}" placeholder="10-digit number" />
      </label>
      <label className="field">
        <span>Programme</span>
        <select name="programme" defaultValue="" required>
          <option value="" disabled>Choose a programme</option>
          {PROGRAMME_OPTIONS.map((o) => (
            <option key={o}>{o}</option>
          ))}
        </select>
      </label>
      <button className={`btn btn-primary btn-block${state === "sending" ? " is-sending" : ""}`} type="submit" disabled={state === "sending"}>
        <span className="btn-label">{state === "sending" ? "Sending" : "Request call back"}</span>
        <i className="spinner" aria-hidden="true" />
      </button>
      <p className="fine">We use these details only to contact you about admissions.</p>
    </form>
  );
}
