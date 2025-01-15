import React from "react";
import { FaFacebook, FaInstagram, FaLinkedin } from "react-icons/fa";
import { motion } from "framer-motion";

const Footer = () => {
  return (
    <motion.footer
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      className="bg-gray-900 text-white mt-10"
    >
    

      {/* footer linkleri ve iletişim bilgileri */}
      <div className="bg-white mt-6">
        <div className="container mx-auto px-6 py-8 md:py-12 grid grid-cols-1 md:grid-cols-3 gap-10">
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-black">Hakkımızda</h3>
            <p className="text-gray-400">
              Müşterilerimizin hedeflerine ulaşmasına yardımcı olmak için özel hizmet sunuyoruz ve çaba gösteriyoruz.
            </p>
          </div>
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-black">Hızlı Linkler</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-400 hover:text-primary duration-200">Anasayfa</a></li>
              <li><a href="#" className="text-gray-400 hover:text-primary duration-200">Hizmetler</a></li>
              <li><a href="#" className="text-gray-400 hover:text-primary duration-200">İletişim</a></li>
              <li><a href="#" className="text-gray-400 hover:text-primary duration-200">Gizlilik Politikaları</a></li>
            </ul>
          </div>
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-black">Bize Ulaşın</h3>
            <p className="text-gray-400">Email: info@example.com</p>
            <p className="text-gray-400">Telefon: +555 123 456 789 </p>
            <p className="text-gray-400">Adres:  Ankara, Türkiye</p>
          </div>
        </div>
      </div>

      {/* telif hakkı */}
      <div className="bg-gray-700 py-6 text-center text-gray-400">
        <p>&copy; {new Date().getFullYear()} Şirketiniz. Tüm hakları saklıdır.</p>
      </div>
    </motion.footer>
  );
};

export default Footer;
