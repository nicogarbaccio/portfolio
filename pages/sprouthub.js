import React from "react";
import Image from "next/image";
import { RiRadioButtonFill } from "react-icons/ri";
import sprouthubImg from "../public/assets/projects/SproutHub.png";

function sprouthub() {
  return (
    <div className="w-full">
      <div className="w-screen h-[50vh] relative">
        <div className="absolute top-0 left-0 w-full h-[50vh] bg-black/70 z-10" />
        <Image
          className="absolute z-1"
          fill
          objectFit="cover"
          src={sprouthubImg}
          alt="/"
        />
        <div className="absolute top-[70%] max-w-[1240px] w-full left-[50%] right-[50%] translate-x-[-50%] translate-y-[-50%] text-white z-10 p-2">
          <h2 className="py-2">LetMeBook</h2>
          <h3>TypeScript | React | Vite | Node.js | Express | Supabase</h3>
        </div>
      </div>

      <div className="max-w-[1240px] mx-auto p-2 grid md:grid-cols-5 gap-8 py-8">
        <div className="col-span-4">
          <h2 className="mt-2">Overview</h2>
          <p className="mt-4">
            SproutHub is a full-stack plant care app built with Vite, React, and
            TypeScript. The frontend features a responsive, mobile-first UI
            using Tailwind CSS and shadcn-ui. Supabase powers authentication and
            backend services, enabling secure user accounts and real-time data.
            Users can browse a rich plant catalog, track their personal
            collection, and receive smart care reminders. The app is designed
            for plant lovers who want a beautiful, intuitive experience for
            managing their indoor gardens. Comprehensive testing with Jest and
            Playwright is planned to ensure reliability.
          </p>
          <a href="https://sprout-hub.com/" target="_blank" rel="noreferrer">
            <button className="px-8 py-2 mt-4 mr-8">Live Site</button>
          </a>
          <a
            href="https://github.com/nicogarbaccio/sprout-hub"
            target="_blank"
            rel="noreferrer"
          >
            <button className="px-8 py-2 mt-4 mr-8">Code</button>
          </a>
          {/* <a
            href="https://www.loom.com/share/3f19421fa7ef4dc2a78b8e249d8c90bc"
            target="_blank"
            rel="noreferrer"
          >
            <button className="px-8 py-2 mt-4">Demo</button>
          </a> */}
        </div>
        <div className="col-span-4 md:col-span-1 shadow-xl shadow-gray-400 rounded-xl py-4">
          <div className="p-2">
            <p className="text-center font-bold pb-2">Technologies</p>
            <div className="grid grid-cols-3 md:grid-cols-1 ">
              <p className="text-gray-600 py-2 flex items-center">
                <RiRadioButtonFill className="pr-1" /> React
              </p>
              <p className="text-gray-600 py-2 flex items-center">
                <RiRadioButtonFill className="pr-1" /> Vite
              </p>
              <p className="text-gray-600 py-2 flex items-center">
                <RiRadioButtonFill className="pr-1" /> TypeScript
              </p>
              <p className="text-gray-600 py-2 flex items-center">
                <RiRadioButtonFill className="pr-1" /> Node.js
              </p>
              <p className="text-gray-600 py-2 flex items-center">
                <RiRadioButtonFill className="pr-1" /> Express
              </p>
              <p className="text-gray-600 py-2 flex items-center">
                <RiRadioButtonFill className="pr-1" /> Supabase
              </p>
              <p className="text-gray-600 py-2 flex items-center">
                <RiRadioButtonFill className="pr-1" /> Tailwind CSS
              </p>
              <p className="text-gray-600 py-2 flex items-center">
                <RiRadioButtonFill className="pr-1" /> Playwright
              </p>
            </div>
          </div>
        </div>
        {/* <Link href="/#projects">
          <p className="underline cursor-pointer hover:text-[#086788]">Back</p>
        </Link> */}
      </div>
    </div>
  );
}

export default sprouthub;
