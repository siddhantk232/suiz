import { useRouter } from "next/router";

import { authContainer, githubBtn, googleBtn } from "styles/auth.scss";
import GithubIcon from "../components/icons/GithubIcon";
import GoogleIcon from "../components/icons/GoogleIcon";
import { useMeQuery } from "hooks/graphql";

export default function Auth() {
	const { data, loading } = useMeQuery();

	const { push } = useRouter();

	if (loading) return <p>loading</p>;

	if (data && data.me.name) {
		// user already signed in, redirect to home
		push("/");
	}

	return (
		<>
			<div className={authContainer}>
				<h1>Sign In</h1>

				<a
					href={`${process.env.NEXT_PUBLIC_SUIVER_AUTH_URI}/github`}
					className={githubBtn}
				>
					<span>
						<GithubIcon />
					</span>
					Sign in with <b> Github</b>
				</a>

				<a
					href={`${process.env.NEXT_PUBLIC_SUIVER_AUTH_URI}/google`}
					className={googleBtn}
				>
					<span>
						<GoogleIcon />
					</span>
					Sign in with <b> Google</b>
				</a>
			</div>
		</>
	);
}
