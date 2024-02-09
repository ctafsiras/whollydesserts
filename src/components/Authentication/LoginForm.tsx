"use client";

import SigninIllustration from "@/../public/assets/images/signin-illustration.jpg";
import { signIn } from "next-auth/react";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { FieldValues, SubmitHandler, useForm } from "react-hook-form";
import { toast } from "react-hot-toast";
import SocialLogin from "./SocialLogin";

const LoginForm = ({ changeMethod }: { changeMethod: () => void }) => {
	const [isLoading, setIsLoading] = useState(false);
	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm<FieldValues>({
		defaultValues: {
			email: "",
			password: "",
		},
	});

	const onSubmit: SubmitHandler<FieldValues> = (data) => {
		setIsLoading(true);

		signIn("credentials", {
			...data,
			redirect: false,
		}).then((callback) => {
			if (callback?.error) {
				toast.error(callback.error);
			}

			setIsLoading(false);
		});
	};
	return (
		<div className="flex items-center flex-col md:flex-row px-10 font-sans">
			<div className="flex-1 p-4 md:p-8 hidden md:block">
				<Image
					src={SigninIllustration}
					alt="Waffles"
					width={800}
					height={600}
					className="rounded-md object-cover"
				/>
			</div>
			<div className="flex-1 p-4 md:p-8">
				<h1 className="text-3xl font-bold text-gray-800 mb-4">
					Login To Your Account
				</h1>
				<form
					className="space-y-4"
					onSubmit={handleSubmit(onSubmit)}
				>
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
							})}
							disabled={isLoading}
							className={`border border-gray-300 px-2 py-1 focus:outline-none ${
								errors.password && "ring-2 ring-red-500"
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
							Login
						</button>
						<span className="text-gray-600">
							Don&apos;t have an account?
						</span>
						<button
							type="button"
							className="text-gray-600 font-bold px-4 py-2 rounded-md hover:bg-gray-200 flex items-center"
							onClick={changeMethod}
						>
							Register
						</button>
					</div>
					<div className="flex justify-between">
						<Link
							href="/forgot-password"
							className="text-gray-600 hover:text-gray-800"
						>
							Forgot Password?
						</Link>
						<Link
							href="/help"
							className="text-gray-600 hover:text-gray-800"
						>
							Get help
						</Link>
					</div>
				</form>
				<SocialLogin />
			</div>
		</div>
	);
};

export default LoginForm;
