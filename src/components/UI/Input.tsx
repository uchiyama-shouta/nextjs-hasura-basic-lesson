import { VFC, ChangeEvent, memo } from "react";
import cc from "classcat";

type Props = {
	value: string;
	onChange: (e: ChangeEvent<HTMLInputElement>) => void;
	mb?: boolean;
	placeholder?: string;
};

export const Input: VFC<Props> = memo(
	({ value, onChange: handleChange, mb, placeholder = "" }) => {
		return (
			<input
				className={cc([
					"py-2 px-3 mb-3 border border-gray-300",
					{
						"mb-3": mb === true,
					},
				])}
				value={value}
				onChange={handleChange}
				placeholder={placeholder}
			/>
		);
	},
);
