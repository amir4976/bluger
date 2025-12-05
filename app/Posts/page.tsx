import MainLyout from "@/components/layouts/MainLayout";
import BlugCards from "@/components/modules/main/BlugCards";
import React from "react";

function page() {
  return (
    <div>
      <MainLyout>
        <div className="grid grid-cols-3 max-lg:grid-cols-2 max-md:grid-cols-1 mt-10 gap-5">
          <BlugCards />
          <BlugCards />
          <BlugCards />
          <BlugCards />
          <BlugCards />
          <BlugCards />
          <BlugCards />
          <BlugCards />
          <BlugCards />
        </div>
      </MainLyout>
    </div>
  );
}

export default page;
