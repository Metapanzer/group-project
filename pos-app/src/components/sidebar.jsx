//Import logo
import Restaurant from "../assets/store.png";

export default function Sidebar() {
  return (
    <div className="sticky left-0 flex flex-col p-6 h-full w-24 rounded-lg bg-black justify-start items-center">
      <div className="bg-[#EB966A] drop-shadow-md rounded-md opacity-20">
        <img src={Restaurant} alt="restaurant" className="h-12 w-12" />
      </div>
    </div>
  );
}
