import MainLyout from "@/components/layouts/MainLayout";
import BlugCards from "@/components/modules/main/BlugCards";
import Link from "next/link";
import React from "react";

function page() {
  return (
    <div>
      <MainLyout>
        <div className="grid grid-cols-3 max-lg:grid-cols-2 max-md:grid-cols-1 mt-10 gap-5">
          <Link href={'/Posts/1'}>
          <BlugCards text={'Tech Talk: Advancements in Science and Tech'} cover={"/assets/covers/1.jpg"} />
          </Link>
          <Link href={'/Posts/1'}>
          <BlugCards text={'Tech Talk: Advancements in Science and Tech'} cover={"/assets/covers/2.jpg"} />
          </Link>
          <Link href={'/Posts/1'}>
          <BlugCards text={'Tech Talk: Advancements in Science and Tech'} cover={"/assets/covers/3.jpg"} />
          </Link>
          <Link href={'/Posts/1'}>
          <BlugCards  text={'Tech Talk: Advancements in Science and Tech'} cover={"/assets/covers/4.jpg"}/>
          </Link>
          <Link href={'/Posts/1'}>
          <BlugCards text={'Tech Talk: Advancements in Science and Tech'} cover={"/assets/covers/5.jpg"} />
          </Link>

        </div>
      </MainLyout>
    </div>
  );
}

export default page;
