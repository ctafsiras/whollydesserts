import { Metadata } from "next";

export const metadata: Metadata = {
	title: "Profile - Wholly Desserts",
};

export default function ProfileLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<main className="flex">
			<div className="w-3/12 bg-cyan-800" />
			<section className="w-full">{children}</section>
		</main>
	);
}
