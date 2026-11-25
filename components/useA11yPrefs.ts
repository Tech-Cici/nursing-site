"use client";

import { useCallback, useEffect, useState } from "react";

type Prefs = { large: boolean; contrast: boolean };
const KEY = "by-a11y";
const EVENT = "by-a11y-change";

function read(): Prefs {
  try {
    const raw = window.localStorage.getItem(KEY);
    if (raw) return { large: false, contrast: false, ...JSON.parse(raw) };
  } catch {}
  return { large: false, contrast: false };
}

function apply(p: Prefs) {
  const el = document.documentElement;
  if (p.large) el.dataset.text = "large";
  else delete el.dataset.text;
  if (p.contrast) el.dataset.contrast = "high";
  else delete el.dataset.contrast;
}

export function useA11yPrefs() {
  const [prefs, setPrefs] = useState<Prefs>({ large: false, contrast: false });

  useEffect(() => {
    const p = read();
    setPrefs(p);
    apply(p);
    const sync = () => setPrefs(read());
    window.addEventListener(EVENT, sync);
    return () => window.removeEventListener(EVENT, sync);
  }, []);

  const toggle = useCallback(
    (key: keyof Prefs) => {
      const next = { ...prefs, [key]: !prefs[key] };
      try {
        window.localStorage.setItem(KEY, JSON.stringify(next));
      } catch {}
      apply(next);
      setPrefs(next);
      window.dispatchEvent(new Event(EVENT));
    },
    [prefs],
  );

  return { prefs, toggle };
}
