import SoashImg from "../assets/images/soash.png";
import "../assets/styles/Home.css";

const Home = () => {
	return (
		<section className="cta-block">
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

export default Home;
