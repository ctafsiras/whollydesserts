import prisma from "@/app/libs/prismadb";
import { NextRequest } from "next/server";

export async function GET(req: NextRequest) {
	const users = await prisma.user.findMany();
	return Response.json(users);
}
