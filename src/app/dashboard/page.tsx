"use client";

import AdminDashboard from "@/components/Dashboard/Admin/AdminDashboard";
import UserDashboard from "@/components/Dashboard/User/UserDashboard";
import { Spinner } from "@nextui-org/react";
import { useContext } from "react";
import UserContext from "../contexts/UserProvider";

export default function Dashboard() {
	const user = useContext(UserContext);

	return (
		<section>
			{user.role === "admin" && <AdminDashboard />}
			{user.role === "user" && <UserDashboard user={user} />}
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
