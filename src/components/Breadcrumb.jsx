import React from "react";
import { Link } from "react-router-dom";
import fotoMalu from "../assets/imgs/global/foto-malu.jpeg";

const Breadcrumb = () => {
  // BASE_URL será "/" em dev e "/portfolio-react/" no build de produção
  const baseUrl = import.meta.env.BASE_URL;

  return (
    <>
      <nav className="breadcrumb">
        <Link to="/">Início</Link> &gt; 
        <Link to="/projetos">Projetos</Link> &gt; 
        <span>Plataforma ESG</span>
      </nav>
      <div className="project-title">
        <section className="project-title">
          <h2>Plataforma para gerenciar ações de ESG</h2>
          <div className="tags">
            <span className="tag">UI e UX</span>
            <span className="tag">Pesquisa</span>
            <span className="tag">Consultoria</span>
          </div>
          <div className="author-info">
            <img
              src={fotoMalu}
              alt="Foto de maria luisa"
              className="author-avatar"
            />
            <div className="author-details">
              <div className="author-name">
                Malu Sousa <span className="follow">• Designer</span>
              </div>
              <div className="publication-details">
                Projeto feito para Performa_IT Consultoria • 2023
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}  

export default Breadcrumb;
