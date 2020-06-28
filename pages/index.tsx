import { useHelloQuery } from "hooks/graphql";

const IndexPage = () => {
	const { loading, data, error } = useHelloQuery();

	if (error) return <p>{error.message}</p>;
	if (loading) return <p>loading...</p>;

	return <h1>{data?.hello}</h1>;
};

export default IndexPage;
