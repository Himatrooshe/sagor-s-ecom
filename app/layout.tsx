import type { Metadata } from "next";
import { Inter, Montserrat } from "next/font/google";
import "./globals.css";
import SmoothScrolling from "./components/SmoothScrolling";
import { CartProvider } from "./context/CartContext";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "inbd - Premium Online Shopping in Bangladesh",
  description: "Your premier online shopping destination in Bangladesh. Shop perfumes, shoes, and more with fast delivery and cash on delivery available.",
  icons: {
    icon: '/favicon.png',
    shortcut: '/favicon.png',
    apple: '/favicon.png',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head suppressHydrationWarning />
      <body
        className={`${inter.variable} ${montserrat.variable} antialiased`}
      >
        <CartProvider>
          <SmoothScrolling>
            {children}
          </SmoothScrolling>
        </CartProvider>
      </body>
    </html>
  );
}
