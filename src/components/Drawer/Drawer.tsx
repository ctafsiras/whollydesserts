"use client";

import { useSession } from "next-auth/react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { AiOutlineClose } from "react-icons/ai";
import { FaChevronDown } from "react-icons/fa";

const Drawer = ({
	isOpen,
	setIsOpen,
}: {
	isOpen: boolean;
	setIsOpen: () => void;
}) => {
	const [isDropdownOpen, setIsDropdownOpen] = useState(false);
	const { status } = useSession();
	return (
		<main
			className={`block lg:hidden fixed overflow-hidden z-10 bg-gray-900 bg-opacity-25 inset-0 transform ease-in-out ${
				isOpen
					? "transition-opacity opacity-100 duration-500 -translate-x-0 "
					: "transition-all delay-200 opacity-0 -translate-x-full"
			}`}
		>
			<section
				className={`w-11/12 left-0 absolute bg-white h-full duration-500 ease-in-out transition-all transform ${
					isOpen ? "delay-500 -translate-x-0" : "-translate-x-full"
				}`}
			>
				<header className="p-4 flex items-center justify-between">
					<Image
						src={"/assets/images/logo.png"}
						alt=""
						width={200}
						height={50}
					/>

					<AiOutlineClose
						className="cursor-pointer w-6 h-6"
						onClick={setIsOpen}
					/>
				</header>
				<ul className="pl-8 pt-10 flex flex-col space-y-4 font-sans uppercase">
					<Link
						href="/"
						className="nav-link"
						onClick={setIsOpen}
					>
						Home
					</Link>
					<Link
						href="/about"
						className="nav-link"
						onClick={setIsOpen}
					>
						About
					</Link>
					<Link
						href="/menu"
						className="nav-link"
						onClick={setIsOpen}
					>
						Menu
					</Link>
					{status === "authenticated" && (
						<li>
							<span
								className="nav-link flex items-center gap-2"
								onClick={() =>
									setIsDropdownOpen(!isDropdownOpen)
								}
							>
								Pages <FaChevronDown size={20} />
							</span>
							<ul
								className={`${
									isDropdownOpen ? "block" : "hidden"
								} pl-5 space-y-4 mt-4`}
							>
								<Link
									href="/dashboard"
									className="nav-link"
									onClick={setIsOpen}
								>
									Dashboard
								</Link>
							</ul>
						</li>
					)}
					<Link
						href="/contact"
						className="nav-link"
						onClick={setIsOpen}
					>
						Contact
					</Link>
					{status === "unauthenticated" && (
						<Link
							href="/authentication"
							className="nav-link"
							onClick={setIsOpen}
						>
							Login
						</Link>
					)}
				</ul>
			</section>
		</main>
	);
};

export default Drawer;
