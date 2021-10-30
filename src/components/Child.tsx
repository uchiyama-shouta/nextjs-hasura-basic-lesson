import { FormEvent, memo, VFC } from "react";

type Props = {
	printMsg: () => void;
	onSubmit: (e: FormEvent<HTMLFormElement>) => Promise<void>;
};

export const Child: VFC<Props> = memo(({ printMsg: handlePrint }) => {
	return (
		<>
			<p>Child Component</p>
			<button
				className="py-1 px-3 my-3 text-white bg-indigo-600 hover:bg-indigo-700 rounded-2xl focus:outline-none"
				onClick={handlePrint}
			>
				click
			</button>
		</>
	);
});
