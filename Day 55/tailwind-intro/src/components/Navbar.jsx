function Navbar() {
  return (
    <div className="flex items-center justify-between bg-blue-600 p-4 text-white">
      <div>
        <div className="text-3xl font-semibold">Your Name</div>
      </div>
      <div className="flex items-center">
        <div className="px-2">Home</div>
        <div className="px-2">About</div>
        <div className="px-2">Project</div>
        <div className="px-2">Contact Me</div>
        <div className="px-4 bg-green-500 py-2 text-black hover:bg-yellow-400 cursor-pointer">
          Login
        </div>
      </div>
    </div>
  );
}

export default Navbar;
