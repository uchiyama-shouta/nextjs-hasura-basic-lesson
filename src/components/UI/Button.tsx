import { memo, ReactNode, VFC } from "react";
import cc from "classcat";

type Props = {
	children: ReactNode;
	onClick?: () => void;
	type?: "button" | "submit" | "reset";
	disabled?: boolean;
	bg: "green" | "pink" | "indigo";
	my?: number;
	mr?: number;
};

export const Button: VFC<Props> = memo(
	({
		children,
		type = "button",
		onClick: handleClicked,
		disabled,
		bg,
		my,
		mr,
	}) => {
		console.log("render!");
		return (
			<button
				className={cc([
					"py-1 px-3 text-white rounded-2xl focus:outline-none disabled:opacity-40",
					{
						[`mr-${mr}`]: !!mr === true,
						[`my-${my}`]: !!my === true,
						"bg-pink-600 hover:bg-pink-700": bg === "pink",
						"bg-green-600 hover:bg-green-700": bg === "green",
						"bg-indigo-600 hover:bg-indigo-700": bg === "indigo",
						"opacity-60": disabled,
					},
				])}
				onClick={handleClicked}
				disabled={disabled}
				type={type}
			>
				{children}
			</button>
		);
	},
);
