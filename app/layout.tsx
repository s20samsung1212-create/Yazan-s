import type { Metadata } from "next";
import { Inter, Silkscreen } from "next/font/google";
import "./globals.css";

const inter = Inter({ 
  subsets: ["latin"],
  variable: "--font-inter",
});

const pixelFont = Silkscreen({ 
  weight: ["400", "700"],
  subsets: ["latin"],
  variable: "--font-pixel",
});

export const metadata: Metadata = {
  title: "Yazan Al-Baroudi | Senior Front-End & UI/UX Engineer",
  description: "Computer Engineer, Front-End Developer, and UI/UX Specialist crafting high-performance digital experiences.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${pixelFont.variable} scroll-smooth`}>
      <body className="bg-slate-950 text-slate-100 font-sans antialiased selection:bg-indigo-500 selection:text-white">
        {children}
      </body>
    </html>
  );
}