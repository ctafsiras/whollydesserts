import About from "@/components/Home/About";
import Banner from "@/components/Home/Banner";
import BreadSelection from "@/components/Home/BreadSelection";
import BreadSelectionTutorial from "@/components/Home/BreadSelectionTutorial";
import FeaturedFoods from "@/components/Home/FeaturedFoods";
import Menu from "@/components/Home/Menu";
import ProductSummary from "@/components/Home/ProductSummary";
import PromoSection from "@/components/Home/PromoSection";
import TeamSection from "@/components/Home/TeamSection";
import Testimonial from "@/components/Home/Testimonial";
import WorkSummary from "@/components/Home/WorkSummary";

export default function Home() {
	return (
		<main>
			<Banner />
			<Testimonial />
			<About />
			<ProductSummary />
			<Menu />
			<FeaturedFoods />
			<BreadSelection />
			<WorkSummary />
			<BreadSelectionTutorial />
			<PromoSection />
			<TeamSection />
		</main>
	);
}
