import Sidebar from "@/components/Profile/Sidebar/Sidebar";
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
		<main className="flex h-screen w-full">
			<Sidebar />
			<section className="w-9/12 py-5 px-10">{children}</section>
		</main>
	);
}
