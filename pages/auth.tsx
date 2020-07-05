import { authContainer, githubBtn, googleBtn } from "styles/auth.scss";
import GithubIcon from "../components/icons/GithubIcon";
import GoogleIcon from "../components/icons/GoogleIcon";

export default function Auth() {
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
