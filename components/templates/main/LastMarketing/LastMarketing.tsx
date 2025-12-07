import MarketingCard from "@/components/modules/main/MarketingCard";
import Title from "@/components/modules/Title/Title";
import React from "react";

function LastMarketing() {
  return (
    <div className={"mt-20"}>
      <Title text={"MARKETING"} />
      <div className="grid grid-cols-2 max-md:grid-cols-1 gap-10">
        <MarketingCard text={"Tech Talk: Advancements in Science and Tech"} cover={"/assets/covers/m1.jpg"} />
        <MarketingCard text={"Tech Talk: Advancements in Science and Tech"} cover={"/assets/covers/m2.jpg"} />
      </div>
    </div>
  );
}

export default LastMarketing;
