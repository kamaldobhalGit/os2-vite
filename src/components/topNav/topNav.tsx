import { NavLink } from "react-router-dom";

import assets from "../../assets";
import "./topNav.css";

export default function TopNav() {
  function handleLogout() {
    localStorage.removeItem("authToken");
  }
  return (
    <nav className="nav">
      <div className="left-content">
        <img src={assets.os2Icon} alt="Logo" className="logo" />
        <span className="text">OS2</span>
      </div>
      <NavLink to="/home">Home</NavLink>
      <NavLink to="/dispatch/3">Dispatch</NavLink>
      <button onClick={() => handleLogout()}>Logout</button>
      <div className="right-content">
        <img src={assets.profileIcon} alt="User" className="user" />
      </div>
    </nav>
  );
}
