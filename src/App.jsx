import { useEffect } from 'react';
import Header from './components/Header';
import HeroSection from './components/HeroSection';
import QuickStats from './components/QuickStats';
import TournamentGrid from './components/TournamentGrid';
import BottomNav from './components/BottomNav';

export default function App() {
  useEffect(() => {
    document.body.classList.add('bg-[#0b0f1a]', 'text-white');
    return () => {
      document.body.classList.remove('bg-[#0b0f1a]', 'text-white');
    };
  }, []);

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1 pb-24">
        <HeroSection />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-10 relative z-10">
          <QuickStats />
          <TournamentGrid />
        </div>
      </main>
      <BottomNav />
    </div>
  );
}
