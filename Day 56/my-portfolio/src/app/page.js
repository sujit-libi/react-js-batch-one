import Navbar from './components/Navbar';
import TechStack from './components/TechStack';
import Education from './components/Education';
import Footer from './components/Footer';
import ProjectShowcase from './components/ProjectShowcase';

const projects = [
  {
    title: 'Portfolio Website',
    description:
      'A personal portfolio showcasing my projects, skills, and resume.',
    technologies: ['nextjs.svg', 'tailwindcss.svg', 'react-native.svg'],
    image: '/portfolio-screenshot.jpg', // Replace with actual image path
    link: 'https://my-portfolio.com',
  },
  {
    title: 'E-commerce Store',
    description:
      'A fully functional e-commerce store with payment integration.',
    technologies: ['react-native.svg', 'nodejs.svg', 'mongodb.svg'],
    image: '/ecommerce-screenshot.jpg', // Replace with actual image path
    link: 'https://my-store.com',
  },
];

export default function Home() {
  return (
    <div className="">
      <Navbar />
      <section className="text-center py-20 bg-gray-100">
        <h1 className="text-4xl font-bold">Welcome to My Portfolio</h1>
        <p className="mt-4 text-lg max-w-2xl mx-auto">
          I am a passionate software developer with experience in building
          modern web applications using React, Next.js, and more.
        </p>
      </section>
      <TechStack />
      <section className=" py-5 bg-gray-100">
        <div className="py-4">
          <h1 className="text-center text-3xl font-bold">Projects</h1>
          <div className="mt-6 space-y-8">
            {projects.map((project, index) => (
              <ProjectShowcase key={index} project={project} />
            ))}
          </div>
        </div>
      </section>
      <section className="text-center py-10 bg-white-100 bg-linear-to-r from-cyan-500 to-blue-500">
        <h1 className="text-3xl font-bold">Github Repo</h1>
        <p className="mt-4 text-lg max-w-2xl mx-auto">
          I am a passionate software developer with experience in building
          modern web applications using React, Next.js, and more.
        </p>
      </section>
      <section className="text-center py-4 bg-gray-100">
        <Education />
      </section>
      <Footer />
    </div>
  );
}
