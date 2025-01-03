import React from 'react'
// import chef1 from "/chef1.png";
// import chef2 from "/chef2.png";
// import chef3 from "/chef3.png";
// import chef4 from "/chef4.png";
import Image from "next/image"

const OurChefs = () => {
  return (
    <div>
      <section className="bg-black md:px-[135px]   py-[50px]">

        <div className="flex flex-col justify-center items-center">
      <h1 className="md:text-[32px] text-[24px] font-normal text-[#634314] font whitespace-nowrap font-greatVibes">
      Chefs
        </h1>
        <h1 className="text-[20px] text-white md:text-[50px] font-bold whitespace-nowrap md:whitespace-normal">
          <span className="text-[#cf8d2a]">Me</span>et Our Chef
        </h1>
        </div>
        <div className="flex flex-col md:flex-row justify-center items-center gap-[20px] mt-[50px]">
          <Image src="/chef1.png" alt=""  width={100} height={100} className="w-[200px] md:w-[305px] md:h-[280px] cursor-pointer"/>
          <Image src="/chef2.png" alt=""  width={100} height={100} className="w-[200px] md:w-[280px] md:h-[280px] cursor-pointer" />
          <Image src="/chef3.png" alt=""  width={100} height={100} className="w-[200px] md:w-[280px] md:h-[280px] cursor-pointer" />
          <Image src="/chef4.png" alt=""  width={100} height={100} className="w-[200px] md:w-[280px] md:h-[280px] cursor-pointer" />
        </div>
      </section>
    </div>
  )
}

export default OurChefs