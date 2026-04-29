import { useState } from "react";
import { FaExternalLinkAlt, FaLock, FaPlay, FaRocket, FaTimes } from "react-icons/fa";
import Car from "../assets/img/Car.png";
import Coffee from "../assets/img/Coffee.png";
import FoodShop from "../assets/img/FoodShop.png";
import Game from "../assets/img/Game.png";
import Phone from "../assets/img/Phone.png";
import Img from "../assets/img/Screenshot 2026-01-21 192105.png";

import PhoneManagementSystem from "../assets/Video/phone_shop.mp4";
import CoffeeManagementSystem from "../assets/Video/Coffee.mp4"; 
import shop from "../assets/Video/foodShop.mp4";
import cv from "../assets/Video/CV.mp4";
import Mario from "../assets/Video/Mario.mp4";

const projects = [
  {
    title: "In Developing no video",
    description: "Back-end project for car inventory and records but now in development",
    image: Car,
    status: "In Developing",
    tags: ["Back-End", "Database", "System"],
    video: "In Developing",
  },
  {
    title: "Phone Management System",
    description: "Back-end project for phone inventory and records.",
    image: Phone,
    status: "Back-end No hosting",
    tags: ["Back-End", "Database", "System"],
    video: PhoneManagementSystem, 
  },
  {
    title: "Coffee Management System",
    description: "Back-end project for coffee shop management workflows.",
    image: Coffee,
    status: "Back-end No hosting",
    tags: ["Back-End", "Laravel", "System"],
    video: CoffeeManagementSystem, 
  },
  {
    title: "Food Shop Project",
    description: "Food ordering website deployed on Vercel.",
    image: FoodShop,
    status: "Live",
    href: "https://food-project-psi-swart.vercel.app/",
    tags: ["React", "Vercel", "Food"],
    video: shop, 
  },
  {
    title: "My CV Website",
    description: "Personal CV website deployed on Vercel.",
    image: Img,
    status: "Live",
    href: "https://my-cv-webside-oifr.vercel.app/",
    tags: ["Portfolio", "CV", "Vercel"],
    video: cv,
  },
  {
    title: "Mario Game React",
    description: "A playable game website deployed on Vercel.",
    image: Game,
    status: "Live",
    href: "https://mario-game-react.vercel.app/",
    tags: ["React", "Game", "Interactive"],
    video: Mario, 
  },
];

function Portfolio() {
  const [activeVideo, setActiveVideo] = useState(null);

  return (
    <section className="flex flex-col gap-10 py-6 lg:py-10">
      <div className="grid grid-cols-1 items-end gap-6 lg:grid-cols-[1fr_auto]">
        <div>
          <p className="text-sm font-bold uppercase text-amber-200">
            Selected Work
          </p>
          <h1 className="mt-3 text-3xl font-black text-white sm:text-4xl lg:text-5xl">
            My Portfolio
          </h1>
          <p className="mt-4 max-w-3xl text-base leading-8 text-slate-300">
            A collection of live sites, practice systems, and UI projects that
            show my progress across web development, I have completed many more projects, but I keep them private for personal reasons.
          </p>
        </div>
        <div className="rounded-lg border border-white/10 bg-white/[0.04] px-5 py-4">
          <p className="text-2xl font-black text-white">6</p>
          <p className="text-sm text-slate-400">Featured projects</p>
        </div>
      </div>

      <div className="grid grid-cols-1 gap-5 md:grid-cols-2 xl:grid-cols-3">
        {projects.map((project) => (
          <article
            key={project.title}
            className="group overflow-hidden rounded-lg border border-white/10 bg-white/[0.04] shadow-xl transition duration-200 hover:-translate-y-1 hover:border-cyan-300/60 hover:bg-white/[0.07]"
          >
            <div className="relative aspect-[16/10] overflow-hidden bg-[#101722]">
              <img
                src={project.image}
                alt={project.title}
                className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
              />
              <span
                className={`absolute left-3 top-3 inline-flex items-center gap-2 rounded-md px-3 py-2 text-xs font-black ${
                  project.href
                    ? "bg-emerald-300 text-[#061017]"
                    : "bg-slate-950/85 text-slate-200"
                }`}
              >
                {project.href ? <FaRocket /> : <FaLock />}
                {project.status}
              </span>
            </div>

            <div className="flex min-h-[250px] flex-col gap-4 p-5">
              <div>
                <h2 className="text-xl font-black text-white">
                  {project.title}
                </h2>
                <p className="mt-3 text-sm leading-6 text-slate-400">
                  {project.description}
                </p>
              </div>

              <div className="flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="rounded-md border border-white/10 bg-white/[0.05] px-3 py-1 text-xs font-semibold text-slate-300"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              <div className="mt-auto flex flex-wrap items-center gap-2">
                {project.href ? (
                  <a
                    href={project.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 rounded-md bg-cyan-300 px-4 py-2 text-sm font-black text-[#061017] transition hover:bg-cyan-200"
                  >
                    View Live <FaExternalLinkAlt />
                  </a>
                ) : (
                  <span className="inline-flex items-center gap-2 rounded-md border border-white/10 bg-white/[0.04] px-4 py-2 text-sm font-bold text-slate-400">
                    <FaLock /> Not Available
                  </span>
                )}

                <button
                  onClick={() => setActiveVideo(project)}
                  className="inline-flex items-center gap-2 rounded-md border border-purple-400/40 bg-purple-500/20 px-4 py-2 text-sm font-black text-purple-300 transition hover:border-purple-400/70 hover:bg-purple-500/30 hover:text-purple-200"
                >
                  <FaPlay /> Demo
                </button>
              </div>
            </div>
          </article>
        ))}
      </div>

      {activeVideo && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm"
          onClick={() => setActiveVideo(null)}
        >
          <div
            className="relative w-full max-w-3xl mx-4 rounded-xl border border-white/10 bg-[#0d1520] p-4 shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="mb-3 flex items-center justify-between">
              <h3 className="text-lg font-black text-white">
                {activeVideo.title} — Demo
              </h3>
              <button
                onClick={() => setActiveVideo(null)}
                className="rounded-md p-2 text-slate-400 transition hover:bg-white/10 hover:text-white"
              >
                <FaTimes />
              </button>
            </div>

            <div className="aspect-video w-full overflow-hidden rounded-lg bg-black">
              {activeVideo.video ? (
                <video
                  src={activeVideo.video}
                  controls
                  autoPlay
                  className="h-full w-full object-contain"
                />
              ) : (
                <div className="flex h-full w-full flex-col items-center justify-center gap-3 text-slate-500">
                  <FaPlay className="text-4xl" />
                  <p className="text-sm font-semibold">No video added yet</p>
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </section>
  );
}

export default Portfolio;
