import MainLyout from "@/components/layouts/MainLayout";
import InputField from "@/components/modules/Inputs/Inputs";
import Image from "next/image";
import React from "react";

function page() {
  return (
    <div>
      <MainLyout>
        <div className="w-full h-fit border-3 rounded-2xl grid grid-cols-2 max-md:grid-cols-1 p-5 gap-5 bg-white mt-10">
          <div className="">
            <Image
              className="rounded-2xl w-full h-fit"
              src={"/assets/post1.jpg"}
              width={500}
              height={500}
              alt="profile"
            />
          </div>
          <div className="flex flex-col text-2xl mt-10 ">
            <p className="text-6xl">get in touch</p>
              <form action="#" className="flex flex-col gap-5">
                <InputField
                  type={"text"}
                  placeholder="please enter your name"
                />
                <InputField
                  type={"email"}
                  placeholder="please enter your email"
                />
                <InputField
                  type={"password"}
                  placeholder="please enter your password"
                />
                <InputField rows={3} textarea placeholder="please enter text" />
                <button type={'submit'} className="w-full py-3 saconderybg rounded-2xl border-3">
                    send
                </button>
              </form>
          </div>
        </div>
      </MainLyout>
    </div>
  );
}

export default page;
