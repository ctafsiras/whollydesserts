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

export { columns, roleOptions };
