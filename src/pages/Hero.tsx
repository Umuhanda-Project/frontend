import { motion } from "framer-motion";
import hero1 from "../assets/hero1.png"
import hero2 from "../assets/hero2.png"

const Hero = () => {
  return (
    <div className="relative min-h-screen bg-hero-image bg-center bg-cover bg-no-repeat">
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/30" />

      {/* Content wrapper */}
      <div className="relative container mx-auto px-4 h-screen">
        <div className="flex flex-col lg:flex-row items-center justify-center h-full gap-8 lg:gap-16">
          {/* Text content */}
          <motion.div 
            className="w-full lg:w-[45%] flex flex-col items-center lg:items-start space-y-8 pt-16 lg:pt-0"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight text-center lg:text-left">
              Gutsinda Provisoire Biroroshye Hamwe natwe!
            </h1>
            
            <p className="text-lg md:text-xl text-gray-200 leading-relaxed text-center lg:text-left">
              Shyira imbere ejo heza hawe! Tangira kwiga amasomo arambuye kandi
              asobanutse azagufasha gutsinda kizamini cyawe cya provisoire mu buryo
              bworoshye kandi bwihuse.
            </p>

            <button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-full text-lg font-medium transition-all duration-300 hover:scale-105 w-fit">
              Tangira Nonaha
            </button>
          </motion.div>

          {/* Images */}
          <motion.div 
            className="w-full lg:w-1/2 flex flex-col items-center gap-8 lg:gap-12 pb-16 lg:pb-0"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
          >
            <motion.div
              className="relative w-full max-w-md"
              initial={{ x: 20 }}
              animate={{ x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <img
                src={hero1}
                alt="Educational content preview 1"
                className="w-full h-64 md:h-80 object-cover rounded-2xl shadow-xl hover:shadow-2xl transition-shadow duration-300"
              />
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-t from-black/20 to-transparent" />
            </motion.div>

            <motion.div
              className="relative w-full max-w-md lg:-ml-8"
              initial={{ x: -20 }}
              animate={{ x: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <img
                src={hero2}
                alt="Educational content preview 2"
                className="w-full h-64 md:h-80 object-cover rounded-2xl shadow-xl hover:shadow-2xl transition-shadow duration-300"
              />
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-t from-black/20 to-transparent" />
            </motion.div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Hero;