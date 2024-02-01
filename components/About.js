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
            I’m a dedicated QA and software engineer with a proven track record
            in ensuring software quality through a blend of manual testing and
            automation. I approach testing and development with a holistic
            perspective, striving for seamless user experiences. My background
            includes experience in teaching, curriculum development, community
            engagement, and program management. I'm passionate about fostering
            community and cultivating a culture of continuous learning and
            innovation, wherever I may be. If you're committed to building teams
            that turn ideas into impactful solutions, let's connect!
          </p>
          <Link href="/#work">
            <p className="py-2 text-gray-600 underline cursor-pointer hover:text-[#086788]">
              Check out some of my most recent work!
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
