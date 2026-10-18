import Reveal, { Lines } from "./Reveal";
import Tilt from "./Tilt";
import Drift from "./Drift";
import AdmissionForm from "./AdmissionForm";

const STEPS = [
  { title: "Share your details", text: "Tell us your name, number and the programme you are considering." },
  { title: "Talk to a counsellor", text: "We call you back, explain the programmes and answer your family's questions." },
  { title: "Confirm your seat", text: "Join through TNEA counselling or the management quota." },
];

export default function Admissions() {
  return (
    <section className="admissions section" id="admissions">
      <div className="container">
        <Reveal className="adm-panel" variant="scale">
          <Drift rise="760px" count={8} />
          <div className="adm-copy">
            <Lines lines={["Your seat starts", "with a conversation."]} />
            <p className="lede">Admissions for 2027 to 28 are open. It takes three steps.</p>
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
