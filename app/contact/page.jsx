import PageShell from "@/components/PageShell";
import FactCards from "@/components/FactCards";
import Tilt from "@/components/Tilt";
import AdmissionForm from "@/components/AdmissionForm";
import { Lines, Words } from "@/components/Reveal";
import { DEPARTMENT_CONTACTS, SITE } from "@/lib/site";

export const metadata = {
  title: "Contact | Sasurie College of Engineering",
  description:
    "Sasurie College of Engineering, Coimbatore Bypass (NH544), Vijayamangalam, Tiruppur district, Tamil Nadu 638056. Call 94888 91111, 94888 92222 or 94888 93333, or write to info@sasurie.com.",
};

const MAPS = "https://www.google.com/maps/search/?api=1&query=" + encodeURIComponent(
  "Sasurie College of Engineering, Coimbatore Bypass NH544, Vijayamangalam, Tiruppur, Tamil Nadu 638056"
);

export default function ContactPage() {
  return (
    <PageShell>
      <section className="section">
        <div className="container">
          <div className="section-head">
            <Lines lines={["Find us on", "the Coimbatore Bypass."]} />
            <Words
              className="lede"
              delay={0.2}
              text="Phone, email, address and the department inboxes — and a call-back form that reaches the admissions desk."
            />
          </div>
        </div>

        <FactCards
          minWidth={300}
          items={[
            {
              tag: "Call",
              title: "Three numbers",
              text: SITE.admissionPhones.join(" · "),
              color: "var(--red)",
              links: SITE.admissionPhones.map((p) => ({
                label: `Call ${p}`,
                href: `tel:+91${p.replace(/\s/g, "")}`,
              })),
            },
            {
              tag: "Email",
              title: "Write to the college",
              text: "General enquiries and the Principal's office.",
              color: "var(--blue)",
              links: SITE.emails.map((e) => ({ label: e, href: `mailto:${e}` })),
            },
            {
              tag: "Visit",
              title: "Campus address",
              text: SITE.addressLines.join(" "),
              color: "var(--green)",
              links: [{ label: "Open in Google Maps ↗", href: MAPS }],
            },
            {
              tag: "Apply & pay",
              title: "Online services",
              text: "Apply for admission, sign in to the student portal, or pay fees online.",
              color: "var(--gold)",
              links: [
                { label: "Apply online ↗", href: SITE.applyUrl },
                { label: "Student login ↗", href: SITE.studentLogin },
                { label: "Fee payment ↗", href: SITE.feePayment },
              ],
            },
          ]}
        />

        <div className="container" style={{ marginTop: "clamp(48px, 7vw, 96px)" }}>
          <div className="adm-panel">
            <div className="adm-copy">
              <Lines lines={["Straight to", "the right desk."]} />
              <p className="lede">
                Each department and office has its own inbox. Writing to the right one gets you a faster answer.
              </p>
            </div>
            <Tilt className="adm-form-wrap" max={5}>
              <AdmissionForm />
            </Tilt>
          </div>
        </div>

        <div className="container" style={{ marginTop: "clamp(48px, 7vw, 96px)" }}>
          <h3 style={{ fontSize: "1.5rem", marginBottom: 24 }}>Department and office contacts</h3>
        </div>
        <FactCards
          minWidth={260}
          items={DEPARTMENT_CONTACTS.map((d, i) => ({
            tag: "Email",
            title: d.name,
            text: d.email,
            color: ["var(--green)", "var(--blue)", "var(--gold)", "var(--red)"][i % 4],
            links: [{ label: `Write to ${d.email}`, href: `mailto:${d.email}` }],
          }))}
        />

        <div className="container" style={{ marginTop: "clamp(40px, 6vw, 72px)" }}>
          <h3 style={{ fontSize: "1.3rem", marginBottom: 8 }}>Follow the college</h3>
          <div className="cta-row">
            {SITE.social.map((s) => (
              <a key={s.label} className="btn btn-ghost" href={s.href} target="_blank" rel="noreferrer">
                {s.label} ↗
              </a>
            ))}
          </div>
        </div>
      </section>
    </PageShell>
  );
}
