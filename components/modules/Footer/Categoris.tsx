import React from "react";

function Categoris() {
  return (
    <div className="w-full h-fit border-3 rounded-2xl p-10 saconderybg  min-h-83">
      <div
        className=" w-full min-h-[250px] border-3 rounded-3xl  p-5 gap-5 "
        style={{
          backgroundImage: 'url("/assets/tagsbg_03.png")',
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
        }}
      >
        <div className="flex flex-wrap gap-2">
          <div className="tag bg-black border-yellow-300 rounded-full text-yellow-300 p-3  px-5 border-3 inline text-xl transition-all hover:bg-yellow-300 hover:text-black">
            #travel
          </div>
          <div className="tag bg-black border-yellow-300 rounded-full text-yellow-300 p-3  px-5 border-3 inline text-xl transition-all hover:bg-yellow-300 hover:text-black">
            #travel
          </div>
          <div className="tag bg-black border-yellow-300 rounded-full text-yellow-300 p-3  px-5 border-3 inline text-xl transition-all hover:bg-yellow-300 hover:text-black">
            #travel
          </div>
        </div>
      </div>
    </div>
  );
}

export default Categoris;
