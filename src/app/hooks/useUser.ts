"use client";

import { User } from "@prisma/client";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { useSession } from "next-auth/react";

export const useUser = () => {
	const { data: session } = useSession();

	const result = useQuery<User>({
		queryKey: ["user", session?.user?.email],
		enabled: !!session?.user?.email,
		queryFn: async () => {
			const res = await axios(`/api/user?email=${session?.user?.email}`);
			return res.data;
		},
	});

	return { ...result };
};
