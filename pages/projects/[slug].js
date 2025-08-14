import React from "react";
import Image from "next/image";
import { RiRadioButtonFill } from "react-icons/ri";
import { getProjectBySlug, getProjectSlugs } from "../../data/projects";

export async function getStaticPaths() {
  const slugs = getProjectSlugs();
  return {
    paths: slugs.map((slug) => ({ params: { slug } })),
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const project = getProjectBySlug(params.slug);
  return { props: { project } };
}

export default function ProjectPage({ project }) {
  if (!project) return null;

  return (
    <div className="w-full">
      <div className="w-screen h-[50vh] relative">
        <div className="absolute top-0 left-0 w-full h-[50vh] bg-black/70 z-10" />
        <Image
          className="absolute z-1"
          fill
          objectFit="cover"
          src={project.hero}
          alt={project.title}
        />
        <div className="absolute top-[70%] max-w-[1240px] w-full left-[50%] right-[50%] translate-x-[-50%] translate-y-[-50%] text-white z-10 p-2">
          <h2 className="py-2">{project.title}</h2>
          <h3>{project.tech.join(" | ")}</h3>
        </div>
      </div>

      <div className="max-w-[1240px] mx-auto p-2 grid md:grid-cols-5 gap-8 py-8">
        <div className="col-span-4">
          <h2 className="mt-2">Overview</h2>
          <p className="mt-4">{project.overview}</p>
          {project.details ? (
            <>
              <br />
              <p>{project.details}</p>
            </>
          ) : null}

          {project.links?.live ? (
            <a href={project.links.live} target="_blank" rel="noreferrer">
              <button className="px-8 py-2 mt-4 mr-8">Live Site</button>
            </a>
          ) : null}
          {project.links?.repo ? (
            <a href={project.links.repo} target="_blank" rel="noreferrer">
              <button className="px-8 py-2 mt-4 mr-8">Code</button>
            </a>
          ) : null}
        </div>

        <div className="col-span-4 md:col-span-1 shadow-xl shadow-gray-400 rounded-xl py-4">
          <div className="p-2">
            <p className="text-center font-bold pb-2">Technologies</p>
            <div className="grid grid-cols-3 md:grid-cols-1 ">
              {project.tech.map((tech) => (
                <p key={tech} className="text-gray-600 py-2 flex items-center">
                  <RiRadioButtonFill className="pr-1" /> {tech}
                </p>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}


