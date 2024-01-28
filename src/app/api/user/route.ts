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
