import prisma from "@/app/libs/prismadb";
import { NextRequest } from "next/server";

export async function POST(req: NextRequest) {
	const data = await req.json();

	const product = await prisma.product.create({
		data: {
			...data,
		},
	});

	console.log(data);
	return Response.json(product);
}
