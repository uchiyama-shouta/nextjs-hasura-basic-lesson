import Link from "next/link";
import type { VFC } from "react";

export type Props = {
	href: string;
	text: string;
};

export const NavLink: VFC<Props> = ({ href, text }) => {
	return (
		<Link href={href}>
			<a className="py-2 px-3 text-gray-300 hover:bg-gray-700 rounded">
				{text}
			</a>
		</Link>
	);
};
