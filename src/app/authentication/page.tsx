"use client";

import LoginForm from "@/components/Authentication/LoginForm";
import AddItemForm from "@/components/Authentication/RegisterForm";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

export default function Auth() {
	const [authMethod, setAuthMethod] = useState("login");
	const session = useSession();
	const router = useRouter();

	useEffect(() => {
		if (session?.status === "authenticated") router.back();
	}, [session?.status, router]);

	return (
		<main>
			{authMethod === "login" ? (
				<LoginForm changeMethod={() => setAuthMethod("register")} />
			) : (
				<AddItemForm changeMethod={() => setAuthMethod("login")} />
			)}
		</main>
	);
}
