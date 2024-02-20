import UserDetails from "@/components/Profile/UserDetails";
import { Metadata } from "next";

export const metadata: Metadata = {
	title: "Profile - Wholly Desserts",
	description: "Wholly Desserts Official Web Application",
};

export default function Profile() {
	return (
		<main>
			<h1 className="text-2xl font-bold font-sans">My Profile</h1>
			<UserDetails />
		</main>
	);
}
