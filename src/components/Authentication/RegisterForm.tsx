"use client";

import SignupIllustration from "@/../public/assets/images/signup-illustration.webp";
import axios from "axios";
import { signIn } from "next-auth/react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { FieldValues, SubmitHandler, useForm } from "react-hook-form";
import { toast } from "react-hot-toast";
import SocialLogin from "./SocialLogin";

const RegisterForm = ({ changeMethod }: { changeMethod: () => void }) => {
	const [isLoading, setIsLoading] = useState(false);
	const router = useRouter();
	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm<FieldValues>({
		defaultValues: {
			name: "",
			email: "",
			password: "",
			confirmPassword: "",
		},
	});

	const onSubmit: SubmitHandler<FieldValues> = (data) => {
		setIsLoading(true);
		if (data.password !== data.confirmPassword) {
			toast.error("Passwords do not match");
			setIsLoading(false);
			return;
		}

		axios
			.post("/api/register", data)
			.then(() => {
				signIn("credentials", {
					...data,
					redirect: false,
				});
			})
			.catch((err) => {
				toast.error(err.response.data);
			})
			.finally(() => {
				setIsLoading(false);
			});
	};
	return (
		<div className="flex items-center flex-col md:flex-row px-10 font-sans">
			<div className="flex-1 p-4 md:p-8">
				<h1 className="text-3xl font-bold text-gray-800 mb-4">
					Create New Account
				</h1>
				<form
					className="space-y-4"
					onSubmit={handleSubmit(onSubmit)}
				>
					<div className="flex flex-col">
						<label
							htmlFor="name"
							className="text-gray-600"
						>
							Name
						</label>
						<input
							type="text"
							id="name"
							{...register("name", {
								required: true,
								maxLength: 30,
							})}
							disabled={isLoading}
							className={`border border-gray-300 px-2 py-1 focus:outline-none ${
								errors.name && "ring-2 ring-red-500"
							}`}
						/>
					</div>
					<div className="flex flex-col">
						<label
							htmlFor="email"
							className="text-gray-600"
						>
							Email
						</label>
						<input
							type="email"
							id="email"
							{...register("email", {
								required: true,
								pattern:
									/^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/,
							})}
							disabled={isLoading}
							className={`border border-gray-300 px-2 py-1 focus:outline-none ${
								errors.email && "ring-2 ring-red-500"
							}`}
						/>
					</div>
					<div className="flex flex-col">
						<label
							htmlFor="password"
							className="text-gray-600"
						>
							Password
						</label>
						<input
							type="password"
							id="password"
							{...register("password", {
								required: true,
								pattern:
									/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[^a-zA-Z\d\s]).{8,}$/,
							})}
							disabled={isLoading}
							className={`border border-gray-300 px-2 py-1 focus:outline-none ${
								errors.password && "ring-2 ring-red-500"
							}`}
						/>
					</div>
					<div className="flex flex-col">
						<label
							htmlFor="confirmPassword"
							className="text-gray-600"
						>
							Confirm Password
						</label>
						<input
							type="password"
							id="confirmPassword"
							{...register("confirmPassword", {
								required: true,
								pattern:
									/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[^a-zA-Z\d\s]).{8,}$/,
							})}
							disabled={isLoading}
							className={`border border-gray-300 px-2 py-1 focus:outline-none ${
								errors.confirmPassword && "ring-2 ring-red-500"
							}`}
						/>
					</div>
					<div className="flex items-center justify-between space-x-2">
						<button
							type="submit"
							className={`bg-orange-500 text-white font-bold px-4 py-2 rounded-md hover:bg-orange-600 disabled:bg-orange-200 disabled:text-gray-500
							${isLoading && "cursor-not-allowed"}
							`}
							disabled={isLoading}
						>
							Register
						</button>
						<span className="text-gray-600">
							Already have an account?
						</span>
						<button
							type="button"
							className="text-gray-600 font-bold px-4 py-2 rounded-md hover:bg-gray-200 flex items-center"
							onClick={changeMethod}
						>
							Login
						</button>
					</div>
				</form>
				<SocialLogin />
			</div>
			<div className="flex-1 p-4 md:p-8 hidden md:block">
				<Image
					src={SignupIllustration}
					alt="Waffles"
					width={800}
					height={600}
					className="rounded-md object-cover"
				/>
			</div>
		</div>
	);
};

export default RegisterForm;
