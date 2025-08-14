import Image from "next/image";
import { RiRadioButtonFill } from "react-icons/ri";

function codeNation() {
  return (
    <div className="w-full">
      <div className="w-screen h-[50vh] relative">
        <div className="absolute top-0 left-0 w-full h-[50vh] bg-black/70 z-10" />
        <Image
          className="absolute z-1"
          layout="fill"
          objectFit="cover"
          src="/assets/projects/CodeNation.jpg"
          alt="/"
        />
        <div className="absolute top-[70%] max-w-[1240px] w-full left-[50%] right-[50%] translate-x-[-50%] translate-y-[-50%] text-white z-10 p-2">
          <h2 className="py-2">Code Nation</h2>
        </div>
      </div>

      <div className="max-w-[1240px] mx-auto p-2 grid md:grid-cols-5 gap-8 py-8">
        <div className="col-span-4">
          <h2 className="mt-2">Overview</h2>
          <p className="mt-4">
            Code Nation is a non-profit organization that equips students in
            under-resourced high schools with the skills, experiences, and
            connections that together create access to careers in technology. I
            joined Code Nation in May 2021 as a Program Manager specializing in
            community engagement and curriculum development. Through teaching
            foundational coding to high school students, developing curriculum
            on the fly, and learning from volunteer teachers (all of which are
            professional software engineers), I learned to code on my own. The
            experience inspired me to make a massive career leap and become a
            software engineer. After I graduated from Flatiron School's full
            stack software engineering program, I rejoined Code Nation on a
            contract basis, as the Senior Curriculum & Instruction Manager. I
            helped refine Code Nation's existing curriculum, and led the
            development of the program's advanced curriculum, which teaches
            React and advanced JavaScript concepts. I built sample projects for
            students to recreate, such as games and quizzes, as well as tools to
            help students learn and keep organized.
          </p>
          <div className="mt-4">
            <a
              href="https://github.com/itscodenation"
              target="_blank"
              rel="noreferrer"
            >
              <button className="px-8 py-2 mt-4 mr-8">
                Code Nation's Curriculum
              </button>
            </a>
          </div>
        </div>
        <div className="col-span-4 md:col-span-1 shadow-xl shadow-gray-400 rounded-xl py-4">
          <div className="p-2">
            <p className="text-center font-bold pb-2">Technologies Used</p>
            <div className="grid grid-cols-3 md:grid-cols-1 ">
              <p className="text-gray-600 py-2 flex items-center">
                <RiRadioButtonFill className="pr-1" /> Next.js
              </p>
              <p className="text-gray-600 py-2 flex items-center">
                <RiRadioButtonFill className="pr-1" /> TypeScript
              </p>
              <p className="text-gray-600 py-2 flex items-center">
                <RiRadioButtonFill className="pr-1" /> Playwright
              </p>
              <p className="text-gray-600 py-2 flex items-center">
                <RiRadioButtonFill className="pr-1" /> Cypress
              </p>
              <p className="text-gray-600 py-2 flex items-center">
                <RiRadioButtonFill className="pr-1" /> BrowserStack
              </p>
              <p className="text-gray-600 py-2 flex items-center">
                <RiRadioButtonFill className="pr-1" /> Figma
              </p>
              <p className="text-gray-600 py-2 flex items-center">
                <RiRadioButtonFill className="pr-1" /> Shopify
              </p>
              <p className="text-gray-600 py-2 flex items-center">
                <RiRadioButtonFill className="pr-1" /> Contentful
              </p>
              <p className="text-gray-600 py-2 flex items-center">
                <RiRadioButtonFill className="pr-1" /> Jira
              </p>
              <p className="text-gray-600 py-2 flex items-center">
                <RiRadioButtonFill className="pr-1" /> Github Actions
              </p>
            </div>
          </div>
        </div>
        {/* <Link href="/#projects">
          <button className="px-8 py-2 mt-4 mr-8">Back</button>
        </Link> */}
      </div>
    </div>
  );
}

export default codeNation;
