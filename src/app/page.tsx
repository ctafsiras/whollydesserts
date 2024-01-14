import About from "@/components/Home/About";
import Banner from "@/components/Home/Banner";
import Testimonial from "@/components/Home/Testimonial";

export default function Home() {
	return (
		<main className="py-16 px-5">
			<Banner />
			<Testimonial />
			<About />
		</main>
	);
}
