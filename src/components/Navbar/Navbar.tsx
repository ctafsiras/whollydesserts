"use client";

import UserContext from "@/app/contexts/UserProvider";
import useCart from "@/app/hooks/useCart";
import {
	Avatar,
	Button,
	Dropdown,
	DropdownItem,
	DropdownMenu,
	DropdownTrigger,
	NavbarBrand,
	NavbarContent,
	NavbarItem,
	NavbarMenu,
	NavbarMenuItem,
	NavbarMenuToggle,
	Navbar as NextuiNavbar,
} from "@nextui-org/react";
import { signOut } from "next-auth/react";
import Image from "next/image";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { useContext, useState } from "react";
import Logo from "../../../public/assets/images/logo.png";
import "./Navbar.css";

const Navbar = () => {
	const [isMenuOpen, setIsMenuOpen] = useState(false);
	const pathname = usePathname();
	const { id, name, email, image } = useContext(UserContext);
	const { cart } = useCart();

	const navItems = [
		{ label: "Home", link: "/" },
		{ label: "About", link: "/about" },
		{ label: "Menu", link: "/menu" },
		{ label: "Contact", link: "/contact" },
	];

	return (
		<NextuiNavbar
			onMenuOpenChange={setIsMenuOpen}
			shouldHideOnScroll
			isBordered
			maxWidth="xl"
			className={`${
				(pathname === "/dashboard" ||
					pathname === "/dashboard/items" ||
					pathname === "/dashboard/additem" ||
					pathname === "/dashboard/users") &&
				"hidden"
			}`}
		>
			<NavbarContent>
				<NavbarMenuToggle
					aria-label={isMenuOpen ? "Close menu" : "Open menu"}
					className="sm:hidden"
				/>
				<NavbarBrand>
					<Link href={"/"}>
						<Image
							src={Logo}
							alt="logo"
							width={150}
							height={50}
							className="active:scale-105 lg:active:scale-100 lg:hover:-translate-y-2 transition duration-500"
						/>
					</Link>
				</NavbarBrand>
			</NavbarContent>
			<NavbarContent
				className="hidden sm:flex gap-10 font-sans"
				justify="center"
			>
				{navItems.map((navItem) => (
					<NavbarItem key={navItem.link}>
						<Link
							href={navItem.link}
							className={`nav-link ${
								pathname === navItem.link && "active-link"
							}`}
						>
							{navItem.label}
						</Link>
					</NavbarItem>
				))}
			</NavbarContent>
			<NavbarContent
				justify="end"
				className="font-sans"
			>
				{id ? (
					<Dropdown placement="bottom-end">
						<DropdownTrigger>
							<Avatar
								isBordered
								as="button"
								className="transition-transform font-sans"
								color="secondary"
								name={name}
								size="sm"
								src={image}
							/>
						</DropdownTrigger>
						<DropdownMenu
							aria-label="Profile Actions"
							variant="flat"
							className="font-sans"
						>
							<DropdownItem
								key="profile"
								className="h-14 gap-2"
							>
								<p className="font-semibold">Signed in as</p>
								<p className="font-semibold">{email}</p>
							</DropdownItem>
							<DropdownItem
								as={Link}
								href={"/dashboard"}
								key="dashboard"
							>
								Dashboard
							</DropdownItem>
							<DropdownItem
								as={Link}
								href={"/cart"}
								key="cart"
							>
								Cart ({cart.length})
							</DropdownItem>
							<DropdownItem
								as={Button}
								key="logout"
								color="danger"
								onPress={() => signOut()}
							>
								Log Out
							</DropdownItem>
						</DropdownMenu>
					</Dropdown>
				) : (
					<NavbarItem>
						<Button
							as={Link}
							color="warning"
							href="/authentication"
							variant="solid"
							className="font-bold"
						>
							Login
						</Button>
					</NavbarItem>
				)}
			</NavbarContent>
			<NavbarMenu>
				{navItems.map((item) => (
					<NavbarMenuItem key={item.link}>
						<Link
							className="w-full font-sans "
							href={item.link}
						>
							{item.label}
						</Link>
					</NavbarMenuItem>
				))}
			</NavbarMenu>
			{/* <nav className="hidden lg:block">
					<ul className="flex gap-10 font-sans">
						{id && (
							<Dropdown>
								<DropdownTrigger>
									<li className="nav-link flex items-center gap-2 uppercase">
										Pages
										<FaChevronDown />
									</li>
								</DropdownTrigger>
								<DropdownMenu
									aria-label="Static Actions"
									className="text-black font-sans"
								>
									<DropdownItem
										key="dashboard"
										onClick={() =>
											router.push("/dashboard")
										}
									>
										Dashboard
									</DropdownItem>
								</DropdownMenu>
							</Dropdown>
						)}
					</ul>
				</nav>
				<div className="flex gap-6"></div> */}
		</NextuiNavbar>
	);
};

export default Navbar;
