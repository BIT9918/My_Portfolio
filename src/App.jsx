import { NavLink, Outlet } from "react-router-dom";
import { useState } from "react";
import {
  FaBars,
  FaTimes,
  FaFacebookF,
  FaGithub,
  FaTelegramPlane,
} from "react-icons/fa";

function App() {
  const [open, setOpen] = useState(false);

  const linkClass = ({ isActive }) =>
    isActive
      ? "text-cyan-400 border-b-2 border-cyan-400"
      : "hover:text-cyan-300 transition";

  return (
    <div
      className="
        min-h-screen flex justify-center items-center
        bg-[linear-gradient(180deg,#111827_0%,#111827_50%,#0ea5e9_100%)]
      "
    >
      {/* BIG CONTAINER */}
      <div
        className="
          w-full md:w-[80%]
          h-auto md:h-[80%]
          bg-[#20232C]
          px-4 md:px-10 py-5
          border-2 rounded-3xl
          shadow-[0_20px_60px_rgba(0,0,0,0.7)]
          flex flex-col
        "
      >
        {/* NAVBAR */}
        <div
          className="
            flex justify-between items-center
            px-4 md:px-20
            pb-4
            border-b border-white/10
            text-amber-50
          "
        >
          <h1 className="font-bold text-2xl md:text-3xl">
            Portfolio
          </h1>

          {/* DESKTOP MENU */}
          <div className="hidden lg:flex gap-10 text-xl">
            <NavLink to="/" className={linkClass}>Home</NavLink>
            <NavLink to="/about" className={linkClass}>About</NavLink>
            <NavLink to="/skill" className={linkClass}>Skill</NavLink>
            {/* <NavLink to="/service" className={linkClass}>Service</NavLink> */}
            <NavLink to="/portfolio" className={linkClass}>Portfolio</NavLink>
            <NavLink to="/contact" className={linkClass}>Contact</NavLink>
          </div>

          {/* MOBILE ICON */}
          <button
            onClick={() => setOpen(!open)}
            className="lg:hidden text-2xl text-cyan-400"
          >
            {open ? <FaTimes /> : <FaBars />}
          </button>
        </div>

        {/* MOBILE MENU */}
        {open && (
          <div
            className="
              lg:hidden
              flex flex-col gap-4
              px-6 py-4
              border-b border-white/10
              text-amber-50
            "
          >
            <NavLink onClick={() => setOpen(false)} to="/" className={linkClass}>Home</NavLink>
            <NavLink onClick={() => setOpen(false)} to="/about" className={linkClass}>About</NavLink>
            <NavLink onClick={() => setOpen(false)} to="/skill" className={linkClass}>Skill</NavLink>
            {/* <NavLink onClick={() => setOpen(false)} to="/service" className={linkClass}>Service</NavLink> */}
            <NavLink onClick={() => setOpen(false)} to="/portfolio" className={linkClass}>Portfolio</NavLink>
            <NavLink onClick={() => setOpen(false)} to="/contact" className={linkClass}>Contact</NavLink>
          </div>
        )}

        {/* PAGE CONTENT */}
        <div
          className="
            flex justify-center
            p-4 md:p-10
            flex-1
            overflow-y-auto
          "
        >
          <Outlet />
        </div>

        {/* FOOTER */}
        <div
          className="
            border-t border-white/10
            px-4 md:px-20 py-4
            flex flex-col md:flex-row
            items-center justify-between
            gap-4
            text-gray-300
          "
        >
          {/* FOOTER NAV */}
          <div className="flex gap-6 text-sm">
            <NavLink to="/" className="hover:text-cyan-400">Home</NavLink>
            <NavLink to="/about" className="hover:text-cyan-400">About</NavLink>
            <NavLink to="/skill" className="hover:text-cyan-400">Skill</NavLink>
            <NavLink to="/portfolio" className="hover:text-cyan-400">Portfolio</NavLink>
            <NavLink to="/contact" className="hover:text-cyan-400">Contact</NavLink>
          </div>

          {/* SOCIAL ICONS */}
          <div className="flex gap-4 text-lg">
            <a
              href="https://web.facebook.com/profile.php?id=61560884715837"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-cyan-400 transition"
            >
              <FaFacebookF />
            </a>

            <a
              href="https://github.com/BIT9918"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-cyan-400 transition"
            >
              <FaGithub />
            </a>

            <a
              href="https://t.me/Meng_Rithy_Chey"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-cyan-400 transition"
              title="@Meng_Rithy_Chey"
            >
              <FaTelegramPlane />
            </a>
          </div>

          {/* COPYRIGHT */}
          <p className="text-xs text-gray-400">
            © {new Date().getFullYear()} Meng Rithy Chey
          </p>
        </div>
      </div>
    </div>
  );
}

export default App;
