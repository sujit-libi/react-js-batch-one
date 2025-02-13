const TechStack = () => {
  const technologiesLogo = [
    'js.svg',
    'react-native.svg',
    'nextjs.svg',
    'nodejs.svg',
    'mongodb.svg',
    'tailwindcss.svg',
    'python.svg',
    'docker.svg',
  ];

  return (
    <section className="py-10 bg-white">
      <h2 className="text-center text-3xl font-bold mb-6">
        Technologies I Use
      </h2>
      <div className="flex justify-center gap-4 flex-wrap">
        {technologiesLogo.map((tech, index) => (
          <span key={index} className="  px-4 py-2 rounded-lg border">
            <img src={tech} />
          </span>
        ))}
      </div>
    </section>
  );
};

export default TechStack;
