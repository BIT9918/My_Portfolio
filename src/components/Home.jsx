import React, { useEffect, useState } from "react";
import img from "../assets/img/Profile.png";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaGithub,
  FaTelegram,
} from "react-icons/fa";

function Home() {
  // TEXTS TO TYPE (ONE BY ONE)
  const texts = [
    "Basic Reverse Engineering",
    "Web Developer",
    "Basic App Developer",
  ];

  const [textIndex, setTextIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [displayText, setDisplayText] = useState("");

  useEffect(() => {
    const currentText = texts[textIndex];
    const speed = isDeleting ? 60 : 120;

    const timeout = setTimeout(() => {
      if (!isDeleting) {
        setDisplayText(currentText.substring(0, charIndex + 1));
        setCharIndex(charIndex + 1);

        if (charIndex === currentText.length) {
          setTimeout(() => setIsDeleting(true), 1200);
        }
      } else {
        setDisplayText(currentText.substring(0, charIndex - 1));
        setCharIndex(charIndex - 1);

        if (charIndex === 0) {
          setIsDeleting(false);
          setTextIndex((textIndex + 1) % texts.length);
        }
      }
    }, speed);

    return () => clearTimeout(timeout);
  }, [charIndex, isDeleting, textIndex]);

  return (
    <div className="w-full h-full grid grid-cols-1 lg:grid-cols-2 items-center px-4 sm:px-16 py-15 gap-8 lg:gap-0">
      {/* LEFT */}
      <div className="flex flex-col gap-6 justify-center">
        <h3 className="text-xl font-medium text-gray-300">Hello, It's Me</h3>

        <h1 className="text-6xl font-bold text-white">Meng Rithy Chey</h1>

        <h2 className="text-4xl font-bold text-white">
          And I'm a{" "}
          <span className="text-cyan-400">
            {displayText}
            <span className="animate-blink">|</span>
          </span>
        </h2>

        <p className="text-gray-400 max-w-xl leading-relaxed">
          Passionate student developer who enjoys learning new technologies and
          building real projects step by step.
        </p>

        {/* SOCIAL ICONS */}
        <div className="flex gap-4 mt-4">
          <a
            href="https://web.facebook.com/profile.php?id=61560884715837"
            target="_blank"
            rel="noopener noreferrer"
            className="w-10 h-10 flex items-center justify-center rounded-full border border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-black transition"
          >
            <FaFacebookF />
          </a>

          <a
            href="https://github.com/BIT9918"
            target="_blank"
            rel="noopener noreferrer"
            className="w-10 h-10 flex items-center justify-center rounded-full border border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-black transition"
          >
            <FaGithub />
          </a>

          <a
            href="https://t.me/Meng_Rithy_Chey"
            target="_blank"
            rel="noopener noreferrer"
            title="@Meng_Rithy_Chey"
            className="w-10 h-10 flex items-center justify-center rounded-full border border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-black transition"
          >
            <FaTelegram />
          </a>

          {/* <a
    href="https://www.linkedin.com/"
    target="_blank"
    rel="noopener noreferrer"
    className="w-10 h-10 flex items-center justify-center rounded-full border border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-black transition"
  >
    <FaLinkedinIn />
  </a> */}
        </div>

        <button className="mt-6 w-fit px-6 py-3 bg-cyan-400 text-black font-semibold rounded-full hover:bg-cyan-300 transition">
          Download CV
        </button>
      </div>

      {/* RIGHT – FLOATING IMAGE */}
      <div className="flex justify-center items-center">
        <div className="relative group animate-float w-80 md:w-96 aspect-square mx-auto">
          {/* GLOW */}
          <div
            className="
              absolute inset-0 
              bg-cyan-400 
              blur-[60px] 
              opacity-70 
              transition-all duration-500
              group-hover:opacity-100
              group-hover:blur-[90px]
            "
          ></div>

          {/* CIRCLE IMAGE */}
          <div
            className="relative w-full h-full transition-all duration-500 group-hover:scale-[1.05] rounded-full overflow-hidden"
          >
            <img
              src={img}
              alt="profile"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;