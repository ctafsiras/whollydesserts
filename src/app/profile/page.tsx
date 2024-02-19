import ProfileUpdateForm from "@/components/Profile/ProfileUpdateForm";
import { Metadata } from "next";

export const metadata: Metadata = {
	title: "Profile - Wholly Desserts",
	description: "Wholly Desserts Official Web Application",
};

export default function Profile() {
	return (
		<main>
			<ProfileUpdateForm />
		</main>
	);
}
