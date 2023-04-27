import Image from "next/image";
import Link from "next/link";
import React from "react";
import ng from "../public/assets/NG.jpeg";

function About() {
  return (
    <div id="about" className="w-full md:h-screen p-2 items-center py-16">
      <div className="max-w-[1240px] m-auto md:grid grid-cols-3 py-16 gap-8">
        <div className="col-span-2">
          <h2 className="text-md text-[#086788] tracking-wider py-4">
            About Me
          </h2>
          <p className="py-2 text-gray-600">
            I'm a software engineer and educator, working as a QA Engineer at
            Thinx. I love solving complex problems, and few things make me as
            happy as bug-free code. I'm also a dedicated member of Code Nation's
            community, and I support the organization by building curriculum,
            projects, and tools for students and staff. I graduated from
            Flatiron School's full stack software engineering program in
            December 2022, and have a background of six years in the world of
            nonprofit education. I'm passionate about community, learning, and
            teaching.
          </p>
          <Link href="/#projects">
            <p className="py-2 text-gray-600 underline cursor-pointer hover:text-[#086788]">
              Check out some of my latest projects!
            </p>
          </Link>
        </div>
        <div className="w-full h-auto m-auto shadow-xl shadow-gray-400 rounded-xl flex items-center justify-center p-4 hover:scale-105 ease-in duration-300">
          {/* <img className='rounded-xl' src="https://i.imgur.com/9zehaTe.jpg" alt=""></img> */}
          <Image src={ng} alt="/" />
        </div>
      </div>
    </div>
  );
}

export default About;
