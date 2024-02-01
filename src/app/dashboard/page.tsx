"use client";

import AdminDashboard from "@/components/Dashboard/Admin/AdminDashboard";
import UserDashboard from "@/components/Dashboard/User/UserDashboard";
import { Spinner } from "@nextui-org/react";
import { User } from "@prisma/client";
import axios from "axios";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

export default function Dashboard() {
	const { data: session, status } = useSession();
	const userEmail = session?.user?.email;
	const [user, setUser] = useState({} as User);
	const router = useRouter();

	useEffect(() => {
		const fetch = async () => {
			try {
				const res = await axios.get(`/api/user?email=${userEmail}`);
				setUser(res.data);
			} catch (error) {
				console.error("Error fetching user:", error);
			}
		};
		if (status === "loading") {
			const interval = setInterval(() => {
				if (status !== "loading") {
					clearInterval(interval);
					if (status === "unauthenticated") {
						router.push("/authentication");
					} else {
						fetch();
					}
				}
			}, 50);
		} else if (status === "unauthenticated") {
			router.push("/authentication");
		} else {
			fetch();
		}
	}, [userEmail, status, router]);

	return (
		<section>
			{user.role === "admin" && <AdminDashboard />}
			{user.role === "user" && <UserDashboard />}
			{(status === "loading" ||
				status === "unauthenticated" ||
				user.role === undefined) && (
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
