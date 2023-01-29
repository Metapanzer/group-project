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
    <div className="sticky left-0 flex flex-col gap-5 p-6 h-full w-24 rounded-r-xl bg-black justify-start items-center">
      <div className="bg-[#EB966A]/25 drop-shadow-md rounded-md w-14 h-14 flex justify-center items-center">
        <img src={restaurant} alt="restaurant" className="h-12 w-12" />
      </div>
      <div className="group hover:bg-[#EA7C69] drop-shadow-md rounded-md w-14 h-14 flex justify-center items-center">
        <BiHomeAlt className="h-6 w-6 text-[#EA7C69] group-hover:text-white" />
      </div>
      <div className="group hover:bg-[#EA7C69] drop-shadow-md rounded-md w-14 h-14 flex justify-center items-center">
        <AiOutlinePieChart className="h-6 w-6 text-[#EA7C69] group-hover:text-white" />
      </div>
      <div className="group hover:bg-[#EA7C69] drop-shadow-md rounded-md w-14 h-14 flex justify-center items-center">
        <FiUsers className="h-6 w-6 text-[#EA7C69] group-hover:text-white" />
      </div>
      <div className="group hover:bg-[#EA7C69] drop-shadow-md rounded-md w-14 h-14 flex justify-center items-center">
        <BsCart3 className="h-6 w-6 text-[#EA7C69] group-hover:text-white" />
      </div>
      <div className="group hover:bg-[#EA7C69] drop-shadow-md rounded-md w-14 h-14 flex justify-center items-center">
        <MdOutlineAdminPanelSettings className="h-6 w-6 text-[#EA7C69] group-hover:text-white" />
      </div>
      <div className="group hover:bg-[#EA7C69] drop-shadow-md rounded-md w-14 h-14 flex justify-center items-center">
        <BiLogIn className="h-6 w-6 text-[#EA7C69] group-hover:text-white" />
      </div>
    </div>
  );
}
