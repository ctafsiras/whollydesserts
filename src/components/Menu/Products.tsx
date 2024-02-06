import { Product } from "@prisma/client";
import axios from "axios";
import ProductCard from "./ProductCard";

const Products = async () => {
	const { data: products } = await axios.get(
		"http://localhost:3000/api/products"
	);
	return (
		<section className="gap-x-2 gap-y-5 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 mx-14 py-8">
			{products.map((product: Product) => (
				<ProductCard
					key={product.id}
					product={product}
				/>
			))}
		</section>
	);
};

export default Products;
