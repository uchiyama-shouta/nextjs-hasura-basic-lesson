import { FormEvent, memo, VFC } from "react";
import { Button } from "src/components/UI/Button";

type Props = {
	printMsg: () => void;
	onSubmit: (e: FormEvent<HTMLFormElement>) => Promise<void>;
};

export const Child: VFC<Props> = memo(({ printMsg: handlePrint }) => {
	return (
		<>
			<p>Child Component</p>
			<Button bg="indigo" onClick={handlePrint}>
				click
			</Button>
		</>
	);
});
