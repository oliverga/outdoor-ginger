import "./globals.css";
import { Inter, Syne } from "next/font/google";
import { Toaster } from "@/components/ui/sonner";
import Footer from "@/layouts/Footer";
import Header from "@/layouts/Header";
import MobileHeader from "@/layouts/MobileHeader";
import AuthSubscriber from "@/components/AuthSubscriber";

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

export default async function RootLayout({ children }) {
  return (
    <html lang="en" className={`${inter.variable} ${syne.variable}`}>
      <body className="bg-ogBG-base text-ogLabel-base">
        <MobileHeader />
        <Header />
        <AuthSubscriber />
        <Toaster />
        {children}
        <Footer />
      </body>
    </html>
  );
}
