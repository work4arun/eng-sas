import Reveal, { Lines } from "./Reveal";
import Tilt from "./Tilt";
import Drift from "./Drift";
import AdmissionForm from "./AdmissionForm";

const STEPS = [
  { title: "Share your details", text: "Tell us your name, number and the programme you are considering — or apply straight away at admissions.sasurie.com." },
  { title: "Talk to a counsellor", text: "We call you back from 94888 91111 or 94888 92222, explain the programmes and talk through fees and the Sasurie Talent Examination scholarship." },
  { title: "Confirm your seat", text: "UG seats are filled through Anna University TNEA counselling on Class-12 merit, PG through TANCET or the consortium common entrance test, and management-quota seats through the college office." },
];

export default function Admissions() {
  return (
    <section className="admissions section" id="admissions">
      <div className="container">
        <Reveal className="adm-panel" variant="scale">
          <Drift rise="760px" count={8} />
          <div className="adm-copy">
            <Lines lines={["Your seat starts", "with a conversation."]} />
            <p className="lede">Admissions are open. It takes three steps.</p>
            <ol className="steps">
              {STEPS.map((s, i) => (
                <Reveal as="li" key={s.title} delay={0.15 + i * 0.12}>
                  <span className="step-n" aria-hidden="true">{i + 1}</span>
                  <div>
                    <h3>{s.title}</h3>
                    <p>{s.text}</p>
                  </div>
                </Reveal>
              ))}
            </ol>
          </div>

          <Tilt className="adm-form-wrap" max={5}>
            <AdmissionForm />
          </Tilt>
        </Reveal>
      </div>
    </section>
  );
}
