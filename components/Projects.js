import ProjectItem from "./ProjectItem";

function Projects() {
  return (
    <div id="projects" className="w-full py-16">
      <div className="max-w-[1240px] mx-auto px-2 py-16">
        <h2 className="text-md tracking-widest text-[#086788] py-4">
          Personal Projects
        </h2>
        <div className=" grid md:grid-cols-2 gap-8">
          <ProjectItem
            title="sprouthub"
            backgroundImg="/assets/projects/SproutHub.png"
            stack="TypeScript | React | Vite | Node.js | Express | Supabase"
            projectUrl="/sprouthub"
          />
          <ProjectItem
            title="PaperEdge"
            backgroundImg="/assets/projects/paperedge.png"
            stack="TypeScript | React | Vite | Node.js | Express | Supabase"
            projectUrl="/paperedge"
          />
        </div>
      </div>
    </div>
  );
}

export default Projects;
