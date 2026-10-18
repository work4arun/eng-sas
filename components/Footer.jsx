import Image from "next/image";
import Reveal from "./Reveal";

const WORDS = ["Create", "your", "future."];

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer-grid">
        <Reveal className="footer-brand">
          <Image src="/brand/group-clear.png" alt="Sasurie Group of Institutions" width={1100} height={241} />
          <p>Sasurie College of Engineering (Autonomous)<br />Vijayamangalam, Tiruppur, Tamil Nadu</p>
        </Reveal>
        <Reveal className="footer-links" delay={0.1}>
          <h3>Explore</h3>
          <a href="#layers">The four layers</a>
          <a href="#programmes">Programmes</a>
          <a href="#admissions">Admissions</a>
          <a href="#group">Sasurie group</a>
        </Reveal>
        <Reveal className="footer-links" delay={0.2}>
          <h3>Campuses</h3>
          <span>Vijayamangalam</span>
          <span>Tiruppur</span>
          <span>Coimbatore</span>
        </Reveal>
      </div>

      <Reveal as="div" variant="letters" className="watermark" aria-hidden="true">
        {WORDS.map((w, wi) => (
          <span className="word" key={w}>
            {[...w].map((ch, ci) => (
              <span className="letter" key={ci} style={{ "--i": wi * 6 + ci }}>
                {ch}
              </span>
            ))}
          </span>
        ))}
      </Reveal>

      <div className="container footer-base">
        <p>&copy; 2026 Sasurie Group of Institutions. All rights reserved.</p>
        <a href="#top" className="to-top">Back to top</a>
      </div>
    </footer>
  );
}
