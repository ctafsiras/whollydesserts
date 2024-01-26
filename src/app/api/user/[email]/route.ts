import prisma from "@/app/libs/prismadb";

export async function GET(
  request: Request,
  { params }: { params: { email: string } }
) {
  const email = params.email;
  const data = await request.text();
  try {
    const user = await prisma.user.findUnique({
      where: { email },
    });
    console.log(data);
    return Response.json({ user, data });
  } catch (err) {
    console.error(err);
  }
}
