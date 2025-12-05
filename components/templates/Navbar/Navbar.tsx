"use client"
import Link from "next/link";
import React, { useState } from "react";

function Navbar() {
  const [open, setOpen] = useState(false);

  return (

    <div className="w-full h-30 border-3 rounded-b-3xl bg-white flex justify-between items-center px-10 max-md:px-5 relative">

      {/* Logo */}
      <div className="text-6xl max-md:text-3xl font-bold">
        Bluger
      </div>

      {/* Desktop Menu */}
      <div className="max-md:hidden">
        <ol className="flex gap-10 text-2xl items-center">
          <li className="hover:underline cursor-pointer"><Link href={'/'}>Home</Link></li>
          <li className="hover:underline cursor-pointer"><Link href={'/About'}>About</Link></li>
          <li className="hover:underline cursor-pointer"><Link href={'/Categories'}>Categories</Link></li>
          <li className="hover:underline cursor-pointer"><Link href={'/Posts'}>Posts</Link></li>
          <li className="hover:underline cursor-pointer"><Link href={'/contact'}>Contact</Link></li>
        </ol>
      </div>

      {/* Mobile Menu Button */}
      <div
        className="md:hidden text-4xl cursor-pointer transition-all select-none"
        onClick={() => setOpen(!open)}
      >
        {open ? "✖" : "☰"}
      </div>

      {/* Mobile Menu With Animation */}
      <div
        className={`
          absolute w-full left-0 saconderybg border-2 z-50 rounded-2xl
          flex flex-col gap-6 text-2xl px-5 py-5
          transition-all duration-300 ease-in-out
          ${open ? "top-28 opacity-100 pointer-events-auto" : "top-20 opacity-0 pointer-events-none"}
        `}
      >
        <div className="hover:underline cursor-pointer">Home</div>
        <div className="hover:underline cursor-pointer">About</div>
        <div className="hover:underline cursor-pointer">Categories</div>
        <div className="hover:underline cursor-pointer">Posts</div>
        <div className="hover:underline cursor-pointer">Contact</div>
      </div>
    </div>
  );
}

export default Navbar;
