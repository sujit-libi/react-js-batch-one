const ProjectCard = ({ project }) => {
  return (
    <div className="bg-white border rounded-lg p-4 w-80 hover:border-blue-400">
      <img src={project.img} alt={project.name} className="rounded-lg mb-4" />
      <h3 className="text-xl font-bold">{project.name}</h3>
      <a href={project.link} className="text-blue-500 underline">
        View Project
      </a>
    </div>
  );
};

export default ProjectCard;
