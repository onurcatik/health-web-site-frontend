import React, { useState } from "react";
import { motion } from "framer-motion";
import { FiMenu, FiX } from "react-icons/fi";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleToggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <motion.header
      initial={{ opacity: 0, y: -100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.6 }}
      className="bg-white shadow-md fixed top-0 left-0 w-full z-50"
    >
      <div className="container mx-auto py-5 px-4 flex items-center justify-between">
        {/* Logo bölümü */}
        <div className="flex items-center">
          <img src="https://cdn0.iconfinder.com/data/icons/medical-kit-1/32/09-512.png" alt="Logo" className="w-12 h-12" />
          <h1 className="font-bold text-xl">Sağlıklı Yaşam Rehberi</h1>
        </div>

        {/* Masaüstü Navlink bölümü */}
        <ul className="hidden md:flex items-center gap-10 md:text-base text-sm">
          <li>
            <a href="#" className="hover:text-primary transition duration-300">
              Ürünler
            </a>
          </li>
          <li>
            <a href="#" className="hover:text-primary transition duration-300">
              Müşteri Hikayeleri
            </a>
          </li>
          <li>
            <a href="#" className="hover:text-primary transition duration-300">
              Hakkımızda
            </a>
          </li>
          <li>
            <a href="#" className="hover:text-primary transition duration-300">
              Bloglar
            </a>
          </li>
        </ul>

        {/* Buton bölümü */}
        <div className="hidden md:block">
          <button className="border border-gray-400 px-4 py-2 rounded-lg hover:bg-primary hover:text-white transform duration-300">
            İletişime Geçin
          </button>
        </div>

        {/* Hamburger İkonu */}
        <div className="md:hidden text-3xl cursor-pointer" onClick={handleToggleMenu}>
          {menuOpen ? <FiX /> : <FiMenu />}
        </div>
      </div>

      {/* Mobil Navlink bölümü */}
      {menuOpen && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: "auto" }}
          transition={{ duration: 0.5 }}
          className="bg-white shadow-md md:hidden"
        >
          <ul className="flex flex-col items-center gap-5 py-5 text-base">
            <li>
              <a href="#" className="hover:text-primary transition duration-300">
                Ürünler
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-primary transition duration-300">
                Müşteri Hikayeleri
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-primary transition duration-300">
                Hakkımızda
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-primary transition duration-300">
                Bloglar
              </a>
            </li>
            <li>
              <button className="border border-gray-400 px-4 py-2 rounded-lg hover:bg-primary hover:text-white transform duration-300">
                İletişime Geçin
              </button>
            </li>
          </ul>
        </motion.div>
      )}
    </motion.header>
  );
};

export default Navbar;