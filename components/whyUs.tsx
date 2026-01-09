import { BsHddStackFill } from "react-icons/bs";
import BasicCard from "./UI/card";
import { PiLightbulbFilamentBold } from "react-icons/pi";
import { FaArrowTrendUp } from "react-icons/fa6";
import { ImKey } from "react-icons/im";
const UsData = [
  {
    title: "Web3 Expertise That Actually Matters",
    description: `We understand blockchain audiences, market cycles, and community psychology, so every strategy is built for the Web3 environment, not guesswork.`,
    icon: <PiLightbulbFilamentBold size={40} />,
  },
  {
    title: "Data-Driven Growth, Not Vanity Metrics",
    description: `Our approach focuses on real traction, audience expansion, engagement depth, and community health also backed by clear insights and measurable progress.`,
    icon: <FaArrowTrendUp size={40} />,
  },

  {
    title: "Execution That Builds Lasting Communities",
    description: `We craft campaigns that spark genuine conversations, attract loyal supporters, and sustain momentum long after the launch hype fades.`,
    icon: <ImKey size={40} />,
  },
];

const WhyUS = () => {
  return (
    <div className="mx-auto max-w-7xl px-6 sm:px-6 lg:px-8 pt-6 mt-20">
      <div className="text-center">
        <h1 className="text-2xl lg:text-4xl font-semibold leading-tight tracking-tight text-[#72D600] capitalize">
          Why Choose Us
        </h1>

        <p className="mt-2 sm:mt-2 text-sm sm:text-lg leading-relaxed text-white">
          The strategic advantage your Web3 project deserves.
        </p>
      </div>
      <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-5 mt-10 ">
        {UsData.map((us, index) => (
          <BasicCard
            vector={us.icon}
            align="center"
            title={us.title}
            description={us.description}
            key={index}
          />
        ))}
      </div>
    </div>
  );
};

export default WhyUS;
