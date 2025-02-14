import Image from 'next/image';

const projects = [
  {
    id: 1,
    name: 'Hamro IMDB',
    description: 'Search movie and rate based on your experience',
    technologies: ['React', 'JS', 'CSS'],
    image: '/project/hamroimdb.png',
    link: 'https://usepopcorn.netlify.com',
  },
  {
    id: 2,
    name: 'Hamro Travel List',
    description: 'Search movie and rate based on your experience',
    technologies: ['React', 'JS', 'CSS'],
    image: '/project/hamrotravellist.png',
    link: 'https://travel-list-dun.vercel.app/',
  },
];

function Projects() {
  return (
    <div className="bg-gray-200 py-6">
      <h1 className="text-3xl text-center font-bold">Projects</h1>
      <div className="flex items-center justify-center space-x-4 pt-4">
        {projects.map((project) => {
          return (
            <div key={project.id} className="flex border-rose-800 border-2">
              <Image
                src={project.image}
                alt={project.name}
                width={400}
                height={400}
              />
              <div>
                <div className="text-xl font-semibold">{project.name}</div>
                <div>{project.description}</div>
                <a href={project.link}>View</a>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Projects;
