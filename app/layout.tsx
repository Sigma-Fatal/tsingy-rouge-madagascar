import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Tsingy Rouge Madagascar — Expérience Officielle",
  description:
    "Découvrez la collection exclusive Tsingy Rouge Madagascar. Vêtements, lambas et accessoires premium. Livraison partout à Madagascar.",
  openGraph: {
    title: "Tsingy Rouge Madagascar — Expérience Officielle",
    description:
      "Le seul et unique au monde. Découvrez la collection exclusive Tsingy Rouge.",
    images: [
      "https://images.unsplash.com/photo-1516026672322-bc52d61a55d5?w=1200",
    ],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fr">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Fraunces:ital,wght@0,400;0,500;0,600;0,700;1,400;1,500;1,600;1,700&family=Inter:wght@100..900&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>{children}</body>
    </html>
  );
}