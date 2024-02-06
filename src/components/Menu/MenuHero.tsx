import DishImage from "@/../public/assets/images/dish.jpeg";
import Image from "next/image";

const MenuHero = () => {
	return (
		<section className="flex gap-x-24 items-center justify-around py-8 mx-14 font-sans">
			<div className="flex-[2] mr-10">
				<h1 className="text-4xl font-bold text-gray-800">
					Fresh & Healthy Organic Food
				</h1>
				<p className="text-gray-600 mt-4">
					Lorem ipsum dolor sit amet consectetur adipiscing elit sed
					do eiusmod tempor incididunt ut labore et dolore magna
					aliqua. Ut enim ad minim veniam quis nostrud exercitation
					ullamco laboris nisi ut aliquip ex ea commodo consequat duis
					aute irure dolor in reprehenderit in voluptate velit esse
					cillum dolore eu fugiat nulla pariatur excepteur sint
					occaecat cupidatat non proident sunt in culpa qui officia
					deserunt mollit anim id est laborum.
				</p>
				<div className="mt-6">
					<button className="bg-green-500 text-white px-4 py-2 rounded mr-4">
						Learn More
					</button>
					<button className="bg-gray-200 text-gray-800 px-4 py-2 rounded">
						See Video
					</button>
				</div>
			</div>
			<div className="flex-1">
				<Image
					src={DishImage}
					alt="Dish"
					width={800}
					height={600}
				/>
			</div>
		</section>
	);
};

export default MenuHero;
