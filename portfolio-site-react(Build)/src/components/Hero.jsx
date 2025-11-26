import { useEffect, useRef } from "react";
import Typed from "typed.js";

export default function Hero() {
  const roleRef = useRef(null);

  useEffect(() => {
    const typed = new Typed(roleRef.current, {
      strings: ["Full Stack Web Developer", "Softwre Developer", "Coder"],
      loop: true,
      typeSpeed: 100,
      backSpeed: 80,
      backDelay: 1000,
    });

    return () => typed.destroy();
  }, []);

  const scrollToContact = () => {
    document
      .getElementById("contactme")
      ?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative flex flex-col md:flex-row items-center justify-between gap-10 md:gap-20 my-16 pb-20">
      {/* Faded big text */}
      <div className="pointer-events-none select-none absolute text-[3.5rem] md:text-[7rem] font-bold text-[#dacfcf] bottom-[-50px] -left-2.5 leading-none">
        Ujjwal Jha
      </div>

      {/* LEFT SIDE */}
      <div className="flex-1 flex flex-col gap-6">
        <div className="text-[26px] md:text-[35px] text-[#343d68] font-light">
          Hi this is Ujjwal Jha
        </div>

        <div className="text-[30px] md:text-[45px] leading-[1.2] font-light">
          I am a{" "}
          <span ref={roleRef} className="text-[#343d68] font-light ml-1" />
        </div>

        <p className="mt-3 w-full md:w-[70%] font-light text-[15px] text-gray-800">
          I’m a passionate software developer, and this is my portfolio where I
          showcase my projects, technical skills, and professional journey.
          Explore how I turn ideas into scalable and impactful digital
          experiences.
        </p>

        {/* <button
          onClick={scrollToContact}
          className="relative inline-block bg-(--bgOrange) text-white px-8 py-3 mt-2 text-[18px] font-medium shadow-[5px_5px_7px_rgba(0,0,0,0.25)] border-2 border-transparent overflow-hidden group w-fit"
        >
          <span className="relative z-10 group-hover:text-black transition-colors duration-500">
            Hire me
          </span>
          <span className="absolute inset-0 bg-white scale-x-0 origin-left group-hover:scale-x-100 transition-transform duration-700" />
        </button> */}

        <button
          onClick={scrollToContact}
          className="relative inline-block bg-(--bgOrange) text-white px-8 py-3 mt-2 text-[18px] font-medium 
             overflow-hidden group w-fit transition-all duration-300
             hover:scale-105 hover:shadow-[0_8px_20px_rgba(0,0,0,0.25)] rounded-2xl"
        >
          <span className="relative z-10 transition-colors duration-300 group-hover:text-black">
            Hire me
          </span>

          <span
            className="absolute inset-0 bg-linear-to-r 
               from-transparent via-white/40 to-transparent
               -translate-x-full group-hover:translate-x-full
               transition-transform duration-700 ease-in-out"
          />
        </button>
      </div>

      {/* RIGHT SIDE */}
      <div className="flex-1 flex justify-center md:justify-end">
        {/* This wrapper controls image + icons positioning */}
        <div className="relative w-[260px] h-[260px] md:w-[320px] md:h-80">
          {/* Icons BEHIND the image */}
          <img
            src="/images/userAsset/dots.png"
            alt=""
            className="icon-dots absolute w-10 md:w-12 -bottom-2.5 right-0 opacity-80 z-20 pointer-events-none"
          />
          <img
            src="/images/userAsset/cube.png"
            alt=""
            className="icon-cube absolute w-10 md:w-12 -top-2.5 right-[18px] opacity-80 z-20 pointer-events-none"
          />
          <img
            src="/images/userAsset/circle.png"
            alt=""
            className="icon-circle absolute w-10 md:w-12 -left-2.5 bottom-[18px] opacity-80 z-20 pointer-events-none"
          />
          <img
            src="/images/userAsset/zigzags.png"
            alt=""
            className="icon-zigzag absolute w-10 md:w-12 top-3 -left-2 opacity-80 z-20 pointer-events-none"
          />
          <img
            src="/images/userAsset/plus.png"
            alt=""
            className="icon-plus absolute w-8 md:w-10 -top-2 left-1/2 -translate-x-1/2 opacity-80 z-20 pointer-events-none"
          />

          {/* Main image ABOVE icons */}
          <div className="absolute inset-0 flex ite  ms-center justify-center user-image-animated z-10">
            <img
              src="\images\userAsset\UserImage1.jpg"
              alt="Ujjwal"
              className="w-[220px] h-[250px] md:w-[260px] md:h-[300px]  mt-1 object-cover rounded-2xl "
            />
          </div>
        </div>
      </div>
    </section>
  );
}
