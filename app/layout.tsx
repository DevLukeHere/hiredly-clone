import { ReactNode } from "react";
import { Inter } from "next/font/google";
import NavBar from "./_components/NavBar";
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
        <NavBar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
