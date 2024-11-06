import { useSelector } from "react-redux";
import { sidebarItemOne, sidebarItemTwo } from "../utils/constants";
import SidebarItem from "./SidebarItem";
import { StoreState } from "../utils/store";

const Sidebar = () => {
  const isMenuOpen = useSelector((store: StoreState) => store.app.isMenuOpen);
  return (
    isMenuOpen && (
      <div className="flex flex-col w-[10rem]">
        <SidebarItem itemArray={sidebarItemOne} />
        <SidebarItem itemArray={sidebarItemTwo} />
      </div>
    )
  );
};

export default Sidebar;
