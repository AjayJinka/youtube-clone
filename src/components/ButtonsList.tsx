import { listOfButtons } from "../utils/constants";
import Button from "./Button";

const ButtonsList = () => {
  return (
    <div className="flex gap-2">
      {listOfButtons.map((button) => (
        <Button key={button} name={button} />
      ))}
    </div>
  );
};

export default ButtonsList;
