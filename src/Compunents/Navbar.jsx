import React, { useState } from "react";
import { FaTimes, FaBars,FaSearch } from "react-icons/fa";
 import "../Style/Navbar.css";
// import logo from "../Images/red.png";
import { Link } from "react-router-dom";


const Navbar = () => {
  const [icon, seticon] = useState(false);
  
  return (
    <div className="cloths-navbar ">
      <div>
      
        {/* <p className="logo_p text-red-600 font-bold"><span>High </span> Drinks</p> */}
      </div>
      {/*List*/}
      <ul
        className={icon ? "menu active" : "menu"}
        onclick={() => seticon(!icon)}
      >
        {/* <Link to="/">Login</Link> */}
        <li><Link to="/" onClick={() => seticon(!icon)}>Home</Link></li>
        <li><Link to="/Cart" onClick={() => seticon(!icon)}>Cart</Link></li>
       
        
      </ul>
       {/*  */}
  

      <div className="menu__icon">
        <span className="navbar__icon" onClick={() => seticon(!icon)}>
          {!icon ? <FaBars /> : <FaTimes />}
        </span>
      </div>
      <div className=" flex gap-2">
      
      </div>
    </div>
  );
};

export default Navbar;
