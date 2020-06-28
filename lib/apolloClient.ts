import { useMemo } from "react";
import { ApolloClient } from "apollo-client";
import { InMemoryCache, NormalizedCacheObject } from "apollo-cache-inmemory";
import { HttpLink } from "apollo-link-http";

let apolloClient: ApolloClient<NormalizedCacheObject>;

function createApolloClient() {
	return new ApolloClient({
		ssrMode: typeof window === "undefined",
		link: new HttpLink({
			uri: "http://localhost:9876/graphql", // Server URL (must be absolute)
			credentials: "include"
		}),
		cache: new InMemoryCache()
	});
}

export function initializeApollo(
	initialState: NormalizedCacheObject | null = null
) {
	const _apolloClient = apolloClient ?? createApolloClient();

	if (initialState) {
		_apolloClient.cache.restore(initialState);
	}

	// For SSG and SSR always create a new Apollo Client
	if (typeof window === "undefined") return _apolloClient;

	// Create the Apollo Client once in the client
	if (!apolloClient) apolloClient = _apolloClient;

	return _apolloClient;
}

export function useApollo(initialState: NormalizedCacheObject) {
	const store = useMemo(() => initializeApollo(initialState), [initialState]);
	return store;
}
