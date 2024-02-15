"use client";

import { User } from "@prisma/client";
import { useSession } from "next-auth/react";
import React, { createContext, useEffect, useState } from "react";

const UserContext = createContext({} as User);

export const UserProvider = ({ children }: { children: React.ReactNode }) => {
	const [user, setUser] = useState({} as User);
	const { data: session } = useSession();

	useEffect(() => {
		const fetchUserData = async () => {
			try {
				if (session?.user?.email) {
					const response = await fetch(
						`/api/user?email=${session?.user?.email}`
					);
					const data = await response.json();
					setUser(data);
				}
			} catch (error) {
				console.error("Error fetching user data:", error);
			}
		};

		fetchUserData();
	}, [session?.user?.email]);

	return <UserContext.Provider value={user}>{children}</UserContext.Provider>;
};

export default UserContext;
