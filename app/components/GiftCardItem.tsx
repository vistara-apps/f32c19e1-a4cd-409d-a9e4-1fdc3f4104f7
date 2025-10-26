'use client';

import { ArrowUpRight } from 'lucide-react';

interface GiftCard {
  id: string;
  brand: string;
  value: number;
  currency: string;
  image: string;
  bgColor: string;
  featured?: boolean;
}

interface GiftCardItemProps {
  card: GiftCard;
}

export function GiftCardItem({ card }: GiftCardItemProps) {
  return (
    <div className="group relative">
      <div className="bg-surface rounded-xl overflow-hidden border border-border hover:border-accent transition-all duration-300 cursor-pointer">
        {/* Card Image */}
        <div className={`relative h-40 bg-gradient-to-br ${card.bgColor} flex items-center justify-center`}>
          {card.featured && (
            <div className="absolute top-3 right-3 bg-accent text-white text-xs font-semibold px-3 py-1 rounded-full">
              X402 Payment
            </div>
          )}
          <div className="text-4xl font-bold text-white opacity-90">
            {card.brand}
          </div>
        </div>
        
        {/* Card Details */}
        <div className="p-4">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-fg text-opacity-60 mb-1">Gift card</p>
              <p className="text-xl font-bold">
                ${card.value}
              </p>
            </div>
            <button className="p-2 rounded-lg bg-accent bg-opacity-10 hover:bg-opacity-20 transition-colors group-hover:bg-accent group-hover:bg-opacity-100">
              <ArrowUpRight className="w-5 h-5 text-accent group-hover:text-white transition-colors" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
