'use client';

import { useEffect, useState } from 'react';
import { GiftCardGrid } from './components/GiftCardGrid';
import { Sidebar } from './components/Sidebar';
import { Header } from './components/Header';
import { Menu } from 'lucide-react';

export default function Home() {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return (
      <div className="min-h-screen bg-bg flex items-center justify-center">
        <div className="animate-pulse text-fg">Loading...</div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-bg text-fg">
      <Header onMenuClick={() => setSidebarOpen(!sidebarOpen)} />
      
      <div className="flex">
        <Sidebar isOpen={sidebarOpen} onClose={() => setSidebarOpen(false)} />
        
        <main className="flex-1 p-4 md:p-6 lg:p-8 lg:ml-64">
          <div className="max-w-7xl mx-auto">
            <div className="flex items-center justify-between mb-6">
              <h1 className="text-3xl font-bold">Gift Cards</h1>
              <button className="lg:hidden p-2 rounded-lg bg-surface hover:bg-opacity-80 transition-colors">
                <Menu className="w-6 h-6" />
              </button>
            </div>
            
            <GiftCardGrid />
          </div>
        </main>
      </div>
    </div>
  );
}
