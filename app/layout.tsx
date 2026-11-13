import type { Metadata } from "next";
import "./globals.css";
import { AppProvider } from "@/lib/AppContext"; // <-- IMPORT

export const metadata: Metadata = {
  title: "Tsingy Rouge Madagascar — Expérience Officielle",
  description: "Découvrez la collection exclusive Tsingy Rouge Madagascar.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="fr">
      <head>
        <link href="https://fonts.googleapis.com/css2?family=Fraunces:ital,wght@0,400;0,500;0,600;0,700;1,400&family=Inter:wght@100..900&display=swap" rel="stylesheet" />
      </head>
      <body>
        <AppProvider>{children}</AppProvider>
      </body>
    </html>
  );
}