import { type ButtonProps } from "../utils/types";

const Button = ({ name }: ButtonProps) => {
  return (
    <>
      <button className="px-4 py-2 bg-gray-200 rounded-lg hover:bg-gray-400 hover:text-white">
        {name}
      </button>
    </>
  );
};

export default Button;
