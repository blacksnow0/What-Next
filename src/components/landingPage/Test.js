"use client";
import React from "react";
import { motion } from "framer-motion";
import { FaStar } from "react-icons/fa"; // Star icon

const starVariants = {
  hidden: { opacity: 0, scale: 0, rotate: 0 },
  visible: (i) => ({
    opacity: [0, 1, 0], // Twinkle effect
    scale: [0.4, 1.2, 0.5], // Scale the stars for an expanding effect
    rotate: Math.random() * 360, // Random rotation for each star
    x: [0, Math.random() * 100 - 50], // Random horizontal movement with a wider spread
    y: [0, Math.random() * -80 - 20], // Larger vertical movement for floating effect
    transition: {
      duration: 1.5,
      ease: "easeInOut",
      delay: i * 0.3, // Staggered delay for each star
      repeat: Infinity,
      repeatDelay: Math.random() * 2, // Random repeat delay to make it look more organic
    },
  }),
};

function AnimatedTitle() {
  return (
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
        {/* Stars */}
        {[...Array(5)].map((_, i) => (
          <motion.div
            key={i}
            custom={i}
            className="absolute top-[-10px] left-1/2 text-yellow-400"
            variants={starVariants}
            initial="hidden"
            animate="visible"
            style={{
              left: `calc(20% + ${Math.random() * 220 - 40}px)`, // Spread stars out more randomly
            }}
          >
            <FaStar size={12} />
          </motion.div>
        ))}
      </motion.span>
    </motion.h1>
  );
}

export default AnimatedTitle;
