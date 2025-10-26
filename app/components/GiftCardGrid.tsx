'use client'

import { GiftCardItem } from './GiftCardItem'

interface GiftCard {
  id: string
  brand: string
  value: number
  image: string
  color: string
}

export function GiftCardGrid() {
  const giftCards: GiftCard[] = [
    { id: '1', brand: 'FIX', value: 300, image: '/cards/fix.png', color: '#5eead4' },
    { id: '2', brand: 'Dioniny', value: 150, image: '/cards/dioniny.png', color: '#1e1b4b' },
    { id: '3', brand: 'Present', value: 150, image: '/cards/present.png', color: '#5eead4' },
    { id: '4', brand: 'City Clap', value: 250, image: '/cards/cityclap.png', color: '#22d3ee' },
    { id: '5', brand: 'SPOT', value: 120, image: '/cards/spot.png', color: '#0f172a' },
    { id: '6', brand: 'EarlLarft', value: 379, image: '/cards/earllarft.png', color: '#5eead4' },
    { id: '7', brand: 'Gift Card', value: 100, image: '/cards/gift1.png', color: '#d4af7a' },
    { id: '8', brand: 'YouTube', value: 150, image: '/cards/youtube.png', color: '#dc2626' },
    { id: '9', brand: 'Beninors', value: 440, image: '/cards/beninors.png', color: '#7dd3fc' },
  ]

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h2 className="text-2xl font-bold text-fg">Gift Cards</h2>
        <label className="relative inline-flex items-center cursor-pointer">
          <input type="checkbox" className="sr-only peer" defaultChecked />
          <div className="w-11 h-6 bg-surface peer-focus:outline-none peer-focus:ring-2 peer-focus:ring-accent rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-success"></div>
        </label>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {giftCards.map((card) => (
          <GiftCardItem key={card.id} card={card} />
        ))}
      </div>
    </div>
  )
}
