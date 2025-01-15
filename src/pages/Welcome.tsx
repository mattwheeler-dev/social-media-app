import SoashImg from "../assets/images/soash-colors.png";
import "../assets/styles/Welcome.css";

const Welcome = () => {
	return (
		<section className="welcome">
			<img src={SoashImg} alt="Logo of the word Soash" />
			<p className="tagline">
				A social {`(`}
				<span>soash</span>-al{`)`} platform for self-expression and building
				connections!
			</p>
			<button>Create Account</button>
			<p>
				Already on Soash? Sign in <a href="#">here</a>
			</p>
		</section>
	);
};

export default Welcome;
