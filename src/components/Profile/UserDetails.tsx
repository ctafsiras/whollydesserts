"use client";

import UserContext from "@/app/contexts/UserProvider";
import { Avatar } from "@nextui-org/react";
import { useContext } from "react";

const UserDetails = () => {
	const user = useContext(UserContext);

	return (
		<div>
			<Avatar
				src={user.image}
				className="w-20 h-20 text-large"
			/>

			<h1>Name: {user.name}</h1>
			<h1>Email: {user.email}</h1>
		</div>
	);
};

export default UserDetails;
