import Image from "next/image";
import React from "react";

function NewsLetter() {
  return (
    <div
      className="w-full h-fit p-10 border-3 rounded-2xl mt-10 flex justify-between max-md:flex-col "
      style={{ backgroundImage: 'url("/assets/newsletter-texture.webp")' }}
    >
      <div className="flex justify-center items-center gap-10 max-md:flex-col">
        <Image
          src={"/assets/newspaper_icon.webp"}
          height={100}
          width={100}
          alt="10"
        />
        <p className="text-5xl">NEWSLETTER</p>
        <p className="text-2xl"> 
          Stay ahead of the curve with our exclusive daily newsletter directly
          in your inbox!
        </p>
      </div>
      <div className="w-90 relative">
            <input type="text"  placeholder="your email" className="w-full h-15 rounded-full p-5 border-3  bg-white"/>
            <button className="absolute right-0  h-15 rounded-full saconderybg px-5 text-xl border-3 ">subscribe</button>
      </div>
    </div>
  );
}

export default NewsLetter;
