"use client";

export default function FraudRadar() {
  return (
    <div className="relative w-full h-40 rounded-xl border border-red-400/20 overflow-hidden bg-black/40">
      <div className="absolute inset-0 bg-[radial-gradient(circle,rgba(255,0,0,0.25),transparent_70%)] animate-pulse" />
      <div className="absolute inset-0 bg-[conic-gradient(from_0deg,transparent,rgba(255,0,0,0.5),transparent)] animate-[spin_4s_linear_infinite]" />
      <p className="absolute bottom-2 right-3 text-[11px] text-red-300 tracking-widest">
        Fraud Scan Active
      </p>
    </div>
  );
}
