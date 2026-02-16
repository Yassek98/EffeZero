import type { Metadata } from "next";
import { Inter, Anton } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const anton = Anton({
  weight: "400",
  variable: "--font-anton",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "FO | Collettivo Fotografico",
  description: "Collettivo fotografico. Estensione digitale della nostra identità.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="it">
      <body
        className={`${inter.variable} ${anton.variable} antialiased bg-black text-white`}
      >
        {children}
      </body>
    </html>
  );
}
