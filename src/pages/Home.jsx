import { useEffect, useState } from "react";
import AddProjectForm from "../components/AddProjectForm";
import SearchBar from "../components/SearchBar";
import ProjectList from "../components/ProjectList";
import projectsData from "../hooks/useProjects";

export default function Home() {
  const [projects, setProjects] = useState(() => {
    return (
      JSON.parse(localStorage.getItem("projects")) ||
      projectsData
    );
  });

  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    localStorage.setItem(
      "projects",
      JSON.stringify(projects)
    );
  }, [projects]);

  const addProject = (newProject) => {
    setProjects([newProject, ...projects]);
  };

  const filteredProjects = projects.filter((project) =>
    project.title
      .toLowerCase()
      .includes(searchTerm.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-gray-100 py-10 px-4">
      <div className="max-w-3xl mx-auto bg-pink-100 border shadow-sm">
        
        {/* Header */}
        <div className="border-b p-6 text-center">
          <h1 className="text-3xl font-bold">
            Personal Project Showcase App
          </h1>
        </div>

        {/* Content */}
        <div className="p-6 space-y-6">
          <AddProjectForm addProject={addProject} />

          <SearchBar
            searchTerm={searchTerm}
            setSearchTerm={setSearchTerm}
          />

          <ProjectList projects={filteredProjects} />
        </div>
      </div>
    </div>
  );
}