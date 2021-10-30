import type { VFC } from "react";
import Link from "next/link";
import { useRecoilValue } from "recoil";
import { tasksState } from "src/lib/atoms/tasksAtom";

export const LocalStateB: VFC = () => {
	const todos = useRecoilValue(tasksState);
	return (
		<>
			<ul>
				{todos?.map((task, index) => (
					<li className="mb-3" key={index}>
						{task.title}
					</li>
				))}
			</ul>
			<Link href="/local-state/a">
				<a className="mt-2 text-blue-500 hover:border-b-2 border-blue-500">
					Back
				</a>
			</Link>
		</>
	);
};