import { ShippingAddress } from "@prisma/client";

const AddressCard = ({ address }: { address: ShippingAddress }) => {
	const { name, mobile, division, city, area } = address;
	return (
		<div className="border border-gray-600 rounded-sm p-5 font-sans">
			<h1 className="text-xl font-bold">Receiver Name: {name}</h1>
			<h2>Receiver Mobile: {mobile}</h2>
			<h3>
				Receiver Location: {address.address}, {area}, {city}, {division}
			</h3>
		</div>
	);
};

export default AddressCard;
