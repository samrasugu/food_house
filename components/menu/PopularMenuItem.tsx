import Image from "next/image";
import React from "react";
import { AiFillStar } from "react-icons/ai";

interface PopularMenuItemProps {
  image: any;
  name: any;
  description: any;
  price: any;
}

export default function PopularMenuItem({ image, name, description, price }: PopularMenuItemProps) {
  return (
    <div className="bg-orange-300 flex flex-col rounded-2xl">
      <Image src={image} alt="Bugger" className="rounded-xl" />
      <div className="flex flex-col p-4">
        <div className="flex flex-row justify-between text-center">
          <p className="text-black font-bold">{name}</p>
          <p className="flex flex-row items-center text-center justify-between text-black">
            <AiFillStar className="text-orange-500 text-xl" /> 4.8(500)
          </p>
        </div>
        <p className="py-2 text-gray-800">{description}</p>
        <div className="flex flex-row justify-between text-center items-center">
          <p className="text-black text-lg">KES {price}</p>
          <button className="py-2 md:py-2 px-5 md:px-5 flex justify-center text-left text-white bg-orange-500 rounded-2xl">
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
}
