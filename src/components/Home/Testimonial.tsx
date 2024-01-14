"use client";

import { useEffect, useState } from "react";

const Testimonial = () => {
	const [activeSlide, setActiveSlide] = useState(0);
	const testimonials = [
		{
			id: 1,
			ratings: 5,
			review: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Provident odit voluptatum animi explicabo inventore nobis. Recusandae placeat minus amet perferendis.",
			writter: "John Doe",
		},
		{
			id: 2,
			ratings: 3,
			review: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos eum voluptas pariatur, tenetur, commodi, modi incidunt vero et officiis non provident eveniet sit?",
			writter: "Jacob Smith",
		},
		{
			id: 3,
			ratings: 4,
			review: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Et alias sint eligendi hic, adipisci temporibus ea fugit mollitia reiciendis, eius repellendus dignissimos deserunt dolorem animi!",
			writter: "Hailee Stanford",
		},
	];

	useEffect(() => {
		const interval = setInterval(() => {
			setActiveSlide(
				(prevSlide) => (prevSlide + 1) % testimonials.length
			);
		}, 5000);
		return () => clearInterval(interval);
	}, [activeSlide, testimonials.length]);

	return (
		<div className="py-40 lg:w-1/2 mx-auto">
			{testimonials.map(
				(item, i) =>
					i === activeSlide && (
						<div
							key={item.id}
							className="flex flex-col items-center gap-y-3"
						>
							<p className="text-[#FF6F00] text-xl capitalize tracking-[.4em]">
								{Array(item.ratings).fill("⭐").join("")}
							</p>
							<h1 className="text-xl text-center">
								{item.review}
							</h1>
							<p className="text-gray-500 text-lg">
								{item.writter}
							</p>
						</div>
					)
			)}
		</div>
	);
};

export default Testimonial;
