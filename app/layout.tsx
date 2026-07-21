import type { Metadata } from "next";
import {
  Geist,
  Geist_Mono,
  Cormorant_Garamond,
} from "next/font/google";
const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-cormorant",
});
import Header from "@/app/components/layout/Header";
import Footer from "@/app/components/layout/Footer";
import "./globals.css";
import SmoothScroll from "@/app/components/layout/SmoothScroll";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Amoret Rêve",
  description: "...",
  verification: {
    google: "l4up2I6JT_fBVA6HooihdEJxzKLlfvzA5dFJHGzR_aE",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
<html
  lang="en"
  className={`${geistSans.variable} ${geistMono.variable} ${cormorant.variable}`}
>
 <body>

  <SmoothScroll />

  <Header />

  {children}

  <Footer />

</body>
</html>
  );
}
