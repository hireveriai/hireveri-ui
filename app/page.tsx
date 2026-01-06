import Divider from "./components/Divider";
import DemoTranscript from "./components/DemoTranscript";
import AIDemoStream from "./components/AIDemoStream";
import NeuralRadar from "./components/NeuralRadar";
import BrainMeter from "./components/BrainMeter";
import FraudRadar from "./components/FraudRadar";
import VerdictStamp from "./components/VerdictStamp";


const StatusLine = ({ label }: { label: string }) => (
  <div className="relative">
    <div className="flex justify-between mb-1">
      <span>{label}</span>
      <span className="text-cyan-400 animate-pulse">ACTIVE</span>
    </div>
    <div className="h-[6px] rounded-full bg-cyan-400/10 overflow-hidden">
      <div className="h-full bg-cyan-400 animate-pulse w-[70%]" />
    </div>
  </div>
);




export default function Home() {
  return (
    <main className="min-h-screen bg-[#0B0F14] text-white">
{/* TOP NAV */}
<header className="fixed top-0 left-0 w-full z-50 backdrop-blur-xl bg-[#0B0F14]/80 border-b border-white/10">
  <div className="max-w-7xl mx-auto px-8 py-4 flex items-center justify-between">

    <div className="flex items-center gap-3">
  <img
  src="/hireveri-hex-dark.png"
  className="h-20 drop-shadow-[0_0_14px_rgba(120,255,255,0.18)]"
/>

</div>

    <nav className="hidden md:flex gap-8 text-sm text-gray-300">
      <span className="hover:text-cyan-300 cursor-pointer">About</span>
      <span className="hover:text-cyan-300 cursor-pointer">Features</span>
      <span className="hover:text-cyan-300 cursor-pointer">Pricing</span>
      <span className="hover:text-cyan-300 cursor-pointer">Login</span>
    </nav>

  </div>
</header>

<Divider />n
      {/* HERO */}
      
      <section className="relative min-h-[70vh] flex flex-col items-center justify-center text-center pt-40 pb-28 px-6 overflow-hidden">
       {/* Ambient AI Grid */}
      <div className="absolute inset-0 pointer-events-none">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(0,255,255,0.10),transparent_55%)]" />
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.025)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.025)_1px,transparent_1px)] bg-[size:70px_70px]" />
      </div>
        <h1 className="text-5xl font-semibold tracking-wide mb-6">
          AI Hiring, Reimagined
        </h1>
        <div className="relative mb-10 max-w-xl mx-auto">
  <p className="text-gray-400 text-center">
    Real-time interview intelligence that sees beyond answers.
  </p>

  {/* Floating Data Pulses */}
  <div className="absolute inset-0 pointer-events-none">
    {[...Array(18)].map((_, i) => (
      <span
        key={i}
        className="absolute w-1 h-1 bg-cyan-300/30 rounded-full animate-pulse"
        style={{
          top: `${(i * 13) % 100}%`,
          left: `${(i * 23) % 100}%`,
          animationDelay: `${i * 0.8}s`,
          animationDuration: "10s"
        }}
      />
    ))}
  </div>
</div>

        <div className="flex gap-6">
          <button className="px-8 py-3 rounded-xl bg-white/10 border border-white/20 hover:bg-white/20 transition">
            Recruiter Sign Up
          </button>
          <button className="px-8 py-3 rounded-xl bg-white/5 border border-white/10 hover:bg-white/10 transition">
            Mock Interview
          </button>
        </div>

        <Divider />
      </section>
      
{/* LIVE INTERVIEW WATCH */}
<section className="w-full max-w-6xl mx-auto mt-32 px-6">
  
  
  {/* Ambient AI Grid */}
<div className="absolute inset-0 pointer-events-none">
  <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(0,255,255,0.10),transparent_55%)]" />
  <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.025)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.025)_1px,transparent_1px)] bg-[size:70px_70px]" />
</div>

  <div className="relative rounded-3xl bg-[#0F141B]/90 backdrop-blur-xl border border-cyan-400/20 shadow-[0_0_80px_rgba(0,255,255,0.12)] p-10">

    <h3 className="text-center text-2xl font-semibold text-cyan-300 tracking-wide mb-2">
      LIVE INTERVIEW WATCH (DEMO)
    </h3>
    <p className="text-center text-gray-400 mb-10">
      
      
      Watch AI judge interviews in real-time
    </p>

    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
      {/* Floating Data Pulses */}
<div className="absolute inset-0 pointer-events-none">
  {[...Array(18)].map((_, i) => (
    <span
      key={i}
      className="absolute w-1 h-1 bg-cyan-300/30 rounded-full animate-pulse"
      style={{
        top: `${(i * 17) % 100}%`,
        left: `${(i * 29) % 100}%`,
        animationDelay: `${i * 1.3}s`,
        animationDuration: "9s"
      }}
    />
  ))}
</div>


<div className="relative rounded-2xl overflow-hidden border border-cyan-400/20 shadow-[0_0_50px_rgba(0,255,255,0.15)]">
  <video
    src="/demo-interview.mp4"
    autoPlay
    muted
    loop
    playsInline
    className="w-full h-56 object-cover"
  />

  {/* AI HUD Overlay */}
  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent p-3">
    <p className="text-cyan-300 text-xs tracking-widest uppercase">Live Candidate Feed</p>
    <div className="mt-2 h-[2px] bg-cyan-400/30 overflow-hidden">
      <div className="h-full w-1/2 bg-cyan-400 animate-pulse"></div>
    </div>
  </div>
