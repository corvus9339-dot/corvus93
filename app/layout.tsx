import "./globals.css";
import Header from "./components/Header";
import { CartProvider } from "./context/CartContext";
import { ReactNode } from "react";

export const metadata = {
  title: "Corvus 93 — мерч підрозділу",
  description:
    "Офіційний мерч Corvus 93. Шеврони, стікери, прапори, футболки та інший мерч підрозділу.",
  keywords: [
    "corvus93",
    "corvus 93",
    "corvus93 merch",
    "шеврони",
    "військові шеврони",
    "fpv підрозділ",
    "мерч підрозділу",
  ],

  openGraph: {
    title: "Corvus 93 Store",
    description: "Шеврони, стікери, прапори та мерч Corvus 93",
    url: "https://corvus93.com",
    siteName: "Corvus 93",
    locale: "uk_UA",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <html lang="uk">
      <body>
        <CartProvider>
          <Header />

          <main className="container">{children}</main>

          <footer className="footer">
            <div>© 2026 Corvus Store</div>
          </footer>
        </CartProvider>
      </body>
    </html>
  );
}