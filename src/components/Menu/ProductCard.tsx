import { Button, Image, useDisclosure } from "@nextui-org/react";
import { Product } from "@prisma/client";
import axios from "axios";
import { useSession } from "next-auth/react";
import toast from "react-hot-toast";
import LoginModal from "./LoginModal";

const ProductCard = ({ product }: { product: Product }) => {
	const { isOpen, onOpen, onOpenChange } = useDisclosure();
	const { data: user, status } = useSession();
	const userEmail = user?.user?.email;
	const handleAddToCart = async (productId: string) => {
		if (!userEmail) {
			onOpen();
			return;
		}

		const res = await axios.get(`/api/user?email=${userEmail}`);
		const { id: userId } = res.data;

		axios.post("/api/cart", { productId, userId }).then((res) => {
			toast.success("Product added to cart");
			console.log(res.data);
		});
	};
	return (
		<>
			{status === "unauthenticated" && (
				<LoginModal
					isOpen={isOpen}
					onOpenChange={onOpenChange}
				/>
			)}
			<div
				key={product.id}
				className="rounded-xl bg-white bg-clip-border text-gray-700 shadow-xl"
			>
				<div className="relative mt-4 h-48 overflow-hidden rounded-t-xl">
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
					<p className="block font-sans text-sm font-normal leading-normal text-gray-700 antialiased opacity-75">
						{product.description.slice(0, 160)}...
					</p>
				</div>
				<div className="p-6 pt-0 flex justify-between">
					<Button
						className="block select-none rounded-lg bg-gradient-to-r from-amber-200 to-amber-500 py-3 px-6 text-center align-middle font-sans text-xs font-semibold uppercase transition-all duration-200 ease-in-out focus:scale-105 focus:opacity-[0.85] active:scale-100 active:opacity-[0.85] disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none mr-2 active:shadow-lg active:from-purple-400 active:via-pink-500 active:to-red-500 text-white active:shadow-purple-500"
						type="button"
						onClick={() => handleAddToCart(product.id)}
					>
						Add to Cart
					</Button>
					<button
						className="block select-none rounded-lg bg-gradient-to-r from-amber-200 to-amber-500 py-3 px-6 text-center align-middle font-sans text-xs font-semibold uppercase transition-all duration-200 ease-in-out focus:scale-105 focus:opacity-[0.85] active:scale-100 active:opacity-[0.85] disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none ml-2 hover:shadow-lg hover:from-blue-500 hover:to-green-500 text-white hover:shadow-blue-500"
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
