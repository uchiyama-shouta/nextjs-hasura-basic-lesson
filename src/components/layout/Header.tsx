import { memo, VFC } from "react";
import { NavLink, Props as NavProps } from "src/components/layout/NavLink";

const navList: NavProps[] = [
	{
		href: "/",
		text: "Home",
		dataTestid: "home-nav",
	},
	{
		href: "/local-state/a",
		text: "Local",
		dataTestid: "makevar-nav",
	},
	{
		href: "/hasura/main",
		text: "fetchPolicy(Hasura)",
		dataTestid: "fetchpolicy-nav",
	},
	{
		href: "/hasura/crud",
		text: "CRUD(Hasura)",
		dataTestid: "crud-nav",
	},
	{
		href: "/hasura/ssg",
		text: "SSG+ISR(Hasura)",
		dataTestid: "ssg-nav",
	},
	{
		href: "/hooks-memo",
		text: "custom hook + memo",
		dataTestid: "memo-nav",
	},
];

export const Header: VFC = memo(() => (
	<header>
		<nav className="w-screen bg-gray-800">
			<div className="flex items-center pl-8 h-14">
				<div className="flex space-x-4">
					{navList.map((nav) => (
						<NavLink
							key={nav.href}
							href={nav.href}
							dataTestid={nav.dataTestid}
							text={nav.text}
						/>
					))}
				</div>
			</div>
		</nav>
	</header>
));
