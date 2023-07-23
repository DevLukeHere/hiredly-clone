import { ReactNode } from "react";
import { Inter } from "next/font/google";
import NavBar from "./_components/NavBar";
import Footer from "./_components/Footer";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Find Jobs in Malaysia | Vacancies & Career Opportunities - Hiredly",
  description:
    "Find full-time, remote, work-from-home, and internship career opportunities in Malaysia. Experience easy and fast job search on one of Malaysia's leading job vacancy portals.",
  verification: [
    // Add verification ID from Google
  ],
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body className={inter.className} suppressHydrationWarning={true}>
        <NavBar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
