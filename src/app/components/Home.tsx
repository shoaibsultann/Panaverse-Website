import Image from 'next/image'
import React from 'react'

const HomePage = () => {
  return (
    <>

    <div className="text-center bg-[url('/bg13.jpg')] bg-cover bg-center bg-fixed md:px-52 px-2 md:py-40 py-28">
      <h1 className="text-white md:text-6xl text-3xl font-bold">Prepare yourself for the Next Generation of Internet with Panaverse</h1>
      <p className='text-white md:px-[90px] my-4 md:text-xl text-l font-medium'>One Year Panaverse DAO Earn as you Learn Program. Consolidating Web 3.0, Metaverse, Artificial Intelligence (AI), Cloud, Edge, and Ambient Computing/IoT Technologies</p>
      <button className="bg-white text-black px-6 py-3 rounded-lg font-semibold hover:bg-black hover:font-extrabold hover:text-white">See More</button>
    </div>

      <div className="flex shadow-2xl w-[70%] justify-around md:py-[80px] py-[40px] md:space-y-0 space-y-12 items-center m-auto -mt-[80px] bg-white rounded-2xl md:flex-row flex-col mb-20">
        <Image src="/logo.png" alt="logo" height={"150"} width={"150"}></Image>
        <Image src="/next.svg" alt="logo" height={"150"} width={"150"}></Image>
        <Image src="/logo.svg" alt="logo" height={"150"} width={"150"}></Image>
      </div>

      <div className="w-[80%] flex m-auto my-10 md:flex-row flex-col">
        <div className="md:w-1/2">
          <Image src={"/logo2.webp"} height={"400"} width={"400"} alt="animation" />
        </div>
        <div className="md:w-1/2 pt-10">
        <h1 className="md:text-5xl text-3xl font-bold border-l-[6px] border-l-neutral-400 pl-2">Program Of Studies</h1>
      <p className="md:text-md text-base my-4">This curriculum is intended for beginners who want to learn software development from the ground up. It is going to be a fifteen-month-long hybrid program that includes both onsite and online classes and is divided into five quarters of 13 weeks each. The emphasis will be on hands-on learning by educating students to produce projects.</p>
      <button className="bg-black text-white px-6 py-3 rounded-lg font-semibold hover:bg-black hover:font-extrabold hover:text-white">Read More</button>
        </div>
      </div>

      <div className="flex md:flex-row flex-col md:my-16 my-5">
        <div className="md:w-1/2 bg-[url(/bootcamp.jpg)] bg-cover bg-center h-[11cm]  ">
        </div>
        <div className="md:w-1/2 bg-[url('/bg11.jpg')] bg-cover -my-7 md:py-28 py-10 px-10 ">
        <h1 className="md:text-5xl text-3xl font-bold border-l-[6px] border-l-neutral-500 pl-2">Bootcamp 2023</h1>
        <p className="md:text-md text-base my-4">This curriculum is intended for beginners who want to learn software development from the ground up. It is going to be a fifteen-month-long hybrid program that includes both onsite and online classes and is divided into five quarters of 13 weeks each. The emphasis will be on hands-on learning by educating students to produce projects.</p>
        <button className="bg-black text-white px-6 py-3 rounded-lg font-semibold hover:bg-black hover:font-extrabold hover:text-white">Read More</button>
        </div>
      </div>
    </>
  )
}

export default HomePage