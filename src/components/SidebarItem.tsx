import MenuItem from "./MenuItem";
import { type SidebarItemProps } from "../utils/types";
import { Link } from "react-router-dom";

const SidebarItem: React.FC<SidebarItemProps> = ({ itemArray }) => {
  return (
    <div className="flex flex-col p-2 border">
      {itemArray.map((item, index) => {
        if (item.name === "Home") {
          return (
            <Link to={"/"} key={index}>
              <MenuItem name={item.name} iconUrl={item.iconUrl} />
            </Link>
          );
        } else {
          return (
            <MenuItem key={index} name={item.name} iconUrl={item.iconUrl} />
          );
        }
      })}
    </div>
  );
};

export default SidebarItem;
