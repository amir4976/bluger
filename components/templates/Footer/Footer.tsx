import Categoris from "@/components/modules/Footer/Categoris";
import NewsLetter from "@/components/modules/Footer/NewsLetter";
import Social from "@/components/modules/Footer/Social";
import Image from "next/image";
import React from "react";

function Footer() {
  return (
    <div className="w-full h-fit">
      <NewsLetter />
      <div className="grid grid-cols-2 max-md:grid-cols-1 mt-10 gap-5">
        <Social />
        <Categoris/>
      </div>

      <Image
        src="/assets/footer-decor.png"
        alt="line"
        width={750}
        height={200}
        className=" w-full h-auto mt-10"
      />
    </div>
  );
}

export default Footer;
