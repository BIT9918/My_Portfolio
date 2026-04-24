import { FaExternalLinkAlt, FaLock, FaRocket } from "react-icons/fa";
import BurgerKing from "../assets/img/BurgerKing.png";
import Coffee from "../assets/img/Coffee.png";
import FoodShop from "../assets/img/FoodShop.png";
import Game from "../assets/img/Game.png";
import Phone from "../assets/img/Phone.png";
import Img from "../assets/img/Screenshot 2026-01-21 192105.png";

const projects = [
  {
    title: "Burger King Website",
    description: "Restaurant website UI with product and ordering screens.",
    image: BurgerKing,
    status: "In progress",
    tags: ["UI", "Restaurant", "Frontend"],
  },
  {
    title: "Phone Management System",
    description: "Back-end project for phone inventory and records.",
    image: Phone,
    status: "In progress",
    tags: ["Back-End", "Database", "System"],
  },
  {
    title: "Coffee Management System",
    description: "Back-end project for coffee shop management workflows.",
    image: Coffee,
    status: "In progress",
    tags: ["Back-End", "Laravel", "System"],
  },
  {
    title: "Food Shop Project",
    description: "Food ordering website deployed on Vercel.",
    image: FoodShop,
    status: "Live",
    href: "https://food-project-psi-swart.vercel.app/",
    tags: ["React", "Vercel", "Food"],
  },
  {
    title: "My CV Website",
    description: "Personal CV website deployed on Vercel.",
    image: Img,
    status: "Live",
    href: "https://my-cv-webside-oifr.vercel.app/",
    tags: ["Portfolio", "CV", "Vercel"],
  },
  {
    title: "Mario Game React",
    description: "A playable game website deployed on Vercel.",
    image: Game,
    status: "Live",
    href: "https://mario-game-react.vercel.app/",
    tags: ["React", "Game", "Interactive"],
  },
];

function Portfolio() {
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

              <div className="mt-auto">
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
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

export default Portfolio;
