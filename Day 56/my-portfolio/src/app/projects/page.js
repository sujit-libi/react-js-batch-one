import ProjectCard from '../components/ProjectCard';
import Navbar from '../components/Navbar';

const projects = [
  { name: 'Project 1', img: '/project1.jpg', link: '#' },
  { name: 'Project 2', img: '/project2.jpg', link: '#' },
];

export default function Projects() {
  return (
    <div>
      <Navbar />
      <h1 className="text-center text-3xl font-bold my-6">My Projects</h1>
      <div className="flex flex-wrap justify-center gap-6">
        {projects.map((project, index) => (
          <ProjectCard key={index} project={project} />
        ))}
      </div>
    </div>
  );
}
