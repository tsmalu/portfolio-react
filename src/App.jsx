import React from "react";
import { HashRouter as Router, Routes, Route } from "react-router-dom"; 
<<<<<<< HEAD
import ScrollToTop from "./components/ScrollToTop";

=======
import ScrollToTop from "./components/ScrollToTop";  // Mantenha o import correto
>>>>>>> recuperacao

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
<<<<<<< HEAD
import ProjetoESG from "./pages/ProjetoESG"; // <- Nova página adicionada
=======
import ProjetoESG from "./pages/ProjetoESG"; 
import ProjetoUiGame from "./pages/ProjetoUiGame";
import ProjetoRedesignFretadao from "./pages/ProjetoRedesignFretadao";


>>>>>>> recuperacao

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
<<<<<<< HEAD
      <ScrollToTop /> {/* Aqui faz o scroll resetar ao mudar de página */}
=======
      <ScrollToTop /> {/* Mantém o ScrollToTop para resetar o scroll ao mudar de página */}
>>>>>>> recuperacao
      <Routes> 
        <Route path="/" element={<Home />} />
        <Route path="/projetos" element={<Projetos />} />
        <Route path="/sobre" element={<Sobre />} />
        <Route path="/contato" element={<Contato />} />
<<<<<<< HEAD
        <Route path="/projeto-esg" element={<ProjetoESG />} /> 
=======
        <Route path="/projeto-esg" element={<ProjetoESG />} />
        <Route path="/projeto-ui-game" element={<ProjetoUiGame />} />
        <Route path="/projeto-redesign-fretadao" element={<ProjetoRedesignFretadao />} />


        
>>>>>>> recuperacao
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
