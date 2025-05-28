import letmebook from "../public/assets/projects/LetMeBook.png";
import sprouthub from "../public/assets/projects/SproutHub.png";
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
            title="SproutHub"
            backgroundImg={sprouthub}
            stack="TypeScript | React | Vite | Node.js | Express | Supabase"
            projectUrl="/sprouthub"
          />
          <ProjectItem
            title="LetMeBook"
            backgroundImg={letmebook}
            stack="TypeScript | MongoDB | Express | React | Node.js"
            projectUrl="/letmebook"
          />
        </div>
      </div>
    </div>
  );
}

export default Projects;
