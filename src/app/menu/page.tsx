import Image from "next/image";
import DishImage from "@/../public/assets/images/dish.jpeg";
import SaladImage from "@/../public/assets/images/salad.jpeg";

export default function page() {
	return (
		<main>
			<Image
				src={DishImage}
				alt="Dish image"
				width={500}
				height={500}
				style={{ objectFit: "cover" }}
			/>
			<Image
				src={SaladImage}
				alt="Salad image"
				width={500}
				height={500}
				style={{ objectFit: "cover" }}
			/>
		</main>
	);
}
