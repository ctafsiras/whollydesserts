import Logo from "@/../public/assets/images/logo-footer.png";
import Image from "next/image";
import Link from "next/link";

const Sidebar = () => {
	return (
		<section className="px-10 py-5 bg-orange-400 text-white h-full overflow-y-hidden">
			<Image
				src={Logo}
				alt="Logo"
				width={130}
			/>
			<ul className="mt-10 text-xl font-sans uppercase list-inside list-disc">
				<li>
					<Link href="/dashboard/additem">Add Item</Link>
				</li>
				<li>
					<Link href="#">Items</Link>
				</li>
				<li>
					<Link href="#">Users</Link>
				</li>
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
					<Link href="/contact">Contact</Link>
				</li>
			</ul>
		</section>
	);
};

export default Sidebar;
