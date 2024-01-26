import prisma from "../libs/prismadb";

const getCurrentUser = async (userEmail: string | undefined) => {
	if (!userEmail) return null;

	const user = await prisma.user.findUnique({
		where: {
			email: userEmail,
		},
	});

	return user;
};

export default getCurrentUser;
