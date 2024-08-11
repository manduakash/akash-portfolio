import React from "react";
import ProjectCard from "../sub/ProjectCard";

const Projects = () => {
  return (
    <div
      className="flex flex-col items-center justify-center py-20"
      id="projects"
    >
      <h1 className="text-[40px] font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 py-20">
        My Projects
      </h1>
      <div className="h-full w-full flex flex-col md:flex-row gap-10 px-10">
        <ProjectCard
          src="/YatriSuvidha.png"
          title="Yatri Subidha"
          subtitle=" | Land Ports Authority of India"
          description="Yatri Subidha portal will help international Passengers (Arrival and Departure), where the Passenger can apply for available Slots for smooth and faster clearance at the Passenger Terminal, ICP Petrapole (West Bengal)."
          projectLink="https://yatrisuvidha.wb.gov.in/"
          technologies="php, codeigniter, bootstrap, jquery, MySql"
       />
        <ProjectCard
          src="/CardImage.png"
          title="Interactive Website Cards"
          subtitle=""
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
          projectLink="https://yatrisuvidha.wb.gov.in/"
          technologies="php, codeigniter, bootstrap, jquery, MySql"
       />
        {/* <ProjectCard
          src="/SpaceWebsite.png"
          title="Space Themed Website"
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
        /> */}
      </div>
    </div>
  );
};

export default Projects;
