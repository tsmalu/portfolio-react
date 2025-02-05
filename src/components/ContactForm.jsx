import "../styles/contactForm.css";  // ✅ Correto no ContactForm.jsx

import React, { useEffect, useRef } from "react";


const ContactForm = () => {
  const contactSectionRef = useRef(null);

  // Efeito para animação ao rolar a página
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate");
          }
        });
      },
      { threshold: 0.1 } // Dispara a animação quando 10% do elemento estiver visível
    );

    if (contactSectionRef.current) {
      observer.observe(contactSectionRef.current);
    }

    return () => {
      if (contactSectionRef.current) {
        observer.unobserve(contactSectionRef.current);
      }
    };
  }, []);

  return (
    <section className="contact-section" id="contato" ref={contactSectionRef}>
      <h2>Vamos conversar?</h2>
      <p>
        Me conte sobre sua necessidade, demanda ou ideia. Estou curiosa pra
        conhecer você e seu projeto.
      </p>
      <form
        id="contactForm"
        action="https://formspree.io/f/xnnqjqrd"
        method="POST"
      >
        <input type="text" id="name" name="name" placeholder="Nome" required />
        <input
          type="text"
          id="telefone"
          name="telefone"
          placeholder="Telefone"
          required
        />
        <textarea
          id="message"
          name="message"
          placeholder="Escreva um breve resumo do seu projeto e o que você precisa"
          required
        ></textarea>
        <button type="submit">Enviar</button>
      </form>
    </section>
  );
};

export default ContactForm;