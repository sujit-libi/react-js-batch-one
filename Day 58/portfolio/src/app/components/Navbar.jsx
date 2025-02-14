import Link from 'next/link';

function Navbar() {
  return (
    <div className="mx-auto flex items-center justify-between bg-gray-600 p-4 text-white">
      <div>
        <div className="text-2xl font-bold">Sujit Kumar Libi</div>
      </div>
      <ul className="flex items-center space-x-6">
        <li>
          <Link href="/">Home</Link>
        </li>
        <li>
          <Link href="/github">Github</Link>
        </li>
        <li>
          <Link href="/projects">Projects</Link>
        </li>
      </ul>
    </div>
  );
}

export default Navbar;