</div>

      <AIDemoStream />

   {/* Neural Brain Engine */}
{/* AI VERDICT ENGINE */}
<div className="bg-black/50 rounded-2xl p-6 border border-cyan-400/25 shadow-[0_0_60px_rgba(0,255,255,0.18)] relative">

  {/* Verdict */}
  <VerdictStamp verdict="HIRE" />

  {/* Fraud Radar */}
  <FraudRadar />

  {/* Neural Radar */}
  <NeuralRadar />

  {/* Brain Meters */}
  <div className="grid grid-cols-2 gap-4 mt-4">
    <BrainMeter label="Confidence" />
    <BrainMeter label="Stress" />
    <BrainMeter label="Clarity" />
    <BrainMeter label="Authenticity" />
  </div>
</div>


    </div>
  </div>
  <Divider />
</section>
{/* AI BRAIN ENGINE STRIP */}
<section className="max-w-7xl mx-auto px-8 py-10 grid md:grid-cols-3 gap-10">

  {[
    {
      title: "Brain Signals",
      items: [
      "Confidence Index",
      "Stress Patterning",
      "Clarity Coefficient",
      "Authenticity Signal",
      "Cognitive Stability"]
    },
    {
      title: "Transcript Intelligence",
      items: [
      "Live Semantic Parsing",
      "Depth Scoring",
      "Context Memory",
      "Contradiction Detection",
      "Intent Classification"]
    },
    {
      title: "Hiring Verdict",
      items: [
      "AI Recommendation",
      "Bias Neutralization",
      "Risk Probability",
      "Skill Fit Score",
      "Explainable Rationale"
    ]
    }
  ].map((b)=>(
    <div key={b.title} className="rounded-3xl bg-[#10151D] border border-cyan-500/20 shadow-[0_0_40px_rgba(0,255,255,0.1)] p-8 hover:shadow-[0_0_60px_rgba(0,255,255,0.18)] transition">
      <h3 className="text-xl text-cyan-300 mb-4">{b.title}</h3>
      <ul className="space-y-2 text-gray-300 text-sm">
        {b.items.map(i=><li key={i}>• {i}</li>)}
      </ul>

      <Divider />
    </div>

    
  ))}

</section>
{/* HOW HIREVERI WORKS – PREMIUM PIPELINE */}
<section className="max-w-7xl mx-auto px-8 py-10 text-center">
  <h2 className="text-4xl mb-24 tracking-wide text-cyan-300">How HireVeri Works</h2>

  <div className="flex flex-wrap justify-center items-center gap-16">

    {[
  { title: "Create Interview", img: "/new-interview.png" },
  { title: "Invite Candidate", icon: "👤+" },
  { title: "AI Monitors Live", icon: "🧠" },
  { title: "Get Hiring Verdict", icon: "✔" }
].map((s, i, arr) => (
      <div key={s.title} className="flex items-center gap-16">

        {/* STEP ORB */}
        <div className="flex flex-col items-center gap-6">
          <div className="w-28 h-28 rounded-full bg-[#0F141B] border border-cyan-400/40 
            shadow-[0_0_70px_rgba(0,255,255,0.18)] 
            flex items-center justify-center text-4xl 
            hover:shadow-[0_0_100px_rgba(0,255,255,0.3)] transition">
            {s.img ? (
              <img src={s.img} className="w-14 h-14" />
            ) : (
              s.icon
            )}

          </div>
          <span className="text-gray-200 text-sm tracking-wide">{s.title}</span>
        </div>

        {/* ARROW (except last) */}
        {i < arr.length - 1 && (
          <div className="text-cyan-400 text-4xl animate-pulse">➜</div>
        )}
        <Divider />
      </div>
    ))}
  </div>
  <section className="text-center text-gray-400 py-12 border-t border-white/10">
  Enterprise-Ready • Audit-Safe • GDPR • SOC-2 • Bias-Reduced AI
</section>
</section>
<section className="max-w-7xl mx-auto px-8 py-15 grid md:grid-cols-2 gap-12">
  <div className="rounded-3xl bg-[#11161E] p-10 border border-white/10 hover:border-cyan-400/40 transition">
  <h3 className="text-2xl mb-4 text-cyan-300">Recruiter Command Center</h3>
  <ul className="text-gray-400 space-y-3 text-sm">
    <li>• Live confidence, stress & fraud signals</li>
    <li>• Real-time transcript intelligence</li>
    <li>• AI hiring verdict & risk scoring</li>
    <li>• Full interview playback & audit logs</li>
  </ul>
</div>
  <div className="rounded-3xl bg-[#11161E] p-10 border border-white/10 hover:border-cyan-400/40 transition">
  <h3 className="text-2xl mb-4 text-cyan-300">Candidate Calm Interview Room</h3>
  <ul className="text-gray-400 space-y-3 text-sm">
    <li>• Stress-free guided AI interview</li>
    <li>• Voice + text answer support</li>
    <li>• Adaptive follow-up questions</li>
    <li>• Instant performance feedback</li>
  </ul>
</div>

  
</section>

<footer className="text-center text-gray-500 py-12 border-t border-white/10">
  © 2026 HireVeri AI Intelligence Platform
</footer>

    </main>
  )
}
