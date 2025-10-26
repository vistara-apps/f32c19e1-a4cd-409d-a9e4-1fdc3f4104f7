'use client';

import { X, Home, CreditCard, ArrowLeftRight, Gift, User, Settings2 } from 'lucide-react';

interface SidebarProps {
  isOpen: boolean;
  onClose: () => void;
}

const menuItems = [
  { icon: Home, label: 'Home', active: false },
  { icon: CreditCard, label: 'My Cards', active: true },
  { icon: ArrowLeftRight, label: 'Exchange', active: false },
  { icon: Gift, label: 'Send Gift', active: false },
  { icon: User, label: 'Profile', active: false },
  { icon: Settings2, label: 'Settings', active: false },
];

export function Sidebar({ isOpen, onClose }: SidebarProps) {
  return (
    <>
      {/* Mobile overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-40 lg:hidden"
          onClick={onClose}
        />
      )}
      
      {/* Sidebar */}
      <aside
        className={`
          fixed top-0 left-0 h-full w-64 bg-surface border-r border-border z-50
          transform transition-transform duration-300 ease-in-out
          ${isOpen ? 'translate-x-0' : '-translate-x-full'}
          lg:translate-x-0 lg:static
        `}
      >
        <div className="flex items-center justify-between p-4 border-b border-border lg:hidden">
          <h2 className="text-lg font-semibold">Menu</h2>
          <button
            onClick={onClose}
            className="p-2 rounded-lg hover:bg-bg transition-colors"
            aria-label="Close menu"
          >
            <X className="w-5 h-5" />
          </button>
        </div>
        
        <nav className="p-4 space-y-2">
          {menuItems.map((item) => (
            <button
              key={item.label}
              className={`
                w-full flex items-center gap-3 px-4 py-3 rounded-lg
                transition-colors text-left
                ${item.active 
                  ? 'bg-accent text-white' 
                  : 'hover:bg-bg text-fg'
                }
              `}
            >
              <item.icon className="w-5 h-5" />
              <span className="font-medium">{item.label}</span>
            </button>
          ))}
        </nav>
        
        <div className="absolute bottom-0 left-0 right-0 p-4 border-t border-border">
          <div className="flex items-center gap-3 p-3 rounded-lg bg-bg">
            <div className="w-10 h-10 rounded-full bg-accent flex items-center justify-center text-sm font-semibold">
              F
            </div>
            <div className="flex-1 min-w-0">
              <p className="font-medium truncate">Franc</p>
              <p className="text-sm text-fg text-opacity-60 truncate">@franc</p>
            </div>
          </div>
        </div>
      </aside>
    </>
  );
}
