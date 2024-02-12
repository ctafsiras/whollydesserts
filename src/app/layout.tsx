import Footer from "@/components/Footer/Footer";
import Navbar from "@/components/Navbar/Navbar";
import NewsLetter from "@/components/NewsLetter/NewsLetter";
import type { Metadata } from "next";
import { Abhaya_Libre } from "next/font/google";
import "./globals.css";
import { Providers } from "./providers";
import ToasterContext from "./context/ToasterContext";

const abhayaLibre = Abhaya_Libre({
  subsets: ["latin"],
  weight: ["400", "700"],
});

export const metadata: Metadata = {
  title: "Wholly Desserts | Home",
  description: "Wholly Desserts Official Web Application",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={abhayaLibre.className}>
      <body>
        <Providers>
          <Navbar />
          <ToasterContext />
          {children}
          <NewsLetter />
          <Footer />
        </Providers>
      </body>
    </html>
  );
}
