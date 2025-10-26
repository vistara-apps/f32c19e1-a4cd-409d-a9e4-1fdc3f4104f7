'use client';

import { GiftCardItem } from './GiftCardItem';

const giftCards = [
  {
    id: '1',
    brand: 'FIX',
    value: 300,
    currency: 'USD',
    image: '/cards/fix.png',
    bgColor: 'from-cyan-400 to-cyan-300',
  },
  {
    id: '2',
    brand: 'Dioniny',
    value: 150,
    currency: 'USD',
    image: '/cards/dioniny.png',
    bgColor: 'from-blue-900 to-blue-800',
  },
  {
    id: '3',
    brand: 'Presents',
    value: 150,
    currency: 'USD',
    image: '/cards/presents.png',
    bgColor: 'from-teal-300 to-teal-200',
  },
  {
    id: '4',
    brand: 'City Clap',
    value: 250,
    currency: 'USD',
    image: '/cards/cityclap.png',
    bgColor: 'from-cyan-400 to-cyan-300',
  },
  {
    id: '5',
    brand: 'X402 Payment',
    value: 120,
    currency: 'USD',
    image: '/cards/x402.png',
    bgColor: 'from-teal-400 to-cyan-400',
    featured: true,
  },
  {
    id: '6',
    brand: 'EdIt',
    value: 379,
    currency: 'USD',
    image: '/cards/edit.png',
    bgColor: 'from-green-400 to-teal-300',
  },
];

export function GiftCardGrid() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
      {giftCards.map((card) => (
        <GiftCardItem key={card.id} card={card} />
      ))}
    </div>
  );
}
