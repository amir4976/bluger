import Image from "next/image";
import React from "react";

function Title({ text }: { text: string }) {
  return (
    <div className="text-3xl flex items-center gap-7">
      <p className="text-8xl"> {text}</p>
      <Image
        src={"/assets/post-module-title-dec.webp"}
        width={70}
        height={70}
        alt="zero"
      />
    </div>
  );
}

export default Title;
