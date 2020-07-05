import { ApolloProvider } from "@apollo/react-hooks";
import { useApollo } from "../lib/apolloClient";
import { AppPropsType } from "next/dist/next-server/lib/utils";

import "styles/global.scss";

export default function App({ Component, pageProps }: AppPropsType) {
	const apolloClient = useApollo(pageProps.initialApolloState);

	return (
		<ApolloProvider client={apolloClient}>
			<Component {...pageProps} />
		</ApolloProvider>
	);
}
