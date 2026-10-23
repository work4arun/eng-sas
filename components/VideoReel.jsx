"use client";

import { useState } from "react";
import Image from "next/image";
import { VIDEO } from "@/lib/life";

/**
 * The college's YouTube uploads, loaded only when asked for. Until the play button is pressed the page
 * loads no YouTube code and sets no cookies; the player uses the privacy-enhanced youtube-nocookie domain.
 */
export default function VideoReel() {
  const [on, setOn] = useState(false);
  return (
    <div className="vr">
      {on ? (
        <iframe
          src={VIDEO.embed}
          title="Videos from the Sasurie Institutions YouTube channel"
          allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture; fullscreen"
          allowFullScreen
          referrerPolicy="strict-origin-when-cross-origin"
        />
      ) : (
        <button type="button" className="vr-poster" onClick={() => setOn(true)} aria-label="Play videos from the Sasurie Institutions channel">
          <Image src={VIDEO.poster} alt="" fill sizes="(max-width: 900px) 100vw, 70vw" />
          <span className="vr-play" aria-hidden="true">
            <svg viewBox="0 0 24 24"><path d="M8 5.5v13l11-6.5z" /></svg>
          </span>
          <span className="vr-label">Play the latest videos from campus</span>
        </button>
      )}
    </div>
  );
}
