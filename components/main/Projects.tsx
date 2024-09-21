import React, { useEffect, useState } from "react";
import ProjectCard from "../sub/ProjectCard";

interface Project {
  _id: string;
  src: string;
  title: string;
  subtitle: string;
  description: string;
  projectLink: string;
  technologies : string;
}

const Projects = () => {
  const [projects, setProjects] = useState<Project[]>([]);

  useEffect(() => {
    // Fetching projects data from the API using fetch
    const fetchProjects = async () => {
      try {
        const response = await fetch(
          "https://portfolio-server-neon-rho.vercel.app/api/project/get-all-projects"
        );
        const data = await response.json(); // Parse the JSON data from response
        setProjects(data.data); // Set the projects data in state
        console.log(data)
      } catch (error) {
        console.error("Error fetching projects data:", error);
      }
    };

    fetchProjects();
  }, []);

  return (
    <div className="flex flex-col items-center justify-center py-20" id="projects">
      <h1 className="text-[40px] font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 py-20">
        My Projects
      </h1>

      <div className="h-full w-full flex flex-col md:flex-row gap-10 px-10">
        {projects.length > 0 ? (
          projects.map((project) => (
            <ProjectCard
              key={project._id} // Assuming each project has a unique `id`
              src={project.src} // Assuming `image` is a property in your API response
              title={project.title} // Assuming `title` is a property in your API response
              subtitle={` | ${project.subtitle}`} // Assuming `client` is a property
              description={project.description} // Assuming `description` is available
              projectLink={project.projectLink} // Assuming `link` is available for each project
              technologies={project.technologies} // Assuming `technologies` is an array
            />
          ))
        ) : (
          <p>Loading projects...</p>
        )}
      </div>
    </div>
    
  );
};

export default Projects;
