import BgImage from "../../assets/bg-slate.png";
import BlackCoffe from "../../assets/black.png";
import Navbar from './../Navbar/Navbar';
import { motion } from "framer-motion";
import { useState } from "react";
import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { text } from "../../../text.js";

const bgImage = {
  backgroundImage: `url(${BgImage})`,
  backgroundSize: "cover",
  backgroundPosition: "center",
  backgroundRepeat: "no-repeat",
};

export default function Hero() {
  const [openMenu, setOpenMenu] = useState(false)
  function toggleMenu(){
    setOpenMenu(!openMenu)
  }
  return (
    <>
      <main style={bgImage}>
        <section className="relative min-h-187.5 w-full">
          <div className="container">
            {/* Navbar section */}
            <Navbar openMenu={openMenu} toggleMenu={toggleMenu}/>
            {/* Hero section */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 place-items-center min-h-212.5">
              {/* text content section */}
              <div className="text-lightOrange mt-25 md:mt-0 p-4 space-y-28">
                <motion.h1 
                  initial={{opacity: 0, y: -100}}
                  animate={{opacity: 1, y: 0}}
                  transition={{ type: "spring", stiffness: 100, damping: 10, delay: 1 }}
                  className="text-7xl font-bold leading-tight ml-14">
                  Blvck Tumbler
                </motion.h1>
                <motion.div
                  initial={{opacity: 0, y: 100}}
                  animate={{opacity: 1, y: 0}}
                  transition={{ type: "spring", stiffness: 100, damping: 10, delay: 1.2 }} 
                  className="relative">
                  <div className="relative z-10 space-y-4">
                    <h1 className="text-2xl">{text.heroSubtitle}</h1>
                    <h1 className="text-sm opacity-55 leading-loose">
                      {text.heroDescription}
                    </h1>
                  </div>
                  <div className="absolute -top-6 -left-10 w-62.5 h-47.5 bg-gray-700/25"></div>
                </motion.div>
              </div>

              {/* Hero Image section */}
              <div className="relative">
                <motion.img
                  initial={{opacity: 0, scale:0}}
                  animate={{opacity: 1, scale:1}}
                  transition={{ type: "spring", stiffness: 100, damping: 10, delay: 0.4 }}
                  src={BlackCoffe}
                  alt="BlackCoffe"
                  className="relative z-40 h-90 md:h-155 img-shadow"
                />
                {/* orange circle range*/}
                <motion.div
                  initial={{opacity: 0, y: 100}}
                  animate={{opacity: 1, y: 0}}
                  transition={{ type: "spring", stiffness: 100, damping: 10, delay: 0.8 }} 
                  className="size-45 absolute top-24 -right-16 border-primary rounded-full border-20 z-10">
                </motion.div>
                {/* big text behind img*/}
                <div className="absolute -top-20 left-50 z-1">
                  <h1 className="text-[140px] scale-150 font-bold text-darkGray/40 leading-none">
                    {text.heroTitle}
                  </h1>
                </div>
              </div>

              {/* Third div section */}
              <motion.div 
                  initial={{opacity: 0, y: 100}}
                  animate={{opacity: 1, y: 0}}
                  transition={{ type: "spring", stiffness: 100, damping: 10, delay: 1.2 }} 
                className="text-lightOrange mt-25 md:mt-0 p-4 space-y-28">
                <h1 className="opacity-0 text-7xl font-bold leading-tight ml-14">
                  {text.heroTitle}
                </h1>
                <div className="relative">
                  <div className="relative z-10 space-y-4">
                    <h1 className="text-2xl">{text.heroTitle}</h1>
                    <h1 className="text-sm opacity-55 leading-loose">
                      {text.heroDescription2}
                    </h1>
                  </div>
                  <div className="absolute -top-6 -right-10 w-62.5 h-47.5 bg-darkGray/50"></div>
                </div>
              </motion.div>
            </div>
          </div>



          {/* sidebar menu section */}
          <div className={`absolute top-0 right-0 w-35 h-full bg-linear-to-b from-primary/80 to-primaryDark/80 backdrop-blur-sm z-10 ${openMenu ? 'translate-x-0' : 'translate-x-full'} transition-transform duration-500`}>
            {/* social media icons */}
            <div className="w-full h-full flex justify-center items-center gap-6 text-white flex-col">
              {/* line */}
              <div className="w-px h-17.5 bg-white"></div>

              {/* icons */}
              <div className="inline-block p-2 rounded-full border border-white cursor-pointer hover:bg-lightOrange/20 transition-all duration-300">
                <FaFacebookF className="text-2xl  hover:text-lightOrange transition-all duration-300"/>
              </div>
              <div className="inline-block p-2 rounded-full border border-white cursor-pointer hover:bg-lightOrange/20 transition-all duration-300">
                <FaTwitter className="text-2xl hover:text-lightOrange transition-all duration-300"/>
              </div>
              <div className="inline-block p-2 rounded-full border border-white cursor-pointer hover:bg-lightOrange/20 transition-all duration-300">
                <FaInstagram className="text-2xl hover:text-lightOrange transition-all duration-300"/>
              </div>
              
              {/* line */}
              <div className="w-px h-17.5 bg-white"></div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
