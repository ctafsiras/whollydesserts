import Image from "next/image";

const About = () => {
	return (
		<section className="container mx-auto px-4">
			<Image
				src="/assets/images/about.jpg"
				alt="Section Image"
				width={1200}
				height={600}
			/>
		</section>
	);
};

export default About;
