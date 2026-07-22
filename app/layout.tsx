import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Muhammad Adan - Full-Stack Software Engineer",
  description: "Muhammad Adan is a Full-Stack Software Engineer specializing in React.js, Next.js, TypeScript, Python, and modern web technologies. Available for remote opportunities.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className="scroll-smooth"
      style={{ scrollBehavior: "smooth" }}
    >
      <body className={`${inter.variable} font-sans antialiased bg-gray-950 text-gray-100 h-full`}>{children}</body>
    </html>
  );
}
