"use client";

import { useState } from "react";

// Every programme the college admits to, as published on sasurieengg.com.
export const PROGRAMME_OPTIONS = [
  "B.E. Computer Science and Engineering",
  "B.E. Computer Science and Engineering (Cyber Security)",
  "B.Tech. Artificial Intelligence and Data Science",
  "B.Tech. Information Technology",
  "B.E. Electronics and Communication Engineering",
  "B.E. Electrical and Electronics Engineering",
  "B.E. Mechanical Engineering",
  "B.E. Civil Engineering",
  "M.E. Computer Science and Engineering",
  "MBA (HR / Finance / Marketing / Business Analytics)",
];

// Where a request goes.
// 1. Set NEXT_PUBLIC_ADMISSION_ENDPOINT to any URL that accepts a JSON POST (a form
//    relay, a CRM webhook, Google Apps Script) and the form posts the details there.
// 2. With no endpoint set, the request is handed to the admissions desk on WhatsApp,
//    using the call-back number published on the college site.
const ENDPOINT = process.env.NEXT_PUBLIC_ADMISSION_ENDPOINT || "";
const WHATSAPP = process.env.NEXT_PUBLIC_ADMISSION_WHATSAPP || "919488891111";

/** The call-back form, shared by both page styles. */
export default function AdmissionForm() {
  // idle | sending | done | handoff
  const [state, setState] = useState("idle");
  const [waHref, setWaHref] = useState(`https://wa.me/${WHATSAPP}`);

  const submit = async (e) => {
    e.preventDefault();
    if (state === "sending") return;

    const data = Object.fromEntries(new FormData(e.currentTarget).entries());
    const href = `https://wa.me/${WHATSAPP}?text=${encodeURIComponent(
      `Admission enquiry\nName: ${data.name}\nMobile: ${data.phone}\nProgramme: ${data.programme}`
    )}`;
    setWaHref(href);
    setState("sending");

    if (ENDPOINT) {
      try {
        const res = await fetch(ENDPOINT, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ ...data, source: "sasurie-landing" }),
        });
        if (res.ok) {
          setState("done");
          return;
        }
      } catch {
        // endpoint unreachable — hand the details to the admissions desk instead
      }
    }

    window.open(href, "_blank", "noopener");
    setState("handoff");
  };

  if (state === "done" || state === "handoff") {
    return (
      <div className="done" role="status">
        <svg viewBox="0 0 80 80" width="80" height="80" aria-hidden="true">
          <circle cx="40" cy="40" r="36" />
          <path d="M24 42L35 53L57 29" />
        </svg>
        <h3>{state === "done" ? "Request received" : "Message ready"}</h3>
        <p>
          {state === "done"
            ? "Thank you. A counsellor will call you back to talk through your options."
            : "WhatsApp has opened with your details. Press send there and the admissions desk will call you back."}
          {state === "handoff" && (
            <>
              {" "}
              <a className="to-top" href={waHref} target="_blank" rel="noreferrer">
                Open WhatsApp again
              </a>
            </>
          )}
        </p>
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
      <p className="fine">
        We use these details only to contact you about admissions. You can also call 94888 91111
        or apply online at admissions.sasurie.com.
      </p>
    </form>
  );
}
