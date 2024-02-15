import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { useContext, useState } from "react";
import UserContext from "../contexts/UserProvider";

const useCart = () => {
	const { id } = useContext(UserContext);
	const [isLoading, setIsLoading] = useState(true);
	const { refetch, data: cart = [] } = useQuery({
		queryKey: ["cart", id],
		enabled: !!id,
		queryFn: async () => {
			const res = await axios(`/api/cart?userId=${id}`);
			setIsLoading(false);
			return res.data;
		},
	});

	return { cart, isLoading, refetch };
};

export default useCart;
