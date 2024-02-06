"use client";

import { Spinner } from "@nextui-org/react";
import { Product } from "@prisma/client";
import { useEffect, useState } from "react";
import ProductCard from "./ProductCard";

const Products = () => {
	const [products, setProducts] = useState([] as Product[]);
	useEffect(() => {
		fetch("/api/products")
			.then((res) => res.json())
			.then((data) => setProducts(data));
	}, []);
	return (
		<section className="py-8 mx-3 md:mx-14">
			<h1 className="text-3xl text-center font-sans uppercase">
				Menu Items
			</h1>
			<div className="gap-5 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 justify-center">
				{products.map((product: Product) => (
					<ProductCard
						key={product.id}
						product={product}
					/>
				))}
			</div>
			{!products.length && (
				<div className="text-center my-5">
					<Spinner
						color="warning"
						size="lg"
					/>
				</div>
			)}
		</section>
	);
};

export default Products;
