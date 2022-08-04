import { NavLink } from "react-router-dom";
import "./NavBar.css";

function NavBar(): JSX.Element {
    return (
        <div className="NavBar">
			<NavLink to="/home">home</NavLink>
			<NavLink to="/login">Login</NavLink>
        </div>
    );
}

export default NavBar;
