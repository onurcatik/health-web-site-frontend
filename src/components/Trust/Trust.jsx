import React from "react";
import { motion } from "framer-motion";
import { SlideUp } from "../../../utility/animation";

const HealthGuide = () => {
  return (
    <section className="bg-gradient-to-br from-blue-800 via-purple-900 to-red-700 py-16 sm:py-24 mt-16 sm:mt-24">
      <div className="container mx-auto px-6 sm:px-8 md:px-16 lg:px-28">
        <motion.h1
          variants={SlideUp(0.2)}
          initial="initial"
          whileInView="animate"
          className="text-4xl sm:text-5xl md:text-6xl font-bold text-center text-white mb-12 sm:mb-16"
        >
          Sağlık Yaşam Rehberimize Neden Güvenmelisiniz?
        </motion.h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16">
          <motion.div
            variants={SlideUp(0.4)}
            initial="initial"
            whileInView="animate"
            className="p-8 sm:p-10 bg-white bg-opacity-10 rounded-2xl md:rounded-3xl shadow-xl hover:shadow-[0_0_30px_5px_rgba(255,255,255,0.4)] transition-all duration-500 backdrop-blur-md hover:scale-105"
          >
            <div className="flex items-center justify-center mb-6 sm:mb-8 ">
              <img src="https://cdn4.iconfinder.com/data/icons/health-care-and-first-responders-with-masks/64/doctor-white-male-coronavirus-512.png" alt="Sağlık uzmanı simgesi" className="w-16 h-16 sm:w-20 sm:h-20" />
            </div>
            <h2 className="text-3xl sm:text-4xl font-semibold text-white">Doğrulanmış Bilgi Kaynağı</h2>
            <p className="text-lg sm:text-xl text-gray-200 mt-3 sm:mt-4">
              Sağlık yaşam rehberimiz, Dünya Sağlık Örgütü (DSÖ) gibi uluslararası güvenilir kaynaklardan alınan en güncel verilerle hazırlanmıştır. En yüksek doğruluk ve güvenlik standartlarına uygun şekilde oluşturulmuştur.
            </p>
            <p className="text-sm sm:text-md text-gray-300 mt-4 sm:mt-6">
              Sağlık rehberlerimizle kararlarınızı güçlendirin.
              <span className="text-yellow-300 font-medium cursor-pointer hover:underline"> Daha fazlasını öğrenin</span>
            </p>
          </motion.div>

          <motion.div
            variants={SlideUp(0.6)}
            initial="initial"
            whileInView="animate"
            className="p-8 sm:p-10 bg-white bg-opacity-10 rounded-2xl md:rounded-3xl shadow-xl hover:shadow-[0_0_30px_5px_rgba(255,255,255,0.4)] transition-all duration-500 backdrop-blur-md hover:scale-105"
          >
            <div className="flex items-center justify-center mb-6 sm:mb-8">
              <img src="https://cdn3.iconfinder.com/data/icons/corona-virus-set-1/64/a-12-512.png" alt="Uzman desteği simgesi" className="w-16 h-16 sm:w-20 sm:h-20" />
            </div>
            <h2 className="text-3xl sm:text-4xl font-semibold text-white">Uzman Onaylı Güvence</h2>
            <p className="text-lg sm:text-xl text-gray-200 mt-3 sm:mt-4">
              Rehberimizde sunulan yöntemler, sağlık alanında uzman profesyoneller tarafından titizlikle incelenmiş ve onaylanmıştır. Bu sayede, rehberimizin doğruluğu ve güvenilirliği garanti altına alınmıştır.
            </p>
            <p className="text-sm sm:text-md text-gray-300 mt-4 sm:mt-6">
              Sağlığınızla ilgili en güvenilir bilgiler için rehberimizi kullanın.
              <span className="text-yellow-300 font-medium cursor-pointer hover:underline"> Daha fazlasını öğrenin</span>
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HealthGuide;
