"use client";

import { FaHtml5, FaCss3Alt, FaJs, FaReact } from "react-icons/fa";
import { SiNextdotjs, SiTailwindcss } from "react-icons/si";
import { motion } from "framer-motion";

const Skills = () => {
  const skillVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { delay: 0.2, duration: 0.5 } },
  };

  return (
    <div className="px-6 lg:px-20 py-10 lg:py-20">
      <h3 className="text-3xl font-bold text-gray-800 mb-6 text-center">
        Skills
      </h3>
      <motion.div
        className="flex flex-wrap items-center justify-center"
        initial="hidden"
        animate="visible"
        variants={skillVariants}
      >
        <motion.div className="w-1/2 sm:w-1/3 md:w-1/4 lg:w-1/6 text-center mb-8">
          <motion.h4
            className="text-lg font-bold text-gray-800"
            initial={{ opacity: 0 }}
            whileInView={{
              opacity: 1,
              transition: { delay: 0.3, duration: 0.5 },
            }}
          >
            <FaHtml5 className="inline-block mb-2 text-6xl text-orange-500" />{" "}
            <br />
            HTML5
          </motion.h4>
        </motion.div>
        <motion.div className="w-1/2 sm:w-1/3 md:w-1/4 lg:w-1/6 text-center mb-8">
          <motion.h4
            className="text-lg font-bold text-gray-800"
            initial={{ opacity: 0 }}
            whileInView={{
              opacity: 1,
              transition: { delay: 0.4, duration: 0.5 },
            }}
          >
            <FaCss3Alt className="inline-block mb-2 text-6xl text-blue-500" />{" "}
            <br />
            CSS3
          </motion.h4>
        </motion.div>
        <motion.div className="w-1/2 sm:w-1/3 md:w-1/4 lg:w-1/6 text-center mb-8">
          <motion.h4
            className="text-lg font-bold text-gray-800"
            initial={{ opacity: 0 }}
            whileInView={{
              opacity: 1,
              transition: { delay: 0.5, duration: 0.5 },
            }}
          >
            <FaJs className="inline-block mb-2 text-6xl text-yellow-500" />{" "}
            <br />
            JavaScript
          </motion.h4>
        </motion.div>
        <motion.div className="w-1/2 sm:w-1/3 md:w-1/4 lg:w-1/6 text-center mb-8">
          <motion.h4
            className="text-lg font-bold text-gray-800"
            initial={{ opacity: 0 }}
            whileInView={{
              opacity: 1,
              transition: { delay: 0.6, duration: 0.5 },
            }}
          >
            <FaReact className="inline-block mb-2 text-6xl text-blue-400" />
            <br />
            React
          </motion.h4>
        </motion.div>
        <motion.div className="w-1/2 sm:w-1/3 md:w-1/4 lg:w-1/6 text-center mb-8">
          <motion.h4
            className="text-lg font-bold text-gray-800"
            initial={{ opacity: 0 }}
            whileInView={{
              opacity: 1,
              transition: { delay: 0.7, duration: 0.5 },
            }}
          >
            <SiNextdotjs className="inline-block mb-2 text-6xl text-black" />{" "}
            <br />
            Next.js
          </motion.h4>
        </motion.div>
        <motion.div className="w-1/2 sm:w-1/3 md:w-1/4 lg:w-1/6 text-center mb-8">
          <motion.h4
            className="text-lg font-bold text-gray-800"
            initial={{ opacity: 0 }}
            whileInView={{
              opacity: 1,
              transition: { delay: 0.8, duration: 0.5 },
            }}
          >
            <SiTailwindcss className="inline-block mb-2 text-6xl text-blue-500" />{" "}
            <br />
            Tailwind CSS
          </motion.h4>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Skills;
