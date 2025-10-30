import { Bell, Search, User } from 'lucide-react';
import { motion } from 'framer-motion';

export default function Header() {
  return (
    <header className="sticky top-0 z-30 bg-[#0b0f1a]/70 backdrop-blur-md border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <motion.div
          initial={{ opacity: 0, y: -8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="flex items-center gap-3"
        >
          <div className="h-8 w-8 rounded-lg bg-gradient-to-br from-[#667eea] to-[#764ba2] shadow-[0_0_25px_rgba(102,126,234,0.6)]" />
          <span className="font-extrabold tracking-wider text-lg" style={{ fontFamily: 'Orbitron, Rajdhani, Inter, sans-serif' }}>GrindArena</span>
        </motion.div>

        <div className="flex items-center gap-3">
          <div className="hidden md:flex items-center bg-white/5 border border-white/10 rounded-xl px-3 py-2 focus-within:ring-2 ring-[#4facfe]/70">
            <Search size={18} className="text-white/60" />
            <input
              placeholder="Search tournaments"
              className="bg-transparent outline-none text-sm pl-2 placeholder:text-white/40"
            />
          </div>
          <button className="relative p-2 rounded-xl bg-white/5 border border-white/10 hover:bg-white/10 transition">
            <Bell size={18} />
            <span className="absolute -top-1 -right-1 text-[10px] bg-gradient-to-r from-[#f857a6] to-[#ff5858] text-white rounded-full px-1.5 py-0.5 border border-white/20">5</span>
          </button>
          <button className="flex items-center gap-2 p-1.5 pl-2 rounded-xl bg-white/5 border border-white/10 hover:bg-white/10 transition">
            <div className="h-7 w-7 rounded-lg bg-gradient-to-tr from-[#00f2fe] to-[#4facfe]" />
            <User size={18} className="hidden sm:block" />
          </button>
        </div>
      </div>
    </header>
  );
}
