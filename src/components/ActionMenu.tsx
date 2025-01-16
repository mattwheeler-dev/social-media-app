import {
	FaHouse,
	FaUsers,
	FaCirclePlus,
	FaEnvelope,
	FaUser,
} from "react-icons/fa6";
import "../assets/styles/ActionMenu.css";

const ActionMenu = () => {
	return (
		<footer>
			<div className="active">
				<FaHouse />
				<p>Home</p>
			</div>
			<div>
				<FaUsers />
				<p>Friends</p>
			</div>
			<div>
				<FaCirclePlus />
			</div>
			<div>
				<FaEnvelope />
				<p>Inbox</p>
			</div>
			<div>
				<FaUser />
				<p>Profile</p>
			</div>
		</footer>
	);
};

export default ActionMenu;
