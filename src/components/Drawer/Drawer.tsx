import Image from "next/image";
import { useState } from "react";

const Drawer = ({
	isOpen,
	setIsOpen,
}: {
	isOpen: boolean;
	setIsOpen: () => void;
}) => {
	const [isDropdownOpen, setIsDropdownOpen] = useState(false);
	return (
		<main
			className={`fixed overflow-hidden z-10 bg-gray-900 bg-opacity-25 inset-0 transform ease-in-out ${
				isOpen
					? "transition-opacity opacity-100 duration-500 translate-x-0 "
					: "transition-all delay-500 opacity-0 translate-x-full"
			}`}
		>
			<section
				className={`w-11/12 left-0 absolute bg-white h-full delay-400 duration-500 ease-in-out transition-all transform ${
					isOpen ? " translate-x-0 " : " translate-x-full "
				}`}
			>
				<header className="p-4 flex items-center justify-between">
					<Image
						src={"/assets/images/logo.png"}
						alt=""
						width={200}
						height={50}
					/>
					<Image
						src={"/assets/icons/xmark.svg"}
						alt=""
						width={20}
						height={20}
						onClick={() => setIsOpen()}
					/>
				</header>
				<ul className="pl-8 pt-10 space-y-4">
					<li className="nav-link">HOME</li>
					<li className="nav-link">ABOUT</li>
					<li className="nav-link">MENU</li>
					<li>
						<span
							className="nav-link"
							onClick={() => setIsDropdownOpen(!isDropdownOpen)}
						>
							PAGES V
						</span>
						<ul
							className={`${
								isDropdownOpen ? "block" : "hidden"
							} pl-5 space-y-4 mt-4`}
						>
							<li className="nav-link">KITCHEN</li>
							<li className="nav-link">REVIEWS</li>
							<li className="nav-link">SERVICES</li>
							<li className="nav-link">TEAM</li>
							<li className="nav-link">FAQS</li>
							<li className="nav-link">BLOG</li>
							<li className="nav-link">SINGLE POST</li>
							<li className="nav-link">404 PAGE</li>
						</ul>
					</li>
					<li className="nav-link">CONTACT</li>
				</ul>
			</section>
		</main>
	);
};

export default Drawer;
