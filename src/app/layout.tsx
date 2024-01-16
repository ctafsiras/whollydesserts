import Footer from "@/components/Footer/Footer";
import Navbar from "@/components/Navbar/Navbar";
import NewsLetter from "@/components/NewsLetter/NewsLetter";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Providers } from "./providers";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
	title: "Wholly Desserts",
	description: "Generated by create next app ",
};

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang="en">
			<body className="dark">
				<Providers>
					<Navbar />
					{children}
					<NewsLetter />
					<Footer />
				</Providers>
			</body>
		</html>
	);
}
