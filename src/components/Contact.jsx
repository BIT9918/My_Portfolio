import { useState } from "react";
import {
  FaEnvelope,
  FaFacebookF,
  FaGithub,
  FaMapMarkerAlt,
  FaPaperPlane,
  FaPhoneAlt,
  FaTelegram,
} from "react-icons/fa";

const initialForm = {
  name: "",
  email: "",
  message: "",
};

const contactItems = [
  {
    icon: <FaEnvelope />,
    label: "Email",
    lines: ["mmengrithychey24@cam-ed.com"],
  },
  {
    icon: <FaPhoneAlt />,
    label: "Phone",
    lines: ["+855 884 237 923"],
  },
  {
    icon: <FaMapMarkerAlt />,
    label: "Location",
    lines: ["Phnom Penh, Cambodia"],
  },
];

const socialLinks = [
  {
    label: "Telegram",
    href: "https://t.me/Meng_Rithy_Chey",
    icon: <FaTelegram />,
  },
  {
    label: "GitHub",
    href: "https://github.com/BIT9918",
    icon: <FaGithub />,
  },
  {
    label: "Facebook",
    href: "https://web.facebook.com/profile.php?id=61560884715837",
    icon: <FaFacebookF />,
  }
];

function Contact() {
  const [form, setForm] = useState(initialForm);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setForm((current) => ({ ...current, [name]: value }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    const subject = encodeURIComponent(`Portfolio contact from ${form.name}`);
    const body = encodeURIComponent(
      `Name: ${form.name}\nEmail: ${form.email}\n\n${form.message}`,
    );

    window.location.href = `mailto:rithybittopup@gmail.com?subject=${subject}&body=${body}`;
    setForm(initialForm);
  };

  return (
    <section className="grid grid-cols-1 gap-10 py-6 lg:grid-cols-[0.95fr_1.05fr] lg:py-10">
      <div className="flex flex-col gap-7">
        <div>
          <p className="text-sm font-bold uppercase text-cyan-200">Contact</p>
          <h1 className="mt-3 text-3xl font-black leading-tight text-white sm:text-4xl lg:text-5xl">
            Let's Work Together
          </h1>
          <p className="mt-5 max-w-xl text-base leading-8 text-slate-300">
            Feel free to contact me for internships, projects, or opportunities.
            I am always open to learning, improving my skills, and building
            useful work with good people.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-4">
          {contactItems.map((item) => (
            <div
              key={item.label}
              className="flex gap-4 rounded-lg border border-white/10 bg-white/[0.04] p-4"
            >
              <div className="grid h-11 w-11 shrink-0 place-items-center rounded-lg bg-cyan-300/10 text-cyan-200">
                {item.icon}
              </div>
              <div>
                <h2 className="font-bold text-white">{item.label}</h2>
                <div className="mt-1 space-y-1">
                  {item.lines.map((line) => (
                    <p
                      key={line}
                      className="break-all text-sm leading-6 text-slate-400"
                    >
                      {line}
                    </p>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="flex flex-wrap gap-3">
          {socialLinks.map((item) => (
            <a
              key={item.label}
              href={item.href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={item.label}
              className="grid h-11 w-11 place-items-center rounded-lg border border-white/10 bg-white/[0.04] text-cyan-200 transition hover:border-cyan-300 hover:bg-cyan-300 hover:text-[#061017]"
            >
              {item.icon}
            </a>
          ))}
        </div>
      </div>

      <div className="rounded-lg border border-white/10 bg-white/[0.04] p-5 shadow-[0_28px_80px_rgba(0,0,0,0.3)] sm:p-7">
        <form onSubmit={handleSubmit} className="flex w-full flex-col gap-5">
          <div>
            <label htmlFor="name" className="text-sm font-bold text-white">
              Your Name
            </label>
            <input
              id="name"
              name="name"
              type="text"
              value={form.name}
              onChange={handleChange}
              required
              className="mt-2 w-full rounded-lg border border-white/10 bg-[#101722] p-3 text-white outline-none transition placeholder:text-slate-500 focus:border-cyan-300 focus:ring-2 focus:ring-cyan-300/25"
              placeholder="Meng Rithy Chey"
            />
          </div>

          <div>
            <label htmlFor="email" className="text-sm font-bold text-white">
              Your Email
            </label>
            <input
              id="email"
              name="email"
              type="email"
              value={form.email}
              onChange={handleChange}
              required
              className="mt-2 w-full rounded-lg border border-white/10 bg-[#101722] p-3 text-white outline-none transition placeholder:text-slate-500 focus:border-cyan-300 focus:ring-2 focus:ring-cyan-300/25"
              placeholder="you@example.com"
            />
          </div>

          <div>
            <label htmlFor="message" className="text-sm font-bold text-white">
              Your Message
            </label>
            <textarea
              id="message"
              name="message"
              rows="6"
              value={form.message}
              onChange={handleChange}
              required
              placeholder="Tell me about your project or opportunity..."
              className="mt-2 w-full resize-none rounded-lg border border-white/10 bg-[#101722] p-3 text-white outline-none transition placeholder:text-slate-500 focus:border-cyan-300 focus:ring-2 focus:ring-cyan-300/25"
            />
          </div>

          <button
            type="submit"
            className="inline-flex w-fit items-center justify-center gap-2 rounded-md bg-cyan-300 px-5 py-3 text-sm font-black text-[#061017] shadow-[0_14px_40px_rgba(34,211,238,0.25)] transition hover:bg-cyan-200"
          >
            Send Message <FaPaperPlane />
          </button>
        </form>
      </div>
    </section>
  );
}

export default Contact;
