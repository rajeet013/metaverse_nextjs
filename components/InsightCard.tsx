"use client";

import { motion } from "framer-motion";

import Image from "next/image";
import { fadeIn } from "../utils/motion";

interface InsightCardProps {
  imgUrl: string;
  title: string;
  subtitle: string;
  index: number;
}

const InsightCard = ({ imgUrl, title, subtitle, index }: InsightCardProps) => (
  <motion.div
    variants={fadeIn("up", "spring", index * 0.5, 1)}
    className="flex md:flex-row flex-col gap-4"
  >
    <Image
      src={imgUrl}
      alt="planet-01"
      width={200}
      height={200}
      className="md:w-57.5 w-full h-62.5 rounded-8 object-cover"
    />
    <div className="w-full flex justify-between items-center">
      <div className="flex-1 md:ml-15.5 flex flex-col max-w-162.5">
        <h4 className="font-normal lg:text-[42px] text-[26px] text-white">
          {title}
        </h4>
        <p className="mt-4 font-normal lg:text-[20px] text-[14px] text-secondary-white">
          {subtitle}
        </p>
      </div>

      <div className="lg:flex hidden items-center justify-center w-25 h-25 rounded-full bg-transparent border border-white">
        <Image
          src="/arrow.svg"
          alt="arrow"
          width={200}
          height={200}
          className="w-[40%] h-[40%] object-contain"
        />
      </div>
    </div>
  </motion.div>
);

export default InsightCard;
