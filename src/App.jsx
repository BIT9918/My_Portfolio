import { useState } from "react";
import { NavLink, Outlet } from "react-router-dom";
import {
  FaBars,
  FaCode,
  FaFacebookF,
  FaGithub,
  FaTelegramPlane,
  FaTimes,
} from "react-icons/fa";

const navItems = [
  { label: "Home", to: "/" },
  { label: "About", to: "/about" },
  { label: "Skills", to: "/skill" },
  { label: "Portfolio", to: "/portfolio" },
  { label: "Contact", to: "/contact" },
];

const socialLinks = [
  {
    label: "GitHub",
    href: "https://github.com/BIT9918",
    icon: <FaGithub />,
  },
  {
    label: "Telegram",
    href: "https://t.me/Meng_Rithy_Chey",
    icon: <FaTelegramPlane />,
  },
  {
    label: "Facebook",
    href: "https://web.facebook.com/profile.php?id=61560884715837",
    icon: <FaFacebookF />,
  }
];

function App() {
  const [open, setOpen] = useState(false);

  const linkClass = ({ isActive }) =>
    [
      "relative px-3 py-2 text-sm font-semibold transition duration-200",
      "after:absolute after:left-3 after:right-3 after:-bottom-1 after:h-[2px]",
      "after:origin-left after:rounded-full after:bg-cyan-300 after:transition-transform after:duration-200",
      isActive
        ? "text-white after:scale-x-100"
        : "text-slate-300 hover:text-white after:scale-x-0 hover:after:scale-x-100",
    ].join(" ");

  return (
    <div className="flex min-h-screen flex-col overflow-hidden text-slate-100">
      <header className="sticky top-0 z-40 border-b border-white/10 bg-[#080b10]/85 backdrop-blur-xl">
        <nav className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
          <NavLink
            to="/"
            onClick={() => setOpen(false)}
            className="flex items-center gap-3"
            aria-label="Meng Rithy Chey portfolio home"
          >
            <span className="grid h-11 w-11 place-items-center rounded-lg bg-cyan-300 text-lg text-[#061017] shadow-[0_12px_30px_rgba(34,211,238,0.28)]">
              <FaCode />
            </span>
            <span>
              <span className="block text-base font-black text-white sm:text-lg">
                Meng Rithy Chey
              </span>
              <span className="block text-xs font-medium text-slate-400">
                Web Developer
              </span>
            </span>
          </NavLink>

          <div className="hidden items-center gap-1 lg:flex">
            {navItems.map((item) => (
              <NavLink key={item.to} to={item.to} className={linkClass}>
                {item.label}
              </NavLink>
            ))}
          </div>

          <div className="hidden items-center gap-3 lg:flex">
            {socialLinks.map((item) => (
              <a
                key={item.label}
                href={item.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={item.label}
                className="grid h-10 w-10 place-items-center rounded-lg border border-white/10 bg-white/[0.04] text-slate-300 transition duration-200 hover:border-cyan-300/70 hover:bg-cyan-300 hover:text-[#061017]"
              >
                {item.icon}
              </a>
            ))}
          </div>

          <button
            type="button"
            onClick={() => setOpen((value) => !value)}
            className="grid h-11 w-11 place-items-center rounded-lg border border-white/10 bg-white/[0.05] text-xl text-cyan-200 transition hover:bg-white/[0.1] lg:hidden"
            aria-label="Toggle navigation"
            aria-expanded={open}
          >
            {open ? <FaTimes /> : <FaBars />}
          </button>
        </nav>

        {open && (
          <div className="border-t border-white/10 bg-[#080b10]/95 px-4 py-4 shadow-2xl lg:hidden">
            <div className="mx-auto flex max-w-7xl flex-col gap-2">
              {navItems.map((item) => (
                <NavLink
                  key={item.to}
                  onClick={() => setOpen(false)}
                  to={item.to}
                  className={linkClass}
                >
                  {item.label}
                </NavLink>
              ))}
            </div>
          </div>
        )}
      </header>

      <main className="mx-auto w-full max-w-7xl flex-1 px-4 py-8 sm:px-6 lg:px-8 lg:py-10">
        <Outlet />
      </main>

      <footer className="border-t border-white/10 bg-[#080b10]/70">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-5 px-4 py-6 text-center sm:px-6 md:flex-row md:text-left lg:px-8">
          <div>
            <p className="text-sm font-semibold text-white">Meng Rithy Chey</p>
            <p className="mt-1 text-xs text-slate-400">
              Copyright {new Date().getFullYear()} Portfolio. Built with React.
            </p>
          </div>

          <div className="flex flex-wrap justify-center gap-2 text-sm">
            {navItems.map((item) => (
              <NavLink
                key={item.to}
                to={item.to}
                className="rounded-md px-3 py-2 text-slate-400 transition hover:bg-white/[0.06] hover:text-white"
              >
                {item.label}
              </NavLink>
            ))}
          </div>

          <div className="flex gap-3">
            {socialLinks.map((item) => (
              <a
                key={item.label}
                href={item.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={item.label}
                className="grid h-10 w-10 place-items-center rounded-lg border border-white/10 text-slate-300 transition hover:border-cyan-300 hover:text-cyan-200"
              >
                {item.icon}
              </a>
            ))}
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
