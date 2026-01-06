"use client";
import { useEffect, useState } from "react";

export default function BrainMeter({ label }: { label: string }) {
  const [value, setValue] = useState(60);

  useEffect(() => {
    const t = setInterval(() => {
      setValue(v => Math.max(30, Math.min(95, v + (Math.random() * 20 - 10))));
    }, 1200);
    return () => clearInterval(t);
  }, []);

  return (
    <div className="bg-black/40 rounded-xl p-3 border border-cyan-400/10">
      <p className="text-xs text-cyan-300 mb-2">{label}</p>
      <div className="h-2 bg-cyan-400/20 rounded overflow-hidden">
        <div
          className="h-full bg-cyan-400 transition-all duration-700"
          style={{ width: `${value}%` }}
        />
      </div>
    </div>
  );
}
