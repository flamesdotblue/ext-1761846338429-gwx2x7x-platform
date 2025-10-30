import { motion } from 'framer-motion';

const mock = [
  { id: 't1', game: 'BGMI', name: 'Midnight Mayhem', fee: 20, prize: 5000, mode: 'Solo', tier: 'Silver', slots: [72, 100] },
  { id: 't2', game: 'Free Fire', name: 'Rush Hour Rumble', fee: 10, prize: 2000, mode: 'Duo', tier: 'Bronze', slots: [40, 50] },
  { id: 't3', game: 'Valorant', name: 'Spike Masters', fee: 50, prize: 10000, mode: 'Squad', tier: 'Gold', slots: [12, 16] },
  { id: 't4', game: 'BGMI', name: 'Noon Clash', fee: 30, prize: 6000, mode: 'Solo', tier: 'Silver', slots: [88, 100] },
];

export default function TournamentGrid() {
  return (
    <section className="mb-12">
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-xl font-bold" style={{ fontFamily: 'Orbitron, Rajdhani, Inter, sans-serif' }}>Tournaments</h2>
        <div className="flex items-center gap-2 text-sm">
          <button className="px-3 py-1.5 rounded-lg border border-white/15 bg-white/5 hover:bg-white/10">All</button>
          <button className="px-3 py-1.5 rounded-lg border border-white/15 bg-white/5 hover:bg-white/10">BGMI</button>
          <button className="px-3 py-1.5 rounded-lg border border-white/15 bg-white/5 hover:bg-white/10">Free Fire</button>
          <button className="px-3 py-1.5 rounded-lg border border-white/15 bg-white/5 hover:bg-white/10">Valorant</button>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
        {mock.map((t, i) => (
          <motion.article
            key={t.id}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.05 * i }}
            className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 backdrop-blur-md"
          >
            <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity bg-gradient-to-br from-transparent via-[#667eea]/10 to-[#764ba2]/20" />
            <div className="p-4">
              <div className="flex items-center justify-between">
                <span className="text-xs px-2 py-1 rounded-md bg-white/10 border border-white/10">{t.game}</span>
                <span className="text-xs px-2 py-1 rounded-md bg-gradient-to-r from-[#00f2fe] to-[#4facfe] text-black font-semibold">₹{t.fee} Entry</span>
              </div>
              <h3 className="mt-3 font-bold text-lg">{t.name}</h3>
              <div className="mt-1 text-sm text-white/80">{t.mode} • {t.tier} Tier</div>
              <div className="mt-4 flex items-center gap-3">
                <div className="flex-1 h-2 rounded-full bg-white/10 overflow-hidden">
                  <div className="h-full bg-gradient-to-r from-[#f857a6] to-[#ff5858]" style={{ width: `${(t.slots[0] / t.slots[1]) * 100}%` }} />
                </div>
                <span className="text-xs text-white/70">{t.slots[0]}/{t.slots[1]}</span>
              </div>
              <div className="mt-4 flex items-center justify-between">
                <span className="text-sm text-white/80">Prize Pool <span className="font-semibold">₹{t.prize.toLocaleString()}</span></span>
                <button className="px-3 py-1.5 rounded-lg bg-gradient-to-r from-[#667eea] to-[#764ba2] shadow-[0_0_14px_rgba(102,126,234,0.6)] group-hover:brightness-110 transition text-sm font-semibold">
                  Join
                </button>
              </div>
            </div>
          </motion.article>
        ))}
      </div>
    </section>
  );
}
