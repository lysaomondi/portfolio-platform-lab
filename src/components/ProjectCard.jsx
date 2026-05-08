import "../styles/card.css";

export default function ProjectCard({ project }) {
  return (
    <div className="flex gap-4 border-b pb-4">
      <div className="w-16 h-16 border flex items-center justify-center">
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-full object-cover"
        />
      </div>
      <div>
        <h3 className="text-2xl font-semibold">{project.title}</h3>
        <p className="text-gray-900">{project.description}</p>
      </div>
    </div>
  );
}
