"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  slideInFromLeft,
  slideInFromRight,
  slideInFromTop,
} from "@/utils/motion";
import Image from "next/image";
import styles from "@/components/sub/HeroContent.module.css";

const HeroContent = () => {
  return (
    <motion.div
      initial="hidden"
      animate="visible"
      className={styles.heroContentContainer}
      id="about-me"
    >
      <div className={styles.heroContentTextContainer}>
        <motion.div
          variants={slideInFromLeft(0.5)}
          className={styles.heroContentTitle}
        >
          <span>
            Project1
            <div> ARMAP-Connect </div>
          </span>
        </motion.div>

        <motion.p
          variants={slideInFromLeft(0.8)}
          className={styles.heroContentDescription}
        >
          「今、あなたの周りで何が起こっているかを知ることができるアプリ」
          <br />
          開発人数：２人
          <br />
          担当箇所：UI・2DMAPフロントバックエンド開発・アイデア
          <br />
        </motion.p>
        <motion.a
          variants={slideInFromLeft(1)}
          className={styles.heroContentButton}
        >
          詳しく見る
        </motion.a>
      </div>

      <motion.div
        variants={slideInFromRight(0.8)}
        className={styles.heroContentImageContainer}
      >
        <Image
          src="/images/mock.png"
          alt="work icons"
          height={1200}
          width={1200}
          priority
        />
      </motion.div>
    </motion.div>
  );
};

export default HeroContent;
