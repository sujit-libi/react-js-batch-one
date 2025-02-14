'use client';

import Image from 'next/image';

const technologyStackLogo = [
  'aws.svg',
  'docker.svg',
  'github.svg',
  'js.svg',
  'mongodb.svg',
  'nextjs.svg',
  'nodejs.svg',
  'python.svg',
  'react-native.svg',
  'redux.svg',
  'tailwindcss.svg',
];

function TechStack() {
  return (
    <section className="bg-white text-center py-10">
      <h1 className="text-3xl font-bold ">Technologies I Use</h1>
      <div className="flex items-center justify-center pt-6  space-x-8">
        {technologyStackLogo.map((technology, index) => {
          return (
            <Image
              src={technology}
              width="48"
              height="48"
              // quality={1}
              alt={technology}
              key={index}
              // className="border p-4 rounded-lg hover:border-gray-500"
            />
          );
        })}
      </div>
    </section>
  );
}

export default TechStack;
