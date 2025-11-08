import type { Metadata } from "next";
import { Manrope, Noto_Serif_Devanagari } from "next/font/google";
import "./globals.css";

const devanagari = Noto_Serif_Devanagari({
  variable: "--font-story",
  subsets: ["devanagari", "latin"],
  weight: ["400", "500", "600", "700"],
});

const accent = Manrope({
  variable: "--font-accent",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "धोखे का सच | भावनात्मक हिंदी कहानी",
  description:
    "विश्वास, प्रेम और क्षमा की परतों को खोलती हिंदी कहानी ‘धोखे का सच’ – रोहन और साक्षी की दास्तान से जुड़ें।",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="hi">
      <body className={`${devanagari.variable} ${accent.variable}`}>
        {children}
      </body>
    </html>
  );
}
