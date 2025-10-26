'use client'

import { useEffect, useState } from 'react'
import { GiftCardGrid } from './components/GiftCardGrid'
import { Sidebar } from './components/Sidebar'
import { Header } from './components/Header'
import { Menu } from 'lucide-react'

export default function Home() {
  const [sidebarOpen, setSidebarOpen] = useState(false)
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-pulse text-accent text-xl">Loading GiftCardX...</div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-bg">
      <Header />
      
      <div className="flex">
        {/* Mobile menu button */}
        <button
          onClick={() => setSidebarOpen(!sidebarOpen)}
          className="lg:hidden fixed top-4 right-4 z-50 p-2 bg-surface rounded-lg text-fg hover:bg-surface-hover transition-colors duration-200"
          aria-label="Toggle menu"
        >
          <Menu size={24} />
        </button>

        {/* Sidebar */}
        <aside
          className={`
            fixed lg:sticky top-0 left-0 h-screen w-80 bg-surface
            transform transition-transform duration-300 ease-in-out z-40
            ${sidebarOpen ? 'translate-x-0' : '-translate-x-full lg:translate-x-0'}
          `}
        >
          <Sidebar onClose={() => setSidebarOpen(false)} />
        </aside>

        {/* Overlay for mobile */}
        {sidebarOpen && (
          <div
            className="fixed inset-0 bg-black/50 z-30 lg:hidden"
            onClick={() => setSidebarOpen(false)}
          />
        )}

        {/* Main content */}
        <main className="flex-1 p-6 lg:p-8">
          <GiftCardGrid />
        </main>
      </div>
    </div>
  )
}
