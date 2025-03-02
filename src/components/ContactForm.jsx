import React from "react";
import "../styles/contactForm.css"; 

function ContactForm() {
  return (
    <section className="contact-section">
      <h2>Vamos conversar?</h2>
      <p>Me conte sobre sua necessidade, demanda ou ideia.</p>
      <form id="contactForm" action="https://formspree.io/f/xnnqjqrd" method="POST">
        <input type="text" name="name" placeholder="Nome" required />
        <input type="text" name="telefone" placeholder="Telefone" required />
        <textarea name="message" placeholder="Escreva um resumo do seu projeto" required></textarea>
        <button type="submit">Enviar</button>
      </form>
    </section>
  );
}

export default ContactForm;
