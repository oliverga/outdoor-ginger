import { Inter, Syne } from "next/font/google";

import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});
const syne = Syne({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-syne",
});

export const metadata = {
  title: "Outdoor Ginger",
  description: "Outdoor Ginger is an adventurer who loves the outdoors.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${inter.variable} ${syne.variable}`}>
      <body className="bg-ogBG-base text-ogLabel-base">{children}</body>
    </html>
  );
}
