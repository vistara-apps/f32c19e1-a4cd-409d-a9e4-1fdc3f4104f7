'use client'

import { Gift } from 'lucide-react'

export function Header() {
  return (
    <header className="sticky top-0 z-30 bg-surface/95 backdrop-blur-sm border-b border-surface-hover">
      <div className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-accent rounded-lg flex items-center justify-center">
              <Gift className="text-white" size={24} />
            </div>
            <div>
              <h1 className="text-xl font-bold text-fg">GiftCardX</h1>
              <p className="text-xs text-muted">Onchain Gift Cards</p>
            </div>
          </div>
          
          <button className="px-4 py-2 bg-accent text-white rounded-lg hover:bg-accent/90 transition-colors duration-200 font-medium">
            Connect Wallet
          </button>
        </div>
      </div>
    </header>
  )
}
