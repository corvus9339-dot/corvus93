import "./globals.css";
import Link from "next/link";

export const metadata = {
  title: "Corvus 93",
  description: "FPV підрозділ. Мерч, підтримка та рекрутинг.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="uk">
      <body>

        <header className="header">

          <div className="logoBox">

            <div className="raven">
              <img src="/raven.png" alt="corvus raven" />
            </div>

            <Link href="/" className="logoText">
              CORVUS 93
            </Link>

          </div>

        </header>

        <main className="main">
          {children}
        </main>

      </body>
    </html>
  );
}