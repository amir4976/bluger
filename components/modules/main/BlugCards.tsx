"use client"
import Image from "next/image";
import React, { useState } from "react";
import RedirectBtn from "../RedirectBtn/RedirectBtn";


function BlugCards({cover,text}:{cover:string,text:string}) {
    const [isHoverd , setIsHoverd] = useState<boolean>(false)    
  return (
    <div className="border-3 w-full flex flex-col p-5 cursor-pointer rounded-2xl bg-white" onMouseEnter={()=>{setIsHoverd(true)}} onMouseLeave={()=>{setIsHoverd(false)}} >
      <div className="image w-full relative">
        <Image
          src={cover ? cover : "/assets/post1.jpg"}
          width={500}
          height={500}
          alt="cover"
          className="object-fill w-full h-full rounded-2xl"
        />
        <div className="absolute left-5 -bottom-2">
          <Image
            src={"/assets/post-dec.webp"}
            width={120}
            height={100}
            alt="1"
          />
        </div>
      </div>
      <div className="title text-4xl mt-5 ">
        {text}
      </div>
      <div className="date border-t-2 border-b-2  mt-5 text-2xl py-2 flex justify-between">
        <div className="">April 21, 2024</div>
        <div className="">5am</div>
      </div>



      <div className="redirect-btn py-10 flex justify-between items-center ">
        <div className="">
          <Image 

            src={"/assets/snake-arrow.png"}
            width={100}
            height={100}
            alt="snake arrow"
          />
        </div>

        <RedirectBtn isHoverd={isHoverd}/>
      </div>
    </div>
  );
}

export default BlugCards;
