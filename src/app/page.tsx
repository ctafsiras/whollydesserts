import About from "@/components/Home/About";
import Banner from "@/components/Home/Banner";
import ProductSummary from "@/components/Home/ProductSummary";
import Testimonial from "@/components/Home/Testimonial";

export default function Home() {
	return (
		<main className="py-16 px-5">
			<Banner />
			<Testimonial />
			<About />
			<ProductSummary />
		</main>
	);
}
