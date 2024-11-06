import { type MenuItemProps } from "../utils/types";

const MenuItem: React.FC<MenuItemProps> = ({ name, iconUrl }) => {
  return (
    <div className="flex gap-2 cursor-pointer hover:bg-gray-100 rounded-lg p-2">
      <img className="h-6 w-6" src={iconUrl} alt={name} />
      <div className="whitespace-nowrap">{name}</div>
    </div>
  );
};

export default MenuItem;
