'use client';

import { useEffect, useState } from 'react';
import GitHubRepos from '../components/GithubRepos';
import Navbar from '../components/Navbar';

export default function GitHub() {
  const [repos, setRepos] = useState([]);

  useEffect(() => {
    fetch('https://api.github.com/users/sujit-libi/repos')
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        return setRepos(data);
      });
  }, []);

  return (
    <div>
      <Navbar />
      <h1 className="text-center text-3xl font-bold my-6 text-primary-500">
        My GitHub Repositories
      </h1>
      <GitHubRepos repos={repos} />
    </div>
  );
}
