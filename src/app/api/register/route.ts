import prisma from "@/app/libs/prismadb";
import bcrypt from "bcrypt";
import { NextResponse } from "next/server";

export async function POST(request: Request) {
	try {
		const { name, email, password } = await request.json();

		const hashedPassword = await bcrypt.hash(password, password.length * 2);

		const userAlreadyExists = await prisma.user.findUnique({
			where: {
				email: email,
			},
		});
		if (userAlreadyExists) {
			return new NextResponse("User already exists. Please login", {
				status: 400,
			});
		}

		const user = await prisma.user.create({
			data: {
				name: name,
				email: email,
				hashedPassword: hashedPassword,
			},
		});

		return NextResponse.json(user);
	} catch (error: any) {
		console.log(error, "REGISTRATION_ERROR");
		return new NextResponse("Internal Error", { status: 500 });
	}
}
