import thinx from "../public/assets/projects/Thinx.png";
import codenation from "../public/assets/projects/CodeNation.jpg";
import ProjectItem from "./ProjectItem";

function Work() {
  return (
    <div id="work" className="w-full py-16">
      <div className="max-w-[1240px] mx-auto px-2 py-16">
        <h2 className="text-md tracking-widest text-[#086788] py-4">Work</h2>
        <div className=" grid md:grid-cols-2 gap-8">
          <ProjectItem
            title="Thinx"
            backgroundImg={thinx}
            projectUrl="/thinx"
          />
          <ProjectItem
            title="Code Nation"
            backgroundImg={codenation}
            projectUrl="/codenation"
          />
        </div>
      </div>
    </div>
  );
}

export default Work;
