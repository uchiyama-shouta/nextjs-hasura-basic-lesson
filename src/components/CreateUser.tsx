import { VFC } from "react";
import { Button } from "src/components/UI/Button";
import { Input } from "src/components/UI/Input";
import { useCreateForm } from "src/hooks/useCreateForm";
import { Child } from "./Child";

export const CreateUser: VFC = () => {
	const {
		handleSubmit,
		username,
		handleUsernameChange,
		printMsg,
		text,
		handleTextChange,
	} = useCreateForm();
	return (
		<>
			<p className="mb-3 font-bold">Custom Hook + useCallback + memo</p>
			<div className="flex flex-col justify-center items-center mb-3">
				<label>Text</label>
				<Input value={text} onChange={handleTextChange} />
			</div>
			<form
				className="flex flex-col justify-center items-center "
				onSubmit={handleSubmit}
			>
				<label>Username</label>
				<Input
					placeholder="New user ?"
					value={username}
					onChange={handleUsernameChange}
					mb={true}
				/>
				<Button bg="indigo" type="submit">
					Submit
				</Button>
			</form>
			<Child printMsg={printMsg} onSubmit={handleSubmit} />
		</>
	);
};
