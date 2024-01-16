import Image from "next/image";

const BlogSection = () => {
	const posts = [
		{
			image: "/assets/images/cookies.jpg",
			title: "Sugar reduction is key for a healthy future",
			date: "May 26, 2022",
			excerpt:
				"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce dictum...",
		},
		{
			image: "/assets/images/baker.jpg",
			title: "Trends food and beverage industry today",
			date: "May 26, 2022",
			excerpt:
				"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce dictum...",
		},
		{
			image: "/assets/images/banana-bread.jpg",
			title: "Going banana (bread) over bread baking",
			date: "May 26, 2022",
			excerpt:
				"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce dictum...",
		},
	];

	return (
		<section className="container mx-auto px-6 py-12">
			<p className="text-[#FF6F00] text-medium font-medium capitalize tracking-[.4em] text-center mb-4">
				BLOG POSTS
			</p>
			<h2 className="text-4xl sm:text-5xl mb-12 text-center">
				Articles About Bakery
			</h2>
			<div className="grid grid-cols-1 md:grid-cols-2 gap-4">
				{posts.map((post, index) => (
					<div
						key={index}
						className="bg-white shadow-lg rounded-lg overflow-hidden"
					>
						<div className="relative h-56 hover:rotate-3 hover:scale-105 transition duration-500">
							<Image
								src={post.image}
								alt={post.title}
								fill
								className="object-fill rounded-t-lg"
							/>
						</div>
						<div className="p-4">
							<h3 className="text-2xl font-semibold mb-2">
								{post.title}
							</h3>
							<p className="text-[#FF6F00] mb-4">{post.date}</p>
							<p className="text-gray-700 mb-4">{post.excerpt}</p>
							<a
								href="#"
								className="text-[#FF6F00] hover:border-b border-[#FF6F00] hover:text-black transition duration-300"
							>
								READ MORE
							</a>
						</div>
					</div>
				))}
			</div>
		</section>
	);
};

export default BlogSection;
