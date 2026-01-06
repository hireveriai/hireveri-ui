export default function Home() {
  return (
    <main className="min-h-screen bg-[#0B0F14] text-white">
{/* TOP NAV */}
<header className="fixed top-0 left-0 w-full z-50 backdrop-blur-xl bg-[#0B0F14]/80 border-b border-white/10">
  <div className="max-w-7xl mx-auto px-8 py-4 flex items-center justify-between">

    <div className="flex items-center gap-3">
      <img src="/hireveri-logo.png" className="h-9" />
      <span className="text-xl tracking-wide text-cyan-300">HireVeri</span>
    </div>

    <nav className="hidden md:flex gap-8 text-sm text-gray-300">
      <span className="hover:text-cyan-300 cursor-pointer">About</span>
      <span className="hover:text-cyan-300 cursor-pointer">Features</span>
      <span className="hover:text-cyan-300 cursor-pointer">Pricing</span>
      <span className="hover:text-cyan-300 cursor-pointer">Login</span>
    </nav>

  </div>
</header>


      {/* HERO */}
      <section className="flex flex-col items-center justify-center text-center pt-48 pb-32 px-6">
        <h1 className="text-5xl font-semibold tracking-wide mb-6">
          AI Hiring, Reimagined
        </h1>
        <p className="text-gray-400 max-w-xl mb-10">
          Real-time interview intelligence that sees beyond answers.
        </p>
        <div className="flex gap-6">
          <button className="px-8 py-3 rounded-xl bg-white/10 border border-white/20 hover:bg-white/20 transition">
            Recruiter Sign Up
          </button>
          <button className="px-8 py-3 rounded-xl bg-white/5 border border-white/10 hover:bg-white/10 transition">
            Mock Interview
          </button>
        </div>
      </section>
{/* LIVE INTERVIEW WATCH */}
<section className="w-full max-w-6xl mx-auto mt-32 px-6">
  <div className="relative rounded-3xl bg-[#0F141B]/90 backdrop-blur-xl border border-cyan-400/20 shadow-[0_0_80px_rgba(0,255,255,0.12)] p-10">

    <h3 className="text-center text-2xl font-semibold text-cyan-300 tracking-wide mb-2">
      LIVE INTERVIEW WATCH (DEMO)
    </h3>
    <p className="text-center text-gray-400 mb-10">
      Watch AI judge interviews in real-time
    </p>

    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">

      {/* Video */}
      <div className="rounded-xl overflow-hidden relative bg-black/40 h-56">
        <div className="absolute inset-0 bg-[url('/demo-face.jpg')] bg-cover blur-md opacity-50"></div>
        <div className="absolute bottom-3 left-3 text-xs text-cyan-300">Candidate Feed</div>
      </div>

      {/* Transcript */}
      <div className="bg-black/40 rounded-xl p-4 text-sm text-gray-200 overflow-hidden">
        <div className="animate-pulse space-y-2">
          <p>AI: Explain how indexing improves performance...</p>
          <p>Candidate: Indexes reduce IO by...</p>
          <p className="opacity-50">Candidate: They also improve seek operations...</p>
        </div>
      </div>

      {/* Brain Signals */}
      <div className="grid grid-cols-2 gap-4 text-xs">
        {["Confidence", "Stress", "Clarity", "Fraud"].map((s) => (
          <div key={s} className="bg-black/50 rounded-xl p-3 border border-cyan-400/20 shadow-[0_0_30px_rgba(0,255,255,0.08)]">
            <p className="text-cyan-300 mb-2">{s}</p>
            <div className="h-2 rounded bg-gradient-to-r from-cyan-400 via-cyan-200 to-cyan-400 animate-pulse"></div>
          </div>
        ))}
      </div>
    </div>
  </div>
</section>
{/* AI BRAIN ENGINE STRIP */}
<section className="max-w-7xl mx-auto px-8 py-10 grid md:grid-cols-3 gap-10">

  {[
    {
      title: "Brain Signals",
      items: ["Confidence","Stress","Fraud Detection","Clarity"]
    },
    {
      title: "Transcript Intelligence",
      items: ["Live Analysis","Context Aware","Emotion Insights"]
    },
    {
      title: "Hiring Verdict",
      items: ["AI Recommendation","Bias Reduction","Risk Scoring"]
    }
  ].map((b)=>(
    <div key={b.title} className="rounded-3xl bg-[#10151D] border border-cyan-500/20 shadow-[0_0_40px_rgba(0,255,255,0.1)] p-8 hover:shadow-[0_0_60px_rgba(0,255,255,0.18)] transition">
      <h3 className="text-xl text-cyan-300 mb-4">{b.title}</h3>
      <ul className="space-y-2 text-gray-300 text-sm">
        {b.items.map(i=><li key={i}>• {i}</li>)}
      </ul>
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
