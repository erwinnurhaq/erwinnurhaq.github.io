import type { Metadata } from 'next';

import { geistMono, geistSans } from '~/utils/fonts';
import './globals.css';

export const metadata: Metadata = {
  metadataBase: new URL('https://erwww.in'),
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>{children}</body>
    </html>
  );
}
