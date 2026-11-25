"use client";

import { useA11yPrefs } from "./useA11yPrefs";

export default function A11yTab() {
  const { prefs, toggle } = useA11yPrefs();
  return (
    <div className="a11y" role="group" aria-label="Accessibility options">
      <button type="button" aria-pressed={prefs.large} onClick={() => toggle("large")}>
        <b>A+</b>Text
      </button>
      <button type="button" aria-pressed={prefs.contrast} onClick={() => toggle("contrast")}>
        <svg width="20" height="20" viewBox="0 0 20 20" aria-hidden="true">
          <circle cx="10" cy="10" r="8" fill="none" stroke="currentColor" strokeWidth="1.6" />
          <path d="M10 2a8 8 0 0 1 0 16z" fill="currentColor" />
        </svg>
        Contrast
      </button>
    </div>
  );
}
