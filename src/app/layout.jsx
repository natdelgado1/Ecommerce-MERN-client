"use client";
import { Montserrat, Roboto } from "next/font/google";
import "./globals.css";
import TopHeader from "@/components/TopHeader/TopHeader";
import Footer from "@/components/Footer/Footer";
const roboto = Roboto({ subsets: ["latin"], weight: "400" });
import { CartProvider } from "@/contexts/CartContext";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        suppressHydrationWarning={true}
        className={`${roboto.className} antialiased`}
      >
        <CartProvider>
          <CartProvider>
            <TopHeader></TopHeader>
            {children}
            <Footer> </Footer>
          </CartProvider>
        </CartProvider>
      </body>
    </html>
  );
}
