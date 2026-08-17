"use client";

import { navVariants } from "@/utils/motion";
import { motion } from "framer-motion";
import Image from "next/image";
import styles from "../styles";

const Navbar = () => (
  <motion.nav
    variants={navVariants}
    initial="hidden"
    whileInView="show"
    className={`${styles.xPaddings} py-8 relative`}
  >
    <div className="absolute w-[50%] inset-0 gradient-01" />
    <div className={`${styles.innerWidth} mx-auto flex justify-between gap-8`}>
      <Image
        src="/search.svg"
        alt="search"
        className="w-6 h-6 object-contain"
        width={20}
        height={20}
      />
      <h2 className="font-extrabold text-6 leading-[30.24px] text-white">
        METAVERSUS
      </h2>
      <Image
        src="/menu.svg"
        alt="menu"
        className="w-6 h-6 object-contain"
        width={24}
        height={24}
      />
    </div>
  </motion.nav>
);

export default Navbar;
