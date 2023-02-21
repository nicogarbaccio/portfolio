import React from "react";
import Link from "next/link";
import { AiOutlineClose, AiOutlineMail, AiOutlineMenu } from "react-icons/ai";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import { BsFillPersonLinesFill } from "react-icons/bs";

function Main() {
  return (
    <div id="home" className="w-full h-screen text-center">
      <div className="max-w-[1240px] w-full h-full mx-auto p-2 flex justify-center items-center">
        <div>
          <h1 className="py-4 text-gray-700">
            Hey there! I'm <span className="text-[#5651e5]">Nico</span>!
          </h1>
          <p className="py-4 text-gray-600 max-w-[70%] m-auto">
            <span className="font-semibold text-lg">
              I'm a full stack software engineer
            </span>{" "}
            and recent graduate of Flatiron School. Before pivoting to the tech
            world I spent 6 years in the nonprofit education space, designing
            and managing successful youth literacy and technology programs. I'm
            a strong collaborator and problem-solver with program management and
            process-improvement expertise. I'm passionate about community,
            learning and teaching.
          </p>
          <div className="flex items-center justify-between max-w-[330px] m-auto py-4">
            <div className="rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300">
              <Link
                href="https://www.linkedin.com/in/nicogarbaccio/"
                target="_blank"
              >
                <FaLinkedinIn />
              </Link>
            </div>
            <div className="rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300">
              <Link href="https://github.com/nicogarbaccio" target="_blank">
                <FaGithub />
              </Link>
            </div>
            <div className="rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300">
              <Link href="mailto:nicogarbaccio@gmail.com" target="_blank">
                <AiOutlineMail />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Main;
