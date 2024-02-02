const columns = [
	{ name: "ID", uid: "id", sortable: true },
	{ name: "NAME", uid: "name", sortable: true },
	{ name: "EMAIL", uid: "email" },
	{ name: "ROLE", uid: "role", sortable: true },
	{ name: "CREATED AT", uid: "createdAt" },
	{ name: "UPDATED AT", uid: "updatedAt" },
	{ name: "ACTIONS", uid: "actions" },
];

const roleOptions = [
	{ name: "Admin", uid: "admin" },
	{ name: "User", uid: "user" },
];

const users = [
	{
		id: 1,
		name: "Tony Reichert",
		email: "tony.reichert@example.com",
		emailVerified: true,
		role: "admin",
		image: "https://i.pravatar.cc/150?u=a042581f4e29026024d",
		hashedPassword:
			"$2b$16$nx1uTlugFAGbwZvlihN6JeVz4MfVnykO2upIRmCcpO4KOddR6LcIy",

		createdAt: "2024-01-29T15:29:32.643Z",
		updatedAt: "2024-01-29T15:29:32.643Z",
	},
	{
		id: 2,
		name: "Zoey Lang",
		email: "zoey.lang@example.com",
		emailVerified: true,
		role: "user",
		image: "https://i.pravatar.cc/150?u=a042581f4e29026704d",
		hashedPassword:
			"$2b$16$nx1uTlugFAGbwZvlihN6JeVz4MfVnykO2upIRmCcpO4KOddR6LcIy",

		createdAt: "2024-01-29T15:29:32.643Z",
		updatedAt: "2024-01-29T15:29:32.643Z",
	},
	{
		id: 3,
		name: "Jane Fisher",
		email: "jane.fisher@example.com",
		emailVerified: true,
		role: "admin",
		image: "https://i.pravatar.cc/150?u=a04258114e29026702d",
		hashedPassword:
			"$2b$16$nx1uTlugFAGbwZvlihN6JeVz4MfVnykO2upIRmCcpO4KOddR6LcIy",

		createdAt: "2024-01-29T15:29:32.643Z",
		updatedAt: "2024-01-29T15:29:32.643Z",
	},
	{
		id: 4,
		name: "William Howard",
		email: "william.howard@example.com",
		emailVerified: true,
		role: "user",
		image: "https://i.pravatar.cc/150?u=a048581f4e29026701d",
		hashedPassword:
			"$2b$16$nx1uTlugFAGbwZvlihN6JeVz4MfVnykO2upIRmCcpO4KOddR6LcIy",

		createdAt: "2024-01-29T15:29:32.643Z",
		updatedAt: "2024-01-29T15:29:32.643Z",
	},
	{
		id: 5,
		name: "Kristen Copper",
		email: "kristen.cooper@example.com",
		emailVerified: true,
		role: "admin",
		image: "https://i.pravatar.cc/150?u=a092581d4ef9026700d",
		hashedPassword:
			"$2b$16$nx1uTlugFAGbwZvlihN6JeVz4MfVnykO2upIRmCcpO4KOddR6LcIy",

		createdAt: "2024-01-29T15:29:32.643Z",
		updatedAt: "2024-01-29T15:29:32.643Z",
	},
	{
		id: 6,
		name: "Brian Kim",
		email: "brian.kim@example.com",
		emailVerified: true,
		role: "admin",
		image: "https://i.pravatar.cc/150?u=a042581f4e29026024d",
		hashedPassword:
			"$2b$16$nx1uTlugFAGbwZvlihN6JeVz4MfVnykO2upIRmCcpO4KOddR6LcIy",

		createdAt: "2024-01-29T15:29:32.643Z",
		updatedAt: "2024-01-29T15:29:32.643Z",
	},
	{
		id: 7,
		name: "Michael Hunt",
		email: "michael.hunt@example.com",
		emailVerified: true,
		role: "user",
		image: "https://i.pravatar.cc/150?u=a042581f4e29027007d",
		hashedPassword:
			"$2b$16$nx1uTlugFAGbwZvlihN6JeVz4MfVnykO2upIRmCcpO4KOddR6LcIy",

		createdAt: "2024-01-29T15:29:32.643Z",
		updatedAt: "2024-01-29T15:29:32.643Z",
	},
	{
		id: 8,
		name: "Samantha Brooks",
		email: "samantha.brooks@example.com",
		emailVerified: true,
		role: "admin",
		image: "https://i.pravatar.cc/150?u=a042581f4e27027008d",
		hashedPassword:
			"$2b$16$nx1uTlugFAGbwZvlihN6JeVz4MfVnykO2upIRmCcpO4KOddR6LcIy",

		createdAt: "2024-01-29T15:29:32.643Z",
		updatedAt: "2024-01-29T15:29:32.643Z",
	},
	{
		id: 9,
		name: "Frank Harrison",
		email: "frank.harrison@example.com",
		emailVerified: true,
		role: "user",
		image: "https://i.pravatar.cc/150?img=4",
		hashedPassword:
			"$2b$16$nx1uTlugFAGbwZvlihN6JeVz4MfVnykO2upIRmCcpO4KOddR6LcIy",

		createdAt: "2024-01-29T15:29:32.643Z",
		updatedAt: "2024-01-29T15:29:32.643Z",
	},
	{
		id: 10,
		name: "Emma Adams",
		email: "emma.adams@example.com",
		emailVerified: true,
		role: "admin",
		image: "https://i.pravatar.cc/150?img=5",
		hashedPassword:
			"$2b$16$nx1uTlugFAGbwZvlihN6JeVz4MfVnykO2upIRmCcpO4KOddR6LcIy",

		createdAt: "2024-01-29T15:29:32.643Z",
		updatedAt: "2024-01-29T15:29:32.643Z",
	},
];

export { columns, roleOptions, users };
