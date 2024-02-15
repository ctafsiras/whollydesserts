import UserContext from "@/app/contexts/UserProvider";
import useCart from "@/app/hooks/useCart";
import { Button, Image, useDisclosure } from "@nextui-org/react";
import { Product } from "@prisma/client";
import axios from "axios";
import { useContext, useState } from "react";
import toast from "react-hot-toast";
import LoginModal from "./LoginModal";

const ProductCard = ({ product }: { product: Product }) => {
	const { isOpen, onOpen, onOpenChange } = useDisclosure();
	const [isLoading, setIsLoading] = useState(false);
	const { id } = useContext(UserContext);
	const { refetch } = useCart();

	const handleAddToCart = async (productId: string) => {
		setIsLoading(true);

		if (!id) {
			onOpen();
			setIsLoading(false);
			return;
		}

		axios
			.post("/api/cart", { productId, id })
			.then((res) => {
				if (res.data.id) {
					refetch();
					toast.success("Product added to cart");
					setIsLoading(false);
				}
			})
			.catch((err) => {
				toast.error("Failed to add product to cart");
				setIsLoading(false);
			});
	};
	return (
		<>
			{!id && (
				<LoginModal
					isOpen={isOpen}
					onOpenChange={onOpenChange}
				/>
			)}
			<div
				key={product.id}
				className="rounded-xl bg-white text-gray-700 shadow-xl "
			>
				<div className="relative h-48 overflow-hidden rounded-t-xl">
					<Image
						src={product.image}
						alt={product.name}
						width={"100%"}
					/>
				</div>
				<div className="p-6">
					<div className="mb-2 flex items-center justify-between">
						<p className="block font-sans text-base font-medium leading-relaxed text-blue-gray-900 antialiased">
							{product.name}
						</p>
						<p className="block font-sans text-base font-medium leading-relaxed text-blue-gray-900 antialiased">
							${product.price}
						</p>
					</div>
					<p className="font-sans text-sm font-normal leading-normal text-gray-700 antialiased opacity-75 line-clamp-4">
						{product.description}
					</p>
				</div>
				<div className="p-6 pt-0 flex justify-between">
					<Button
						className="font-sans font-semibold uppercase"
						type="button"
						color="warning"
						variant="ghost"
						onClick={() => handleAddToCart(product.id)}
						isLoading={isLoading}
						disabled={isLoading}
						radius="sm"
					>
						Add to Cart
					</Button>
					<button
						className="block select-none rounded-lg bg-gradient-to-r from-amber-200 to-amber-500 py-3 px-6 text-center align-middle font-sans text-xs font-semibold uppercase transition-all duration-200 ease-in-out active:scale-105 active:opacity-[0.85] disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none ml-2 hover:shadow-lg hover:from-blue-500 hover:to-green-500 text-white hover:shadow-blue-500"
						type="button"
					>
						Order Now
					</button>
				</div>
			</div>
		</>
	);
};

export default ProductCard;
