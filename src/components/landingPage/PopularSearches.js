"use client";
import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { FaStar } from "react-icons/fa";

import globe from "../../../public/images/globe.jpeg";
import women from "../../../public/images/women.jpeg";
import fresher from "../../../public/images/fresher.jpeg";
import time from "../../../public/images/time.jpeg";

const categories = [
  { title: "Jobs For Freshers", image: fresher },
  { title: "Jobs For Women", image: women },
  { title: "Part-time Jobs", image: time },
  { title: "International Jobs", image: globe },
];

const stars = [
  { top: "-10px", left: "20%", size: 12 },
  { top: "5px", left: "40%", size: 14 },
  { top: "-8px", left: "60%", size: 10 },
  { top: "-12px", left: "95%", size: 13 },
  { bottom: "-10px", right: "20%", size: 12 },
  { bottom: "5px", right: "40%", size: 14 },
  { bottom: "-8px", right: "60%", size: 10 },
  { bottom: "-12px", right: "95%", size: 13 },
];

const starVariants = {
  hidden: { opacity: 0, scale: 0 },
  visible: (i) => ({
    opacity: [0, 1, 0],
    scale: [0.5, 1, 0.5],
    rotate: Math.random() * 360, // Random rotation for each star
    x: [0, Math.random() * 100 - 50], // Random horizontal movement
    y: [0, Math.random() * -80 - 20], // Random vertical movement
    transition: {
      duration: 1.5,
      ease: "easeInOut",
      delay: i * 0.3, // Staggered delay for each star
      repeat: Infinity,
      repeatDelay: Math.random() * 2, // Random repeat delay to make it look more organic
    },
  }),
};

function PopularSearches() {
  const gridClick = (title) => {
    console.log(`${title} was clicked`);
  };

  return (
    <div className="relative min-h-screen flex flex-col justify-center items-center overflow-hidden alter py-20 px-6">
      <motion.h1
        className="text-4xl md:text-6xl font-extrabold text-center mb-16 bg-gradient-to-r from-indigo-400 to-purple-600 bg-clip-text text-transparent relative"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: true }}
      >
        Explore Trending{" "}
        <motion.span className="relative inline-block heading">
          Opportunities
          {stars.map((star, i) => (
            <motion.div
              key={i}
              custom={i}
              className="absolute"
              variants={starVariants}
              initial="hidden"
              animate="visible"
              style={{
                top: star.top,
                left: star.left,
                bottom: star.bottom,
                right: star.right,
              }}
            >
              <FaStar size={star.size} />
            </motion.div>
          ))}
        </motion.span>
      </motion.h1>

      <motion.div
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 w-full max-w-6xl"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
        viewport={{ once: true }}
      >
        {categories.map((item, index) => (
          <motion.div
            key={index}
            className="group relative p-6 rounded-xl bg-gradient-to-r from-gray-200 border to-gray-300 border-gray-300 shadow-lg flex flex-col justify-end cursor-pointer transition-all duration-300 hover:bg-gray-100 hover:shadow-xl"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => gridClick(item.title)}
          >
            <motion.div
              className="mb-6 p-5 text-4xl text-center"
              initial={{ scale: 0.5 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
            >
              <Image
                src={item.image}
                alt={item.title}
                width={130}
                className=" object-cover"
                priority
              />
            </motion.div>

            <h2 className="text-xl pl-2 font-semibold text-gray-800 mb-4">
              {item.title}
            </h2>

            <motion.button
              className="px-4 py-2 text-sm font-semibold text-white bg-gray-700 rounded-full shadow-md transition-all duration-300 hover:scale-105 active:scale-95"
              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.9 }}
            >
              Learn More
            </motion.button>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
}

export default PopularSearches;
