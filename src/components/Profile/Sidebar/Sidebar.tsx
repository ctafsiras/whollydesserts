"use client";

import UserContext from "@/app/contexts/UserProvider";
import Link from "next/link";
import { useContext } from "react";

const Sidebar = () => {
	const { name } = useContext(UserContext);
	const navLinks = [
		{
			name: "My Profile",
			href: "/profile",
		},
		{
			name: "Address Book",
			href: "/profile/addressbook",
		},
		{
			name: "Ordered Items",
			href: "/profile/ordereditems",
		},
	];

	return (
		<section className="w-3/12 h-lvh px-10 py-5 bg-cyan-800 text-white">
			<h1 className="text-2xl text-center font-sans font-bold line-clamp-1">
				Hello, {name}
			</h1>
			<ul className="mt-5 text-xl font-sans uppercase list-inside list-disc">
				{navLinks.map((link) => (
					<li key={link.href}>
						<Link
							href={link.href}
							className="bg-gradient-to-r from-white to-white bg-[length:0%_2px] hover:bg-[length:100%_2px] bg-no-repeat bg-left-bottom transition-[background-size] duration-300 ease-in-out"
						>
							{link.name}
						</Link>
					</li>
				))}
			</ul>

			<div className="my-5 border-y" />

			<ul className="text-xl font-sans uppercase">
				<li>
					<Link href="/">Home</Link>
				</li>
				<li>
					<Link href="/about">About</Link>
				</li>
				<li>
					<Link href="/menu">Menu</Link>
				</li>
				<li>
					<Link href="/contact">Contact</Link>
				</li>
			</ul>
		</section>
	);
};

export default Sidebar;
