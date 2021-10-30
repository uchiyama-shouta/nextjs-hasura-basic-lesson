import { ChangeEvent, FormEvent, useCallback, useState } from "react";
import { useRecoilState } from "recoil";
import { tasksState } from "src/lib/atoms/tasksAtom";

export const useLocalTodos = () => {
	const [todos, setTodos] = useRecoilState(tasksState);
	const [input, setInput] = useState("");

	const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		setTodos((prev) => [...prev, { title: input }]);
		setInput("");
	};

	const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
		setInput(e.target.value);
	};

	const handleDelete = useCallback(
		(i: number) => {
			const newTodos = [...todos];
			newTodos.splice(i, 1);
			setTodos(newTodos);
		},
		[todos, setTodos],
	);

	return {
		todos,
		input,
		handleChange,
		handleSubmit,
		handleDelete,
	};
};
