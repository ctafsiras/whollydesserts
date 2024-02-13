import { Product } from "@prisma/client";
import Image from "next/image";

const CartItem = ({ product }: { product: Product }) => {
	return (
		<div className="flex items-center justify-between mb-4">
			<Image
				src={product.image}
				alt=""
				width={100}
				height={100}
			/>
			<div>
				<h1 className="uppercase text-xl font-bold">{product.name}</h1>
				{/* <span>{product.size}</span> */}
			</div>
			<h2 className="font-bold">${product.price}</h2>
			<span className="cursor-pointer">&times;</span>
		</div>
	);
};

export default CartItem;
