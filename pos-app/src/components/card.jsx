//Import components
import { Button } from "@chakra-ui/react";
import { BsCart3 } from "react-icons/bs";

export default function Card() {
  return (
    <div className="bg-[#1F1D2B] p-2 w-48 h-56 rounded-lg text-white flex flex-col items-center gap-1">
      <img
        src="/image/burgers/gramercy-tavern-burger.jpg"
        alt="gramercy-tavern-burger"
        className="w-28 h-28 rounded-full"
      />
      <p>Gramercy Tavern</p>
      <p>Rp 35.000,00</p>
      <Button
        leftIcon={<BsCart3 />}
        colorScheme="orange"
        variant="solid"
        size="sm"
      >
        Add to cart
      </Button>
    </div>
  );
}
