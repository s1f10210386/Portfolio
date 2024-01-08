"use client";
import React from "react";
import { motion } from "framer-motion";
import {
  slideInFromLeft,
  slideInFromRight,
  slideInFromTop,
} from "@/utils/motion";
import ProjectCard from "../sub/ProjectCard";
import styles from "@/components/main/Introduction.module.css";

const SkillText = () => {
  return (
    <div className={styles.skillTextContainer} id="introduction">
      <motion.div
        variants={slideInFromLeft(0.8)}
        className={styles.skillTextTitle}
      >
        ”今、自分の周りで何が起きているのか？”
      </motion.div>

      <motion.div
        variants={slideInFromRight(0.5)}
        className={styles.skillTextDescription}
      >
        今自分の周りで起きてることをマップで見れたらいいのにと思い作成
        <br />
        2Dマップだけでなく拡張現実世界(AR)でも、他のユーザーの投稿を閲覧可能
        <br />
        ネイティブアプリ化に向け、開発を進行中
      </motion.div>
      <motion.div className={styles.skillTextCardsContainer}>
        <ProjectCard
          src="/images/ar.png"
          title="投稿した内容をARで表示"
          description="自分・他人の投稿した内容を拡張現実(AR)でも表示可能"
        />
        <ProjectCard
          src="/images/geolocation.gif"
          title="Geolocation API"
          description="位置情報共有アプリのようにリアルタイムで自分のいる位置を追跡"
        />
        <ProjectCard
          src="/images/prize.png"
          title="第12回技育CAMPハッカソン 最優秀賞作品"
          description="2023年12月3日に開催された株式会社サポーターズ主催の技育マンスリーハッカソンvol.12にて最優秀賞を獲得"
        />
      </motion.div>
    </div>
  );
};

export default SkillText;
