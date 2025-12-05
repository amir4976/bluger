import React from "react";
import Navbar from "../templates/Navbar/Navbar";
import Footer from "../templates/Footer/Footer";
import InfiniteMarquee from "../modules/Marquee/Marquee";

function MainLyout({children}:{children:React.ReactNode}) {
  return (
    <div>
      <div className="w-full h-fit flex justify-center max-md:px-5 ">

        <div className=" w-7xl  flex flex-col">
         <div className="h-20 border-x-3 relative">
          <div className=" px-5 bg-black absolute left-0 h-full text-white z-10 flex justify-center items-center text-4xl  ">
            <p className={'animate-pulse'}> teck</p>
          </div>
           <InfiniteMarquee/>
         </div>
          <Navbar />
          {children}
          <Footer/>
        </div>
      </div>
    </div>
  );
}

export default MainLyout;
