import type { Metadata } from "next";
import localFont from "next/font/local";
import { Nunito_Sans } from "next/font/google";
import "./globals.css";

const PJS = Nunito_Sans({
  subsets: ['latin'],
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Suaka',
  description: 'Discover the perfect property that suits your lifestyle. Explore our curated listings and find your ideal property today!',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${PJS.className} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}