"use client";

import axios from "axios";
import { useState } from "react";
import { FieldValues, SubmitHandler, useForm } from "react-hook-form";

const AddItemForm = () => {
	const [isLoading, setIsLoading] = useState(false);
	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm<FieldValues>({
		defaultValues: {
			name: "",
			description: "",
			price: 0,
			image: "",
		},
	});

	const onSubmit: SubmitHandler<FieldValues> = (data) => {
		setIsLoading(true);

		axios.post("/api/addItem", data).then((res) => {
			console.log(res);
			setIsLoading(false);
		});
	};
	return (
		<form
			className="space-y-4 w-1/2 mx-auto font-sans"
			onSubmit={handleSubmit(onSubmit)}
		>
			<div className="flex flex-col">
				<label
					htmlFor="name"
					className="text-gray-600"
				>
					Name
				</label>
				<input
					type="text"
					id="name"
					{...register("name", {
						required: true,
						maxLength: 30,
					})}
					disabled={isLoading}
					className={`border border-gray-300 px-2 py-1 focus:outline-none ${
						errors.name && "ring-2 ring-red-500"
					}`}
				/>
			</div>
			<div className="flex flex-col">
				<label
					htmlFor="price"
					className="text-gray-600"
				>
					Price ($)
				</label>
				<input
					type="number"
					id="price"
					{...register("price", {
						required: true,
						valueAsNumber: true,
						validate: (value) => value > 0,
					})}
					disabled={isLoading}
					className={`border border-gray-300 px-2 py-1 focus:outline-none ${
						errors.price && "ring-2 ring-red-500"
					}`}
				/>
			</div>
			<div className="flex flex-col">
				<label
					htmlFor="image"
					className="text-gray-600"
				>
					Image *
				</label>
				<input
					type="url"
					id="image"
					{...register("image", {
						required: true,
					})}
					disabled={isLoading}
					className={`border border-gray-300 px-2 py-1 focus:outline-none ${
						errors.image && "ring-2 ring-red-500"
					}`}
				/>
			</div>
			<div className="flex flex-col">
				<label
					htmlFor="description"
					className="text-gray-600"
				>
					Description
				</label>
				<textarea
					id="description"
					rows={3}
					{...register("description", {
						required: true,
					})}
					disabled={isLoading}
					className={`border border-gray-300 px-2 py-1 focus:outline-none ${
						errors.description && "ring-2 ring-red-500"
					}`}
				/>
			</div>
			<div className="flex items-center justify-between space-x-2">
				<button
					type="submit"
					className={`bg-orange-500 text-white font-bold px-4 py-2 rounded-md hover:bg-orange-600 disabled:bg-orange-200 disabled:text-gray-500
							${isLoading && "cursor-not-allowed"}
							`}
					disabled={isLoading}
				>
					Register
				</button>
			</div>
		</form>
	);
};

export default AddItemForm;
