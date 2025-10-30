import { Home, Gamepad2, Plus, Trophy, User } from 'lucide-react';

export default function BottomNav() {
  return (
    <nav className="fixed bottom-0 inset-x-0 z-30 md:hidden">
      <div className="mx-3 mb-3 rounded-2xl border border-white/10 bg-[#0b0f1a]/70 backdrop-blur-md shadow-[0_10px_30px_rgba(0,0,0,0.4)]">
        <div className="grid grid-cols-5 text-xs text-white/70">
          <button className="flex flex-col items-center py-3 hover:text-white transition">
            <Home size={20} />
            <span>Home</span>
          </button>
          <button className="flex flex-col items-center py-3 hover:text-white transition relative">
            <Gamepad2 size={20} />
            <span>Plays</span>
            <span className="absolute top-1 right-3 text-[10px] bg-gradient-to-r from-[#f857a6] to-[#ff5858] text-white rounded-full px-1.5 py-0.5 border border-white/20">5</span>
          </button>
          <div className="flex items-center justify-center -mt-6">
            <button className="h-14 w-14 rounded-2xl bg-gradient-to-r from-[#00ff88] to-[#4facfe] text-black flex items-center justify-center shadow-[0_0_30px_rgba(0,255,136,0.5)] border border-white/20">
              <Plus size={26} />
            </button>
          </div>
          <button className="flex flex-col items-center py-3 hover:text-white transition">
            <Trophy size={20} />
            <span>Leaders</span>
          </button>
          <button className="flex flex-col items-center py-3 hover:text-white transition">
            <User size={20} />
            <span>Profile</span>
          </button>
        </div>
      </div>
    </nav>
  );
}
