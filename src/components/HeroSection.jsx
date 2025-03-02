import React from "react";
import { Link } from "react-router-dom"; // Importando Link do React Router
import "../styles/heroSection.css";


function HeroSection() {
  return (
    <section className="hero-section">
      <h1>Portfólio de Design</h1>
      <p>Olá, me chamo malu! sou designer com 10 anos de experiência em empresas de tecnologia, varejo e consultoria. 
        Atuo de ponta a ponta no design de produtos digitais e com criação de marcas e identidade visual.</p>
      <button>
        <Link to="/projetos">Ver projetos</Link>
      </button>
    </section>
  );
}

export default HeroSection;
