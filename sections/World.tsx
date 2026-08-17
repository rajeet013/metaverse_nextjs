"use client";

import { motion } from "framer-motion";

import { TitleText, TypingText } from "@/components/CustomTexts";
import Image from "next/image";
import styles from "../styles";
import { fadeIn, staggerContainer } from "../utils/motion";

const World = () => (
  <section className={`${styles.paddings} relative z-10`}>
    <motion.div
      variants={staggerContainer()}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.25 }}
      className={`${styles.innerWidth} mx-auto flex flex-col`}
    >
      <TypingText title="| People on the World" textStyles="text-center" />
      <TitleText
        title={
          <>
            Track friends around you and invite them to play together in the
            same world
          </>
        }
        textStyles="text-center"
      />

      <motion.div
        variants={fadeIn("up", "tween", 0.3, 1)}
        className="relative mt-17 flex w-full h-137.5"
      >
        <Image
          src="/map.png"
          alt="map"
          width={200}
          height={200}
          className="w-full h-full object-cover"
        />

        <div className="absolute bottom-20 right-20 w-17.5 h-17.5 p-1.5 rounded-full bg-[#5D6680]">
          <Image
            src="/people-01.png"
            alt="people"
            width={200}
            height={200}
            className="w-full h-full"
          />
        </div>

        <div className="absolute top-10 left-20 w-17.5 h-17.5 p-1.5 rounded-full bg-[#5D6680]">
          <Image
            src="/people-02.png"
            alt="people"
            width={200}
            height={200}
            className="w-full h-full"
          />
        </div>

        <div className="absolute top-1/2 left-[45%] w-17.5 h-17.5 p-1.5 rounded-full bg-[#5D6680]">
          <Image
            src="/people-03.png"
            alt="people"
            width={200}
            height={200}
            className="w-full h-full"
          />
        </div>
      </motion.div>
    </motion.div>
  </section>
);

export default World;
