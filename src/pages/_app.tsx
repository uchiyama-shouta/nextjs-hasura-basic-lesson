import "tailwindcss/tailwind.css";
import type { AppProps } from "next/app";
import { ApolloProvider } from "@apollo/client";
import { initializeApollo } from "src/lib/apolloClient";
import { RecoilRoot } from "recoil";

const MyApp = ({ Component, pageProps }: AppProps) => {
	const client = initializeApollo();
	return (
		<ApolloProvider client={client}>
			<RecoilRoot>
				<Component {...pageProps} />
			</RecoilRoot>
		</ApolloProvider>
	);
};
export default MyApp;
