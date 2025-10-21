import React from "react";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer className="bg-gray-100 text-gray-600 py-4 mt-10 dark:bg-gray-800 dark:text-gray-300">
      <div className="max-w-7xl mx-auto px-4 flex flex-col sm:flex-row justify-between items-center text-sm dark:bg-gray-800">
        {/* Texto à esquerda */}
        <p className="mb-2 sm:mb-0">
          © {new Date().getFullYear()} DailyTools. Todos os direitos reservados.
        </p>

        {/* Links à direita */}
        <div className="flex space-x-4">
          <a
            href="https://github.com/abiass"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-[#71C9CE] transition"
          >
            GitHub
          </a>
          <a
            href="https://www.linkedin.com/in/abiasmelo/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-[#71C9CE] transition"
          >
            LinkedIn
          </a>
          <Link to="/About" className="hover:text-[#71C9CE] transition">
            Sobre
          </Link>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
