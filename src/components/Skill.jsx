import { useState } from "react";
import { FaTimes } from "react-icons/fa";
import Cpp from "../assets/img/C.png";
import Flutter from "../assets/img/Flutter.png";
import JavaSql from "../assets/img/Java_Sql.png";
import Python from "../assets/img/Python.png";
import ReactJs from "../assets/img/ReactJs.png";

const skillGroups = [
  {
    title: "Frontend",
    skills: [
      { name: "HTML / CSS", level: 86 },
      { name: "JavaScript", level: 78 },
      { name: "React", level: 76 },
      { name: "Taiwind css", level: 80 },
    ],
  },
  {
    title: "Back-End",
    skills: [
      { name: "Laravel (Self Learning)", level: 68 },
      { name: "Java + SQL", level: 30 },
    ],
  },
  {
    title: "App & Systems",
    skills: [
      { name: "Flutter", level: 50 },
      { name: "C / C++", level: 80 },
      { name: "Reverse Engineering", level: 40 },
    ],
  },
];

const certificates = [
  {
    title: "C Programming",
    image: Cpp,
    text: "Certificate of completion for C programming language.",
  },
  {
    title: "C++ Programming",
    image: Cpp,
    text: "Certificate of completion for C++ programming language.",
  },
  {
    title: "Java + SQL",
    image: JavaSql,
    text: "Certificate of completion for Java and SQL training.",
  },
  {
    title: "Python",
    image: Python,
    text: "Certificate of completion for Python programming.",
  },
  {
    title: "ReactJS",
    image: ReactJs,
    text: "Certificate of completion for ReactJS development.",
  },
  {
    title: "Flutter",
    image: Flutter,
    text: "Certificate of completion for Flutter mobile development.",
  },
];

function Skill() {
  const [open, setOpen] = useState(false);
  const [selected, setSelected] = useState(null);

  const openModal = (certificate) => {
    setSelected(certificate);
    setOpen(true);
  };

  return (
    <section className="flex flex-col gap-10 py-6 lg:py-10">
      <div className="mx-auto max-w-3xl text-center">
        <p className="text-sm font-bold uppercase text-cyan-200">
          Capabilities
        </p>
        <h1 className="mt-3 text-3xl font-black text-white sm:text-4xl lg:text-5xl">
          Skills & Certificates
        </h1>
        <p className="mt-4 text-base leading-8 text-slate-300">
          A practical mix of frontend, back-end, programming fundamentals, and
          mobile development practice.
        </p>
      </div>

      <div className="grid grid-cols-1 gap-5 lg:grid-cols-3">
        {skillGroups.map((group) => (
          <div
            key={group.title}
            className="rounded-lg border border-white/10 bg-white/[0.04] p-5"
          >
            <h2 className="text-lg font-black text-white">{group.title}</h2>
            <div className="mt-5 space-y-5">
              {group.skills.map((skill) => (
                <div key={skill.name}>
                  <div className="mb-2 flex items-center justify-between gap-4 text-sm">
                    <span className="font-semibold text-slate-200">
                      {skill.name}
                    </span>
                    <span className="text-slate-400">{skill.level}%</span>
                  </div>
                  <div className="h-2 overflow-hidden rounded-full bg-white/10">
                    <div
                      className="h-full rounded-full bg-gradient-to-r from-cyan-300 via-emerald-300 to-amber-300"
                      style={{ width: `${skill.level}%` }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {certificates.map((certificate) => (
          <button
            type="button"
            key={certificate.title}
            onClick={() => openModal(certificate)}
            className="group overflow-hidden rounded-lg border border-white/10 bg-white/[0.04] text-left shadow-xl transition duration-200 hover:-translate-y-1 hover:border-cyan-300/60 hover:bg-white/[0.07]"
          >
            <div className="flex h-[210px] items-center justify-center bg-[#101722] p-4">
              <img
                src={certificate.image}
                alt={certificate.title}
                className="h-full w-full rounded-md object-contain"
              />
            </div>
            <div className="p-4">
              <p className="text-sm font-bold uppercase text-cyan-200">
                Certificate
              </p>
              <h2 className="mt-2 text-lg font-black text-white">
                {certificate.title}
              </h2>
              <p className="mt-2 text-sm leading-6 text-slate-400">
                {certificate.text}
              </p>
            </div>
          </button>
        ))}
      </div>

      {open && selected && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-[#04070b]/85 p-4 backdrop-blur-md">
          <div className="w-full max-w-3xl rounded-lg border border-white/10 bg-[#101722] p-5 shadow-[0_28px_90px_rgba(0,0,0,0.65)]">
            <div className="mb-4 flex items-start justify-between gap-4">
              <div>
                <p className="text-sm font-bold uppercase text-cyan-200">
                  Certificate
                </p>
                <h2 className="mt-2 text-2xl font-black text-white">
                  {selected.title}
                </h2>
              </div>
              <button
                type="button"
                onClick={() => setOpen(false)}
                className="grid h-10 w-10 place-items-center rounded-lg border border-white/10 text-slate-300 transition hover:border-rose-300 hover:text-rose-200"
                aria-label="Close certificate"
              >
                <FaTimes />
              </button>
            </div>

            <img
              src={selected.image}
              alt={selected.title}
              className="h-[240px] w-full rounded-lg bg-[#0c111a] object-contain p-3 sm:h-[420px]"
            />

            <p className="mt-4 text-center leading-7 text-slate-300">
              {selected.text}
            </p>
          </div>
        </div>
      )}
    </section>
  );
}

export default Skill;
