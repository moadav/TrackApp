import { NavLink } from "react-router-dom";
import './NaviBar.css'
const Navbar = () => {
  return (
    <nav className="navigationBar">
      <>
        <ul className="navigations">
          <li>
            <NavLink to={"/"}> Home </NavLink>
          </li>
          <li>
            <NavLink to={"/tracks"}> Tracks </NavLink>
          </li>
        </ul>
      </>
    </nav>
  );
};
export default Navbar;
