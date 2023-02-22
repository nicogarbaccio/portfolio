import React, { useState, useEffect } from "react";
import Link from "next/link";
import { AiOutlineClose, AiOutlineMail, AiOutlineMenu } from "react-icons/ai";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";

function Navbar() {
  const [nav, setNav] = useState(false);
  const handleNav = () => {
    setNav(!nav);
  };

  return (
    <div className="bg-[#086788] fixed w-full h-30 shadow-xl z-[100] px-4">
      <div className="flex justify-between items-center w-full h-full px-2 2xl:px-16">
        {/* <Image src="/../public/assets/NG.jpeg" className='rounded-full' alt="/" width="120" height="50" /> */}
        <Link href="/">
          <h2 className="text-white py-5 px-3 tracking-wider">
            Nico Garbaccio
          </h2>
        </Link>
        <div>
          <ul className="hidden md:flex">
            <Link href="/">
              <li className="text-white ml-10 text-md uppercase hover:border-b">
                Home
              </li>
            </Link>
            <Link href="/#about">
              <li className="text-white ml-10 text-md uppercase hover:border-b">
                About
              </li>
            </Link>
            <Link href="/#projects">
              <li className="text-white ml-10 text-md uppercase hover:border-b">
                Projects
              </li>
            </Link>
            <Link href="/#skills">
              <li className="text-white ml-10 text-md uppercase hover:border-b">
                Skills
              </li>
            </Link>
            <Link href="/#experience">
              <li className="text-white ml-10 text-md uppercase hover:border-b">
                Experience
              </li>
            </Link>
            <Link href="/">
              <li className="text-white ml-10 text-md uppercase hover:border-b">
                Contact
              </li>
            </Link>
          </ul>
          <div onClick={handleNav} className="md:hidden">
            <AiOutlineMenu
              className="text-white cursor-pointer hover:scale-105 ease-in duration-200"
              size={25}
            />
          </div>
        </div>
      </div>
      <div
        className={
          nav ? "md:hidden fixed left-0 top-0 w-full h-screen bg-black/70" : ""
        }
      >
        <div
          className={
            nav
              ? "fixed left-0 top-0 w-[75%] sm:w-[60%] md:w-[45%] h-screen bg-[#ecf0f3] p-10 ease-in duration-500"
              : "fixed left-[-100%] top-0 p-10 ease-in duration-500"
          }
        >
          <div>
            <div className="flex w-full items-center justify-between">
              <Link href="/">
                <h2>Nico Garbaccio</h2>
              </Link>
              {/* <Image src="/../public/assets/NG.jpeg" className='rounded-full' alt="/" width="87" height="35" /> */}
              <div
                onClick={handleNav}
                className="rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-200"
              >
                <AiOutlineClose />
              </div>
            </div>
            <div className="border-b border-gray-300 my-4">
              <p className="w-[85%] md:w-[90%]">Full Stack Software Engineer</p>
            </div>
          </div>
          <div className="py-4 flex flex-col">
            <ul>
              <Link href="">
                <li
                  onClick={() => setNav(false)}
                  className="py-4 text-md uppercase hover:text-[#086788]"
                  target="_blank"
                >
                  Home
                </li>
              </Link>
              <Link href="/#about">
                <li
                  onClick={() => setNav(false)}
                  className="py-4 text-md uppercase hover:text-[#086788]"
                  target="_blank"
                >
                  About
                </li>
              </Link>
              <Link href="/#projects">
                <li
                  onClick={() => setNav(false)}
                  className="py-4 text-md uppercase hover:text-[#086788]"
                  target="_blank"
                >
                  Projects
                </li>
              </Link>
              <Link href="/#skills">
                <li
                  onClick={() => setNav(false)}
                  className="py-4 text-md uppercase hover:text-[#086788]"
                  target="_blank"
                >
                  Skills
                </li>
              </Link>
              <Link href="/#experience">
                <li
                  onClick={() => setNav(false)}
                  className="py-4 text-md uppercase hover:text-[#086788]"
                  target="_blank"
                >
                  Experience
                </li>
              </Link>
              <Link href="mailto:garbaccio20@gmail.com">
                <li
                  onClick={() => setNav(false)}
                  className="py-4 text-md uppercase hover:text-[#086788]"
                  target="_blank"
                >
                  Contact
                </li>
              </Link>
            </ul>
            <div className="pt-20">
              <p className="uppercase tracking-widest text-center font-bold text-[#086788]">
                Let's connect!
              </p>
              <div className="flex items-center justify-between my-4 w-full sm:w-[80%]">
                <div className="rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-200">
                  <Link href="https://www.linkedin.com/in/nicogarbaccio/">
                    <FaLinkedinIn />
                  </Link>
                </div>
                <div className="rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-200">
                  <Link href="https://github.com/nicogarbaccio">
                    <FaGithub />
                  </Link>
                </div>
                <div className="rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-200">
                  <Link href="mailto:nicogarbaccio@gmail.com">
                    <AiOutlineMail />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
