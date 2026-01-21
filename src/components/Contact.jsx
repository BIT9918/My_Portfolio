import React from "react";
import { FaEnvelope, FaPhoneAlt, FaMapMarkerAlt } from "react-icons/fa";

function Contact() {
  return (
    <div className="w-full h-full px-4 lg:px-16 py-8 md:py-10 flex flex-col gap-10">

      {/* TITLE */}
      <h2 className="text-3xl md:text-4xl font-bold text-center text-white">
        Contact <span className="text-cyan-400">Me</span>
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">

        {/* LEFT – CONTACT INFO */}
        <div className="flex flex-col gap-6 text-white text-center md:text-left items-center md:items-start">
          <h3 className="text-xl md:text-2xl font-semibold">
            Let's Work Together
          </h3>

          <p className="text-gray-400 leading-relaxed max-w-md">
            Feel free to contact me for internships, projects, or any
            opportunities. I am always open to learning and improving my
            skills.
          </p>

          <div className="flex items-center gap-4">
            <FaEnvelope className="text-cyan-400 text-lg md:text-xl" />
            <span className="text-gray-300 text-sm md:text-base break-all">
              rithybittopup@gmail.com || bitpromax123@gmail.com
            </span>
          </div>

          <div className="flex items-center gap-4">
            <FaPhoneAlt className="text-cyan-400 text-lg md:text-xl" />
            <span className="text-gray-300 text-sm md:text-base">
              +855 884 237 923
            </span>
          </div>

          <div className="flex items-center gap-4">
            <FaMapMarkerAlt className="text-cyan-400 text-lg md:text-xl" />
            <span className="text-gray-300 text-sm md:text-base">
              Phnom Penh, Cambodia
            </span>
          </div>
        </div>

        {/* RIGHT – CONTACT FORM */}
        <form
          onSubmit={(e) => e.preventDefault()}
          className="
            bg-[#1f232d]
            p-6 md:p-8
            rounded-2xl
            shadow-[0_20px_60px_rgba(0,0,0,0.7)]
            flex flex-col gap-5
            w-full
          "
        >
          <input
            type="text"
            placeholder="Your Name"
            className="w-full p-3 rounded-lg bg-[#2a2f3a] text-white placeholder-gray-400 outline-none focus:ring-2 focus:ring-cyan-400"
          />

          <input
            type="email"
            placeholder="Your Email"
            className="w-full p-3 rounded-lg bg-[#2a2f3a] text-white placeholder-gray-400 outline-none focus:ring-2 focus:ring-cyan-400"
          />

          <textarea
            rows="4"
            placeholder="Your Message"
            className="w-full p-3 rounded-lg bg-[#2a2f3a] text-white placeholder-gray-400 outline-none focus:ring-2 focus:ring-cyan-400 resize-none"
          ></textarea>

          <button
            type="submit"
            className="mt-2 px-6 py-3 bg-cyan-400 text-black font-semibold rounded-full hover:bg-cyan-300 transition self-center md:self-start"
          >
            Send Message
          </button>
        </form>

      </div>
    </div>
  );
}

export default Contact;
