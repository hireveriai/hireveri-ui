"use client";
import { useEffect, useState } from "react";

const script = [
  { role: "AI", text: "Explain how indexing improves database performance." },
  { role: "Candidate", text: "Indexes reduce full table scans and improve seek speed." },
  { role: "AI", text: "Which index type is best for OLTP workloads?" },
  { role: "Candidate", text: "Clustered indexes are best for transactional workloads." },
  { role: "AI", text: "Fragmentation detected. How would you fix it?" },
  { role: "Candidate", text: "Using index rebuild and reorganize strategies." },
  { role: "AI", text: "High confidence detected. Skill depth verified." }
];

export default function AIDemoStream() {
const [lines, setLines] = useState<{ role: string; text: string }[]>([]);

  useEffect(() => {
  let i = 0;
  const timer = setInterval(() => {
    setLines(prev => [...prev.slice(-6), script[i]]);
    i = (i + 1) % script.length;
  }, 1400);
  return () => clearInterval(timer);
}, []);


  return (
    <div className="bg-black/50 border border-cyan-400/20 rounded-xl p-4 text-xs font-mono text-cyan-200 space-y-2">
      {lines.map((l, i) => (
        <div key={i}>
          <span className="text-cyan-400">{l.role}:</span> {l.text}
        </div>
      ))}
    </div>
  );
}
