import React from "react";
import { services } from "../../../text";
import BlackCoffee from "/src/assets/coffee/coffee1.png";
import HotCoffee from "/src/assets/coffee/coffee3.png";
import ColdCoffee from "/src/assets/coffee/coffee1.png";
import { motion } from 'framer-motion';
import { cardVariants, containerVariants } from "../../animation/animate";

export default function Services() {
  const serviceList = [
    {
      id: 1,
      img: BlackCoffee,
      name: "Black Coffee",
      description:
        "Carefully selected coffee beans roasted daily to deliver rich aroma and smooth flavor in every cup.",
    },
    {
      id: 2,
      img: HotCoffee,
      name: "Hot Coffee",
      description:
        "Expert roasting techniques bring out deep flavor notes, balanced acidity, and a naturally sweet finish.",
    },
    {
      id: 3,
      img: ColdCoffee,
      name: "Cold Coffee",
      description:
        "Fresh coffee delivered quickly to your door so you can enjoy perfect taste anytime you want.",
    },
  ];

  return (
    <>
      <div className="container my-16 space-y-4">

        {/* header seaction */}
        <div className="text-center max-w-lg mx-auto space-y-2">
          <motion.h2
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              type: "spring",
              stiffness: 150,
              damping: 10,
              delay: 0.2,
            }}
            className="text-3xl font-bold text-lightGray">
            {services.title.split(" ").slice(0, 2).join(" ")}
            <span className="text-primary">
              {" "}
              {services.title.split(" ").slice(2).join(" ")}
            </span>{" "}
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              type: "spring",
              stiffness: 150,
              damping: 10,
              delay: 0.6,
            }}
            className="text-sm opacity-50">
            {services.description}
          </motion.p>
        </div>

        {/* card sections */}
        <motion.div 
          variants={containerVariants}
          initial='hidden'
          whileInView={'visible'}
          viewport={{amount:0.8}}
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {serviceList.map((service) => (
            <motion.div 
              variants={cardVariants}
              className="space-y-6 text-center p-4"
            >
              <img
                src={service.img}
                alt={service.name}
                className="img-shadow2 max-w-50 mx-auto hover:scale-110 duration-300 cursor-pointer"
              />
              <h3 className="text-2xl font-bold text-primary">
                {service.name}
              </h3>
              <p className="text-darkGray">{service.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </>
  );
}
