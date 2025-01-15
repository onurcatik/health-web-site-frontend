import React from "react";
import { SlideUp } from "../../../utility/animation";
import { motion } from "framer-motion";

const Hero = () => {
  return (
    <section className="relative py-16 md:py-20 lg:py-28 bg-gradient-to-t from-gray-400 via-white to-gray-200">
      <div className="container mx-auto flex flex-col lg:flex-row items-center gap-8 md:gap-10 bg-gray-900 bg-opacity-80 backdrop-blur-sm p-8 md:p-12 rounded-lg shadow-2xl">
        {/* Image Section */}
        <motion.div
          initial={{ opacity: 0, x: -100 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="w-full lg:w-1/2 flex items-center justify-center"
        >
          <img
            src="https://placehold.co/400"
            alt="Sağlıklı Yaşam Rehberi"
            className="w-full h-auto max-w-xs sm:max-w-md lg:max-w-lg rounded-md transform hover:scale-110 transition duration-500"
          />
        </motion.div>

        {/* Text Section */}
        <div className="w-full lg:w-1/2 text-center lg:text-left space-y-6 md:space-y-8">
          <motion.h1
            variants={SlideUp(0.2)}
            whileInView="animate"
            initial="initial"
            className="text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-tight"
          >
            Sağlıklı Yaşam <br /> Rehberi
          </motion.h1>
          <motion.p
            variants={SlideUp(0.4)}
            whileInView="animate"
            initial="initial"
            className="text-base md:text-lg lg:text-xl text-gray-300"
          >
            Sağlıklı bir yaşam tarzı benimsemek, beden ve zihin sağlığınızı korumak için rehberimizi kullanın ve en iyi ipuçlarını keşfedin.
          </motion.p>
          <motion.div
            variants={SlideUp(0.6)}
            whileInView="animate"
            initial="initial"
            className="flex justify-center lg:justify-start"
          >
            <button className="bg-gradient-to-r from-green-500 to-blue-500 text-white px-6 md:px-8 py-2 md:py-3 rounded-lg font-semibold hover:shadow-lg hover:-translate-y-1 transform transition-all duration-300">
              Daha Fazla Bilgi
            </button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;