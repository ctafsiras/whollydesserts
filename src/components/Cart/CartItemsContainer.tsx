"use client";

import UserContext from "@/app/contexts/UserProvider";
import { Cart } from "@prisma/client";
import axios from "axios";
import { useContext, useEffect, useState } from "react";
import CartItem from "./CartItem";

const CartItemsContainer = () => {
	const user = useContext(UserContext);
	const [cartFoods, setCartFoods] = useState([] as Cart[]);

	useEffect(() => {
		const fetchCartFoods = async () => {
			try {
				const response = await axios.get(`/api/cart?userId=${user.id}`);
				setCartFoods(response.data);
			} catch (error) {
				console.log(error);
			}
		};
		fetchCartFoods();
	}, [user.id]);

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
