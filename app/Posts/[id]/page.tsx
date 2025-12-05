import MainLyout from "@/components/layouts/MainLayout";
import Image from "next/image";
import React from "react";

function page() {
  return (
    <div>
      <MainLyout>
        <div className="grid grid-cols-2 max-md:grid-cols-1 gap-5 mt-10">
          <div className="bg-white border-3 rounded-2xl p-5 sticky h-fit top-5 ">
            <Image
              src={"/assets/post1.jpg"}
              width={500}
              height={500}
              alt="cover"
              className="object-fill w-full h-full rounded-2xl"
            />
          </div>
          <div className="border-3 p-5 bg-white rounded-2xl">
            <div className="title text-4xl mt-5 ">
              Tech Talk: Advancements in Science and Tech
            </div>
            <div className="date border-t-2 border-b-2  mt-5 text-2xl py-2 flex justify-between">
              <div className="">April 21, 2024</div>
              <div className="">5am</div>
            </div>
            <p className="text-4xl mt-5">Embracing the Basics</p>
            <p className="text-2xl font-sans">
              Before diving into the complexities, it's crucial to acquaint
              yourself with the building blocks of the language. Begin with
              greetings, basic phrases, and essential vocabulary. Platforms like
              Duolingo, Babbel, or Rosetta Stone offer engaging exercises that
              make learning these fundamentals enjoyable. Grammar might seem
              daunting, but fear not! Understanding basic sentence structures,
              verb conjugations, and noun genders lays a sturdy foundation.
              Online resources, textbooks, and YouTube tutorials are fantastic
              aids for grasping grammar intricacies. Immerse yourself in the
              language by listening to podcasts, watching Spanish shows or
              movies, and engaging in conversation with native speakers if
              possible. Practice speaking aloud, even if it's just to yourself;
              it helps to solidify pronunciation and confidence.
            </p>
            <p className="text-4xl mt-5">Embracing the Basics</p>
            <p className="text-2xl font-sans">
              Before diving into the complexities, it's crucial to acquaint
              yourself with the building blocks of the language. Begin with
              greetings, basic phrases, and essential vocabulary. Platforms like
              Duolingo, Babbel, or Rosetta Stone offer engaging exercises that
              make learning these fundamentals enjoyable. Grammar might seem
              daunting, but fear not! Understanding basic sentence structures,
              verb conjugations, and noun genders lays a sturdy foundation.
              Online resources, textbooks, and YouTube tutorials are fantastic
              aids for grasping grammar intricacies. Immerse yourself in the
              language by listening to podcasts, watching Spanish shows or
              movies, and engaging in conversation with native speakers if
              possible. Practice speaking aloud, even if it's just to yourself;
              it helps to solidify pronunciation and confidence.
            </p>
          </div>
        </div>
      </MainLyout>
    </div>
  );
}

export default page;
