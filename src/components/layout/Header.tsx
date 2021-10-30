import { memo, VFC } from "react";
import { NavLink, Props as NavProps } from "src/components/layout/NavLink";
import { Route } from "src/route/route";

const navList: NavProps[] = [
	{ text: "Home", href: Route.home },
	{ text: "Local", href: Route.localState.a },
	{ text: "fetchPolicy(Hasura)", href: Route.hasura.main },
	{ text: "CRUD(Hasura)", href: Route.hasura.crud },
	{ text: "SSG+ISR(Hasura)", href: Route.hasura.ssg },
	{ text: "custom hook + memo", href: Route.hooksMemo },
];

export const Header: VFC = memo(() => (
	<header>
		<nav className="w-screen bg-gray-800">
			<div className="flex items-center pl-8 h-14">
				<div className="flex space-x-4">
					{navList.map((nav) => (
						<NavLink key={nav.href} href={nav.href} text={nav.text} />
					))}
				</div>
			</div>
		</nav>
	</header>
));
