import prisma from "@/app/libs/prismadb";

export async function GET(
  request: Request,
  { params }: { params: { email: string } }
) {
  const email = params.email;
  try {
    const user = await prisma.user.findUnique({
      where: { email },
    });
    return Response.json({ user });
  } catch (err) {
    console.error(err);
  }
}
