"use client";

import LoginForm from "@/components/Authentication/LoginForm";
import AddItemForm from "@/components/Authentication/RegisterForm";
import { useState } from "react";

export default function Auth() {
	const [authMethod, setAuthMethod] = useState("login");

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
