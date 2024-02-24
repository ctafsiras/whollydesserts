"use client";

import { useUser } from "@/app/hooks/useUser";
import AddressCard from "@/components/Profile/AddressCard";

export default function AddressBook() {
	const { data: user } = useUser();
	return (
		<main>
			<h1 className="text-2xl text-center font-bold font-sans uppercase">
				Address Book
			</h1>
			<section className="mt-8 grid grid-cols-2 gap-5">
				{user?.shippingAddresses.map((address) => (
					<AddressCard
						key={address.id}
						address={address}
					/>
				))}
			</section>
		</main>
	);
}
