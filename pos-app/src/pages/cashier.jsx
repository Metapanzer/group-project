//import components
import Card from "../components/card";
import DisplayDate from "../components/displayDate";
import { Input, InputGroup, InputLeftElement } from "@chakra-ui/react";
import { SearchIcon } from "@chakra-ui/icons";

export default function Cashier() {
  return (
    <div className="p-5 bg-[#252836] w-full overflow-y-auto">
      <div className="flex flex-row justify-between">
        <div>
          <h1 className="text-white font-bold text-3xl mb-1">Jaegar Resto</h1>
          <DisplayDate />
        </div>
        <div className="mt-2 w-80">
          <InputGroup>
            <InputLeftElement
              pointerEvents="none"
              children={<SearchIcon color="gray.300" />}
            />
            <Input
              type="search"
              placeholder="Search for food, beverages, etc..."
              borderColor="gray"
              className="text-white"
            />
          </InputGroup>
        </div>
      </div>
      <ul className="mt-5 list-none flex flex-row flex-wrap gap-8 text-white mb-2">
        <li className="hover:text-[#EA7C69]">Burgers</li>
        <li className="hover:text-[#EA7C69]">Pizzas</li>
        <li className="hover:text-[#EA7C69]">Desserts</li>
        <li className="hover:text-[#EA7C69]">Beverages</li>
      </ul>
      <hr className="border border-slate-400" />
      <h2 className="mt-5 text-white font-bold text-xl">Choose Dishes</h2>
      <div className="mt-8 bg-[#252836] w-full flex flex-row flex-wrap gap-5">
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
      </div>
    </div>
  );
}
