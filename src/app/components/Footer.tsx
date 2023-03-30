import Link from "next/link";
import React from "react";

export default function Footer() {
  return (
    <>
      <div className="md:flex align-middle gap-[120px] p-[30px] bg-black">
        <div className="md:w-1/4 mb-[40px] md:mb-[0px]">
          <h2 className="text-white font-bold text-2xl mb-[20px] border-l-neutral-400 border-l-[6px] pl-[6px]">
            About Us
          </h2>
          <img src="/logo.png" alt="logo" height={"60"} width={"60"} />
          <p className="text-gray-400 pr-[40px] mt-[10px]">
            The Future of the Web is Web 3.0, Metaverse, and Edge Computing.
          </p>
        </div>
        <div className="md:w-1/4 mb-[40px] md:mb-[0px]">
          <h2 className="text-white font-bold text-2xl border-l-neutral-400 border-l-[6px] pl-[6px]">
            Useful Links
          </h2>
          <ul className="text-gray-400 md:pt-[20px] pt-[10px]">
            <li>
              <Link href={"/"} className="hover:text-white">
                Home
              </Link>
            </li>
            <li>
              <Link href={"/"} className="hover:text-white">
                About
              </Link>
            </li>
            <li>
              <Link href={"/"} className="hover:text-white">
                Explore
              </Link>
            </li>
            <li>
              <Link href={"/"} className="hover:text-white">
                Contact US
              </Link>
            </li>
          </ul>
        </div>
        <div className="md:w-1/4 mb-[40px] md:mb-[0px]">
          <h2 className="text-white font-bold text-2xl border-l-neutral-400 border-l-[6px] pl-2">
            Follow Us
          </h2>
          <ul className="text-gray-400 md:pt-[20px] pt-[10px]">
            <li>
              <Link href={"/"} className="hover:text-white">
                LinkedIn
              </Link>
            </li>
            <li>
              <Link href={"/"} className="hover:text-white">
                Facebook
              </Link>
            </li>
            <li>
              <Link href={"/"} className="hover:text-white">
                Twitter
              </Link>
            </li>
            <li>
              <Link href={"/"} className="hover:text-white">
                Youtube
              </Link>
            </li>
            <li>
              <Link href={"/"} className="hover:text-white">
                GitHub
              </Link>
            </li>
          </ul>
        </div>
        <div className="md:w-1/4 mb-[40px] md:mb-[0px]">
          <h2 className="text-white font-bold text-2xl border-l-neutral-400 border-l-[6px] pl-2">
            Contact Us
          </h2>
          <ul className="text-gray-400 md:pt-[20px] pt-[10px]">
            <li>
              <Link href={"/"} className="hover:text-white">
                +923058976638
              </Link>
            </li>
            <li>
              <Link href={"/"} className="hover:text-white">
                shoaibawan1000@gmail.com
              </Link>
            </li>
            <li>
              <Link href={"/"} className="hover:text-white">
                Islamabad, Pakistan
              </Link>
            </li>
          </ul>
        </div>
      </div>

      <div className="md:flex justify-between px-[50px] py-[10px] text-center">
        <div>
          <p className="font-bold">All Right Reserved © | <br className="md:hidden" /> <Link href={"https://github.com/shoaibsultann"} target="_blank">Shoaib Sultan</Link></p>
        </div>
        <div className=" space-x-2">
          <Link href={"/"}>Legals |</Link>
          <Link href={"/"}>Term Of Services |</Link>
          <Link href={"/"}>Privacy Policy</Link>
        </div>
      </div>

      
    </>

  );
}
