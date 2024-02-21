import db from "@/app/libs/prismadb";

export const fetchUser = async (email: string) => {
	if (!email) return { error: "Email is required" };
	const user = await db.user
		.findUnique({
			where: {
				email,
			},
			include: {
				cart: true,
				shippingAddresses: true,
			},
		})
		.catch((error) => {
			return { error: error.message };
		});

	if (user) return { success: true, data: user };
};
