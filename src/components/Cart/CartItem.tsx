import { Button } from "@nextui-org/react";
import { Product } from "@prisma/client";
import axios from "axios";
import Image from "next/image";
import toast from "react-hot-toast";
import { FaTrash } from "react-icons/fa";
import QuantityController from "./QuantityController";

type CartItemProps = {
	cartItem: {
		id: string;
		product: Product;
		productId: string;
		userId: string;
		quantity: number;
		dateAdded: Date;
	};
};

const CartItem: React.FC<CartItemProps> = ({ cartItem }) => {
	const { image, name, description, price } = cartItem.product;

	const handleDeleteCart = () => {
		axios.delete(`/api/cart?cartId=${cartItem.id}`).then((res) => {
			if (res.data.status === 200) {
				toast.success(res.data.message);
			}
			if (res.data.status === 404) {
				toast.error(res.data.message);
			}
		});
	};
	return (
		<div className="flex flex-col lg:flex-row items-center justify-between shadow-xl p-2 lg:pr-4 rounded-xl font-sans">
			<div className="flex items-center gap-2 lg:w-7/12">
				<Image
					src={image}
					alt={name}
					width={150}
					height={150}
					className="rounded-lg"
				/>
				<div className="lg:w-72d">
					<h1 className="uppercase text-md lg:text-xl font-bold truncate overflow-hidden">
						{name}
					</h1>
					<span className="text-sm lg:hidden">
						{description.slice(0, 70).concat("...")}
					</span>
					<span className="text-sm hidden lg:block">
						{description.split(".")[0]}.
					</span>
				</div>
			</div>
			<div className="flex items-center justify-between w-4/5 lg:w-4/12">
				<QuantityController cartItem={cartItem} />
				<h2 className="font-bold">${price * cartItem.quantity}/-</h2>
				<Button
					isIconOnly
					color="danger"
					aria-label="Delete"
					onPress={handleDeleteCart}
				>
					<FaTrash />
				</Button>
			</div>
		</div>
	);
};

export default CartItem;
