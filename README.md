# GiftCardX - Onchain Gift Card Marketplace

The onchain gift card marketplace for Farcaster, powered by Base.

## Features

- 🎁 Onchain Gift Card NFTs (ERC-721/1155)
- 🔄 P2P Gift Card Exchange & Crypto Conversion
- 📱 Farcaster Frame Gifting
- ⭐ Reputation & Recommendation Engine
- 🆔 Basename & Identity Integration
- 💳 X402 Payment Integration

## Getting Started

1. Install dependencies:
```bash
npm install
```

2. Set up environment variables:
```bash
cp .env.local.example .env.local
```

3. Add your OnchainKit API key to `.env.local`

4. Run the development server:
```bash
npm run dev
```

5. Open [http://localhost:3000](http://localhost:3000)

## Tech Stack

- **Framework**: Next.js 15 with App Router
- **Blockchain**: Base (L2 on Ethereum)
- **Wallet**: OnchainKit + Coinbase Wallet
- **Social**: Farcaster Mini App SDK
- **Styling**: Tailwind CSS
- **Language**: TypeScript

## Base Mini App Integration

This app is built as a Farcaster Mini App with full Base blockchain integration:

- OnchainKit for wallet connection and transactions
- Farcaster Frame SDK for social features
- Gasless transactions via Paymaster
- NFT-based gift cards on Base

## Project Structure

```
app/
├── components/       # React components
├── layout.tsx       # Root layout with providers
├── page.tsx         # Main page
└── globals.css      # Global styles

public/
└── .well-known/
    └── farcaster.json  # Mini App manifest
```

## License

MIT
