import "./globals.css";
import { Inter, Syne } from "next/font/google";
import { Toaster } from "@/components/ui/sonner";

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
      <body className="bg-ogBG-base text-ogLabel-base">
        <>{children}</>
        <Toaster
          richColors={true}
          toastOptions={{
            style: {
              background: "oklch(var(--og-bg-base))",
              color: "oklch(var(--og-label-base))",
              border: "1px solid oklch(var(--og-border-input))",
              borderRadius: "var(--og-radius-mobile)",
            },
          }}
          theme="light"
        />
      </body>
    </html>
  );
}
