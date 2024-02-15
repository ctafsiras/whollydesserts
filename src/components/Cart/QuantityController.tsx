"use client";

import { Cart } from "@prisma/client";
import axios from "axios";
import { useState } from "react";
import toast from "react-hot-toast";
import { FaMinus, FaPlus } from "react-icons/fa";

interface QuantityControllerProps {
	cartItem: Cart;
	foodPrice: number;
}

const QuantityController: React.FC<QuantityControllerProps> = ({
	cartItem,
	foodPrice,
}) => {
	const [quantity, setQuantity] = useState(cartItem.quantity);
	const { id } = cartItem;

	const handleQuntityChange = (action: "increase" | "decrease") => {
		if (action === "increase") {
			setQuantity((prev) => prev + 1);
			axios.put("/api/cart", { id, changeType: action }).then((res) => {
				if (res.statusText === "OK") {
					toast.success(`Quantity increased`);
				}
			});
		} else {
			setQuantity((prev) => prev - 1);
			axios.put("/api/cart", { id, changeType: action }).then((res) => {
				if (res.statusText === "OK") {
					toast.success(`Quantity descreased`);
				}
			});
		}
	};

	return (
		<>
			<div className="flex items-center gap-2 px-1 bg-white rounded-full">
				<button
					className="p-1 bg-black text-white rounded-full text-xs disabled:bg-gray-400 disabled:cursor-not-allowed"
					onClick={() => handleQuntityChange("increase")}
				>
					<FaPlus />
				</button>
				<h1 className="text-xl font-bold">{quantity}</h1>
				<button
					className="p-1 bg-black text-white rounded-full text-xs disabled:bg-gray-400 disabled:cursor-not-allowed"
					onClick={() => handleQuntityChange("decrease")}
					disabled={quantity <= 1}
				>
					<FaMinus />
				</button>
			</div>
			<h2 className="font-bold">${foodPrice * quantity}/-</h2>
		</>
	);
};

export default QuantityController;
