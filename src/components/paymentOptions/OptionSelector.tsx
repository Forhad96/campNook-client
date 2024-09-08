import { FC } from "react";
import { useNavigate } from "react-router-dom";

const OptionSelector: FC<{
  title: string;
  options: string[];
  name: string;
}> = ({ title, options, name }) => {
  const navigate = useNavigate();
  const handlePayment = (option: string) => {
    console.log(option);
    if (option === "Cash on delivery") {
      navigate("/");
    }
  };
  return (
    <>
      <h2 className="mt-8 text-base text-gray-900">{title}</h2>
      <div className="mt-3 flex select-none flex-wrap items-center gap-1">
        {options.map((option, index) => (
          <label key={index}>
            <input
              type="radio"
              name={name}
              onClick={() => handlePayment(option)}
              value={option}
              className="peer sr-only"
              defaultChecked={index === 0}
            />
            <p className="peer-checked:bg-black peer-checked:text-white rounded-lg border border-black px-6 py-2 font-bold">
              {option}
            </p>
          </label>
        ))}
      </div>
    </>
  );
};
export default OptionSelector;
