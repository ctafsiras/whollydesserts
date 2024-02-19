"use client";

import AdminDashboard from "@/components/Dashboard/Admin/AdminDashboard";
import { Spinner } from "@nextui-org/react";
import { useContext } from "react";
import UserContext from "../contexts/UserProvider";
import { useRouter } from "next/navigation";

export default function Dashboard() {
	const user = useContext(UserContext);
	const router = useRouter();

	if (user.role !== "admin") {
		router.push("/");
	}

	return (
		<section>
			{user.role === "admin" && <AdminDashboard />}
			{!user.role && (
				<div className="flex items-center justify-center h-screen">
					<Spinner
						color="primary"
						labelColor="foreground"
					/>
				</div>
			)}
		</section>
	);
}
