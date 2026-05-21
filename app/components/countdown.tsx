"use client";

import { useEffect, useState } from "react";

function getTimeUntilMidnight(): { h: number; m: number; s: number } {
  const now = new Date();
  const midnight = new Date();
  midnight.setHours(24, 0, 0, 0);
  const diff = Math.max(0, Math.floor((midnight.getTime() - now.getTime()) / 1000));
  return {
    h: Math.floor(diff / 3600),
    m: Math.floor((diff % 3600) / 60),
    s: diff % 60,
  };
}

function pad(n: number) {
  return String(n).padStart(2, "0");
}

export default function Countdown() {
  const [time, setTime] = useState<{ h: number; m: number; s: number } | null>(null);

  useEffect(() => {
    setTime(getTimeUntilMidnight());
    const id = setInterval(() => setTime(getTimeUntilMidnight()), 1000);
    return () => clearInterval(id);
  }, []);

  if (!time) return null;

  return (
    <div className="countdown-wrap">
      <p className="countdown-label">NYA SPEL VARJE DAG!</p>
      <div className="countdown-clock">
        <div className="countdown-unit">
          <span className="countdown-num">{pad(time.h)}</span>
          <span className="countdown-unit-label">tim</span>
        </div>
        <span className="countdown-sep">:</span>
        <div className="countdown-unit">
          <span className="countdown-num">{pad(time.m)}</span>
          <span className="countdown-unit-label">min</span>
        </div>
        <span className="countdown-sep">:</span>
        <div className="countdown-unit">
          <span className="countdown-num">{pad(time.s)}</span>
          <span className="countdown-unit-label">sek</span>
        </div>
      </div>
    </div>
  );
}