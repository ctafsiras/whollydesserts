"use client";

import { Cart } from "@prisma/client";
import axios from "axios";
import { useState } from "react";
import toast from "react-hot-toast";
import { FaMinus, FaPlus } from "react-icons/fa";

const QuantityController = ({ cartItem }: { cartItem: Cart }) => {
	const [isLoading, setIsLoading] = useState(false);
	const [quantity, setQuantity] = useState(cartItem.quantity);
	const { id } = cartItem;

	const handleQuntityChange = (action: "increase" | "decrease") => {
		setIsLoading(true);

		if (action === "increase") {
			axios.put("/api/cart", { id, changeType: action }).then((res) => {
				if (res.statusText === "OK") {
					setQuantity(res.data.quantity);
					toast.success(`Quantity increased`);
					setIsLoading(false);
				}
			});
		} else {
			axios.put("/api/cart", { id, changeType: action }).then((res) => {
				if (res.statusText === "OK") {
					setQuantity(res.data.quantity);
					toast.success(`Quantity descreased`);
					setIsLoading(false);
				}
			});
		}
	};

	return (
		<div className="flex items-center gap-2 px-1 bg-white rounded-full">
			<button
				className="p-1 bg-black text-white rounded-full text-xs"
				onClick={() => handleQuntityChange("increase")}
				disabled={isLoading}
			>
				<FaPlus />
			</button>
			<h1 className="text-xl font-bold">{quantity}</h1>
			<button
				className="p-1 bg-black text-white rounded-full text-xs disabled:bg-gray-400 disabled:cursor-not-allowed"
				onClick={() => handleQuntityChange("decrease")}
				disabled={isLoading || quantity <= 1}
			>
				<FaMinus />
			</button>
		</div>
	);
};

export default QuantityController;
