import Image from "next/image";

const Footer = () => {
	return (
		<footer className="bg-gray-800 text-white px-20 py-6">
			<section className="flex flex-col justify-between items-start sm:flex-row sm:justify-between">
				<div className="flex flex-col space-y-3">
					<Image
						src="/assets/images/logo-footer.png"
						alt=""
						width={200}
						height={50}
					/>
					<p>
						Lorem ipsum dolor sit, amet consectetur adipisicing
						elit.
					</p>
					<div className="flex gap-4 text-[#FF6F00]">
						<a
							href="https://www.facebook.com"
							className="hover:text-white"
						>
							FB
						</a>
						<a
							href="https://www.twitter.com"
							className="hover:text-white"
						>
							TW
						</a>
						<a
							href="https://www.linkedin.com"
							className="hover:text-white"
						>
							LN
						</a>
						<a
							href="https://www.instagram.com"
							className="hover:text-white"
						>
							IG
						</a>
					</div>
				</div>
				<nav>
					<h1>Get In Touch</h1>
					<h5>457 Morningview Lane, NY</h5>
					<h5>example@mail.com</h5>
					<h5>+1 (234) 567 890</h5>
					<h5>Mon - Fri: 09.00 - 16.00</h5>
				</nav>
				<nav>
					<h1>About Us</h1>
					<h5>Our Story</h5>
					<h5>Visit Us</h5>
					<h5>FAQs Page</h5>
					<h5>Blog Post</h5>
					<h5>Contact</h5>
				</nav>
				<nav>
					<h1>Latest News</h1>
					<h5>
						26 MAY 2022 <br /> Sugar reduction is key for a healthy
						future
					</h5>
					<h5>
						26 MAY 2022 <br /> Trends food and beverage industry
						today
					</h5>
					<h5>
						26 MAY 2022 <br /> Going banana (bread) over bread
						baking
					</h5>
				</nav>
			</section>
		</footer>
	);
};

export default Footer;
