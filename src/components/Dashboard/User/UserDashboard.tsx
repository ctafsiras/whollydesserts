import {
	Avatar,
	Button,
	Dropdown,
	DropdownItem,
	DropdownMenu,
	DropdownTrigger,
	Input,
} from "@nextui-org/react";
import { User } from "@prisma/client";
import axios from "axios";
import { useState } from "react";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { BsThreeDots } from "react-icons/bs";

const UserDashboard = ({ user }: { user: User }) => {
	const items = [
		{
			key: "new",
			label: "New file",
		},
		{
			key: "copy",
			label: "Copy link",
		},
		{
			key: "edit",
			label: "Edit file",
		},
		{
			key: "delete",
			label: "Delete file",
		},
	];
	const [isLoading, setIsLoading] = useState(false);

	const {
		register,
		handleSubmit,
		watch,
		formState: { errors },
	} = useForm({
		defaultValues: {
			name: user.name,
			email: user.email,
			image: user.image,
		},
	});

	const onSubmit = (data: any) => {
		setIsLoading(true);
		axios.put("/api/user", { id: user.id, ...data }).then((res) => {
			if (res.status === 200) {
				setIsLoading(false);
				toast.success("Profile updated successfully");
			}
		});
	};

	return (
		<section className="py-10 lg:px-20">
			<div className="flex justify-between items-center">
				<div className="flex lg:flex-col items-center">
					<Avatar
						src={user.image}
						className="w-20 h-20 text-large"
					/>
					<h1 className="text-3xl text-center text-gray-700 font-sans font-bold mt-4 ">
						{user.name}
					</h1>
				</div>
				<Dropdown>
					<DropdownTrigger>
						<button className="text-3xl text-gray-700">
							<BsThreeDots />
						</button>
					</DropdownTrigger>
					<DropdownMenu
						aria-label="Dynamic Actions"
						items={items}
						className="font-sans"
					>
						{(item) => (
							<DropdownItem
								key={item.key}
								color={
									item.key === "delete" ? "danger" : "default"
								}
								className={
									item.key === "delete" ? "text-danger" : ""
								}
							>
								{item.label}
							</DropdownItem>
						)}
					</DropdownMenu>
				</Dropdown>
			</div>
			<div>
				<h2 className="text-2xl text-center text-gray-700 font-sans font-bold mt-4">
					Edit Profile
				</h2>
				<form
					className="font-sans mt-4 space-y-5"
					onSubmit={handleSubmit(onSubmit)}
				>
					<div className="flex flex-col lg:flex-row gap-x-10 gap-y-5">
						<Input
							{...register("name", {
								required: true,
								maxLength: 30,
								minLength: 3,
							})}
							type="text"
							label="Name"
							variant="flat"
							defaultValue={user.name}
							isDisabled={isLoading}
							errorMessage={errors.name && "Name is required"}
							color={!!errors.name ? "danger" : "success"}
							className="max-w-md"
							isRequired
						/>
						<Input
							{...register("email", {
								required: true,
								pattern:
									/^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/,
							})}
							type="email"
							label="Email"
							variant="flat"
							defaultValue={user.email}
							isDisabled={isLoading}
							isInvalid={!!errors.email}
							color={!!errors.email ? "danger" : "success"}
							errorMessage={
								errors.email && "Please enter a valid email"
							}
							className="max-w-md"
							isRequired
						/>
					</div>
					<Input
						{...register("image")}
						type="text"
						label="Image"
						isDisabled={isLoading}
						variant={"flat"}
						defaultValue={user.image}
						color="success"
						className="max-w-md"
					/>
					<Button
						color="success"
						isLoading={isLoading}
						type="submit"
						disabled={
							watch("name") === user.name &&
							watch("email") === user.email &&
							watch("image") === user.image
						}
					>
						Save Changes
					</Button>
				</form>
			</div>
		</section>
	);
};

export default UserDashboard;
