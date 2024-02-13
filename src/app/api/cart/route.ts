import prisma from "@/app/libs/prismadb";
import { NextRequest } from "next/server";

export async function POST(request: NextRequest) {
	try {
		const { userId, productId } = await request.json();

		const user = await prisma.user.findUnique({
			where: { id: userId },
		});

		if (!user) {
			return Response.json({ error: "User not found" }, { status: 404 });
		}

		const product = await prisma.product.findUnique({
			where: { id: productId },
		});

		if (!product) {
			return Response.json(
				{ error: "Product not found" },
				{ status: 404 }
			);
		}

		let cartItem = await prisma.cart.findFirst({
			where: {
				userId: userId,
				productId: productId,
			},
			include: {
				product: true,
				user: true,
			},
		});

		if (!cartItem) {
			cartItem = await prisma.cart.create({
				data: {
					userId: userId,
					productId: productId,
					quantity: 1,
				},
				include: {
					product: true,
					user: true,
				},
			});
		} else {
			cartItem = await prisma.cart.update({
				where: {
					id: cartItem.id,
				},
				data: {
					quantity: {
						increment: 1,
					},
				},
				include: {
					product: true,
					user: true,
				},
			});
		}

		return Response.json(cartItem);
	} catch (error: any) {
		console.log("ADD_TO_CART_ERROR", error);
		return new Response("Internal Server Error", { status: 500 });
	}
}
export async function GET(request: NextRequest) {
	try {
		const searchParams = request.nextUrl.searchParams;
		const userId = searchParams.get("userId");
		if (!userId) {
			return Response.json({
				message: "User not found. User ID required",
				status: 404,
			});
		}

		const cartItems = await prisma.cart.findMany({
			where: {
				userId,
			},
			include: {
				product: true,
				user: true,
			},
		});

		return Response.json(cartItems);
	} catch (error: any) {
		console.log("ADD_TO_CART_ERROR", error);
		return new Response("Internal Server Error", { status: 500 });
	}
}
