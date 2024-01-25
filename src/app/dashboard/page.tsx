"use client";

import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";

export default function Dashboard() {
	const { status } = useSession();
	const router = useRouter();

	if (status === "unauthenticated") router.back();

	return (
		<div>
			<h1>Dashboard</h1>
		</div>
	);
}
