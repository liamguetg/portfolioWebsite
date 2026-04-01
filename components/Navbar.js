export default function Navbar() {
  return (
    <nav className="flex justify-between items-center p-6 shadow-lg bg-gray-800/90 backdrop-blur-sm sticky top-0 z-50">
      <h1 className="text-2xl font-bold text-white">Liam Guetg</h1>
      <div className="space-x-6">
        <a href="#about" className="text-gray-300 hover:text-white transition-colors duration-200">
          About
        </a>
        <a href="#projects" className="text-gray-300 hover:text-white transition-colors duration-200">
          Projects
        </a>
        <a href="#contact" className="text-gray-300 hover:text-white transition-colors duration-200">
          Contact
        </a>
      </div>
    </nav>
  );
}
