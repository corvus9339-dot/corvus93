import type { Metadata } from "next";
import "./globals.css";
import { CartProvider } from "./context/CartContext";
import Header from "./components/Header";

export const metadata: Metadata = {
  title: "Corvus 93",
  description: "Мерч підрозділу",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="uk">
      <body>
        <CartProvider>
          <Header />
          {children}
        </CartProvider>
      </body>
    </html>
  );
}