"use client";

import { User } from "@prisma/client";
import axios from "axios";
import { useSession } from "next-auth/react";
import React, { createContext } from "react";

const UserContext = createContext({} as User);

export const UserProvider = async ({
	children,
}: {
	children: React.ReactNode;
}) => {
	const { data: session } = useSession();
	const email = session?.user?.email;

	const res = await axios.get(`/api/user?email=${email}`);
	const user = res.data;

	return <UserContext.Provider value={user}>{children}</UserContext.Provider>;
};

export default UserContext;
