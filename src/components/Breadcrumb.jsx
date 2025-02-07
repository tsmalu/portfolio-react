import React from "react";
import { Link } from "react-router-dom";
import "../styles/ProjectStyles.css"; // Importando os estilos


function Breadcrumb({ projectName }) {
  return (
    <nav className="breadcrumb">
      <Link to="/">Início</Link> &gt;
      <Link to="/projetos">Projetos</Link> &gt;
      <span>{projectName}</span>
    </nav>
  );
}

export default Breadcrumb;
