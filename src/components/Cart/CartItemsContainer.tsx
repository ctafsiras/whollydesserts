"use client";

import UserContext from "@/app/contexts/UserProvider";
import { Product } from "@prisma/client";
import axios from "axios";
import { useContext, useEffect, useState } from "react";
import CartItem from "./CartItem";

type NewCartType = {
	id: string;
	userId: string;
	productId: string;
	product: Product;
	quantity: number;
	dateAdded: Date;
};

const CartItemsContainer = () => {
	const { id } = useContext(UserContext);
	const [cartFoods, setCartFoods] = useState([] as NewCartType[]);

	useEffect(() => {
		const fetchCartFoods = async () => {
			try {
				if (id) {
					const response = await axios.get(`/api/cart?userId=${id}`);
					setCartFoods(response.data);
				}
			} catch (error) {
				console.log(error);
			}
		};
		fetchCartFoods();
	}, [id]);

	return (
		<div className="max-h-screen flex flex-col gap-y-2 justify-start overflow-scroll lg:w-2/3 lg:px-20">
			{cartFoods.map((cartItem, index) => (
				<CartItem
					key={index}
					cartItem={cartItem}
				/>
			))}
		</div>
	);
};

export default CartItemsContainer;
