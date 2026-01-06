"use client";

import { useEffect, useState } from "react";

const script = [
  "AI: Explain how indexing improves SQL performance.",
  "Candidate: Indexes reduce I/O by narrowing scans.",
  "AI: Why are clustered indexes faster?",
  "Candidate: Because data is physically ordered.",
  "AI: What happens if an index becomes fragmented?",
  "Candidate: Performance degradation occurs.",
  "AI: Confidence detected. Technical depth verified."
];

export default function DemoTranscript() {
  const [lines, setLines] = useState<string[]>([]);

  useEffect(() => {
    let i = 0;
    const timer = setInterval(() => {
      setLines(prev => [...prev, script[i]]);
      i++;
      if (i >= script.length) clearInterval(timer);
    }, 1600);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="bg-black/40 border border-cyan-400/20 rounded-xl p-5 text-sm font-mono text-cyan-200 space-y-2">
      {lines.map((l, i) => (
        <div key={i} className="animate-fadeIn">{l}</div>
      ))}
    </div>
  );
}
