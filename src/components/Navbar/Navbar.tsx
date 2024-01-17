"use client";

import Image from "next/image";
import { useState } from "react";
import { RiMenu3Fill } from "react-icons/ri";
import { TbSearch } from "react-icons/tb";
import Drawer from "../Drawer/Drawer";
import { FaChevronDown } from "react-icons/fa";

import "./Navbar.css";
import Link from "next/link";
import { usePathname } from "next/navigation";

const Navbar = () => {
	const [isDrawerOpen, setIsDrawerOpen] = useState(false);
	const pathname = usePathname();

	return (
		<>
			<Drawer
				isOpen={isDrawerOpen}
				setIsOpen={() => setIsDrawerOpen(!isDrawerOpen)}
			/>
			<section className="flex justify-between items-center pt-5 px-5 md:pt-2 lg:px-2 lg:py-7 max-w-screen-md lg:max-w-full xl:max-w-screen-xl mx-auto border-b border-gray-100">
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
						<Link
							href={"/"}
							className={`nav-link ${
								pathname === "/" && "active-link"
							}`}
						>
							HOME
						</Link>
						<Link
							href={"/about"}
							className={`nav-link ${
								pathname === "/about" && "active-link"
							}`}
						>
							ABOUT
						</Link>
						<Link
							href={"/menu"}
							className={`nav-link ${
								pathname === "/menu" && "active-link"
							}`}
						>
							MENU
						</Link>
						<li className="nav-link flex items-center gap-2">
							PAGES <FaChevronDown />
						</li>
						<Link
							href={"/contact"}
							className={`nav-link ${
								pathname === "/contact" && "active-link"
							}`}
						>
							CONTACT
						</Link>
					</ul>
				</nav>
				<div className="flex gap-6">
					<TbSearch className="cursor-pointer w-6 h-6 hover:text-[#FF6F00] transition duration-300" />
					<RiMenu3Fill
						className="cursor-pointer w-6 h-6 hover:text-[#FF6F00] transition duration-300"
						onClick={() => setIsDrawerOpen(true)}
					/>
				</div>
			</section>
		</>
	);
};

export default Navbar;
