import { NavLink } from "react-router-dom";

import assets from "../../assets";
import "./topNav.css";

export default function TopNav() {
  return (
    <nav className="nav">
      <div className="left-content">
        <img src={assets.os2Icon} alt="Logo" className="logo" />
        <span className="text">OS2</span>
      </div>
      <NavLink to="/home">
        <li>Home</li>
      </NavLink>
      <NavLink to="/dispatch/3">
        <li>Dispatch</li>
      </NavLink>
      <div className="right-content">
        <img src={assets.profileIcon} alt="User" className="user" />
      </div>
    </nav>
  );
}
