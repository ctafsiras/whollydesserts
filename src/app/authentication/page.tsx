"use client";

import LoginForm from "@/components/Authentication/LoginForm";
import AddItemForm from "@/components/Authentication/RegisterForm";
import { Spinner } from "@nextui-org/react";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { useUser } from "../hooks/useUser";

export default function Auth() {
	const [authMethod, setAuthMethod] = useState("register");
	const router = useRouter();
	const { user, isPending } = useUser();

	if (!isPending && user) {
		router.push("/menu");
	} else {
		return (
			<main>
				{isPending ? (
					<div className="flex items-center justify-center h-screen">
						<Spinner
							color="primary"
							labelColor="foreground"
						/>
					</div>
				) : authMethod === "login" ? (
					<LoginForm changeMethod={() => setAuthMethod("register")} />
				) : (
					<AddItemForm changeMethod={() => setAuthMethod("login")} />
				)}
			</main>
		);
	}
}
