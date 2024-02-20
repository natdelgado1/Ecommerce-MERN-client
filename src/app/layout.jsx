"use client";
import { Montserrat, Roboto } from "next/font/google";
import "./globals.css";
import TopHeader from "@/components/TopHeader/TopHeader";
import Footer from "@/components/Footer/Footer";
const roboto = Roboto({ subsets: ["latin"], weight: "400" });
import { CartProvider } from "@/contexts/CartContext";
import { UserProvider } from "@/contexts/UserContext";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        suppressHydrationWarning={true}
        className={`${roboto.className} antialiased bg-[#FFFFFF]`}
      >
        <UserProvider>
          <CartProvider>
            <TopHeader></TopHeader>
            {children}
            <Footer> </Footer>
          </CartProvider>
        </UserProvider>
      </body>
    </html>
  );
}
