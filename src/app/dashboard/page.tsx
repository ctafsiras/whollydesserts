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
	const [user, setUser] = useState<User>();

	useEffect(() => {
		const fetch = async () => {
			axios.get(`/api/user?email=${session?.user?.email}`).then((res) => {
				setUser(res.data);
			});
		};
		fetch();
	}, [session?.user?.email]);

	if (!user) {
		return (
			<div className="flex items-center justify-center h-screen">
				<Spinner
					color="primary"
					labelColor="foreground"
				/>
			</div>
		);
	}

	return <div>{user?.isAdmin ? <AdminDashboard /> : <UserDashboard />}</div>;
}
