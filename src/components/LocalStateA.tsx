import Link from "next/link";
import type { VFC } from "react";
import { Button } from "src/components/UI/Button";
import { Input } from "src/components/UI/Input";
import { useLocalTodos } from "src/hooks/useLocalTodos";
import { Route } from "src/route/route";

export const LocalStateA: VFC = () => {
	const { todos, input, handleDelete, handleChange, handleSubmit } =
		useLocalTodos();
	return (
		<>
			<p className="mb-3 font-bold">Local State</p>
			<ul>
				{todos?.map((task, i) => (
					<li className="mb-3" key={i}>
						<span className="mr-3">{task.title}</span>
						<Button bg="pink" onClick={() => handleDelete(i)}>
							Delete
						</Button>
					</li>
				))}
			</ul>
			<form
				className="flex flex-col justify-center items-center"
				onSubmit={handleSubmit}
			>
				<Input
					mb={true}
					placeholder="New task ?"
					value={input}
					onChange={handleChange}
				/>
				<Button disabled={!input} bg="indigo" type="submit">
					Add new state
				</Button>
			</form>
			<Link href={Route.localState.b}>
				<a className="mt-2 text-blue-500">Next</a>
			</Link>
		</>
	);
};
