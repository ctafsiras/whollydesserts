import About from "@/components/Home/About";
import Banner from "@/components/Home/Banner";
import FeaturedFoods from "@/components/Home/FeaturedFoods";
import Menu from "@/components/Home/Menu";
import ProductSummary from "@/components/Home/ProductSummary";
import Testimonial from "@/components/Home/Testimonial";

export default function Home() {
	return (
		<main className="py-16 px-5">
			<Banner />
			<Testimonial />
			<About />
			<ProductSummary />
			<Menu />
			<FeaturedFoods />
		</main>
	);
}
