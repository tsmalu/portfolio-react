import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"; // Adicionado React Router

// Importando todos os estilos
import "./styles/base.css";
import "./styles/header.css";
import "./styles/footer.css";
import "./styles/heroSection.css";
import "./styles/projectHighlight.css";
import "./styles/projectCard.css";
import "./styles/contactForm.css";

// Importando os componentes
import Header from "./components/Header";
import Footer from "./components/Footer";
import HeroSection from "./components/HeroSection";
import ProjectHighlight from "./components/ProjectHighlight";
import ProjectsSection from "./components/ProjectsSection";
import ContactForm from "./components/ContactForm";

// Importando as páginas criadas
import Projetos from "./pages/Projetos"; 
import Sobre from "./pages/Sobre"; 
import Contato from "./pages/Contato"; 

function App() {
  return (
    <Router> {/* Envolve a aplicação com Router */}
      <Header />
      <Routes> {/* Define as rotas */}
        <Route path="/" element={
          <>
            <HeroSection />
            <ProjectHighlight />
            <ProjectsSection />
            <ContactForm />
          </>
        } />
        <Route path="/projetos" element={<Projetos />} /> {/* Novo */}
        <Route path="/sobre" element={<Sobre />} /> {/* Novo */}
        <Route path="/contato" element={<Contato />} /> {/* Novo */}
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;