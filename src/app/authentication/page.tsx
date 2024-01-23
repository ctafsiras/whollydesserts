"use client";

import LoginForm from "@/components/Authentication/LoginForm";
import RegisterForm from "@/components/Authentication/RegisterForm";
import { useState } from "react";

export default function Auth() {
	const [authMethod, setAuthMethod] = useState("login");
	return (
		<main>
			{authMethod === "login" ? (
				<LoginForm changeMethod={() => setAuthMethod("register")} />
			) : (
				<RegisterForm changeMethod={() => setAuthMethod("login")} />
			)}
		</main>
	);
}
