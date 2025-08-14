import experienceList from "../data/experienceList";
import Link from "next/link";
import { HiOutlineChevronDoubleUp } from "react-icons/hi";

function Experience() {
  const experience = experienceList.map((job) => {
    return (
      <div>
        <h4 className="font-bold text-xl sm:text-3xl mb-1">{job.title}</h4>
        <Link href={job.companySite} target="_blank" rel="noopener noreferrer">
          <h4 className="font-light text-xl mb-1 sm:text-3xl hover:text-[#086788]">
            {job.company}
          </h4>
        </Link>
        <h5 className="font-medium text-light sm:text-2xl mb-1">
          {job.duration}
        </h5>
        <ul className="space-y-2 pb-2">
          {job.details.split(".").map((bullet) => (
            <li className="text-gray-600">{bullet}</li>
          ))}
        </ul>
      </div>
    );
  });

  return (
    <div id="experience" className="w-full py-16">
      <div className="max-w-[1240px] mx-auto px-2 py-16">
        <h2 className="text-md text-[#086788] tracking-wider py-4">
          Experience
        </h2>
        {experience}
        <div className="flex justify-center py-12">
          <Link href="/assets/resume.pdf" target="_blank">
            <button className="px-8 py-2]">Download resume</button>
          </Link>
        </div>
        <div className="flex justify-center py-12">
          <Link href="/">
            <div className="rounded-full shadow-lg shadow-gray-400 p-4 cursor-pointer hover:scale-110 ease-in duration-300">
              <HiOutlineChevronDoubleUp className="text-[#086788]" size={30} />
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Experience;
