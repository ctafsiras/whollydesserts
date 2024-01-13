"use client";

import Image from "next/image";
import { useState } from "react";
import Drawer from "../Drawer/Drawer";
import "./Navbar.css";

const Navbar = () => {
	const [isDrawerOpen, setIsDrawerOpen] = useState(false);

	return (
		<>
			<Drawer
				isOpen={isDrawerOpen}
				setIsOpen={() => setIsDrawerOpen(!isDrawerOpen)}
			/>
			<section className="flex justify-between items-center pt-5 px-5 md:pt-2 lg:px-2 lg:py-7 max-w-screen-md lg:max-w-full xl:max-w-screen-xl mx-auto">
				<div className="relative w-32 h-7 md:w-32">
					<Image
						src="/assets/images/logo.png"
						alt=""
						fill
						className="hover:-translate-y-2 transition duration-500 cursor-pointer"
					/>
				</div>
				<nav className="hidden lg:block">
					<ul className="flex gap-10">
						<li className="nav-link">HOME</li>
						<li className="nav-link">ABOUT</li>
						<li className="nav-link">MENU</li>
						<li className="nav-link">PAGES ∨</li>
						<li className="nav-link">CONTACT</li>
					</ul>
				</nav>
				<div className="flex gap-6">
					<Image
						src="/assets/icons/search.svg"
						alt=""
						width={20}
						height={20}
						className="cursor-pointer"
					/>
					<Image
						src="/assets/icons/hamburger.svg"
						alt=""
						width={20}
						height={20}
						className="cursor-pointer"
						onClick={() => setIsDrawerOpen(true)}
					/>
				</div>
			</section>
		</>
	);
};

export default Navbar;
