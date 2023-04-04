"use client";

import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

const Intro = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => setLoading(false), 5000); // simulating a 5s loading time
  }, []);

  return (
    <motion.div
      initial={{ opacity: 1 }}
      animate={{ opacity: loading ? 1 : 0 }}
      transition={{ duration: 1, ease: "easeInOut" }}
    >
      {/* Insert your loading animation here */}
      {loading && <p>Loading...</p>}
    </motion.div>
  );
};

export default Intro;
