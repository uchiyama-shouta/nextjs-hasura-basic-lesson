import Link from "next/link";
import type { VFC } from "react";

export type Props = {
	href: string;
	text: string;
	dataTestid: string;
};

export const NavLink: VFC<Props> = ({ href, text, dataTestid }) => {
	return (
		<Link href={href}>
			<a
				data-testid={dataTestid}
				className="py-2 px-3 text-gray-300 hover:bg-gray-700 rounded"
			>
				{text}
			</a>
		</Link>
	);
};
