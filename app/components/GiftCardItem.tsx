'use client'

interface GiftCardItemProps {
  card: {
    id: string
    brand: string
    value: number
    image: string
    color: string
  }
}

export function GiftCardItem({ card }: GiftCardItemProps) {
  const isX402 = card.brand === 'SPOT'

  return (
    <div className="group relative">
      <div className="relative overflow-hidden rounded-xl bg-surface border border-surface-hover hover:border-accent transition-all duration-300 cursor-pointer">
        {/* Card visual */}
        <div 
          className="aspect-[3/2] flex items-center justify-center text-white font-bold text-3xl relative overflow-hidden"
          style={{ backgroundColor: card.color }}
        >
          {isX402 && (
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="bg-[#5eead4] text-black px-6 py-3 rounded-lg font-bold text-xl">
                X402 Payment
              </div>
            </div>
          )}
          {!isX402 && (
            <span className="relative z-10">{card.brand}</span>
          )}
          
          {/* Decorative elements */}
          <div className="absolute top-4 left-4 w-8 h-8 border-2 border-white/30 rounded-full"></div>
          <div className="absolute bottom-4 right-4 w-12 h-12 border-2 border-white/20 rounded-lg rotate-45"></div>
        </div>

        {/* Card info */}
        <div className="p-4 bg-surface">
          <div className="flex items-center justify-between">
            <span className="text-fg font-medium">
              {isX402 ? 'Gift Gift cards' : `Gift ${card.brand === 'Present' ? 'carded' : card.brand === 'EarlLarft' ? 'Larft card' : 'card card'}`}
            </span>
            <span className="text-accent font-bold">${card.value}</span>
          </div>
        </div>

        {/* Hover overlay */}
        <div className="absolute inset-0 bg-accent/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
          <button className="px-6 py-2 bg-accent text-white rounded-lg font-medium transform scale-90 group-hover:scale-100 transition-transform duration-200">
            View Details
          </button>
        </div>
      </div>
    </div>
  )
}
