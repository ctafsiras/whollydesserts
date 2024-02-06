import MenuHero from "@/components/Menu/MenuHero";
import Products from "@/components/Menu/Products";

export default function page() {
	console.log("menu");
	return (
		<main>
			<MenuHero />
			<Products />
		</main>
	);
}
