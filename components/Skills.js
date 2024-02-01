import React from "react";
import Image from "next/image";
import html from "../public/assets/skills/html.png";
import css from "../public/assets/skills/css.png";
import firebase from "../public/assets/skills/firebase.png";
import javascript from "../public/assets/skills/javascript.png";
import postgresql from "../public/assets/skills/postgresql.png";
import rails from "../public/assets/skills/rails.png";
import react from "../public/assets/skills/react.png";
import ruby from "../public/assets/skills/ruby.png";
import tailwind from "../public/assets/skills/tailwind.png";
import typescript from "../public/assets/skills/typescript.png";
import mongodb from "../public/assets/skills/mongodb.png";
import python from "../public/assets/skills/python.png";
import playwright from "../public/assets/skills/playwright.png";
import cypress from "../public/assets/skills/cypress.png";
import nodejs from "../public/assets/skills/nodejs.png";
import selenium from "../public/assets/skills/selenium.png";
import postman from "../public/assets/skills/postman.png";

function Skills() {
  return (
    <div id="skills" className="w-full lg:h-screen p-2">
      <div className="max-w-[1240px] mx-auto flex flex-col justify-center h-full">
        <h2 className="text-md text-[#086788] tracking-wider py-4">
          Tech Stack
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* JavaScript */}
          <div className="p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300">
            <div className="grid grid-cols-2 gap-4 justify-center items-center">
              <div className="m-auto">
                <Image alt="/" src={javascript} width="64" height="64" />
              </div>
              <div className="flex flex-col items-center justify-center">
                <h3>JavaScript</h3>
              </div>
            </div>
          </div>
          {/* TypeScript */}
          <div className="p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300">
            <div className="grid grid-cols-2 gap-4 justify-center items-center">
              <div className="m-auto">
                <Image alt="/" src={typescript} width="64" height="64" />
              </div>
              <div className="flex flex-col items-center justify-center">
                <h3>TypeScript</h3>
              </div>
            </div>
          </div>
          {/* Python */}
          <div className="p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300">
            <div className="grid grid-cols-2 gap-4 justify-center items-center">
              <div className="m-auto">
                <Image alt="/" src={python} width="64" height="64" />
              </div>
              <div className="flex flex-col items-center justify-center">
                <h3>Python</h3>
              </div>
            </div>
          </div>
          {/* React */}
          <div className="p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300">
            <div className="grid grid-cols-2 gap-4 justify-center items-center">
              <div className="m-auto">
                <Image alt="/" src={react} width="64" height="64" />
              </div>
              <div className="flex flex-col items-center justify-center">
                <h3>React</h3>
              </div>
            </div>
          </div>
          {/* Tailwind */}
          <div className="p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300">
            <div className="grid grid-cols-2 gap-4 justify-center items-center">
              <div className="m-auto">
                <Image alt="/" src={tailwind} width="64" height="64" />
              </div>
              <div className="flex flex-col items-center justify-center">
                <h3>Tailwind CSS</h3>
              </div>
            </div>
          </div>
          {/* Node.js */}
          <div className="p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300">
            <div className="grid grid-cols-2 gap-4 justify-center items-center">
              <div className="m-auto">
                <Image alt="/" src={nodejs} width="64" height="64" />
              </div>
              <div className="flex flex-col items-center justify-center">
                <h3>Node.js</h3>
              </div>
            </div>
          </div>
          {/* MongoDB */}
          <div className="p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300">
            <div className="grid grid-cols-2 gap-4 justify-center items-center">
              <div className="m-auto">
                <Image alt="/" src={mongodb} width="64" height="64" />
              </div>
              <div className="flex flex-col items-center justify-center">
                <h3>MongoDB</h3>
              </div>
            </div>
          </div>
          {/* Postgres */}
          <div className="p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300">
            <div className="grid grid-cols-2 gap-4 justify-center items-center">
              <div className="m-auto">
                <Image alt="/" src={postgresql} width="64" height="64" />
              </div>
              <div className="flex flex-col items-center justify-center">
                <h3>PostgreSQL</h3>
              </div>
            </div>
          </div>
          {/* Playwright */}
          <div className="p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300">
            <div className="grid grid-cols-2 gap-4 justify-center items-center">
              <div className="m-auto">
                <Image alt="/" src={playwright} width="64" height="64" />
              </div>
              <div className="flex flex-col items-center justify-center">
                <h3>Playwright</h3>
              </div>
            </div>
          </div>
          {/* Cypress */}
          <div className="p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300">
            <div className="grid grid-cols-2 gap-4 justify-center items-center">
              <div className="m-auto">
                <Image alt="/" src={cypress} width="64" height="64" />
              </div>
              <div className="flex flex-col items-center justify-center">
                <h3>Cypress</h3>
              </div>
            </div>
          </div>
          {/* Selenium */}
          <div className="p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-200">
            <div className="grid grid-cols-2 gap-4 justify-center items-center">
              <div className="m-auto">
                <Image alt="/" src={selenium} width="64" height="64" />
              </div>
              <div className="flex flex-col items-center justify-center">
                <h3>Selenium</h3>
              </div>
            </div>
          </div>
          {/* Postman */}
          <div className="p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300">
            <div className="grid grid-cols-2 gap-4 justify-center items-center">
              <div className="m-auto">
                <Image alt="/" src={postman} width="64" height="64" />
              </div>
              <div className="flex flex-col items-center justify-center">
                <h3>Postman</h3>
              </div>
            </div>
          </div>
          {/* End */}
        </div>
      </div>
    </div>
  );
}

export default Skills;
