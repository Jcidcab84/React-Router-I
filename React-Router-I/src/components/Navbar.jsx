import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="menu">
      <ul className="barra">
        <li>
          <Link to="/" className="text-light text-decoration-none">🏠 Home</Link>
        </li>
        <li>
          <Link to="/Contacto" className="text-light text-decoration-none">📒 Contacto</Link>
        </li>
      </ul>
      <ul className="empresa">
        <li>Happy Cake 🍰</li>
      </ul>
    </nav>
  );
};

export default Navbar;
