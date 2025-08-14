import React from "react";
import Image from "next/image";
import Link from "next/link";
import { RiRadioButtonFill } from "react-icons/ri";

function groovehound() {
  return (
    <div className="w-full">
      <div className="w-screen h-[50vh] relative">
        <div className="absolute top-0 left-0 w-full h-[50vh] bg-black/70 z-10" />
        <Image
          className="absolute z-1"
          layout="fill"
          objectFit="cover"
          src="/assets/projects/Groovehound.png"
          alt="/"
        />
        <div className="absolute top-[70%] max-w-[1240px] w-full left-[50%] right-[50%] translate-x-[-50%] translate-y-[-50%] text-white z-10 p-2">
          <h2 className="py-2">Groovehound</h2>
          <h3>React | JavaScript | Ruby on Rails | PostgreSQL</h3>
        </div>
      </div>

      <div className="max-w-[1240px] mx-auto p-2 grid md:grid-cols-5 gap-8 py-8">
        <div className="col-span-4">
          <h2>Overview</h2>
          <p className="mt-2">
            Groovehound is a concert tracking website which allows users to
            easily find upcoming concerts and keep a record of the ones they've
            been to. It's got a React front end and a Rails back end. This was
            my first project built on Rails and PostgreSQL, and it really showed
            me the power of Rails associations, BCrypt, and building reusable
            components. My teammates and I built the database using PostgreSQL,
            which made it easy to create and store data about users, bands,
            concerts, and venues (and we had a lot of it). My favorite feature
            that I built is the For You feature, which utilizes the data to show
            upcoming concerts in the state and/or city that the user lives in
            and matches with genres or bands the user likes. It also allows the
            user to explore all upcoming concerts outside of their city and
            state.
          </p>
          <a
            href="https://github.com/nicogarbaccio/groovehound"
            target="_blank"
            rel="noreferrer"
          >
            <button className="px-8 py-2 mt-4 mr-8">Code</button>
          </a>
          <a
            href="https://www.loom.com/share/98d9737320164a4db5673c7f81a60d64"
            target="_blank"
            rel="noreferrer"
          >
            <button className="px-8 py-2 mt-4 mr-8">Demo</button>
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
                <RiRadioButtonFill className="pr-1" /> JavaScript
              </p>
              <p className="text-gray-600 py-2 flex items-center">
                <RiRadioButtonFill className="pr-1" /> Ruby on Rails
              </p>
              <p className="text-gray-600 py-2 flex items-center">
                <RiRadioButtonFill className="pr-1" /> BCrypt
              </p>
              <p className="text-gray-600 py-2 flex items-center">
                <RiRadioButtonFill className="pr-1" /> PostgreSQL
              </p>
              <p className="text-gray-600 py-2 flex items-center">
                <RiRadioButtonFill className="pr-1" /> Mantine CSS
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

export default groovehound;
