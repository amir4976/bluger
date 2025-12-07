import Image from "next/image";
import React from "react";

function Social() {
  return (
    <div
      style={{ backgroundImage: 'url("/assets/social-bg.jpg")' }}
      className="w-full h-fit border-3 rounded-3xl p-10 min-h-84 "
    >
      <div className="saconderybg w-full h-fit border-3 rounded-3xl grid grid-cols-2  max-md:grid-cols-1 p-5 gap-5 ">
        <div className="relative flex items-center justify-start py-5 gap-5">
          <Image src="/assets/ins.png" width={50} height={50} alt="icon" />
        <p className="text-2xl ">facebook</p>
          <Image
            src="/assets/social_line.png"
            alt="line"
            width={750}
            height={200}
            className="absolute bottom-0 left-0 w-full h-auto"
          />
        </div>
        <div className="relative flex items-center justify-start py-5 gap-5">
          <Image src="/assets/fb.png" width={50} height={50} alt="icon" />
        <p className="text-2xl ">facebook</p>
          <Image
            src="/assets/social_line.png"
            alt="line"
            width={750}
            height={200}
            className="absolute bottom-0 left-0 w-full h-auto"
          />
        </div>
        <div className="relative flex items-center justify-start py-5 gap-5">
          <Image src="/assets/yt.png" width={50} height={50} alt="icon" />
            <p className="text-2xl ">facebook</p>
          <Image
            src="/assets/social_line.png"
            alt="line"
            width={750}
            height={200}
            className="absolute bottom-0 left-0 w-full h-auto"
          />
        </div>
        <div className="relative flex items-center justify-start py-5 gap-5">
          <Image src="/assets/x.png" width={50} height={50} alt="icon" />
        <p className="text-2xl ">facebook</p>
          <Image
            src="/assets/social_line.png"
            alt="line"
            width={750}
            height={200}
            className="absolute bottom-0 left-0 w-full h-auto"
          />
        </div>
      </div>
    </div>
  );
}

export default Social;
