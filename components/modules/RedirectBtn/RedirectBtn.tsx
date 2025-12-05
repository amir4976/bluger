import Image from "next/image";
import React from "react";

function RedirectBtn({isHoverd}:{isHoverd:boolean}) {
  return (
    <div>
      {" "}
      <div className="flex items-center relative ">
        <button className="border-3 rounded-full text-center px-5 h-15 text-2xl mr-8 bg-gray-200">
          READ POST
        </button>

        <div
          className={`h-15 w-15 border-3 bg-gray-200 rounded-full flex justify-center items-center
        transition-all duration-300 ${
          isHoverd ? "rotate-90 saconderybg" : "rotate-0"
        }
        absolute right-5 translate-x-1/2`}
        >
          <Image
            src={"/assets/post-arr.webp"}
            width={12}
            height={12}
            alt={"arrow"}
          />
        </div>
      </div>
    </div>
  );
}

export default RedirectBtn;
