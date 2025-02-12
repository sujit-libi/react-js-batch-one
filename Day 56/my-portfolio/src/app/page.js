'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';

export default function Home() {
  const [repos, setRepos] = useState([]);

  useEffect(() => {
    fetch('https://api.github.com/users/sujit-libi/repos')
      .then((response) => response.json())
      .then((data) => setRepos(data));
  }, []);
  return (
    <div className="container mx-auto p-6">
      <header className="text-center">
        <h1 className="text-4xl font-bold">Sujit Kumar Libi</h1>
        <p className="text-lg text-gray-600">
          Software Engineer | Web Developer
        </p>
      </header>

      <section className="my-10">
        <h2 className="text-2xl font-semibold">About Me</h2>
        <p>
          I am a software engineer with experience in Next.js, React, and
          backend development.
        </p>
      </section>

      <section className="my-10">
        <h2 className="text-2xl font-semibold">Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="p-4 border rounded shadow">Project 1</div>
          <div className="p-4 border rounded shadow">Project 2</div>
        </div>
      </section>

      <section className="my-10">
        <h2 className="text-2xl font-semibold">GitHub Repositories</h2>
        <ul>
          {repos.map((repo) => (
            <li key={repo.id} className="my-2">
              <a
                href={repo.html_url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-500"
              >
                {repo.name}
              </a>
            </li>
          ))}
        </ul>
      </section>

      <section className="my-10">
        <h2 className="text-2xl font-semibold">Education</h2>
        <p>MBA in Finance | Software Engineering Background</p>
      </section>
    </div>
  );
}
