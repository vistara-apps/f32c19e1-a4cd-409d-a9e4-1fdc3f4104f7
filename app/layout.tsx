import type { Metadata } from "next";
import "./globals.css";
import { Providers } from "./components/Providers";

export const metadata: Metadata = {
  title: "GiftCardX - Onchain Gift Card Marketplace",
  description: "The onchain gift card marketplace for Farcaster, powered by Base.",
  openGraph: {
    title: "GiftCardX",
    description: "The onchain gift card marketplace for Farcaster, powered by Base.",
    images: ["/og-image.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
