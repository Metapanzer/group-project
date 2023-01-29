import Card from "../components/card";
import DisplayDate from "../components/displayDate";

export default function Cashier() {
  return (
    <div className="p-5 bg-[#252836] w-full">
      <h1 className="text-white font-bold text-3xl">Jaegar Resto</h1>
      <DisplayDate />
      <ul className="mt-5 list-none flex flex-row flex-wrap gap-8 text-white">
        <li>Burgers</li>
        <li>Pizzas</li>
        <li>Beverages</li>
        <li>Desserts</li>
      </ul>
      <h2 className="mt-5 text-white font-bold text-xl">Choose Dishes</h2>
      <div className="mt-8 bg-[#252836] w-full flex flex-row flex-wrap gap-5">
        <Card />
        <Card />
      </div>
    </div>
  );
}
