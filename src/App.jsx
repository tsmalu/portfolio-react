import React from "react";
import { HashRouter as Router, Routes, Route } from "react-router-dom"; 
import ScrollToTop from "./components/ScrollToTop";


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
import ProjetoESG from "./pages/ProjetoESG"; // <- Nova página adicionada

// Criando um componente para a Home
function Home() {
  return (
    <>
      <HeroSection />
      <ProjectHighlight />
      <ProjectsSection />
      <ContactForm />
    </>
  );
}

function App() {
  return (
    <Router> 
      <Header />
      <ScrollToTop /> {/* Aqui faz o scroll resetar ao mudar de página */}
      <Routes> 
        <Route path="/" element={<Home />} />
        <Route path="/projetos" element={<Projetos />} />
        <Route path="/sobre" element={<Sobre />} />
        <Route path="/contato" element={<Contato />} />
        <Route path="/projeto-esg" element={<ProjetoESG />} /> 
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
