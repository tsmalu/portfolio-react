import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import ProjectsSection from "../components/ProjectsSection"; 

function Projetos() {
  return (
    <div className="projetos-container">
      {/* Hero Section */}
      <section className="hero-section">
        <h1>Projetos</h1>
      </section>

      {/* Container de Projetos */}
      <ProjectsSection />
    </div>
  );
}

export default Projetos;
