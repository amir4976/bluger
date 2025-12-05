import MainLyout from "@/components/layouts/MainLayout";
import AboutProfileCard from "@/components/modules/About/AboutProfileCard";
import AbouteUse from "@/components/templates/About/Aboutus/AbouteUse";
import React from "react";

function page() {
  return (
    <div>
      <MainLyout>
        <AbouteUse/>


        <div className="grid grid-cols-4 max-md:grid-cols-1 gap-5 mt-10">
            <AboutProfileCard title={"10K+"} desc="Readers"/>
            <AboutProfileCard title={"10K+"} desc="Readers"/>
            <AboutProfileCard title={"10K+"} desc="Readers"/>
            <AboutProfileCard title={"10K+"} desc="Readers"/>
        </div>
      </MainLyout>
    </div>
  );
}

export default page;
