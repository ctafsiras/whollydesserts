import { signIn } from "next-auth/react";
import { toast } from "react-hot-toast";
import { FaFacebook, FaGoogle } from "react-icons/fa";
import { RiInstagramFill } from "react-icons/ri";

const SocialLogin = () => {
	const socialLogin = (action: string) => {
		// setIsLoading(true);

		signIn(action, {
			redirect: false,
		}).then((callback) => {
			if (callback?.error) {
				toast.error(callback.error);
			}
			if (callback?.ok && !callback?.error) {
				toast.success("Logged in");
			}
		});
		// .finally(() => setIsLoading(false));
	};
	return (
		<div className="text-center">
			<hr className="my-5 bg-gray-black" />
			<div className="flex items-center justify-between">
				<button
					className="flex items-center gap-2 bg-orange-500 px-6 py-2 rounded-sm hover:bg-orange-600 text-xl text-white"
					onClick={() => socialLogin("google")}
				>
					<FaGoogle /> Google
				</button>
				<button
					className="flex items-center gap-2 bg-orange-500 px-6 py-2 rounded-sm hover:bg-orange-600 text-xl text-white"
					onClick={() => socialLogin("facebook")}
				>
					<FaFacebook /> Facebook
				</button>
				<button
					className="flex items-center gap-2 bg-orange-500 px-6 py-2 rounded-sm hover:bg-orange-600 text-xl text-white"
					onClick={() => socialLogin("instagram")}
				>
					<RiInstagramFill /> Instagram
				</button>
			</div>
		</div>
	);
};

export default SocialLogin;
