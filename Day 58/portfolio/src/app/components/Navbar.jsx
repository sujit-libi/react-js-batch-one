'use client';

import Link from 'next/link';
import { useState } from 'react';

function Navbar() {
  const [isDarkModeOn, setIsDarkModeOn] = useState(false);

  function toggleBtn() {
    document.documentElement.classList.toggle('dark');
    setIsDarkModeOn((prevState) => !prevState);
  }

  return (
    <div className="mx-auto flex  items-center justify-between bg-blue-500 dark:bg-gray-600  p-4 text-white">
      <div>
        <div className="text-2xl font-bold">Sujit Kumar Libi</div>
      </div>
      <ul className=" flex items-center space-x-6 ">
        <div
          onClick={toggleBtn}
          className="bg-green-300 text-black p-2 rounded-md"
        >
          {isDarkModeOn ? 'Light' : 'Dark'}
        </div>
        <li>
          <Link href="/">Home</Link>
        </li>
        <li>
          <Link href="/github">Github</Link>
        </li>
        <li>
          <Link href="/blog">Blog</Link>
        </li>
        <li>
          <Link href="/projects">Projects</Link>
        </li>
      </ul>
    </div>
  );
}

export default Navbar;
