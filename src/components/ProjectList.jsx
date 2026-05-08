import ProjectCard from "./ProjectCard";

export default function ProjectList(
  {
    projects,
  }) {
    return (
      <div className="border-round p-4 space-y-4"> 
       {projects.length ===0 ? (
        <p>No projects found,</p>
       ): (
        projects.map((project)=> (
        <ProjectCard
          key={project.id}
          project={project}
          />
        ))
       )}
      </div>
    );
  }