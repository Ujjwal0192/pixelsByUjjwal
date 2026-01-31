// add or reemove project as much i can

const projects = [
  {
    id: 1,
    number: "01",
    title: "NexTask",
    description:"A full-stack Task Management web application built with the MERN stack featuring user authentication, task assignment, progress tracking, role-based access, and a responsive dashboard for efficient workflow management.",
      bg: "/images/projects/project1.png",
    skills: [
      "HTML.png",
      "CSS.png",
      "Javascript.svg",
      "React.png",
      "Express.png",
      "Tailwind.png",
      "NodeJs.svg",
      "MongoDB.svg",
      "render.svg",
    ],
    align: "left",
    github: "https://github.com/Ujjwal0192/NexTask",
    live: "https://nextask-frontend.onrender.com/",
  },
  {
    id: 2,
    number: "02",
    title: "SkyCast Pro",
    description: "A modern weather dashboard built with React + Vite and Tailwind CSS, powered by the OpenWeather API. Features real-time city-based weather data, clean UI, responsive design, and professional layout with detailed weather highlights.",
    bg: "/images/projects/project2.png",
    skills: [
      "HTML.png",
      "CSS.png",
      "Javascript.svg",
      "React.png",
      "Tailwind.png",
      "netlify-original-wordmark.svg",
    ],
    align: "right",
    github: "https://github.com/Ujjwal0192/SkyCast-Pro",
    live: "https://skycast-pro.netlify.app/",
  },
];

export default function Projects() {
  return (
    <section id="projects" className="bg-[#e7e7e7] mt-10">
      <h2 className="text-center text-[40px] md:text-[90px] text-(--bgOrange) font-bold pt-8">
        Projects
      </h2>

      <div className="max-w-[1200px] mx-auto py-10 flex flex-col gap-16 md:gap-[120px] px-4">
        {projects.map((project) => (
          <div
            key={project.id}
            className={`relative w-full h-80 md:h-[550px] rounded-xl overflow-hidden shadow-[0_0_40px_rgba(31,31,31,0.9)] ${
              project.align === "right" ? "md:ml-[120px]" : ""
            }`}
            style={{
              backgroundImage: `url(${project.bg})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          >
            {/* dark overlay */}
            <div className="absolute inset-0 bg-black/60" />
            {/* gradient hover overlay */}
            <div className="absolute inset-0 bg-linear-to-tr from-[#343d68] via-[#343d68be] to-[#343d687c] scale-x-0 origin-left hover:scale-x-100 transition-transform duration-500" />

            {/* number */}
            <div
              className={`absolute text-[120px] md:text-[200px] font-semibold text-white opacity-0 md:group-hover:opacity-100 transition-opacity duration-500 ${
                project.align === "right"
                  ? "-right-5 md:-right-10 top-[-30px] md:top-[-45px]"
                  : "-left-5 md:-left-10 top-[-30px] md:top-[-45px]"
              }`}
            >
              {project.number}
            </div>

            {/* content */}
            <div
              className={`absolute z-10 text-white flex flex-col gap-3 md:gap-4 p-4 md:p-8 bottom-10 md:bottom-[20%] max-w-[80%] ${
                project.align === "right"
                  ? "right-4 md:right-[10%]"
                  : "left-4 md:left-[10%]"
              }`}
            >
              <div className="flex flex-wrap gap-2 mb-2">
                {project.skills.map((s) => (
                  <img
                    key={s}
                    src={`/images/stack/${s}`}
                    alt={s}
                    className="w-7 h-7 md:w-10 md:h-10"
                  />
                ))}
              </div>

              <h3 className="text-[24px] md:text-[32px] font-bold leading-tight">
                {project.title}
              </h3>

              <p className="text-sm md:text-base italic max-w-[90%]">
                {project.description}
              </p>

              <div className="flex items-center gap-3 mt-2">
                

                <a href={project.github} target="_blank" rel="noreferrer">
                  <i className="fa-brands fa-github text-[28px] md:text-[35px] cursor-pointer hover:text-(--bgOrange) transition-colors" />
                </a>
                <a href={project.live} target="_blank" rel="noreferrer">
                  <i className="fa-solid fa-link text-[24px] md:text-[30px] cursor-pointer hover:text-(--bgOrange) transition-colors" />
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

