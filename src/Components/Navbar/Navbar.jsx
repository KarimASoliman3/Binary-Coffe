import React from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { motion } from "framer-motion";
import { text } from "../../../text";

export default function Navbar({ toggleMenu }) {
  return (
    <>
      <nav className="absolute top-0 left-0 w-full pt-10 text-white z-60">
        <div className="container">
          <div className="flex justify-between items-center">
            {/* logo section */}
            <motion.h1
              initial={{ opacity: 0, y: -100 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                type: "spring",
                stiffness: 100,
                damping: 10,
                delay: 0.2,
              }}
              className="text-2xl font-semibold text-lightOrange uppercase"
            >
              {" "}
              <span className="text-primary">
                {text.logoName.split(" ")[0]}
              </span>{" "}
              {text.logoName.split(" ").slice(1).join(" ")}
            </motion.h1>
            {/* menu section */}
            <motion.div
              initial={{ opacity: 0, y: -100 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                type: "spring",
                stiffness: 100,
                damping: 10,
                delay: 0.2,
              }}
              onClick={toggleMenu}
            >
              <GiHamburgerMenu
                className="text-3xl cursor-pointer"
              />
            </motion.div>
          </div>
        </div>
      </nav>
    </>
  );
}
