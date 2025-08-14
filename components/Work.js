import ProjectItem from "./ProjectItem";

function Work() {
  return (
    <div id="work" className="w-full py-16">
      <div className="max-w-[1240px] mx-auto px-2 py-16">
        <h2 className="text-md tracking-widest text-[#086788] py-4">Work</h2>
        <div className=" grid md:grid-cols-2 gap-8">
          <ProjectItem
            title="Funnel Leasing"
            backgroundImg="/assets/projects/FunnelLeasing.png"
            projectUrl="/funnelleasing"
          />
          <ProjectItem
            title="Thinx"
            backgroundImg="/assets/projects/Thinx.png"
            projectUrl="/thinx"
          />
          <ProjectItem
            title="Code Nation"
            backgroundImg="/assets/projects/CodeNation.jpg"
            projectUrl="/codenation"
          />
        </div>
      </div>
    </div>
  );
}

export default Work;
