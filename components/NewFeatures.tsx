import Image from "next/image";
import styles from "../styles";

interface NewFeaturesProps {
  imgUrl: string;
  title: string;
  subtitle: string;
}

const NewFeatures = ({ imgUrl, title, subtitle }: NewFeaturesProps) => (
  <div className="flex-1 flex flex-col sm:max-w-62.5 min-w-52.5">
    <div
      className={`${styles.flexCenter} w-17.5 h-17.5 rounded-6 bg-[#323F5D]`}
    >
      <Image
        src={imgUrl}
        alt="icon"
        width={200}
        height={200}
        className="w-1/2 h-1/2 object-contain"
      />
    </div>
    <h1 className="mt-6.5 font-bold text-[24px] leading-[30.24px] text-white">
      Title {title}
    </h1>
    <p className="flex-1 mt-4 font-normal text-[18px] text-[#B0B0B0] leading-[32.4px]">
      {subtitle}
    </p>
  </div>
);

export default NewFeatures;
