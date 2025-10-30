import { motion } from 'framer-motion';
import { Trophy, Wallet, TrendingUp } from 'lucide-react';

const stats = [
  { id: 'earn', label: 'Earnings', value: '₹1,250', icon: Wallet, gradient: 'from-[#00ff88] to-[#4facfe]' },
  { id: 'wins', label: 'Tournaments Won', value: '12', icon: Trophy, gradient: 'from-[#f857a6] to-[#ff5858]' },
  { id: 'rank', label: 'Rank', value: '#247', icon: TrendingUp, gradient: 'from-[#667eea] to-[#764ba2]' },
];

export default function QuickStats() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 mb-6">
      {stats.map((s, i) => (
        <motion.div
          key={s.id}
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.05 * i }}
          className="relative overflow-hidden rounded-2xl border border-white/10 backdrop-blur-md bg-white/5 p-4"
        >
          <div className={`absolute -right-6 -top-6 h-20 w-20 rounded-full bg-gradient-to-br ${s.gradient} opacity-30 blur-2xl`} />
          <div className="flex items-center gap-3">
            <div className={`h-10 w-10 rounded-xl bg-gradient-to-br ${s.gradient} flex items-center justify-center border border-white/20` }>
              <s.icon size={18} />
            </div>
            <div>
              <div className="text-xs uppercase text-white/70">{s.label}</div>
              <div className="text-xl font-bold">{s.value}</div>
            </div>
          </div>
        </motion.div>
      ))}
    </div>
  );
}
