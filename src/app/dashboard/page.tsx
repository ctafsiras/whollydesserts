"use client";

import AdminDashboard from "@/components/Dashboard/Admin/AdminDashboard";
import UserDashboard from "@/components/Dashboard/User/UserDashboard";
import { Spinner } from "@nextui-org/react";
import { User } from "@prisma/client";
import axios from "axios";
import { useSession } from "next-auth/react";
import { useEffect, useState } from "react";

export default function Dashboard() {
	const { data: session } = useSession();
	const userEmail = session?.user?.email;
	const [user, setUser] = useState({} as User);

	useEffect(() => {
		const fetch = async () => {
			try {
				const res = await axios.get(`/api/user?email=${userEmail}`);
				setUser(res.data);
			} catch (error) {
				console.error("Error fetching user:", error);
			}
		};
		fetch();
	}, [userEmail]);

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
