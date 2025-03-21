import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const images = [
  "https://cdn.pixabay.com/photo/2017/05/25/13/41/man-2343383_1280.jpg",
  "https://wallpapersok.com/images/high/4k-boys-attitude-graphic-art-m88s6z3i06kmhoxs.jpg",
  "https://wallpapers.com/images/hd/4k-boys-attitude-sad-8rhdse5i0zxytyzs.jpg"
];

const typewriterVariants = {
  hidden: { opacity: 0 },
  visible: (i) => ({
    opacity: 1,
    transition: { delay: i * 0.05, duration: 0.05 }
  })
};

function LandingPage() {
  const [currentImage, setCurrentImage] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % images.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="bg-black text-white selection:bg-white selection:text-black">
      <section className="min-h-screen relative flex items-center overflow-hidden">
        <div className="absolute inset-0">
          <AnimatePresence mode="wait">
            <motion.img
              key={images[currentImage]}
              src={images[currentImage]}
              alt="Luxury Suit"
              className="w-full h-full object-cover absolute"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 1, ease: "easeInOut" }}
            />
          </AnimatePresence>
          <div className="absolute inset-0 bg-gradient-to-r from-black to-transparent"></div>
        </div>
        <div className="relative z-10 max-w-[2000px] mx-auto px-4 sm:px-8 pt-32">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentImage} 
              initial="hidden"
              animate="visible"
              exit="hidden"
              variants={{
                hidden: { opacity: 0, y: 50 },
                visible: { opacity: 1, y: 0, transition: { staggerChildren: 0.3, ease: "easeInOut" } }
              }}
              className="max-w-4xl"
            >
              
              <motion.p className=" tracking-[0.3em] mb-8 opacity-90 text-4xl">
                {"WELCOME TO WEBSITE".split("").map((char, i) => (
                  <motion.span key={i} custom={i} variants={typewriterVariants}>
                    {char}
                  </motion.span>
                ))}
              </motion.p>

              
              <motion.h1 className="text-[12vw] md:text-[7vw] font-light leading-[0.9] mb-8">
                {"CRAFTED WITH PRECISION".split("").map((char, i) => (
                  <motion.span key={i} custom={i} variants={typewriterVariants}>
                    {char}
                  </motion.span>
                ))}
              </motion.h1>

              <motion.div
                className="h-[1px] w-32 bg-white mb-12"
                variants={{ hidden: { scaleX: 0 }, visible: { scaleX: 1 } }}
                transition={{ duration: 1 }}
              ></motion.div>

              <motion.p
                className="text-lg sm:text-xl font-light tracking-wide text-white/80 max-w-xl mb-16 leading-relaxed"
                variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}
                transition={{ duration: 1, delay: 0.5 }}
              >
                
              </motion.p>

              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="group w-full sm:w-auto px-8 sm:px-12 py-4 border border-white hover:bg-white hover:text-black transition-all text-xs tracking-[0.2em] flex items-center justify-center sm:justify-start gap-4"
              >
                
                <motion.span className="h-[1px] w-8 bg-current" whileHover={{ x: 8 }}></motion.span>
              </motion.button>
            </motion.div>
          </AnimatePresence>
        </div>
      </section>
    </div>
  );
}

export default LandingPage;
