import React from "react";
import Image from "next/image";
import Link from "next/link";
import { RiRadioButtonFill } from "react-icons/ri";
import stayawhileImg from "../public/assets/projects/StayAwhile.png";

function stayawhile() {
  return (
    <div className="w-full">
      <div className="w-screen h-[50vh] relative">
        <div className="absolute top-0 left-0 w-full h-[50vh] bg-black/70 z-10" />
        <Image
          className="absolute z-1"
          layout="fill"
          objectFit="cover"
          src={stayawhileImg}
          alt="/"
        />
        <div className="absolute top-[70%] max-w-[1240px] w-full left-[50%] right-[50%] translate-x-[-50%] translate-y-[-50%] text-white z-10 p-2">
          <h2 className="py-2">Stay Awhile</h2>
          <h3>React | Next.js | TypeScript | MongoDB | Tailwind CSS</h3>
        </div>
      </div>

      <div className="max-w-[1240px] mx-auto p-2 grid md:grid-cols-5 gap-8 py-8">
        <div className="col-span-4">
          <h2>Overview</h2>
          <p className="mt-2">
            Stay Awhile is an online marketplace for short-term home rentals –
            essentially a re-skinned Airbnb. It's got a Next.js/React front end,
            and for data I leveraged Next.js 13 to implement routing,
            server-side rendering, and error handling. TypeScript was utilized
            to ensure strict typing of data models, API routes, and React
            components for more robust and maintainable code. I implemented
            client-side form validation using react-hook-form, server error
            handling using react-toast, and calendars with react-date-range. I
            also incorporated maps via React Leaflet, and used Prisma to define
            and generate the database schema. Fetched data was directly accessed
            from MongoDB database through server-side React components. The app
            also has a booking and reservation system with guest and owner
            reservation cancellation, property creation and deletion, and
            pricing calculation. The advanced search algorithm filters out
            properties that have a reservation in the user's desired date range,
            and a favorites system allows users to easily save and share their
            preferred properties with others.The page is fully responsive and
            was styled with Tailwind CSS, which made it really easy to make the
            app look like the real Airbnb! It's deployed on Vercel.
          </p>
          <a
            href="https://stay-awhile.vercel.app/"
            target="_blank"
            rel="noreferrer"
          >
            <button className="px-8 py-2 mt-4 mr-8">Live Site</button>
          </a>
          <a
            href="https://github.com/nicogarbaccio/stay-awhile"
            target="_blank"
            rel="noreferrer"
          >
            <button className="px-8 py-2 mt-4 mr-8">Code</button>
          </a>
          <a
            href="https://www.loom.com/share/3f19421fa7ef4dc2a78b8e249d8c90bc"
            target="_blank"
            rel="noreferrer"
          >
            <button className="px-8 py-2 mt-4">Demo</button>
          </a>
        </div>
        <div className="col-span-4 md:col-span-1 shadow-xl shadow-gray-400 rounded-xl py-4">
          <div className="p-2">
            <p className="text-center font-bold pb-2">Technologies</p>
            <div className="grid grid-cols-3 md:grid-cols-1 ">
              <p className="text-gray-600 py-2 flex items-center">
                <RiRadioButtonFill className="pr-1" /> React
              </p>
              <p className="text-gray-600 py-2 flex items-center">
                <RiRadioButtonFill className="pr-1" /> Next.js
              </p>
              <p className="text-gray-600 py-2 flex items-center">
                <RiRadioButtonFill className="pr-1" /> JavaScript
              </p>
              <p className="text-gray-600 py-2 flex items-center">
                <RiRadioButtonFill className="pr-1" /> MongoDB
              </p>
              <p className="text-gray-600 py-2 flex items-center">
                <RiRadioButtonFill className="pr-1" /> Prisma
              </p>
              <p className="text-gray-600 py-2 flex items-center">
                <RiRadioButtonFill className="pr-1" /> React Leaflet
              </p>
              <p className="text-gray-600 py-2 flex items-center">
                <RiRadioButtonFill className="pr-1" /> Tailwind CSS
              </p>
              <p className="text-gray-600 py-2 flex items-center">
                <RiRadioButtonFill className="pr-1" /> Vercel
              </p>
            </div>
          </div>
        </div>
        <Link href="/#projects">
          <p className="underline cursor-pointer hover:text-[#086788]">Back</p>
        </Link>
      </div>
    </div>
  );
}

export default stayawhile;
