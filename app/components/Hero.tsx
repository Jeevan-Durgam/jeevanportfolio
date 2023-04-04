"use client";

import { motion } from "framer-motion";
import { Typewriter } from "react-simple-typewriter";
import { RiArrowRightSLine } from "react-icons/ri";

const Hero = () => {
  const headingVariants = {
    initial: { opacity: 0 },
    animate: { opacity: 1, transition: { duration: 1 } },
  };

  return (
    <div className="flex flex-col justify-center h-screen px-6 lg:px-20">
      <motion.h1
        className="text-5xl md:text-7xl font-bold text-gray-800"
        variants={headingVariants}
        initial="initial"
        animate="animate"
      >
        Hi, I'm Jeevan,
      </motion.h1>
      <motion.h2
        className="text-3xl md:text-5xl font-bold text-gray-800 mt-4"
        variants={headingVariants}
        initial="initial"
        animate="animate"
        transition={{ delay: 1 }}
      >
        I'm a&nbsp;
        <Typewriter
          words={[
            "Front-end Developer",
            "UI/UX Designer",
            "React Developer",
            "Web Enthusiast",
          ]}
          loop={true}
          cursor
          cursorStyle="_"
          typeSpeed={70}
          deleteSpeed={50}
          delaySpeed={1500}
        />
      </motion.h2>
      <motion.div
        className="flex items-center mt-10"
        variants={headingVariants}
        initial="initial"
        animate="animate"
        transition={{ delay: 2 }}
      >
        <a
          href="#"
          className="text-gray-800 font-bold text-xl hover:text-gray-600 flex items-center"
        >
          View My Work
          <RiArrowRightSLine className="ml-2" />
        </a>
      </motion.div>
    </div>
  );
};

export default Hero;
