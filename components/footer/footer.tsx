import React from "react";
import { IoLocationOutline } from "react-icons/io5";
import { IoIosCall } from "react-icons/io";
import { MdOutlineMailOutline, MdWorkHistory } from "react-icons/md";
import VisaMasterCard from "../../public/assets/visa-mastercard.png";
import PayPalLogo from "../../public/assets/paypal-logo.png";
import Image from "next/image";
import { ImFacebook2 } from "react-icons/im";
import { BsInstagram, BsWhatsapp } from "react-icons/bs";
import { FaXTwitter } from "react-icons/fa6";

export default function Footer() {
  return (
    <div className="w-full flex-row justify-between text-left text-black bg-white py-5 px-4 md:px-20 gap-1">
      <div className="grid grid-cols-1 pt-2 md:grid-cols-4 gap-8">
        <div className="flex flex-col">
          <p className="uppercase text-black font-bold text-2xl pb-8">
            Food<span className="text-orange-500 text-xl">House</span>
          </p>
          <ul className="list-none">
            <li className="text-orange-500 py-2">
              <a href="" className="flex items-center text-center">
                <IoLocationOutline className="text-xl mr-1" /> Address: Waiyaki
                Way
              </a>
            </li>

            <li className="text-orange-500 py-2">
              <a href="" className="flex items-center text-center">
                <IoIosCall className="text-xl mr-1" /> Call Us: +254712345678
              </a>
            </li>

            <li className="text-orange-500 py-2">
              <a href="" className="flex items-center text-center">
                <MdOutlineMailOutline className="text-xl mr-1" /> Email:
                hello@foodhouse.com
              </a>
            </li>

            <li className="text-orange-500 py-2">
              <a href="" className="flex items-center text-center">
                <MdWorkHistory className="text-xl mr-1" /> Work Hours: 10:00 -
                23:00
              </a>
            </li>
          </ul>
        </div>
        <div className="flex flex-col">
          <h1 className="font-bold text-xl pb-8">Account</h1>
          <ul className="text-gray-800 flex flex-col gap-3">
            <li className="cursor-pointer">Wishlist</li>
            <li className="cursor-pointer">Cart</li>
            <li className="cursor-pointer">Track Order</li>
            <li className="cursor-pointer">Shipping details</li>
          </ul>
        </div>

        <div className="flex flex-col">
          <h1 className="font-bold text-xl pb-8">Useful links</h1>
          <ul className="text-gray-800 flex flex-col gap-3">
            <li className="cursor-pointer">About us</li>
            <li className="cursor-pointer">Contact</li>
            <li className="cursor-pointer">Hot Deals</li>
            <li className="cursor-pointer">Promotions</li>
          </ul>
        </div>

        <div className="flex flex-col">
          <h1 className="font-bold text-xl pb-8">Help center</h1>
          <ul className="text-gray-800 flex flex-col gap-3">
            <li className="cursor-pointer">Payment</li>
            <li className="cursor-pointer">Refunds</li>
            <li className="cursor-pointer">Checkout</li>
            <li className="cursor-pointer">Q&A</li>
            <li className="cursor-pointer">Privacy Policy</li>
          </ul>
        </div>
        <div className="flex justify-between"></div>
      </div>
      <hr className="bg-black text-black" />
      <div className="flex flex-col md:flex-row justify-between py-5 gap-4">
        <div className="flex flex-row gap-4">
          <Image src={VisaMasterCard} alt="Visa-MasterCard" height={35} />
          <Image src={PayPalLogo} alt="PayPal" height={35} />
        </div>
        <div className="flex flex-row gap-4">
          <ImFacebook2 className="text-3xl" />
          <BsInstagram className="text-3xl" />
          <BsWhatsapp className="text-3xl" />
          <FaXTwitter className="text-3xl" />
        </div>
      </div>
    </div>
  );
}
