import React from "react";

export default function Navbar() {
  return (
    <div className="flex justify-between text-center bg-white py-5 px-20 top-0">
      <p className="uppercase text-black font-bold text-2xl">
        Food<span className="text-orange-500 text-xl">House</span>
      </p>

      <ul className="list-none text-black flex gap-6 text-xl">
        <li>Home</li>
        <li>Offers</li>
        <li>Services</li>
        <li>Contact</li>
      </ul>

      <button className="py-2 px-5 text-white bg-orange-500 rounded-2xl">Order Now</button>
    </div>
  );
}
