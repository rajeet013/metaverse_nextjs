"use client";

import { motion } from "framer-motion";

import { TitleText, TypingText } from "@/components/CustomTexts";
import InsightCard from "@/components/InsightCard";
import { insights } from "../constants";
import styles from "../styles";
import { staggerContainer } from "../utils/motion";

const Insights = () => (
  <section className={`${styles.paddings} relative z-10`}>
    <motion.div
      variants={staggerContainer()}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.25 }}
      className={`${styles.innerWidth} mx-auto flex flex-col`}
    >
      <TypingText title="| Insight" textStyles="text-center" />
      <TitleText
        title={<>Insight about metaverse</>}
        textStyles="text-center"
      />
      <div className="mt-12.5 flex flex-col gap-7.5">
        {insights.map((item, index) => (
          <InsightCard key={`insight-${index}`} {...item} index={index + 1} />
        ))}
      </div>
    </motion.div>
  </section>
);

export default Insights;
