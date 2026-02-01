import WorldMap from "../../assets/world-map.png";
import { motion } from "framer-motion";

export default function WhereToBuy() {
  return (
    <>
      <section className="container my-36 ">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 place-items-center">
          {/* form section */}
          <div className="col-span-1 space-y-8 text-center sm:text-left">
            <motion.h2
              initial={{ opacity: 0, y: 100 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                type: "spring",
                stiffness: 100,
                damping: 10,
                delay: 0.2,
              }}
              className="text-4xl font-bold text-lightGray font-serif"
            >
              Buy our products from anywhere
            </motion.h2>
            <motion.div
              initial={{ opacity: 0, y: 100 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                type: "spring",
                stiffness: 100,
                damping: 10,
                delay: 0.4,
              }}
              className="flex items-center gap-4"
            >
              {/* w-full p-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary */}
              <input
                type="text"
                placeholder="Name"
                className="input-style w-full lg:w-37.5 "
              />
              <input
                type="email"
                placeholder="Email"
                className="input-style w-full"
              />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 100 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                type: "spring",
                stiffness: 100,
                damping: 10,
                delay: 0.6,
              }}
              className="flex items-center gap-4"
            >
              <input
                type="text"
                placeholder="Country"
                className="input-style w-full"
              />
              <input
                type="text"
                placeholder="ZipCode"
                className="input-style w-full lg:w-37.5"
              />
            </motion.div>
            <motion.button
              initial={{ opacity: 0, y: 100 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                type: "spring",
                stiffness: 100,
                damping: 10,
                delay: 0.8,
              }}
              className="primary-btn w-full"
            >
              Order Now
            </motion.button>
          </div>

          {/* world map img */}
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{
              type: "spring",
              stiffness: 100,
              damping: 10,
              delay: 1,
            }}
            className="col-span-2"
          >
            <img
              src={WorldMap}
              alt="map"
              className="w-full sm:w-125 mx-auto h-auto"
            />
          </motion.div>
        </div>
      </section>
    </>
  );
}
