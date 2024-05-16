import "./globals.css";
import "./normalize.css";
import { Inter, Syne } from "next/font/google";
import { Toaster } from "@/components/ui/sonner";
import Footer from "@/layouts/Footer";
import Header from "@/layouts/Header";
import MobileHeader from "@/layouts/MobileHeader";
import CookieConsentDialog from "@/components/CookiesConsentDialog";
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
			<head>
				<link
					href="https://api.mapbox.com/mapbox-gl-js/v2.6.1/mapbox-gl.css"
					rel="stylesheet"
				/>
			</head>
			<body className="bg-ogBG-base text-ogLabel-base">
				<MobileHeader />
				<Header />
				<AuthSubscriber />
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
				<CookieConsentDialog />
				{children}
				<Footer />
			</body>
		</html>
	);
}
