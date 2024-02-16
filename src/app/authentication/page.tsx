"use client";

import LoginForm from "@/components/Authentication/LoginForm";
import AddItemForm from "@/components/Authentication/RegisterForm";
import { useRouter } from "next/navigation";
import { useContext, useLayoutEffect, useState } from "react";
import UserContext from "../contexts/UserProvider";

export default function Auth() {
	const [authMethod, setAuthMethod] = useState("login");
	const router = useRouter();
	const { id } = useContext(UserContext);

	useLayoutEffect(() => {
		if (id) {
			router.push("/menu");
			return;
		}
	}, [id, router]);

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
