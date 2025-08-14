import Image from "next/image";
import Link from "next/link";
import React from "react";

function About() {
  return (
    <div id="about" className="w-full md:h-screen p-2 items-center py-16">
      <div className="max-w-[1240px] m-auto md:grid grid-cols-3 py-16 gap-8">
        <div className="col-span-2">
          <h2 className="text-md text-[#086788] tracking-wider py-4">
            About Me
          </h2>
          <p className="py-2 text-gray-600">
            I'm a QA Engineer & code tinkerer obsessed with quality. I build
            constantly—exploring tech, honing skills, and applying learnings
            through rigorous manual testing and smart automation. My background
            as an educator and program manager gives me a uniquely user-first
            testing mindset. Let's build something cool together, or just
            connect!
          </p>
          <Link href="/#work">
            <p className="py-2 text-gray-600 underline cursor-pointer hover:text-[#086788]">
              Check out some of my most recent work!
            </p>
          </Link>
        </div>
        <div className="w-full h-auto m-auto shadow-xl shadow-gray-400 rounded-xl flex items-center justify-center p-4 hover:scale-105 ease-in duration-300">
          {/* <img className='rounded-xl' src="https://i.imgur.com/9zehaTe.jpg" alt=""></img> */}
          <Image src="/assets/NG.jpeg" alt="/" width={600} height={600} />
        </div>
      </div>
    </div>
  );
}

export default About;
