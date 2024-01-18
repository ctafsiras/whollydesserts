import OurStory from "@/components/About/OurStory";
import PageHeader from "@/components/PageHeader/PageHeader";
import { BreadcrumbItem, Breadcrumbs } from "@nextui-org/react";

export default function About() {
	return (
		<main className="">
			<PageHeader title="About Us" />
			<OurStory />
		</main>
	);
}
