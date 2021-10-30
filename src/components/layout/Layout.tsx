import type { ReactNode, VFC } from "react";
import Head from "next/head";
import { Header } from "src/components/layout/Header";

type Props = {
	children: ReactNode;
	title?: string;
};

const DefaultTitle = "Welcome to Next.js";

export const Layout: VFC<Props> = ({ children, title = DefaultTitle }) => {
	return (
		<div className="flex flex-col justify-center items-center min-h-screen font-mono text-sm text-gray-600">
			<Head>
				<title>{title}</title>
			</Head>
			<Header />
			<main className="flex flex-col flex-1 justify-center items-center w-screen">
				{children}
			</main>
			<footer className="w-full h-12 border-t"></footer>
		</div>
	);
};
