import prisma from "@/app/libs/prismadb";
import { type NextRequest } from "next/server";

export async function GET(request: NextRequest) {
	const searchParams = request.nextUrl.searchParams;
	const email = searchParams.get("email");

	if (!email) {
		return Response.json({ message: "Email required", status: 400 });
	}

	try {
		const user = await prisma.user.findUnique({
			where: {
				email,
			},
		});

		return Response.json({ ...user });
	} catch (err) {
		console.error(err);
	}
}
export async function PUT(request: NextRequest) {
	const data = await request.json();
	const { id, ...updatedData } = data;

	const updatedUser = await prisma.user.update({
		where: {
			id: id,
		},
		data: {
			...updatedData,
		},
	});

	return Response.json({ ...updatedUser });
}
