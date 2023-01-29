//Import dependencies
import { Link } from "react-router-dom";
//Import logo
import restaurant from "../assets/store.png";
import { BiHomeAlt } from "react-icons/bi";
import { AiOutlinePieChart } from "react-icons/ai";
import { FiUsers } from "react-icons/fi";
import { BsCart3 } from "react-icons/bs";
import { MdOutlineAdminPanelSettings } from "react-icons/md";
import { BiLogIn } from "react-icons/bi";

export default function Sidebar() {
  return (
    <div className="sticky left-0 flex flex-col gap-6 p-6 h-full w-24 bg-black justify-start items-center">
      <div className="bg-[#EB966A]/25 drop-shadow-md rounded-lg w-14 h-14 flex justify-center items-center">
        <img src={restaurant} alt="restaurant" className="h-11 w-11" />
      </div>
      <Link to="/">
        <div className="group hover:bg-[#EA7C69] drop-shadow-md rounded-md w-14 h-14 flex justify-center items-center">
          <BiHomeAlt className="h-6 w-6 text-[#EA7C69] group-hover:text-white" />
        </div>
      </Link>
      <Link to="/sales-reports">
        <div className="group hover:bg-[#EA7C69] drop-shadow-md rounded-md w-14 h-14 flex justify-center items-center">
          <AiOutlinePieChart className="h-6 w-6 text-[#EA7C69] group-hover:text-white" />
        </div>
      </Link>
      <Link to="/user-management">
        <div className="group hover:bg-[#EA7C69] drop-shadow-md rounded-md w-14 h-14 flex justify-center items-center">
          <FiUsers className="h-6 w-6 text-[#EA7C69] group-hover:text-white" />
        </div>
      </Link>
      <Link to="/payment">
        <div className="group hover:bg-[#EA7C69] drop-shadow-md rounded-md w-14 h-14 flex justify-center items-center">
          <BsCart3 className="h-6 w-6 text-[#EA7C69] group-hover:text-white" />
        </div>
      </Link>
      <Link to="/admin-dashboard">
        <div className="group hover:bg-[#EA7C69] drop-shadow-md rounded-md w-14 h-14 flex justify-center items-center">
          <MdOutlineAdminPanelSettings className="h-6 w-6 text-[#EA7C69] group-hover:text-white" />
        </div>
      </Link>
      <Link to="/login">
        <div className="group hover:bg-[#EA7C69] drop-shadow-md rounded-md w-14 h-14 flex justify-center items-center">
          <BiLogIn className="h-6 w-6 text-[#EA7C69] group-hover:text-white" />
        </div>
      </Link>
    </div>
  );
}
