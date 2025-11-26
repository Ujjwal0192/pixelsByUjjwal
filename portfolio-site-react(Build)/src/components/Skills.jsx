const skills = [
  { name: "HTML", icon: "HTML.png" },
  { name: "CSS", icon: "CSS.png" },
  { name: "JavaScript", icon: "Javascript.svg" },
  { name: "React", icon: "React.png" },
  { name: "Node.js", icon: "NodeJs.svg" },
  { name: "Tailwind CSS", icon: "Tailwind.png" },
  { name: "Express", icon: "Express.png" },
  { name: "Git", icon: "Git.svg" },
  { name: "GitHub", icon: "Github.svg" },
  { name: "MongoDB", icon: "MongoDB.svg" },
  { name: "MySQL", icon: "mysql-original-wordmark.svg" },
  { name: "Bash", icon: "Bash.svg" },
  { name: "Netlify", icon: "netlify-original-wordmark.svg" },
  { name: "Render", icon: "render.svg" },
  { name: "Java", icon: "java-original-wordmark.svg" },
];

export default function Skills() {
  return (
    <section
      id="skills"
      className="relative max-w-[1200px] mx-auto px-4 py-16 md:py-24 flex flex-col md:flex-row gap-10 md:gap-[30px]"
    >
      {/* faded text */}
      <div className="pointer-events-none select-none absolute text-[6rem] md:text-[10rem] font-bold text-[#dacfcf] -bottom-20 left-4">
        Skills
      </div>

      {/* left text */}
      <div className="flex-1 flex flex-col">
        <h2 className="text-[32px] md:text-[50px] font-bold leading-tight text-(--bgOrange)">
          <span className="text-[64px] md:text-[90px]">M</span>e and
          <br />
          My Tech Stack
        </h2>

        <div className="mt-4 md:mt-6 text-sm md:text-base text-justify text-gray-800 space-y-4">
          <p>
            Hi, I'm Ujjwal Jha — a passionate Computer Science student and
            aspiring full-stack developer who genuinely enjoys turning ideas
            into functional and visually appealing web experiences.
          </p>
          <p>
            I love building responsive applications that not only look good but
            also solve real problems. From crafting UIs with React and Tailwind
            to working with Node.js and databases, I’m always exploring how
            different technologies come together to create smooth digital
            products. Alongside web development, I’m strengthening my core
            concepts with Java and DSA to improve my problem-solving and coding
            skills every day.
          </p>
        </div>
      </div>

      {/* right skills grid */}
      <div className="flex-1 relative">
        <img
          src="/images/userAsset/blob vector.png"
          alt=""
          className="absolute w-[220px] md:w-[280px] opacity-70 -z-10 left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2"
        />

        <div className="grid grid-cols-2 sm:grid-cols-3 gap-6">
          {skills.map((skill) => (
            <div
              key={skill.name}
              className="flex flex-col items-center justify-center p-4 bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-300 hover:scale-105"
            >
              <img
                src={`/images/stack/${skill.icon}`}
                alt={skill.name}
                className="w-14 h-14 md:w-16 md:h-16 object-contain"
              />
              <p className="mt-3 text-sm md:text-base font-medium text-gray-700">
                {skill.name}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
