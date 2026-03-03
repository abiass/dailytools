import React from "react";
import { Link } from "react-router-dom";
import { Github, Linkedin, Info } from "lucide-react";

function Footer() {
  return (
    <footer className="bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 text-white py-8 mt-12 shadow-lg border-t border-blue-400 dark:border-gray-700">
      <div className="max-w-7xl mx-auto px-4">
        {/* Grid footer */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-6">
          {/* Brand */}
          <div>
            <h3 className="text-2xl font-bold mb-2 bg-gradient-to-r from-white to-blue-100 bg-clip-text text-transparent">
              DailyTools
            </h3>
            <p className="text-blue-100 text-sm">
              Ferramentas úteis para simplificar seu dia a dia
            </p>
          </div>

          {/* Links */}
          <div>
            <h4 className="font-semibold mb-3 text-blue-100">Navegação</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link
                  to="/"
                  className="hover:text-blue-200 transition duration-200"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  to="/About"
                  className="hover:text-blue-200 transition duration-200"
                >
                  Sobre
                </Link>
              </li>
            </ul>
          </div>

          {/* Redes Sociais */}
          <div>
            <h4 className="font-semibold mb-3 text-blue-100">Conecte-se</h4>
            <div className="flex gap-4">
              <a
                href="https://github.com/abiass"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:bg-white hover:bg-opacity-20 p-2 rounded-lg transition duration-200"
                title="GitHub"
              >
                <Github size={20} />
              </a>
              <a
                href="https://www.linkedin.com/in/abiasmelo/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:bg-white hover:bg-opacity-20 p-2 rounded-lg transition duration-200"
                title="LinkedIn"
              >
                <Linkedin size={20} />
              </a>
              <Link
                to="/About"
                className="hover:bg-white hover:bg-opacity-20 p-2 rounded-lg transition duration-200"
                title="Sobre"
              >
                <Info size={20} />
              </Link>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="h-px bg-white bg-opacity-20 mb-4"></div>

        {/* Copyright */}
        <div className="text-center text-blue-100 text-sm">
          <p>
            © {new Date().getFullYear()} DailyTools. Todos os direitos
            reservados.
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
