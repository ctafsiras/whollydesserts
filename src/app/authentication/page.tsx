"use client";

import LoginForm from "@/components/Authentication/LoginForm";
import RegisterForm from "@/components/Authentication/RegisterForm";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function Auth() {
	const [authMethod, setAuthMethod] = useState("login");
	const { status } = useSession();
	const router = useRouter();

	if (status === "unauthenticated") {
		return (
			<main>
				{authMethod === "login" ? (
					<LoginForm changeMethod={() => setAuthMethod("register")} />
				) : (
					<RegisterForm changeMethod={() => setAuthMethod("login")} />
				)}
			</main>
		);
	} else {
		router.back();
		return;
	}
}
