import { NextApiResponse } from "next";
import { NextRequest } from "next/server";

export default function handler(req: NextRequest, res: NextApiResponse) {
	if (req.method === "GET") {
		res.status(200).json({ message: "GET request to user API" });
	} else if (req.method === "POST") {
		res.status(200).json({ message: "POST request to user API" });
	} else {
		res.status(405).json({ message: "Method Not Allowed" });
	}
}
