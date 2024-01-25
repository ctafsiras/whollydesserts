"use client";

import Image from "next/image";
import { useState } from "react";
import { FaChevronDown } from "react-icons/fa";
import { RiMenu3Fill } from "react-icons/ri";
import { TbSearch } from "react-icons/tb";
import Drawer from "../Drawer/Drawer";

import {
	Dropdown,
	DropdownItem,
	DropdownMenu,
	DropdownTrigger,
} from "@nextui-org/react";
import { signOut, useSession } from "next-auth/react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { IoMdLogOut } from "react-icons/io";
import "./Navbar.css";

const Navbar = () => {
	const [isDrawerOpen, setIsDrawerOpen] = useState(false);
	const pathname = usePathname();
	const { status } = useSession();
	return (
		<>
			<Drawer
				isOpen={isDrawerOpen}
				setIsOpen={() => setIsDrawerOpen(!isDrawerOpen)}
			/>
			<section className="flex justify-between items-center py-5 px-5 md:pt-2 lg:px-2 lg:py-7 max-w-screen-md lg:max-w-full xl:max-w-screen-xl mx-auto border-b border-gray-100">
				<div className="relative w-32 h-7 md:w-32">
					<Image
						src="/assets/images/logo.png"
						alt=""
						fill
						className="hover:-translate-y-2 transition duration-500 cursor-pointer"
					/>
				</div>
				<nav className="hidden lg:block">
					<ul className="flex gap-10 font-sans">
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
						{status === "authenticated" && (
							<Dropdown>
								<DropdownTrigger>
									<li className="nav-link flex items-center gap-2">
										Open Menu
										<FaChevronDown />
									</li>
								</DropdownTrigger>
								<DropdownMenu
									aria-label="Static Actions"
									className="text-black"
								>
									<DropdownItem
										key="dashboard"
										href="/dashboard"
									>
										Dashboard
									</DropdownItem>
								</DropdownMenu>
							</Dropdown>
						)}
						<Link
							href={"/contact"}
							className={`nav-link ${
								pathname === "/contact" && "active-link"
							}`}
						>
							CONTACT
						</Link>
						{status === "unauthenticated" && (
							<Link
								href={"/authentication"}
								className={`nav-link uppercase ${
									pathname === "/authentication" &&
									"active-link"
								}`}
							>
								Register
							</Link>
						)}
					</ul>
				</nav>
				<div className="flex gap-6">
					<TbSearch className="cursor-pointer w-6 h-6 hover:text-[#FF6F00] transition duration-300" />
					{status === "authenticated" && (
						<IoMdLogOut
							className="cursor-pointer w-6 h-6 hover:text-[#FF6F00] transition duration-300"
							onClick={() => signOut()}
						/>
					)}
					<RiMenu3Fill
						className="cursor-pointer w-6 h-6 hover:text-[#FF6F00] transition duration-300 lg:hidden"
						onClick={() => setIsDrawerOpen(true)}
					/>
				</div>
			</section>
		</>
	);
};

export default Navbar;
