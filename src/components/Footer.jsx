import githubIcon from "/src/assets/imgs/icon-github.png";
import linkedinIcon from "/src/assets/imgs/icon-linkedin.png";
import behanceIcon from "/src/assets/imgs/icon-behance.png";

import React from "react";
import "../styles/footer.css";
import { Link } from "react-router-dom"; // Importando Link do React Router

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        {/* Sobre */}
        <div className="footer-column">
          <div className="about-section">
            <div className="logo-socials">
              <div className="logo">MALU</div>
              <div className="social-icons">
                <a href="https://github.com/tsmalu" target="_blank">
                  <img src={githubIcon} alt="GitHub" />
                </a>
                <a href="https://www.linkedin.com/in/tsmalu/" target="_blank">
                  <img src={linkedinIcon} alt="LinkedIn" />
                </a>
                <a href="https://www.behance.net/ts_malu" target="_blank">
                  <img src={behanceIcon} alt="Behance" />
                </a>
              </div>
            </div>
            <p className="footer-note">
              Esse site faz parte do meu processo de aprendizado em HTML, CSS e JavaScript.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
