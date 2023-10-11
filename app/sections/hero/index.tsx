"use client";

import React from "react";
import SteakImage from "../../../public/assets/steak.jpg";
import Image from "next/image";

export function HeroSection() {
  return (
    <div className="h-screen bg-orange-500">
      <div className="flex md:flex-row flex-col px-20 py-24 gap-10">
        <div className="flex-col">
          <h1 className="text-white text-6xl font-bold">
            Fastest <span className="text-black">Delivery</span>
          </h1>
          <br />
          <h1 className="text-white text-6xl font-bold">
            Easy <span className="text-black">Pickup</span>
          </h1>
          <br />
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum sed
            iusto corrupti! Eum, quaerat praesentium vel impedit ad esse
            temporibus voluptatem laboriosam assumenda necessitatibus minima
            sed, repellat, iure ducimus neque?
          </p>
          <br />
          <div className="bg-white justify-between flex p-2 rounded-lg">
            <input
              type="text"
              placeholder="Enter your email address"
              className="placeholder:text-black text-black focus:border-none focus:border-transparent"
            />
            <button className="py-2 px-5 text-white bg-orange-500 rounded-2xl">
              Sign Up
            </button>
          </div>
        </div>

        <div className="flex-col">
          <Image src={SteakImage} alt="Food House" className="rounded-2xl" />
        </div>
      </div>
    </div>
  );
}
