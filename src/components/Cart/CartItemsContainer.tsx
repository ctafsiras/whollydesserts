"use client";

import UserContext from "@/app/contexts/UserProvider";
import axios from "axios";
import { useContext, useEffect, useState } from "react";
import CartItem from "./CartItem";
import { Cart } from "@prisma/client";

const CartItemsContainer = () => {
	const user = useContext(UserContext);
	const [cartFoods, setCartFoods] = useState([] as Cart[]);

	useEffect(() => {
		axios.get(`/api/cart?userId=${user.id}`).then((res) => {
			setCartFoods(res.data);
		});
	}, [user.id]);

	return (
		<div className="h-1/2 p-4 flex flex-col justify-center overflow-scroll lg:h-full lg:w-2/3 2xl:w-1/2 lg:px-20 2xl:text-xl 2xl:gap-6">
			{cartFoods.map((food, index) => (
				<CartItem
					key={index}
					product={food.product}
				/>
			))}
		</div>
	);
};

export default CartItemsContainer;
