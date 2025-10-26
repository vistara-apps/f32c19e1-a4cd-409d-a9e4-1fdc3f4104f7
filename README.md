# GiftCardX - Onchain Gift Card Marketplace

The onchain gift card marketplace for Farcaster, powered by Base.

## Features

- 🎁 **Onchain Gift Card NFTs** - Issue verifiable, transferable gift cards as ERC-721/1155 NFTs
- 🔄 **P2P Exchange** - Direct exchange of gift cards or conversion to crypto
- 🎯 **Farcaster Integration** - Send gift cards directly within Farcaster casts
- ⭐ **Reputation System** - Build trust through verified transactions
- 🔐 **Basename Integration** - Personalized user profiles and gift card display

## Tech Stack

- **Framework**: Next.js 15 with App Router
- **Blockchain**: Base (Ethereum L2)
- **Wallet**: OnchainKit + Coinbase Wallet
- **Social**: Farcaster Frame SDK
- **Styling**: Tailwind CSS with BASE theme
- **Language**: TypeScript

## Getting Started

1. **Install dependencies**:
   ```bash
   npm install
   ```

2. **Set up environment variables**:
   ```bash
   cp .env.local.example .env.local
   ```
   Add your OnchainKit API key from [Coinbase Developer Platform](https://portal.cdp.coinbase.com/)

3. **Run development server**:
   ```bash
   npm run dev
   ```

4. **Open** [http://localhost:3000](http://localhost:3000)

## Project Structure

```
giftcardx/
├── app/
│   ├── components/
│   │   ├── Providers.tsx       # OnchainKit + React Query providers
│   │   ├── Header.tsx          # App header with wallet connect
│   │   ├── Sidebar.tsx         # Navigation sidebar
│   │   ├── GiftCardGrid.tsx    # Gift card display grid
│   │   └── GiftCardItem.tsx    # Individual gift card component
│   ├── layout.tsx              # Root layout
│   ├── page.tsx                # Home page
│   ├── loading.tsx             # Loading state
│   ├── error.tsx               # Error boundary
│   └── globals.css             # Global styles with BASE theme
├── public/
│   └── .well-known/
│       └── farcaster.json      # Farcaster manifest
└── package.json
```

## BASE Theme

The app uses the BASE theme with:
- Dark blue background (#0a1929)
- Light text (#e3f2fd)
- Base blue accents (#0052ff)
- Rounded borders and smooth transitions

## Farcaster Integration

The app is configured as a Farcaster Mini App with:
- Frame metadata for social sharing
- Webhook support for notifications
- User context integration
- Wallet connection via OnchainKit

## Building for Production

```bash
npm run build
npm start
```

## License

MIT
