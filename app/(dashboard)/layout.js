import Sidebar from "@/components/sidebar";
import { FaBarsStaggered } from "react-icons/fa6";
import { SiStackhawk } from "react-icons/si";

const layout = ({ children }) => {
  return (
    <div className="drawer lg:drawer-open">
      <input type="checkBox" id="my-drawer-2" />
      {children}
    </div>
  );
};
export default layout;
