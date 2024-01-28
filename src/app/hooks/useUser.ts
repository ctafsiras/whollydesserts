import axios from "axios";

export const useUser = (userEmail: string) => {
	if (!userEmail) {
		return "Email not found";
	}

	try {
		axios.get(`/api/user?email=${userEmail}`).then((res) => {
			return res.data;
		});
	} catch (error) {
		console.log(error);
	}
};
