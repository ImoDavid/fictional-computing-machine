interface BasicCardProps {
  vector?: React.ReactNode;
  title: string;
  description: string;
  truncateTitle?: number;
  truncateDescription?: number;
  align?: "left" | "center";
}

const BasicCard = ({
  vector,
  title,
  description,
  align = "left",
}: BasicCardProps) => {
  const isCenter = align === "center";

  return (
    <div
      className={` lg:w-[400px] p-8 rounded-lg font-raleway ${
        isCenter ? "text-center " : "text-left bg-[#030303]"
      }`}
    >
      <div className={`mb-4 ${isCenter ? "flex justify-center" : ""}`}>
        {vector}
      </div>

      <h3 className="font-semibold mb-2 text-[#72D600] text-xl">
        {title}
      </h3>

      <p className="text-md text-white">
        {description}
      </p>
    </div>
  );
};

export default BasicCard;
