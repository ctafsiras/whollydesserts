import Sidebar from "@/components/Dashboard/Sidebar/Sidebar";
import { Metadata } from "next";

export const metadata: Metadata = {
	title: "Dashboard - Wholly Desserts",
};

export default function DashboardLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<main className="flex h-screen">
			<section className="w-2/12">
				<Sidebar />
			</section>

			<section className="w-10/12">{children}</section>
		</main>
	);
}
