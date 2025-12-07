import Image from "next/image";
import React from "react";

function AbouteUse() {
  return (
    <div className="w-full h-fit border-3 rounded-2xl grid grid-cols-2 max-md:grid-cols-1 p-5 gap-5 bg-white mt-10">
      <div className="">
        <Image
          className="rounded-2xl w-full h-fit sticky top-5 border-3"
          src={"/assets/covers/about.jpg"}
          width={500}
          height={500}
          alt="profile"
        />
      </div>
      <div className="flex flex-col text-2xl ">
        <p className="text-6xl">About Us</p>
        <div className="px-3 py-2 border-3 saconderybg w-fit  text-2xl font-light">
          something about us
        </div>
        <p className="mt-5">
          A passionate and dedicated environmentalist, Alex devotes his energy
          and expertise to illuminating the pressing ecological challenges
          facing our planet today. Through his thought-provoking articles and
          impassioned advocacy, he not only raises awareness but also sparks
          crucial conversations about the urgent need for sustainability
          practices.
        </p>
        <p className="text-4xl px-5 border-l-3 mt-5">
          In the tapestry of life, every thread counts. Let us weave together a
          future where sustainability is not just a choice, but a way of life.
        </p>
        <p className="mt-5">
          A passionate and dedicated environmentalist, Alex devotes his energy
          and expertise to illuminating the pressing ecological challenges
          facing our planet today. Through his thought-provoking articles and
          impassioned advocacy, he not only raises awareness but also sparks
          crucial conversations about the urgent need for sustainability
          practices.
        </p>
        <p className="mt-5">
          A passionate and dedicated environmentalist, Alex devotes his energy
          and expertise to illuminating the pressing ecological challenges
          facing our planet today. Through his thought-provoking articles and
          impassioned advocacy, he not only raises awareness but also sparks
          crucial conversations about the urgent need for sustainability
          practices.
        </p>
      </div>
    </div>
  );
}

export default AbouteUse;
