export default function Footer() {
  return (
    <footer className="bg-linear-to-br from-[#2d345a] to-[#1f2544] border-t border-white/10">
      <div className="max-w-[1200px] mx-auto px-4 py-10 relative overflow-hidden">

        {/* Watermark Name */}
        <div className="absolute inset-0 flex items-end justify-center pointer-events-none">
          <p className="text-[70px] md:text-[140px] font-bold text-white/5 select-none">
            Ujjwal Jha
          </p>
        </div>

        <div className="relative z-10 grid grid-cols-1 md:grid-cols-3 gap-8 items-start">

          {/* LEFT - Branding / Navigation */}
          <div>
            <h2 className="text-white text-xl font-bold mb-4">
              Ujjwal Jha
            </h2>

            <div className="flex gap-6 text-white/80 text-sm">
              <a href="#projects" className="hover:text-(--bgOrange) transition">
                Projects
              </a>
              <a href="#skills" className="hover:text-(--bgOrange) transition">
                Skills
              </a>
              <a href="#contactme" className="hover:text-(--bgOrange) transition">
                Contact
              </a>
            </div>
          </div>

          {/* CENTER - Social Icons */}
          <div className="flex md:justify-center">
            <div className="flex gap-5">
              <a
                href="https://www.linkedin.com/in/ujjwal-jha-1596492ba"
                target="_blank"
                rel="noreferrer"
                className="group"
              >
                <i className="fab fa-linkedin text-[28px] text-white/80 group-hover:text-(--bgOrange) transition-all" />
              </a>
              <a
                href="https://github.com/ujjwal0192"
                target="_blank"
                rel="noreferrer"
                className="group"
              >
                <i className="fab fa-github text-[28px] text-white/80 group-hover:text-(--bgOrange) transition-all" />
              </a>
              <a
                href="https://www.instagram.com/ujjwal_0192"
                target="_blank"
                rel="noreferrer"
                className="group"
              >
                <i className="fab fa-instagram text-[28px] text-white/80 group-hover:text-(--bgOrange) transition-all" />
              </a>
            </div>
          </div>

          {/* RIGHT - Contact Info */}
          <div className="text-white/80 text-sm md:text-right">
            <p className="font-semibold text-white mb-1">
              Contact & Support
            </p>
            <a
              href="mailto:ujjwalkumarjha@gmail.com"
              className="hover:text-(--bgOrange) transition"
            >
              ujjwalkumarjha@gmail.com
            </a>
          </div>

        </div>

        {/* Bottom Line */}
        <div className="mt-10 border-t border-white/10 pt-4 text-center text-xs text-white/60">
          © {new Date().getFullYear()} Ujjwal Jha — All rights reserved.
        </div>
      </div>
    </footer>
  );
}
