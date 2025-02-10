import React from "react";
import "../styles/header.css";
import { Link } from "react-router-dom"; // Importando Link do React Router

function Header() {
  return (
    <header className="header">
      <Link to="/" className="logo">MALU</Link> {/* Substituído href por Link */}
      <nav>
        <ul className="menu">
          <li><Link to="/projetos">projetos</Link></li> 
          <li><Link to="/contato">contato</Link></li> 
          <li><Link to="/sobre">sobre</Link></li>
        </ul>
      </nav>
      <div className="hamburger">&#9776;</div>
    </header>
  );
}

export default Header;
