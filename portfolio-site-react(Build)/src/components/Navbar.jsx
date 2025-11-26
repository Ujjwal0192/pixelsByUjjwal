export default function Navbar() {
  const scrollToSection = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <nav className="w-full py-4 flex items-center justify-between">
      {/* Left: logo */}
      <div className="flex items-center">
        <img
          src="/images/userAsset/U.jpg"
          alt="logo"
          className="w-16 h-16 rounded-full object-cover"
        />
        <span className="-ml-6 text-[28px] font-light">
          jjwal Jha
        </span>
      </div>

      {/* Desktop nav */}
      <div className="hidden md:flex gap-8 pr-8 text-[20px] font-light">
        <button
          onClick={() => scrollToSection("projects")}
          className="hover:font-bold transition-all duration-300"
        >
          Projects
        </button>
        <button
          onClick={() => scrollToSection("skills")}
          className="hover:font-bold transition-all duration-300"
        >
          Skills
        </button>
        <button
          onClick={() => scrollToSection("contactme")}
          className="hover:font-bold transition-all duration-300"
        >
          Contact Me
        </button>
      </div>

      {/* Mobile menu */}
      <select
        className="md:hidden border border-gray-300 rounded-md text-sm px-2 py-1"
        defaultValue=""
        onChange={(e) => scrollToSection(e.target.value)}
      >
        <option value="" disabled>
          Menu
        </option>
        <option value="projects">Projects</option>
        <option value="skills">Skills</option>
        <option value="contactme">Contact Me</option>
      </select>
    </nav>
  );
}
