import React from "react";
import Image from "next/image";
import Link from "next/link";
import { RiRadioButtonFill } from "react-icons/ri";

function explored() {
  return (
    <div className="w-full">
      <div className="w-screen h-[50vh] relative">
        <div className="absolute top-0 left-0 w-full h-[50vh] bg-black/70 z-10" />
        <Image
          className="absolute z-1"
          layout="fill"
          objectFit="cover"
          src="/assets/projects/ExplorED.png"
          alt="/"
        />
        <div className="absolute top-[70%] max-w-[1240px] w-full left-[50%] right-[50%] translate-x-[-50%] translate-y-[-50%] text-white z-10 p-2">
          <h2 className="py-2">ExplorED</h2>
          <h3>React | Redux | Ruby on Rails | JavaScript | Tailwind CSS</h3>
        </div>
      </div>

      <div className="max-w-[1240px] mx-auto p-2 grid md:grid-cols-5 gap-8 py-8">
        <div className="col-span-4">
          <h2>Overview</h2>
          <p className="mt-2">
            ExplorED is an e-learning app that that makes it easy for
            instructors to share materials, create discussions, and more with
            students. I built this app for my capstone project at Flatiron
            School. Having a background in education and having used multiple
            platforms as a teacher and as a student, this is something I've
            wanted to build for a while. I built it solo and from scratch, so
            I'm pretty proud of it! It's got a React front end and a Rails back
            end. I customized a database schema using Postgres and implemented
            the MVC pattern in Ruby on Rails, which made the app scalable and
            efficient. To allow for file management, I integrated ActiveStorage,
            which enables instructors to upload materials and students to
            download them. For user authentication, I utilized BCrypt, which
            allows for different levels of authorization for instructors and
            student. And finally, I styled the app using Tailwind CSS, which
            makes it look great and easy to navigate (I especially love how the
            dropdown came out).
          </p>
          <p className="font-bold mt-5">
            Note that the site is hosted on Render, so when visiting the live
            site, it may take a minute to spin up
          </p>
          <p className="font-bold mt-5">
            You can log in as an instructor with the following credentials:
          </p>
          <p className="mt-2">
            <span className="font-bold">Email: </span>demo123@demo.com
          </p>
          <p className="mb-2">
            <span className="font-bold">Password: </span>demo123
          </p>
          <a
            href="https://explored.onrender.com/"
            target="_blank"
            rel="noreferrer"
          >
            <button className="px-8 py-2 mt-4 mr-8">Live Site</button>
          </a>
          <a
            href="https://github.com/nicogarbaccio/explored"
            target="_blank"
            rel="noreferrer"
          >
            <button className="px-8 py-2 mt-4 mr-8">Code</button>
          </a>
          <a
            href="https://www.loom.com/share/8da5fe90c42d495d924c220ce23c1f815"
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
                <RiRadioButtonFill className="pr-1" /> JavaScript
              </p>
              <p className="text-gray-600 py-2 flex items-center">
                <RiRadioButtonFill className="pr-1" /> Ruby on Rails
              </p>
              <p className="text-gray-600 py-2 flex items-center">
                <RiRadioButtonFill className="pr-1" /> PostgreSQL
              </p>
              <p className="text-gray-600 py-2 flex items-center">
                <RiRadioButtonFill className="pr-1" /> ActiveStorage
              </p>
              <p className="text-gray-600 py-2 flex items-center">
                <RiRadioButtonFill className="pr-1" /> BCrypt
              </p>
              <p className="text-gray-600 py-2 flex items-center">
                <RiRadioButtonFill className="pr-1" /> Tailwind CSS
              </p>
              <p className="text-gray-600 py-2 flex items-center">
                <RiRadioButtonFill className="pr-1" /> Render
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

export default explored;
