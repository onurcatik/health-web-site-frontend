import React from "react";
import Card from "./CardComp.jsx";
import { motion } from "framer-motion";
import { SlideLeft, SlideRight } from "../../../utility/animation.js";

const SaglikYasamRehberi = () => {
  return (
    <section className="bg-white py-12 lg:py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-opacity-30 mix-blend-overlay">
        <div className="absolute top-0 right-0 h-32 w-32 lg:h-64 lg:w-64 rounded-full bg-yellow-400 opacity-50 blur-xl animate-pulse" />
        <div className="absolute bottom-0 left-0 h-24 w-24 lg:h-48 lg:w-48 rounded-full bg-blue-300 opacity-50 blur-2xl animate-pulse" />
      </div>
      <div className="container mx-auto px-4 md:px-8 lg:px-20">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 lg:gap-16 items-center">
          <motion.div
            variants={SlideLeft(0.8)}
            whileInView={"animate"}
            initial="initial"
            className="text-center lg:text-left lg:pr-16 backdrop-blur-lg bg-opacity-20 p-6 lg:p-8 rounded-lg shadow-xl w-96 relative lg:left-0"
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-black drop-shadow-md">
              Sağlıklı Yaşamınızı Güçlendirin
            </h1>
            <p className="text-lg md:text-xl text-black mt-6 lg:mt-8 drop-shadow-lg">
              Sağlığınızı artırmak için tasarlanan hizmetlerimizin dönüştürücü etkisini keşfedin, kişiye özel öneriler ve yerel seçenekler ile.
            </p>
            <button className="mt-8 lg:mt-10 bg-yellow-500 text-black px-6 py-3 lg:px-8 lg:py-4 rounded-full shadow-lg hover:bg-yellow-600 hover:shadow-2xl transform transition-transform duration-300 hover:scale-110">
              Bugün Bizimle İletişime Geçin
            </button>
          </motion.div>
          <div className="col-span-2">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 relative left-16">
              <motion.div
                variants={SlideRight(0.2)}
                whileInView={"animate"}
                initial="initial"
                className="bg-opacity-30 backdrop-blur-sm rounded-xl p-6 transition-all duration-500 hover:bg-opacity-40 transform hover:-translate-y-2 shadow-xl"
              >
                <Card
                  icon="https://cdn0.iconfinder.com/data/icons/freebies-2/24/medical-personnel-doctor-512.png"
                  heading="Erken Tespit"
                  text="Proaktif sağlık yönetimi sağlamak ve riskleri en aza indirmek için belirtileri erken fark edin."
                />
              </motion.div>
              <motion.div
                variants={SlideRight(0.4)}
                whileInView={"animate"}
                initial="initial"
                className="bg-opacity-30 backdrop-blur-sm rounded-xl p-6 transition-all duration-500 hover:bg-opacity-40 transform hover:-translate-y-2 shadow-xl"
              >
                <Card
                  icon="https://cdn3.iconfinder.com/data/icons/clinical-3/96/medical-checkup-512.png"
                  heading="Kişiye Özel Çözümler"
                  text="Günlük alışkanlıklarınız ve sağlık ihtiyaçlarınıza yönelik özel öneriler alın."
                />
              </motion.div>
              <motion.div
                variants={SlideRight(0.6)}
                whileInView={"animate"}
                initial="initial"
                className="bg-opacity-30 backdrop-blur-sm rounded-xl p-6 transition-all duration-500 hover:bg-opacity-40 transform hover:-translate-y-2 shadow-xl"
              >
                <Card
                  icon="https://cdn3.iconfinder.com/data/icons/clinical-3/96/medical-kit-512.png"
                  heading="Yerel Bilgiler"
                  text="Çevrenizdeki sağlık hizmetleriyle ilgili güncel kaynaklarla bilgi sahibi olun."
                />
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SaglikYasamRehberi;