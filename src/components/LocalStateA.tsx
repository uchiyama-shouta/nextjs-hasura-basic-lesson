import Link from "next/link";
import type { VFC } from "react";
import { useLocalTodos } from "src/hooks/useLocalTodos";
import { Route } from "src/route/route";

export const LocalStateA: VFC = () => {
	const { todos, input, handleDelete, handleChange, handleSubmit } =
		useLocalTodos();
	return (
		<>
			<p className="mb-3 font-bold">makeVar</p>
			<ul>
				{todos?.map((task, i) => (
					<li className="mb-3" key={i}>
						<span className="mr-3">{task.title}</span>
						<button
							className="py-1 px-3 text-xs text-white bg-pink-600 hover:bg-pink-700 rounded-2xl focus:outline-none"
							onClick={() => handleDelete(i)}
						>
							Delete
						</button>
					</li>
				))}
			</ul>
			<form
				className="flex flex-col justify-center items-center"
				onSubmit={handleSubmit}
			>
				<input
					className="py-2 px-3 mb-3 border border-gray-300"
					placeholder="New task ?"
					value={input}
					onChange={handleChange}
				/>
				<button
					disabled={!input}
					className="py-1 px-3 mb-3 text-white bg-indigo-600 hover:bg-indigo-700 rounded-2xl disabled:opacity-40 focus:outline-none"
					type="submit"
				>
					Add new state
				</button>
			</form>
			<Link href={Route.localState.b}>
				<a className="mt-2 text-blue-500 hover:border-b-2 border-blue-500">
					Next
				</a>
			</Link>
		</>
	);
};
