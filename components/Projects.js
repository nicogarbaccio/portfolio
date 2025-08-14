import ProjectItem from "./ProjectItem";
import { projects } from "../data/projects";

function Projects() {
  return (
    <div id="projects" className="w-full py-16">
      <div className="max-w-[1240px] mx-auto px-2 py-16">
        <h2 className="text-md tracking-widest text-[#086788] py-4">
          Personal Projects
        </h2>
        <div className=" grid md:grid-cols-2 gap-8">
          {projects.map((p) => (
            <ProjectItem
              key={p.slug}
              title={p.title}
              backgroundImg={p.hero}
              stack={p.tech.join(" | ")}
              projectUrl={`/projects/${p.slug}`}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Projects;
