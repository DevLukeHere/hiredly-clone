import { ReactNode } from "react";
import { Inter } from "next/font/google";
import AppBar from "./_components/AppBar";
import Footer from "./_components/Footer";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Hiredly | Home",
  description: "This is the new and improved Hiredly website.",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <AppBar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
