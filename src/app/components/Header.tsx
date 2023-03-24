import Image from "next/image";
import Link from "next/link";
import React from "react";
import { BiAlignRight } from "react-icons/bi";

export default function Header() {
  return (
    <div className="flex justify-between items-center bg-pink-300 md:px-[40px] px-[20px] py-4 w-full">
      <div>
        <Image src="/panaverse.png" alt="logo" height={"100"} width={"100"} />
      </div>
      <div>
        <ul className="md:flex space-x-5 text-lg font-semibold items-center hidden">
          <li className="hover:text-blue-600">
            <Link href={"/"}>Home</Link>
          </li>
          <li className="hover:text-blue-600">
            <Link href={"/"}>Explore</Link>
          </li>
          <li className="hover:text-blue-600">
            <Link href={"/"}>About</Link>
          </li>
          <li className="hover:text-blue-600">
            <Link href={"/"}>Contact</Link>
          </li>
          <div>
            <button className="bg-blue-600 px-6 py-2 text-white rounded-xl text-xl font-semibold hover:bg-blue-700 hover:scale-125 ">
              Apply
            </button>
          </div>
        </ul>
      </div>
      <div className="static md:hidden text-3xl">
        <BiAlignRight/>
      </div>
    </div>
  );
}
