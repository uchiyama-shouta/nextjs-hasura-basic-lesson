import {
	ApolloClient,
	HttpLink,
	InMemoryCache,
	NormalizedCacheObject,
} from "@apollo/client";
import "cross-fetch/polyfill";

let apolloClient: ApolloClient<NormalizedCacheObject> | undefined;

const createApolloClient = () =>
	new ApolloClient({
		ssrMode: typeof window === "undefined",
		link: new HttpLink({
			uri: process.env.NEXT_PUBLIC_HASURA_URL,
			headers: {
				"x-hasura-admin-secret": process.env.NEXT_PUBLIC_HASURA_KEY,
			},
		}),
		cache: new InMemoryCache(),
	});

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export const initializeApollo = (initialState = null) => {
	const _apolloClient = apolloClient ?? createApolloClient();

	if (typeof window === "undefined") return _apolloClient;
	if (!apolloClient) apolloClient = _apolloClient;

	return _apolloClient;
};
