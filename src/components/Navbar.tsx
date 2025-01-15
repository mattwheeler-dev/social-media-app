import { FaSearch } from "react-icons/fa";
import "../assets/styles/Navbar.css";

const Navbar = () => {
	return (
		<nav>
			<a href="#">Forums</a>
			<a href="#">TidBits</a>
			<a href="#">Videos</a>
			<a href="#">Surprise Me</a>
			<FaSearch />
		</nav>
	);
};

export default Navbar;
