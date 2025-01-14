import { FaUser } from "react-icons/fa6";
import Soash from "../assets/images/soash.png";
import "../assets/styles/Nav.css";

const Navbar = () => {
	return (
		<nav>
			<img src={Soash} alt="the word Soash" />
			<FaUser />
			<ul>
				<li>forums</li>
				<li>bits</li>
				<li>videos</li>
				<li>surprise me</li>
			</ul>
		</nav>
	);
};

export default Navbar;
