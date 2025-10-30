import Spline from '@splinetool/react-spline';
import { motion } from 'framer-motion';

function Countdown({ target }) {
  const [time, setTime] = useState(calc());
  function calc() {
    const diff = Math.max(0, new Date(target).getTime() - Date.now());
    const h = Math.floor(diff / 36e5);
    const m = Math.floor((diff % 36e5) / 6e4);
    const s = Math.floor((diff % 6e4) / 1000);
    return { h, m, s };
  }
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const { useEffect, useState } = require('react');
  // Fix order: define after require
  // eslint-disable-next-line react-hooks/exhaustive-deps
  useEffect(() => {
    const t = setInterval(() => setTime(calc()), 1000);
    return () => clearInterval(t);
  }, []);
  return (
    <div className="flex gap-2 text-sm font-semibold">
      <span className="px-2 py-1 rounded-md bg-white/10 border border-white/10">{String(time.h).padStart(2, '0')}h</span>
      <span className="px-2 py-1 rounded-md bg-white/10 border border-white/10">{String(time.m).padStart(2, '0')}m</span>
      <span className="px-2 py-1 rounded-md bg-white/10 border border-white/10">{String(time.s).padStart(2, '0')}s</span>
    </div>
  );
}

export default function HeroSection() {
  const startIn = new Date(Date.now() + 1000 * 60 * 15).toISOString();

  return (
    <section className="relative h-[60vh] min-h-[420px] w-full overflow-hidden">
      <div className="absolute inset-0">
        <Spline style={{ width: '100%', height: '100%' }} scene="https://prod.spline.design/7m4PRZ7kg6K1jPfF/scene.splinecode" />
      </div>

      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-[#0b0f1a]/30 via-[#0b0f1a]/60 to-[#0b0f1a]" />

      <div className="relative z-10 h-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-end pb-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="w-full"
        >
          <div className="grid md:grid-cols-2 gap-4">
            <div className="backdrop-blur-md bg-white/5 border border-white/10 rounded-2xl p-5 shadow-[0_0_40px_rgba(0,242,254,0.15)]">
              <div className="text-xs uppercase tracking-widest text-white/70">Live Now</div>
              <h1 className="mt-1 text-2xl sm:text-3xl font-extrabold leading-tight" style={{ fontFamily: 'Orbitron, Rajdhani, Inter, sans-serif' }}>
                Play Now: BGMI Night Grind Cup
              </h1>
              <p className="mt-2 text-white/80 text-sm">
                Solo • Entry ₹20 • Prize Pool ₹5,000 • 100 Slots
              </p>
              <div className="mt-4 flex flex-wrap items-center gap-3">
                <Countdown target={startIn} />
                <div className="flex-1 h-2 rounded-full bg-white/10 overflow-hidden">
                  <div className="h-full w-2/3 bg-gradient-to-r from-[#00f2fe] to-[#4facfe]" />
                </div>
                <span className="text-xs text-white/70">66/100</span>
              </div>
              <div className="mt-5 flex items-center gap-3">
                <button className="px-4 py-2 rounded-xl bg-gradient-to-r from-[#667eea] to-[#764ba2] shadow-[0_0_18px_rgba(102,126,234,0.6)] hover:brightness-110 transition font-semibold">
                  Join Now
                </button>
                <button className="px-4 py-2 rounded-xl border border-white/15 bg-white/5 hover:bg-white/10 transition font-semibold">
                  View Details
                </button>
              </div>
            </div>
            <div className="hidden md:block" />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
