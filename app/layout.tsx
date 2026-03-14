import "./globals.css";

export const metadata = {
  title: "Corvus 93 | FPV підрозділ | Підтримка та рекрутинг",
  description:
    "Corvus 93 — FPV підрозділ. Підтримайте підрозділ, придбайте мерч або долучайтесь до рекрутингу.",
  keywords: [
    "Corvus 93",
    "FPV підрозділ",
    "FPV дрони",
    "військовий мерч",
    "шеврони FPV",
    "рекрутинг FPV",
    "підтримати підрозділ",
  ],
  metadataBase: new URL("https://corvus93.com"),

  openGraph: {
    title: "Corvus 93",
    description:
      "FPV підрозділ. Підтримай підрозділ або долучайся до рекрутингу.",
    url: "https://corvus93.com",
    siteName: "Corvus 93",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
      },
    ],
    locale: "uk_UA",
    type: "website",
  },

  icons: {
    icon: "/logo.png",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="uk">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              name: "Corvus 93",
              url: "https://corvus93.com",
              logo: "https://corvus93.com/logo.png",
              description: "FPV підрозділ. Рекрутинг та підтримка.",
            }),
          }}
        />
      </head>

      <body>{children}</body>
    </html>
  );
}