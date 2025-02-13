const ProjectShowcase = ({ project }) => {
  return (
    <div className="flex flex-col md:flex-row items-center bg-white border rounded-lg p-6 max-w-4xl mx-auto my-6">
      {/* Left Side - Project Screenshot */}
      <div className="w-full md:w-1/2">
        <img
          src={project.image}
          alt={project.title}
          className="rounded-lg w-full h-auto object-cover"
        />
      </div>

      {/* Right Side - Project Details */}
      <div className="w-full md:w-1/2 md:pl-6 mt-4 md:mt-0">
        <h2 className="text-2xl font-bold">{project.title}</h2>
        <p className="text-gray-700 mt-2">{project.description}</p>

        {/* Technologies Used */}
        <div className="mt-4 flex items-center">
          <h3 className="font-semibold mr-2">Technologies Used:</h3>
          <div className="flex items-center gap-2 mt-2">
            {project.technologies.map((tech, index) => (
              <img key={index} className=" h-6 w-6" src={tech} />
            ))}
          </div>
        </div>

        {/* Project Link */}
        <div className="mt-4">
          <a
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition"
          >
            View Project
          </a>
        </div>
      </div>
    </div>
  );
};

export default ProjectShowcase;
