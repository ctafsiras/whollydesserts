import FeaturedFood1 from "@/../public/assets/images/featuredFood1.jpg";
import FeaturedFood2 from "@/../public/assets/images/featuredFood2.jpg";
import FeaturedFood3 from "@/../public/assets/images/featuredFood3.jpg";
import FeaturedFood4 from "@/../public/assets/images/featuredFood4.jpg";
import Image from "next/image";
import "./FeaturedFoods.css";

const FeaturedFoods = () => {
	return (
		<section className="max-h-screen py-20 grid gap-5 grid-cols-2 md:grid-cols-4">
			<Image
				src={FeaturedFood1}
				alt=""
				className="featuredFood hover:-translate-y-2 transition duration-500"
			/>
			<Image
				src={FeaturedFood2}
				alt=""
				className="featuredFood hover:-translate-y-2 transition duration-500"
			/>
			<Image
				src={FeaturedFood3}
				alt=""
				className="featuredFood hover:-translate-y-2 transition duration-500"
			/>
			<Image
				src={FeaturedFood4}
				alt=""
				className="featuredFood hover:-translate-y-2 transition duration-500"
			/>
		</section>
	);
};

export default FeaturedFoods;
