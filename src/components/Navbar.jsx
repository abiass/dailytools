// src/components/Navbar.jsx
import React, { useState } from "react";
import { Menu, X } from "lucide-react"; // ícones leves

function Navbar() {
  const [isOpen, setIsOpen] = useState(false); // controla se o menu está aberto

  return (
    <nav className="bg-[#CBF1F5] p-4 shadow-md">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        {/* Logo */}
        <h1 className="text-2xl font-bold text-[#71C9CE]">ProjetoSemNome</h1>

        {/* Botão hambúrguer - só aparece em telas pequenas */}
        <button
          className="md:hidden text-gray-700 hover:text-[#71C9CE] transition cursor-pointer"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>

        {/* Links - desktop */}
        <ul className="hidden md:flex space-x-6">
          <li>
            <a
              href="#home"
              className="text-gray-700 hover:text-[#71C9CE] transition"
            >
              Home
            </a>
          </li>
          <li>
            <a
              href="#ferramentas"
              className="text-gray-700 hover:text-[#71C9CE] transition"
            >
              Ferramentas
            </a>
          </li>
          <li>
            <a
              href="#sobre"
              className="text-gray-700 hover:text-[#71C9CE] transition"
            >
              Sobre
            </a>
          </li>
        </ul>
      </div>

      {/* Links - mobile (dropdown list) */}
      {isOpen && (
        <ul className="md:hidden flex flex-col space-y-4 mt-4">
          <li>
            <a
              href="#home"
              className="block text-gray-700 hover:text-[#71C9CE] transition"
            >
              Home
            </a>
          </li>
          <li>
            <a
              href="#ferramentas"
              className="block text-gray-700 hover:text-[#71C9CE] transition"
            >
              Ferramentas
            </a>
          </li>
          <li>
            <a
              href="#sobre"
              className="block text-gray-700 hover:text-[#71C9CE] transition"
            >
              Sobre
            </a>
          </li>
        </ul>
      )}
    </nav>
  );
}

export default Navbar;
