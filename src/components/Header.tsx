import { FaUser } from "react-icons/fa6";
import Soash from "../assets/images/soash.png";

const Header = () => {
	return (
		<header>
			<img src={Soash} alt="the word Soash" />
			<FaUser />
		</header>
	);
};

export default Header;
