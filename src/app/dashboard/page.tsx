"use client";

import AdminDashboard from "@/components/Dashboard/Admin/AdminDashboard";
import { Spinner } from "@nextui-org/react";
import { useRouter } from "next/navigation";
import { useUser } from "../hooks/useUser";

export default function Dashboard() {
	const { user, isPending } = useUser();
	const router = useRouter();

	if (!isPending && user) {
		router.push("/");
	} else {
		return (
			<section>
				{isPending ? (
					<div className="flex items-center justify-center h-screen">
						<Spinner
							color="primary"
							labelColor="foreground"
						/>
					</div>
				) : (
					<AdminDashboard />
				)}
			</section>
		);
	}
}
