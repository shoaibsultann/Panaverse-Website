import Image from "next/image";
import Link from "next/link";
import React from "react";
import { BiAlignRight } from "react-icons/bi";

export default function Header() {
  return (
    <div className="flex justify-between items-center md:px-[40px] px-[20px] py-4 w-full absolute">
      <div>
        <Image src="/logo.png" alt="logo" height={"100"} width={"100"} />
      </div>
      <div>
        <ul className="md:flex space-x-5 text-lg font-semibold items-center hidden text-white">
          <li className="hover:text-white hover:font-extrabold">
            <Link href={"/"}>Home</Link>
          </li>
          <li className="hover:text-white hover:font-extrabold">
            <Link href={"/"}>Explore</Link>
          </li>
          <li className="hover:text-white hover:font-extrabold">
            <Link href={"/"}>About</Link>
          </li>
          <li className="hover:text-white hover:font-extrabold">
            <Link href={"/"}>Contact</Link>
          </li>
          <div>
            <button className="bg-white px-6 py-2 text-black rounded-lg font-semibold hover:bg-black hover:font-extrabold hover:text-white ">
              Apply
            </button>
          </div>
        </ul>
      </div>
      <div className="static md:hidden text-3xl text-white">
        <BiAlignRight/>
      </div>
    </div>
  );
}
