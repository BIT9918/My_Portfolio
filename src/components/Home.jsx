import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import {
  FaArrowRight,
  FaCodeBranch,
  FaFacebookF,
  FaGithub,
  FaLaptopCode,
  FaLayerGroup,
  FaTelegram,
} from "react-icons/fa";
import img from "../assets/img/Profile.png";

const typedRoles = [
  "Web Developer",
  "React Frontend Builder",
  "Basic App Developer",
  "Reverse Engineering Learner",
];

const stats = [
  { value: "6+", label: "Projects" },
  { value: "5", label: "Certificates" },
  { value: "Year 2", label: "Norton University" },
];

const focusItems = [
  {
    icon: <FaLaptopCode />,
    title: "Responsive UI",
    text: "Clean screens that work smoothly across phone, tablet, and desktop.",
  },
  {
    icon: <FaLayerGroup />,
    title: "Full-stack Practice",
    text: "Frontend pages, back-end systems, dashboards, and real deployed apps.",
  },
  {
    icon: <FaCodeBranch />,
    title: "Always Learning",
    text: "Building stronger React, Laravel, database, and software skills.",
  },
];

function Home() {
  const [textIndex, setTextIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentText = typedRoles[textIndex];
    const isAtEnd = charIndex === currentText.length;
    const isAtStart = charIndex === 0;
    const speed = isAtEnd && !isDeleting ? 1200 : isDeleting ? 45 : 85;

    const timeout = setTimeout(() => {
      if (!isDeleting && !isAtEnd) {
        setCharIndex((value) => value + 1);
        return;
      }

      if (!isDeleting && isAtEnd) {
        setIsDeleting(true);
        return;
      }

      if (isDeleting && !isAtStart) {
        setCharIndex((value) => value - 1);
        return;
      }

      if (isDeleting && isAtStart) {
        setIsDeleting(false);
        setTextIndex((value) => (value + 1) % typedRoles.length);
      }
    }, speed);

    return () => clearTimeout(timeout);
  }, [charIndex, isDeleting, textIndex]);

  const displayText = typedRoles[textIndex].slice(0, charIndex);

  return (
    <section className="grid min-h-[calc(100vh-190px)] grid-cols-1 items-center gap-12 py-6 lg:grid-cols-[1.08fr_0.92fr] lg:py-10">
      <div className="flex flex-col gap-7">
        <div className="inline-flex w-fit items-center gap-2 rounded-md border border-emerald-300/25 bg-emerald-300/10 px-3 py-2 text-sm font-semibold text-emerald-200">
          <span className="h-2 w-2 rounded-full bg-emerald-300 shadow-[0_0_18px_rgba(110,231,183,0.9)]" />
          Available for Job, internships and projects
        </div>

        <div className="space-y-4">
          <p className="text-base font-semibold uppercase text-cyan-200">
            Hello, I'm
          </p>
          <h1 className="max-w-4xl text-4xl font-black leading-[1.08] text-white sm:text-5xl lg:text-6xl">
            Meng Rithy Chey
          </h1>
          <h2 className="min-h-[3.5rem] text-2xl font-bold leading-snug text-slate-200 sm:text-3xl">
            I build as a{" "}
            <span className="text-cyan-200">
              {displayText}
              <span className="animate-blink text-amber-300">|</span>
            </span>
          </h2>
        </div>

        <p className="max-w-2xl text-base leading-8 text-slate-300 sm:text-lg">
          Passionate student developer focused on responsive websites, React
          interfaces, practical back-end systems, and projects that keep getting
          better with each build.
        </p>

        <div className="flex flex-col gap-3 sm:flex-row">
          <Link
            to="/portfolio"
            className="inline-flex items-center justify-center gap-2 rounded-md bg-cyan-300 px-5 py-3 text-sm font-black text-[#061017] shadow-[0_14px_40px_rgba(34,211,238,0.28)] transition hover:bg-cyan-200"
          >
            View Projects <FaArrowRight />
          </Link>
          <Link
            to="/contact"
            className="inline-flex items-center justify-center rounded-md border border-white/15 bg-white/[0.04] px-5 py-3 text-sm font-bold text-white transition hover:border-amber-300/70 hover:bg-amber-300/10 hover:text-amber-100"
          >
            Contact Me
          </Link>
        </div>

        <div className="grid max-w-2xl grid-cols-1 gap-3 sm:grid-cols-3">
          {stats.map((item) => (
            <div
              key={item.label}
              className="rounded-lg border border-white/10 bg-white/[0.04] p-4"
            >
              <p className="text-2xl font-black text-white">{item.value}</p>
              <p className="mt-1 text-sm text-slate-400">{item.label}</p>
            </div>
          ))}
        </div>

        <div className="flex flex-wrap gap-3">
          <a
            href="https://t.me/Meng_Rithy_Chey"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Telegram"
            className="grid h-11 w-11 place-items-center rounded-lg border border-white/10 bg-white/[0.04] text-cyan-200 transition hover:border-cyan-300 hover:bg-cyan-300 hover:text-[#061017]"
          >
            <FaTelegram />
          </a>

          <a
            href="https://github.com/BIT9918"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            className="grid h-11 w-11 place-items-center rounded-lg border border-white/10 bg-white/[0.04] text-cyan-200 transition hover:border-cyan-300 hover:bg-cyan-300 hover:text-[#061017]"
          >
            <FaGithub />
          </a>

           <a
            href="https://web.facebook.com/profile.php?id=61560884715837"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Facebook"
            className="grid h-11 w-11 place-items-center rounded-lg border border-white/10 bg-white/[0.04] text-cyan-200 transition hover:border-cyan-300 hover:bg-cyan-300 hover:text-[#061017]"
          >
            <FaFacebookF />
          </a>
        </div>
      </div>

      <div className="flex justify-center lg:justify-end">
        <div className="w-full max-w-[460px]">
          <div className="mb-4 h-2 rounded-lg bg-gradient-to-r from-cyan-300 via-amber-300 to-rose-400" />
          <div className="animate-float overflow-hidden rounded-lg border border-white/10 bg-white/[0.05] p-3 shadow-[0_28px_80px_rgba(0,0,0,0.35)]">
            <img
              src={img}
              alt="Meng Rithy Chey"
              className="aspect-[4/5] w-full rounded-md object-cover"
            />
          </div>
          <div className="mt-4 grid grid-cols-1 gap-3 sm:grid-cols-3">
            {focusItems.map((item) => (
              <div
                key={item.title}
                className="rounded-lg border border-white/10 bg-[#0d121a]/80 p-4 shadow-xl"
              >
                <div className="mb-3 text-xl text-amber-300">{item.icon}</div>
                <h3 className="text-sm font-bold text-white">{item.title}</h3>
                <p className="mt-2 text-xs leading-5 text-slate-400">
                  {item.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Home;
