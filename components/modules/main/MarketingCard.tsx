"use client";
import Image from "next/image";
import React, { useState } from "react";
import RedirectBtn from "../RedirectBtn/RedirectBtn";
import { BsFillChatSquareQuoteFill } from "react-icons/bs";

function MarketingCard({text,cover}:{text:string , cover:string}) {
  const [isHoverd, setIsHoverd] = useState<boolean>(false);

  return (
    <div>
      <div
        className="border-3 w-full flex flex-col  cursor-pointer rounded-2xl bg-white"
        onMouseEnter={() => {
          setIsHoverd(true);
        }}
        onMouseLeave={() => {
          setIsHoverd(false);
        }}
      >
        <div className="p-5">
            
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

          <RedirectBtn isHoverd={isHoverd} />
        </div>
        </div>


        <div className="p-10 border-t-3">
            <div className="border-2 bg-gray-200">
                <div className="w-full h-fit text-3xl p-3 flex gap-5 ">
                    <div className="border-2 saconderybg w-15 h-15  rounded-full flex justify-center items-center">
                        <BsFillChatSquareQuoteFill />
                    </div>
                    <p className="flex-1">
                    Startup Spotlight: Unveiling Business Triumphs

                    </p>
                </div>
            </div>
        </div>

      </div>
    </div>
  );
}

export default MarketingCard;
