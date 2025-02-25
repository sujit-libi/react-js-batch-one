import Link from 'next/link';

function layout({ children }) {
  return (
    <div className="flex flex-row ">
      <div className="bg-blue-400">
        <ul className=" flex items-center flex-col space-x-6 ">
          <li>
            <Link href="">Dashboard</Link>
          </li>
          <li>
            <Link href="/dashboard/projects">Projects</Link>
          </li>
          <li>
            <Link href="/dashboard/techstack">Tech Stack</Link>
          </li>
        </ul>
      </div>
      <div>{children}</div>
    </div>
  );
}

export default layout;
