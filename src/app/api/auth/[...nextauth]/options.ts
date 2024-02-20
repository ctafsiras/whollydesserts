import db from "@/app/libs/prismadb";
import { PrismaAdapter } from "@next-auth/prisma-adapter";
import bcrypt from "bcrypt";
import type { NextAuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import FacebookProvider from "next-auth/providers/facebook";
import GoogleProvider from "next-auth/providers/google";
import InstagramProvider from "next-auth/providers/instagram";

export const options: NextAuthOptions = {
	adapter: PrismaAdapter(db),
	providers: [
		CredentialsProvider({
			name: "credentials",
			credentials: {
				email: { label: "email", type: "text" },
				password: { label: "password", type: "password" },
			},
			async authorize(credentials) {
				if (!credentials?.email && !credentials?.password) {
					throw new Error("Email & Password is required");
				}

				const user = await db.user.findUnique({
					where: {
						email: credentials.email,
					},
				});
				if (!user || !user?.hashedPassword) {
					throw new Error("No user found. Please register");
				}
				const isCorrectPassword = await bcrypt.compare(
					credentials.password,
					user.hashedPassword
				);
				if (!isCorrectPassword) {
					throw new Error("Incorrect password");
				}

				return user;
			},
		}),
		GoogleProvider({
			clientId: process.env.GOOGLE_ID!,
			clientSecret: process.env.GOOGLE_SECRET!,
		}),
		FacebookProvider({
			clientId: process.env.FACEBOOK_ID!,
			clientSecret: process.env.FACEBOOK_SECRET!,
		}),
		InstagramProvider({
			clientId: process.env.INSTAGRAM_ID!,
			clientSecret: process.env.INSTAGRAM_SECRET!,
		}),
	],
	pages: {
		signIn: "/authentication",
		error: "/authentication",
	},
	debug: process.env.NODE_ENV === "development",
	session: {
		strategy: "jwt",
	},
	secret: process.env.NEXTAUTH_SECRET,
};
