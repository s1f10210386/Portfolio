"use client";
import React from "react";
import { motion } from "framer-motion";
import {
  slideInFromLeft,
  slideInFromRight,
  slideInFromTop,
} from "@/utils/motion";
import ProjectCard from "../sub/ProjectCard";

const SkillText = () => {
  return (
    <div className="w-full h-auto flex flex-col items-center justify-center">
      <motion.div
        variants={slideInFromLeft(0.8)}
        className="text-[50px] text-white font-medium mt-[30px] text-center mb-[20px]"
      >
        ”今、自分の周りで何が起きているのか？”
      </motion.div>

      <motion.div
        variants={slideInFromRight(0.5)}
        className="text-[20px] text-gray-400 mb-10 mt-[10px] text-center"
      >
        今自分の周りで起きてることがマップで見れたらいいのになと思い作成しました。
        <br />
        2Dマップだけでなく拡張現実世界(AR)でも、他のユーザーの投稿を閲覧することができます。
        <br />
        技育マンスリーハッカソンvol.12に参加した際に開発し、見事最優秀賞を獲得。
        <br />
        ネイティブアプリ化に向け、開発を進行中です。
      </motion.div>
      <motion.div className="h-full w-full flex flex-col md:flex-row gap-10 px-10">
        <ProjectCard
          src=""
          title="Modern Next.js Portfolio"
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
        />
        <ProjectCard
          src=""
          title="Interactive Website Cards"
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
        />
        <ProjectCard
          src="/images/prize.png"
          title="技育マンスリーハッカソンvol.12 最優秀賞作品"
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
        />
      </motion.div>
    </div>
  );
};

export default SkillText;
