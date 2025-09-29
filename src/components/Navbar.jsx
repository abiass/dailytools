// src/components/Navbar.jsx
import React, { useState } from "react";
import { Menu, X } from "lucide-react"; // ícones leves
import { Link } from "react-router-dom"; // import Link para navegação

function Navbar() {
  const [isOpen, setIsOpen] = useState(false); // controlar se o menu está aberto

  return (
    <nav className="bg-blue-600 p-4 shadow-md">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        {/* Logo */}

        <Link to="/" className="text-2xl font-bold text-blue-200">
          DailyTools
        </Link>

        {/* Botão hamb - só aparece em telas pequenas */}
        <button
          className="md:hidden text-blue-200 hover:text-gray-700 transition cursor-pointer"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>

        {/* Links - desktop */}
        <ul className="hidden md:flex space-x-6">
          <li>
            <Link
              to="/"
              className="text-blue-200 hover:text-gray-700 transition cursor-pointer"
            >
              Home
            </Link>
          </li>

          <li>
            <Link
              to="/about"
              className="text-blue-200 hover:text-gray-700 transition cursor-pointer"
            >
              Sobre
            </Link>
          </li>
        </ul>
      </div>

      {/* Links - mobile (dropdown list) */}
      {isOpen && (
        <ul className="md:hidden flex flex-col space-y-4 mt-4">
          <li>
            <Link
              to="/"
              className="block text-blue-200 hover:text-gray-700 transition cursor-pointer"
              onClick={() => setIsOpen(false)} // fecha menu ao clicar
            >
              Home
            </Link>
          </li>

          <li>
            <Link
              to="/About"
              className="block text-blue-200 hover:text-gray-700 transition cursor-pointer"
              onClick={() => setIsOpen(false)}
            >
              {" "}
              Sobre
            </Link>
          </li>
        </ul>
      )}
    </nav>
  );
}

export default Navbar;
