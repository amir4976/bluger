"use client"
import Image from "next/image";
import React, { useState } from "react";
import RedirectBtn from "../RedirectBtn/RedirectBtn";

function Educationcard({text,cover}:{text:string,cover:string}) {
  const [isHoverd, setIsHoverd] = useState<boolean>(false);

  return (
    <div
      className="
        w-full 
        h-[440px] 
        max-md:h-auto
        border-3 
        rounded-2xl 
        saconderybg  
        flex 
        max-md:flex-col  
        relative
      "
      onMouseEnter={() => setIsHoverd(true)}
      onMouseLeave={() => setIsHoverd(false)}
    >
      <div className="w-[500px] max-md:w-full max-md:h-[250px] h-full overflow-hidden">
        <Image
          src={cover ? cover : "/assets/post1.jpg"}
          width={500}
          height={500}
          alt="education"
          className="object-cover w-full h-full rounded-l-2xl max-md:rounded-t-2xl max-md:rounded-l-none"
        />
      </div>

      <div className="flex flex-1 flex-col p-10 max-md:p-5 relative">
        <div className="title text-5xl max-md:text-4xl mt-5 ">
          {text}
        </div>

        <div className="date border-t-2 border-b-2 mt-5 text-2xl max-md:text-lg py-2 flex justify-between">
          <div>April 21, 2024</div>
          <div>5am</div>
        </div>

        {/* دکمه ریسپانسیو */}
        <div
          className="
            redirect-btn 
            flex 
            justify-between 
            items-center 
            absolute 
            right-15
            bottom-10 
            max-md:static 
            max-md:justify-end 
            max-md:pt-10

          "
        >
          <RedirectBtn isHoverd={isHoverd} />
        </div>
      </div>
    </div>
  );
}

export default Educationcard;
