import { useState } from "react";
import {
  FaBookOpen,
  FaCode,
  FaGraduationCap,
  FaMapMarkerAlt,
  FaRocket,
  FaTimes,
  FaUsers,
} from "react-icons/fa";
import img from "../assets/img/Profile.png";

const highlights = [
  {
    icon: <FaGraduationCap />,
    title: "Education",
    text: "Year 2 student at Norton University.",
  },
  {
    icon: <FaCode />,
    title: "Development",
    text: "React, JavaScript, Laravel, databases, and responsive UI.",
  },
  {
    icon: <FaMapMarkerAlt />,
    title: "Location",
    text: "Based in Phnom Penh, Cambodia.",
  },
];

const traits = [
  "Good teamwork",
  "Hard-working",
  "Fast learner",
  "Quick understanding",
  "Responsible",
];

const timeline = [
  {
    icon: <FaBookOpen />,
    title: "Student Developer",
    text: "Studying software skills while building personal projects for practice.",
  },
  {
    icon: <FaRocket />,
    title: "Project Builder",
    text: "Creates web apps, management systems, and deployed portfolio projects.",
  },
  {
    icon: <FaUsers />,
    title: "Team Mindset",
    text: "Enjoys learning with other developers and improving through feedback.",
  },
];

function About() {
  const [open, setOpen] = useState(false);

  return (
    <section className="py-6 lg:py-10">
      <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-[0.9fr_1.1fr]">
        <div className="mx-auto w-full max-w-[420px]">
          <div className="mb-4 h-2 rounded-lg bg-gradient-to-r from-amber-300 via-cyan-300 to-emerald-300" />
          <div className="overflow-hidden rounded-lg border border-white/10 bg-white/[0.05] p-3 shadow-[0_28px_80px_rgba(0,0,0,0.35)]">
            <img
              src={img}
              alt="Meng Rithy Chey"
              className="aspect-[4/5] w-full rounded-md object-cover"
            />
          </div>
        </div>

        <div className="flex flex-col gap-7">
          <div>
            <p className="text-sm font-bold uppercase text-amber-200">
              About Me
            </p>
            <h1 className="mt-3 text-3xl font-black leading-tight text-white sm:text-4xl lg:text-5xl">
              A student developer turning steady practice into real products.
            </h1>
            <p className="mt-5 max-w-3xl text-base leading-8 text-slate-300">
              I create responsive and user-friendly websites with HTML, CSS,
              JavaScript, React, and Laravel. I enjoy learning new technologies,
              improving my process, and building projects that feel cleaner each
              time I ship.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
            {highlights.map((item) => (
              <div
                key={item.title}
                className="rounded-lg border border-white/10 bg-white/[0.04] p-5"
              >
                <div className="text-2xl text-cyan-200">{item.icon}</div>
                <h2 className="mt-4 text-base font-bold text-white">
                  {item.title}
                </h2>
                <p className="mt-2 text-sm leading-6 text-slate-400">
                  {item.text}
                </p>
              </div>
            ))}
          </div>

          <button
            type="button"
            onClick={() => setOpen(true)}
            className="w-fit rounded-md bg-cyan-300 px-5 py-3 text-sm font-black text-[#061017] shadow-[0_14px_40px_rgba(34,211,238,0.25)] transition hover:bg-cyan-200"
          >
            Read More
          </button>
        </div>
      </div>

      {open && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-[#04070b]/85 p-4 backdrop-blur-md">
          <div className="max-h-[90vh] w-full max-w-3xl overflow-y-auto rounded-lg border border-white/10 bg-[#101722] p-5 shadow-[0_28px_90px_rgba(0,0,0,0.65)] sm:p-7">
            <div className="flex items-start justify-between gap-4">
              <div>
                <p className="text-sm font-bold uppercase text-cyan-200">
                  Personal Profile
                </p>
                <h2 className="mt-2 text-2xl font-black text-white sm:text-3xl">
                  Meng Rithy Chey
                </h2>
              </div>
              <button
                type="button"
                onClick={() => setOpen(false)}
                className="grid h-10 w-10 place-items-center rounded-lg border border-white/10 text-slate-300 transition hover:border-rose-300 hover:text-rose-200"
                aria-label="Close profile"
              >
                <FaTimes />
              </button>
            </div>

            <div className="mt-6 grid grid-cols-1 gap-6 md:grid-cols-[220px_1fr]">
              <img
                src={img}
                alt="Meng Rithy Chey"
                className="aspect-square w-full rounded-lg object-cover"
              />
              <div>
                <p className="leading-8 text-slate-300">
                  I am 20 years old and currently studying in Year 2 at Norton
                  University. I am interested in web development and software
                  engineering, and I enjoy learning new technologies to improve
                  my skills and build better applications.
                </p>

                <h3 className="mt-6 text-lg font-bold text-white">
                  Personal Skills & Work Attitude
                </h3>
                <div className="mt-3 flex flex-wrap gap-2">
                  {traits.map((trait) => (
                    <span
                      key={trait}
                      className="rounded-md border border-white/10 bg-white/[0.05] px-3 py-2 text-sm text-slate-300"
                    >
                      {trait}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            <div className="mt-7 grid grid-cols-1 gap-4 md:grid-cols-3">
              {timeline.map((item) => (
                <div
                  key={item.title}
                  className="rounded-lg border border-white/10 bg-white/[0.04] p-4"
                >
                  <div className="text-xl text-amber-300">{item.icon}</div>
                  <h3 className="mt-3 font-bold text-white">{item.title}</h3>
                  <p className="mt-2 text-sm leading-6 text-slate-400">
                    {item.text}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </section>
  );
}

export default About;
