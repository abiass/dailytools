import React, { useState, useEffect } from "react";
import { Menu, X, Sun, Moon } from "lucide-react"; // adicionei ícones para luz/escuro
import { Link } from "react-router-dom";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(() => {
    // avaliando valor inicial usando localStorage
    const saved = localStorage.getItem("theme");
    if (saved) {
      return saved === "dark";
    }
    // fallback: verifica o sistema
    return window.matchMedia("(prefers-color-scheme: dark)").matches;
  });

  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [isDarkMode]);

  return (
    <nav className="bg-blue-600 p-4 shadow-md dark:bg-gray-800">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <Link
          to="/"
          className="text-2xl font-bold text-blue-200 dark:text-blue-100"
        >
          DailyTools
        </Link>

        {/* Botão toggle modo claro/escuro */}
        <button
          onClick={() => setIsDarkMode((prev) => !prev)}
          className="mr-4 text-blue-200 cursor-pointer dark:text-gray-200 hover:text-gray-700 dark:hover:text-gray-300 transition"
        >
          {isDarkMode ? <Sun size={24} /> : <Moon size={24} />}
        </button>

        {/* Botão menu mobile */}
        <button
          className="md:hidden text-blue-200 dark:text-gray-200 hover:text-gray-700 dark:hover:text-gray-300 transition"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>

        {/* Links desktop */}
        <ul className="hidden md:flex space-x-6">
          <li>
            <Link
              to="/"
              className="text-blue-200 dark:text-blue-100 hover:text-gray-700 dark:hover:text-gray-300 transition"
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              to="/about"
              className="text-blue-200 dark:text-blue-100 hover:text-gray-700 dark:hover:text-gray-300 transition"
            >
              Sobre
            </Link>
          </li>
        </ul>
      </div>

      {/* Links mobile */}
      {isOpen && (
        <ul className="md:hidden flex flex-col space-y-4 mt-4">
          <li>
            <Link
              to="/"
              className="block text-blue-200 dark:text-blue-100 hover:text-gray-700 dark:hover:text-gray-300 transition"
              onClick={() => setIsOpen(false)}
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              to="/about"
              className="block text-blue-200 dark:text-blue-100 hover:text-gray-700 dark:hover:text-gray-300 transition"
              onClick={() => setIsOpen(false)}
            >
              Sobre
            </Link>
          </li>
        </ul>
      )}
    </nav>
  );
}

export default Navbar;
