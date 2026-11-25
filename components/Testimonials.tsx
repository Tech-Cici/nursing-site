"use client";

import { useEffect, useState } from "react";
import { testimonials } from "@/data/content";
import Icon from "./Icon";

export default function Testimonials() {
  const [i, setI] = useState(0);
  const [paused, setPaused] = useState(false);
  const n = testimonials.length;

  useEffect(() => {
    if (paused || n < 2) return;
    const id = window.setInterval(() => setI((v) => (v + 1) % n), 8000);
    return () => window.clearInterval(id);
  }, [paused, n]);

  if (!n) return null;
  const t = testimonials[i];

  return (
    <section className="block" onMouseEnter={() => setPaused(true)} onMouseLeave={() => setPaused(false)}>
      <div className="wrap tst-grid">
        <div className="tst-photo">
          <div className="p">
            <img src="/img/portrait-elder.jpg" alt="Smiling older woman in a blue coat" loading="lazy" />
          </div>
          <div className="quote-mark" aria-hidden="true">
            “
          </div>
        </div>
        <div>
          <div className="eyebrow">Family stories</div>
          <div aria-live="polite">
            <blockquote>{t.quote}</blockquote>
            <div className="who">
              {t.image && <img src={t.image} alt="" />}
              <div>
                {t.name}
                <small>{t.context}</small>
              </div>
            </div>
            {t.sample && <span className="sample-note">Sample text — replace with a real, consented review</span>}
          </div>
          {n > 1 && (
            <div className="tst-nav">
              <button type="button" className="round" aria-label="Previous story" onClick={() => setI((i - 1 + n) % n)}>
                <Icon name="arrowLeft" size={18} />
              </button>
              <button type="button" className="round solid" aria-label="Next story" onClick={() => setI((i + 1) % n)}>
                <Icon name="arrow" size={18} />
              </button>
              <div className="dots">
                {testimonials.map((_, k) => (
                  <button
                    type="button"
                    key={k}
                    aria-label={`Show story ${k + 1}`}
                    aria-current={k === i}
                    onClick={() => setI(k)}
                  />
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
