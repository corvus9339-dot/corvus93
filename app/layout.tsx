import "./globals.css"
import Header from "./components/Header"
import { CartProvider } from "./context/CartContext"

export const metadata = {
  title: "Corvus Store",
  description: "Темний магазин з кіберпанк естетикою",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="uk">
      <body>

        <CartProvider>

          <Header />

          <main className="container">
            {children}
          </main>

          <footer className="footer">

            <div>© 2026 Corvus Store</div>

            <div className="contact-info">
              Instagram: @corvus_93ombr
            </div>

            <div className="contact-info">
              Telegram: @corvus93ombr
            </div>

          </footer>

        </CartProvider>

      </body>
    </html>
  )
}