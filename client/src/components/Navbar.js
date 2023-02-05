import React from "react";
import { Link } from "react-router-dom";
const Navbar = () => {
  return (
    <div className="navbar">
      <Link to="/" className="link">
        home
      </Link>
      <Link to="/add" className="link">
        add
      </Link>
    </div>
  );
};

export default Navbar;
