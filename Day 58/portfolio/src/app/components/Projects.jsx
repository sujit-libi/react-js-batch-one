import Image from 'next/image';

const projects = [
  {
    id: 1,
    name: 'Hamro IMDB',
    description: 'Search movie and rate based on your experience',
    technologies: ['react-native.svg', 'js.svg'],
    image: '/project/hamroimdb.png',
    link: 'https://usepopcorn.netlify.com',
  },
  {
    id: 2,
    name: 'Hamro Travel List',
    description: 'Search movie and rate based on your experience',
    technologies: ['react-native.svg', 'js.svg'],
    image: '/project/hamrotravellist.png',
    link: 'https://travel-list-dun.vercel.app/',
  },
];

function Projects() {
  return (
    <div className="bg-gray-200 p-10">
      <h1 className="text-3xl text-center font-bold">Projects</h1>
      <div className="flex items-center justify-center space-x-4 pt-4">
        {projects.map((project) => {
          return (
            <div
              key={project.id}
              className="flex bg-white shadow-sm rounded-lg border overflow-hidden hover:border-green-500"
            >
              <Image
                src={project.image}
                alt={project.name}
                width={400}
                height={400}
                className="overflow"
              />
              <div className="flex flex-col p-4">
                <div className="flex-1">
                  <div className="text-xl font-semibold">{project.name}</div>
                  <div className="text-sm text-gray-700">
                    {project.description}
                  </div>
                  <div className="text-sm text-gray-700 flex space-x-1">
                    <span>Technology used:</span>
                    <div className="flex space-x-2">
                      {project.technologies.map((tech, index) => {
                        return (
                          <Image
                            key={index}
                            alt={tech}
                            src={tech}
                            width={24}
                            height={24}
                          />
                        );
                      })}
                    </div>
                  </div>
                </div>
                <div className="items-end justify-end">
                  <a
                    href={project.link}
                    className="bg-gray-700 text-white font-medium px-4 py-2 rounded-sm hover:bg-green-500"
                  >
                    View
                  </a>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Projects;
