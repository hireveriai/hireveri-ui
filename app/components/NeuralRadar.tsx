"use client";

export default function NeuralRadar() {
  return (
    <div className="relative w-full h-40 rounded-xl bg-black/50 border border-cyan-400/20 overflow-hidden">
      {/* Radar glow */}
      <div className="absolute inset-0 bg-[radial-gradient(circle,rgba(0,255,255,0.25),transparent_60%)] animate-pulse" />

      {/* Sweep line */}
      <div className="absolute inset-0 bg-[linear-gradient(90deg,transparent,rgba(0,255,255,0.4),transparent)] animate-[scan_4s_linear_infinite]" />

      <p className="absolute bottom-2 right-3 text-[11px] text-cyan-300 opacity-70">
        Neural Radar Active
      </p>
    </div>
  );
}
