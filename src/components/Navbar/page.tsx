import Image from "next/image";
import "./Navbar.css";

const Navbar = () => {
	return (
		<section className="flex justify-between items-center py-7 px-16">
			<Image
				src="/assets/images/logo.png"
				alt=""
				width={130}
				height={130}
				className="hover:-translate-y-2 transition duration-500 cursor-pointer"
			/>
			<nav>
				<ul className="flex gap-10">
					<li className="nav-link">HOME</li>
					<li className="nav-link">ABOUT</li>
					<li className="nav-link">MENU</li>
					<li className="flex gap-2 nav-link">
						PAGES ∨{" "}
						{/* <Image
							src="/assets/icons/chevronDown.svg"
							alt=""
							width={15}
							height={15}
						/> */}
					</li>
					<li className="nav-link">CONTACT</li>
				</ul>
			</nav>
			<div className="flex gap-10">
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
				/>
			</div>
		</section>
	);
};

export default Navbar;
