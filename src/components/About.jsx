import React, { useState } from "react";
import img from "../assets/img/Profile.png";

function About() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <div className="w-full h-full flex justify-center items-center px-4 py-15 md:px-16">
        <div className="w-full grid grid-cols-1 md:grid-cols-2 items-center gap-10">

          {/* LEFT – IMAGE */}
          <div className="flex justify-center items-center">
            <div
              className="
                relative
                w-[260px] h-[260px]
                sm:w-[300px] sm:h-[300px]
                md:w-[420px] md:h-[420px]
                group
              "
            >
              {/* GLOW */}
              <div
                className="
                  absolute inset-0 
                  bg-cyan-400 
                  blur-[60px] 
                  opacity-70 
                  transition-all duration-500
                  group-hover:opacity-100
                  group-hover:blur-[80px]
                  rounded-full
                "
              ></div>

              {/* IMAGE */}
              <img
                src={img}
                alt="profile"
                className="
                  relative w-full h-full 
                  object-cover 
                  rounded-full 
                  border-4 border-cyan-400
                  transition-all duration-500
                  group-hover:scale-105
                  group-hover:-translate-y-2
                "
              />
            </div>
          </div>

          {/* RIGHT – CONTENT */}
          <div className="flex flex-col gap-5 text-white text-center md:text-left items-center md:items-start">
            <h2 className="text-3xl md:text-4xl font-bold">
              About <span className="text-cyan-400"> Me</span>
            </h2>

            <p className="text-gray-400 leading-relaxed max-w-xl">
              I am a passionate developer who enjoys building modern,
              user-friendly web applications and continuously improving my
              skills.
            </p>

            {/* BUTTON */}
            <button
              onClick={() => setOpen(true)}
              className="
                w-fit px-6 py-3 
                bg-cyan-400 text-black 
                font-semibold rounded-full 
                hover:bg-cyan-300 
                transition
              "
            >
              Read More
            </button>
          </div>
        </div>
      </div>

      {/* MODAL */}
      {open && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 px-4">

          <div
            className="
              bg-[#20232C]
              w-full max-w-[600px]
              rounded-2xl
              p-6
              shadow-[0_25px_70px_rgba(0,0,0,0.9)]
            "
          >
            {/* TITLE */}
            <h2 className="text-3xl md:text-4xl text-amber-50 font-bold text-center">
              About <span className="text-cyan-400">Me</span>
            </h2>

            {/* IMAGE */}
            <img
              src={img}
              alt="profile"
              className="
                w-[140px] h-[140px]
                md:w-[180px] md:h-[180px]
                mx-auto mt-4
                object-cover
                rounded-full
                border-4 border-cyan-400
              "
            />

            {/* DESCRIPTION */}
            <p className="text-gray-300 text-center mt-6 leading-relaxed">
              My name is <span className="text-cyan-400 font-semibold">MENG RITHICHEY</span>.
              I am <span className="text-cyan-400 font-semibold">20 years old</span> and
              currently studying in <span className="text-cyan-400 font-semibold">Year 2</span> at
              <span className="text-cyan-400 font-semibold"> Norton University</span>.
              <br /><br />
              I am interested in web development and software engineering,
              and I enjoy learning new technologies to improve my skills and
              build better applications.
            </p>

            <h1 className="mt-4 text-gray-300 font-semibold">
              Personal Skills & Work Attitude
            </h1>

            <ul className="list-disc list-inside text-gray-300 mt-2 text-left">
              <li>Good teamwork</li>
              <li>Hard-working</li>
              <li>Fast learner</li>
              <li>Quick understanding</li>
              <li>Responsible</li>
            </ul>

            {/* CLOSE BUTTON */}
            <div className="flex justify-center mt-6">
              <button
                onClick={() => setOpen(false)}
                className="
                  px-6 py-2 
                  bg-cyan-400 text-black 
                  font-semibold rounded-full 
                  hover:bg-cyan-300 
                  transition
                "
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default About;
