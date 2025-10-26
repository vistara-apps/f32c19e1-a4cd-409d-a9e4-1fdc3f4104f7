'use client';

import { Menu, Bell } from 'lucide-react';

interface HeaderProps {
  onMenuClick: () => void;
}

export function Header({ onMenuClick }: HeaderProps) {
  return (
    <header className="sticky top-0 z-50 bg-surface border-b border-border">
      <div className="flex items-center justify-between px-4 py-3 md:px-6">
        <div className="flex items-center gap-4">
          <button
            onClick={onMenuClick}
            className="lg:hidden p-2 rounded-lg hover:bg-bg transition-colors"
            aria-label="Toggle menu"
          >
            <Menu className="w-6 h-6" />
          </button>
          <h1 className="text-xl font-bold">GiftCardX</h1>
        </div>
        
        <div className="flex items-center gap-3">
          <button
            className="p-2 rounded-lg hover:bg-bg transition-colors relative"
            aria-label="Notifications"
          >
            <Bell className="w-5 h-5" />
            <span className="absolute top-1 right-1 w-2 h-2 bg-danger rounded-full"></span>
          </button>
          
          <div className="w-8 h-8 rounded-full bg-accent flex items-center justify-center text-sm font-semibold">
            F
          </div>
        </div>
      </div>
    </header>
  );
}
