'use client'

import { X, User, AlertTriangle, Heart, Zap, Info } from 'lucide-react'

interface SidebarProps {
  onClose: () => void
}

export function Sidebar({ onClose }: SidebarProps) {
  const menuItems = [
    { icon: User, label: 'Franc', value: '', chevron: true },
    { icon: null, label: 'U20', value: '9.1', chevron: false },
    { icon: AlertTriangle, label: 'Toptale', value: '', chevron: true, alert: true },
    { icon: Heart, label: 'Lows', value: '', chevron: true },
    { icon: Zap, label: 'Live', value: '0:45', chevron: false },
    { icon: null, label: 'Choy to Mock', value: '', chevron: true },
    { icon: Info, label: 'And Pay', value: '', chevron: true },
  ]

  return (
    <div className="h-full flex flex-col bg-surface">
      {/* Header */}
      <div className="p-6 border-b border-surface-hover flex items-center justify-between">
        <h2 className="text-lg font-semibold text-fg">Now Us</h2>
        <button
          onClick={onClose}
          className="lg:hidden p-2 hover:bg-surface-hover rounded-lg transition-colors duration-200"
          aria-label="Close menu"
        >
          <X size={20} className="text-muted" />
        </button>
      </div>

      {/* Menu items */}
      <nav className="flex-1 overflow-y-auto p-4">
        <ul className="space-y-2">
          {menuItems.map((item, index) => (
            <li key={index}>
              <button className="w-full flex items-center justify-between p-3 rounded-lg hover:bg-surface-hover transition-colors duration-200 group">
                <div className="flex items-center gap-3">
                  {item.icon && (
                    <div className={`${item.alert ? 'text-danger' : 'text-muted'}`}>
                      <item.icon size={20} />
                    </div>
                  )}
                  <span className="text-fg font-medium">{item.label}</span>
                </div>
                
                <div className="flex items-center gap-2">
                  {item.value && (
                    <span className="text-muted text-sm">{item.value}</span>
                  )}
                  {item.chevron && (
                    <svg
                      className="w-5 h-5 text-muted group-hover:text-fg transition-colors duration-200"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  )}
                </div>
              </button>
            </li>
          ))}
        </ul>
      </nav>

      {/* Footer */}
      <div className="p-6 border-t border-surface-hover">
        <button className="w-full py-3 bg-accent text-white rounded-lg hover:bg-accent/90 transition-colors duration-200 font-medium">
          Issue Gift Card
        </button>
      </div>
    </div>
  )
}
