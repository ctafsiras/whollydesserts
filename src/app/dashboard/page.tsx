"use client";

import { useSession } from "next-auth/react";
import { useEffect, useState } from "react";
import getCurrentUser from "../hooks/getCurrentUser";

export default function Dashboard() {
	const { data: session } = useSession();
	const userEmail = session?.user?.email;
	const [user, setUser] = useState(null);

	useEffect(() => {
		const fetchUser = async () => {
			const currentUser = await getCurrentUser(userEmail);
			setUser(currentUser);
		};

		fetchUser();
	}, [userEmail]);

	if (!user) {
		return <p>Loading...</p>;
	}

	console.log(user);

	return (
		<div>
			<h1>Dashboard</h1>
		</div>
	);
}
