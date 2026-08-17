import styles from "../styles";

interface StartStepsProps {
  number: string;
  text: string;
}

const StartSteps = ({ number, text }: StartStepsProps) => (
  <div className={`${styles.flexCenter} flex-row`}>
    <div
      className={`${styles.flexCenter} w-17.5 h-17.5 rounded-6 bg-[#323F5D]`}
    >
      <p className="font-bold text-[20px] text-white">{number}</p>
    </div>
    <p className="flex-1 ml-7.5 font-normal text-[18px] text-[#B0B0B0] leading-[32.4px]">
      {text}
    </p>
  </div>
);

export default StartSteps;
