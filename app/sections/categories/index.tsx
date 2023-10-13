import Image from "next/image";
import React from "react";
import BuggerSQImage from "../../../public/assets/bugger-sq.jpg";
import PizzaSQImage from "../../../public/assets/pizza-sq.jpg";
import ParathaSQImage from "../../../public/assets/paratha-sq.jpg";
import GrillSandWSQImage from "../../../public/assets/grill-sandwich-sq.jpg";
import Link from "next/link";

export default function Categories() {
  return (
    <div className="px-4 md:px-20 pb-10">
      <h1 className="text-black text-4xl text-center md:text-left">
        Categories
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-4 py-10 gap-10">
        <div className="flex flex-col items-center text-center">
          <Image
            src={BuggerSQImage}
            alt="Bugger Menu"
            className="rounded-full w-52"
          />
          <h1 className="text-orange-500 text-2xl pt-6">Bugger</h1>
          <Link href="/">
            <p className="text-gray-600 pt-3 text-lg">Order Now &gt;</p>
          </Link>
        </div>
        <div className="flex flex-col items-center">
          <Image
            src={PizzaSQImage}
            alt="Bugger Menu"
            className="rounded-full w-52"
          />
          <h1 className="text-orange-500 text-2xl pt-6">Pizza</h1>
          <Link href="/">
            <p className="text-gray-600 pt-3 text-lg">Order Now &gt;</p>
          </Link>
        </div>
        <div className="flex flex-col items-center">
          <Image
            src={ParathaSQImage}
            alt="Bugger Menu"
            className="rounded-full w-52"
          />
          <h1 className="text-orange-500 text-2xl pt-6">Paratha Roll</h1>
          <Link href="/">
            <p className="text-gray-600 pt-3 text-lg">Order Now &gt;</p>
          </Link>
        </div>
        <div className="flex flex-col items-center">
          <Image
            src={GrillSandWSQImage}
            alt="Bugger Menu"
            className="rounded-full w-52"
          />
          <h1 className="text-orange-500 text-2xl pt-6">Grill Sandwich</h1>
          <Link href="/">
            <p className="text-gray-600 pt-3 text-lg">Order Now &gt;</p>
          </Link>
        </div>
      </div>
    </div>
  );
}
