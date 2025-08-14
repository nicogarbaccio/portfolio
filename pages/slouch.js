import React from "react";
import Image from "next/image";
import Link from "next/link";
import { RiRadioButtonFill } from "react-icons/ri";

function slouch() {
  return (
    <div className="w-full">
      <div className="w-screen h-[50vh] relative">
        <div className="absolute top-0 left-0 w-full h-[50vh] bg-black/70 z-10" />
        <Image
          className="absolute z-1"
          layout="fill"
          objectFit="cover"
          src="/assets/projects/Slouch.png"
          alt="/"
        />
        <div className="absolute top-[70%] max-w-[1240px] w-full left-[50%] right-[50%] translate-x-[-50%] translate-y-[-50%] text-white z-10 p-2">
          <h2 className="py-2">Slouch</h2>
          <h3>React | Redux | JavaScript | Firebase</h3>
        </div>
      </div>

      <div className="max-w-[1240px] mx-auto p-2 grid md:grid-cols-5 gap-8 py-8">
        <div className="col-span-4">
          <h2>Overview</h2>
          <p className="mt-2">
            Slouch is a single-page, lightweight version of the messaging app
            Slack. I built the front end with React and Redux, while the backend
            is powered by Firebase, where it's also deployed. While I knew React
            already, I wanted to use new libraries while I built this, and doing
            so really showed me the power of Redux and Firebase (and Firebase
            hooks), as well as how easy styling becomes with Styled Components.
            I took advantage of Firebase hooks to support channel creation and
            provide Google authentication, which makes logging in unbelievably
            easy, quick, and secure. Redux fit in perfectly with the app,
            allowing users to seamlessly move from channel to channel. Last but
            not least, Styled Components and Material UI were used to create a
            sleek user interface that looks pretty close to the real Slack.
            While this is still a work in progress (I'm currently working on
            implementing DMs and the ability to send images), I'm really happy
            with how clean and easy to read this code is, and how much is going
            on in a very manageable amount of lines of code.
          </p>
          <a
            href="https://slouch-e6459.web.app/"
            target="_blank"
            rel="noreferrer"
          >
            <button className="px-8 py-2 mt-4 mr-8">Live Site</button>
          </a>
          <a
            href="https://github.com/nicogarbaccio/slouch"
            target="_blank"
            rel="noreferrer"
          >
            <button className="px-8 py-2 mt-4 mr-8">Code</button>
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
                <RiRadioButtonFill className="pr-1" /> Redux
              </p>
              <p className="text-gray-600 py-2 flex items-center">
                <RiRadioButtonFill className="pr-1" /> JavaScript
              </p>
              <p className="text-gray-600 py-2 flex items-center">
                <RiRadioButtonFill className="pr-1" /> Firebase
              </p>
              <p className="text-gray-600 py-2 flex items-center">
                <RiRadioButtonFill className="pr-1" /> Styled Components
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

export default slouch;
