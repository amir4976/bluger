import TravelCard from "@/components/modules/main/TravelCard";
import Title from "@/components/modules/Title/Title";
import React from "react";

function Travel() {
  return (
    <div className="mt-20">
      <Title text={"Travel"} />
      <div className="gap-5 flex flex-col">

      <TravelCard />
      <TravelCard />
      <TravelCard />
      </div>
    </div>
  );
}

export default Travel;
