import React from "react";
import { motion } from "framer-motion";
import { SlideUp } from "../../../utility/animation.js";

const Uses = () => {
  return (
    <section className="bg-white py-10 md:py-20">
      <div className="container mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-8 md:gap-16">
          <motion.div
            variants={SlideUp(0.2)}
            whileInView={"animate"}
            initial="initial"
            className="flex flex-col justify-center text-center md:text-left xl:pr-10 order-last md:order-first"
          >
            <h1 className="text-3xl md:text-5xl font-extrabold text-black drop-shadow-md leading-tight">
              Toplulukları Güçlendirme
            </h1>
            <p className="text-base md:text-lg text-black mt-6 md:mt-8 leading-relaxed drop-shadow-md">
              Gelişmiş çözümlerimiz, insanların sağlık sorunlarıyla güvenle yüzleşmelerine olanak tanır. En son teknolojilerimizle toplulukların nasıl canlı kaldığını, destek, bilgi ve güvenlik sağladığımızı öğrenin.
            </p>
            <p className="text-sm md:text-base text-black mt-6 md:mt-8 drop-shadow-md">
              Kendinizi ve sevdiklerinizi korumak için nasıl yardımcı olabileceğimizi keşfedin.
              <a
                href="#"
                className="text-yellow-300 font-semibold ml-1 underline decoration-dotted"
              >
                Daha Fazla Bilgi
              </a>
            </p>
            <button className="mt-6 md:mt-8 w-max bg-yellow-400 text-white px-6 md:px-8 py-3 md:py-4 rounded-full shadow-2xl hover:bg-yellow-500 transform hover:scale-105 transition-transform duration-500 ease-in-out">
              İletişime Geçin
            </button>
          </motion.div>

          <motion.div
            variants={SlideUp(0.4)}
            whileInView={"animate"}
            initial="initial"
            className="flex flex-col items-center hover:scale-105 transition-transform duration-500 ease-in-out"
          >
            <img
              src="https://placehold.co/400"
              alt="Koronavirüs"
              className="w-full rounded-3xl shadow-2xl border-4 border-yellow-300 hover:border-white transition-all duration-500 ease-in-out"
            />
            <p className="text-xl md:text-2xl text-black mt-6 md:mt-8 font-bold drop-shadow-md">
              Hastalıklar
            </p>
            <p className="text-black text-sm md:text-md mt-4 drop-shadow-md">
              Virüs hakkında daha derinlemesine bilgi edinin ve etkisini azaltmak için proaktif önlemler alın.
            </p>
          </motion.div>

          <motion.div
            variants={SlideUp(0.6)}
            whileInView={"animate"}
            initial="initial"
            className="flex flex-col items-center hover:scale-105 transition-transform duration-500 ease-in-out"
          >
            <img
              src="https://placehold.co/400"
              alt="Tanı"
              className="w-full rounded-3xl shadow-2xl border-4 border-yellow-300 hover:border-white transition-all duration-500 ease-in-out"
            />
            <p className="text-xl md:text-2xl text-black mt-6 md:mt-8 font-bold drop-shadow-md">
              Tanı
            </p>
            <p className="text-black text-sm md:text-md mt-4 drop-shadow-md">
              Sağlığınızı etkili ve hassas bir şekilde izlemek için en üst düzey tanı araçlarını kullanın.
            </p>
          </motion.div>

          <motion.div
            variants={SlideUp(0.8)}
            whileInView={"animate"}
            initial="initial"
            className="flex flex-col items-center hover:scale-105 transition-transform duration-500 ease-in-out"
          >
            <img
              src="https://placehold.co/400"
              alt="Belirtiler"
              className="w-full rounded-3xl shadow-2xl border-4 border-yellow-300 hover:border-white transition-all duration-500 ease-in-out"
            />
            <p className="text-xl md:text-2xl text-black mt-6 md:mt-8 font-bold drop-shadow-md">
              Belirtiler
            </p>
            <p className="text-black text-sm md:text-md mt-4 drop-shadow-md">
              Belirtileri erken fark edin ve uygun tıbbi bakımı ne zaman almanız gerektiğini bilin.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Uses;
