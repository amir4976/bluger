"use client";
import React, { useState } from "react";
import RedirectBtn from "../RedirectBtn/RedirectBtn";

function TravelCard() {
  const [isHoverd, setIsHoverd] = useState<boolean>(false);
  return (
    <div className="flex justify-between border-t-3 border-b-3 py-10 items-center  max-md:flex-col"  onMouseEnter={()=>{setIsHoverd(true)}} onMouseLeave={()=>{setIsHoverd(false)}}>
      <p className="text-4xl">Wanderlust Chronicles: Tales from the Road</p>
      <RedirectBtn isHoverd={isHoverd} />
    </div>
  );
}

export default TravelCard;
