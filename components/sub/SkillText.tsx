"use client";
import React from "react";
import { motion } from "framer-motion";
import {
  slideInFromLeft,
  slideInFromRight,
  slideInFromTop,
} from "@/utils/motion";

const SkillText = () => {
  return (
    <div className="w-full h-auto flex flex-col items-center justify-center">
      <motion.div
        variants={slideInFromLeft(0.5)}
        className="text-[50px] text-white font-medium mt-[10px] text-center mb-[15px]"
      >
        Technologies Used
      </motion.div>
    </div>
  );
};

export default SkillText;
