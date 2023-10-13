import React from "react";
import AppStoreIcon from "../../../public/assets/appstore.png";
import PlayStoreIcon from "../../../public/assets/playstore.png";
import Image from "next/image";

export default function AppBanner() {
  return (
    <div className="px-4 md:px-20 py-24 bg-orange-500 h-screen">
      <div className="flex flex-col md:flex-row gap-24">
        <div className="flex flex-col md:py-24 gap-10">
          <h1 className="text-black text-4xl font-bold">
            Shop Faster With FoodHouse App
          </h1>
          <p className="text-gray-600 text-lg">
            Available on both iOS and Android
          </p>
          <div className="flex flex-row gap-8">
            <Image src={PlayStoreIcon} alt="PlayStore" />
            <Image src={AppStoreIcon} alt="AppStore" />
          </div>
        </div>
        <div className="flex flex-col md:py-24 gap-10 items-center">
            <div className="bg-white h-96 w-80 flex rounded-xl"></div>
        </div>
      </div>
    </div>
  );
}
