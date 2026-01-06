"use client";

export default function VerdictStamp({ verdict }: { verdict: "HIRE" | "NO-HIRE" }) {
  return (
    <div
      className={`absolute top-4 right-4 px-4 py-2 rounded-md text-sm tracking-widest font-bold ${
        verdict === "HIRE"
          ? "bg-emerald-500/20 text-emerald-300 border border-emerald-400/40"
          : "bg-red-500/20 text-red-300 border border-red-400/40"
      } animate-pulse`}
    >
      {verdict}
    </div>
  );
}
