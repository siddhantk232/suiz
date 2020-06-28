import { initializeApollo } from "../lib/apolloClient";
import gql from "graphql-tag";

interface SsrApolloResult {
	initialApolloState: { ROOT_QUERY: { hello: string } };
}

const IndexPage = ({
	initialApolloState: {
		ROOT_QUERY: { hello }
	}
}: SsrApolloResult) => {
	return <h1>{hello}</h1>;
};

export async function getStaticProps() {
	const apolloClient = initializeApollo();

	await apolloClient.query({
		query: GET_QUIZ
	});

	return {
		props: {
			initialApolloState: apolloClient.cache.extract()
		},
		unstable_revalidate: 1
	};
}

const GET_QUIZ = gql`
	query Hello {
		hello
	}
`;

export default IndexPage;
