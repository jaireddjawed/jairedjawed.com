import {JSX} from "react";
import { social } from "@/data/resume";

const sections = [
  { name: "Experience", href: "#experience" },
  { name: "Education", href: "#education" },
  { name: "Portfolio", href: "#portfolio" },
  { name: "Tutoring", href: "#tutoring" },
];

export default function Main(): JSX.Element  {
  return (
    <div className="relative isolate overflow-hidden w-full h-screen flex flex-col items-center justify-center gap-3 px-6">
      <div className="hero-grid pointer-events-none absolute inset-0 -z-10" />
      <div className="pointer-events-none absolute left-1/2 top-1/2 -z-10 h-[36rem] w-[36rem] max-w-full -translate-x-1/2 -translate-y-1/2 rounded-full bg-accent/20 blur-3xl" />
      <p className="text-lg sm:text-xl text-accent" aria-hidden="true">
        <span className="text-slate-500 dark:text-slate-400">$</span>{" "}
        <span className="hero-typing">whoami</span>
        <span className="hero-cursor" />
      </p>
      <h1 className="hero-reveal dark:text-slate-100 font-semibold text-5xl sm:text-7xl text-center">
        Jaired Jawed
      </h1>
      <h3 className="hero-reveal dark:text-slate-300 font-semibold text-xl sm:text-2xl text-center">
        Software Engineer at HashiCorp, an IBM Company
      </h3>
      <p className="hero-reveal italic text-center text-slate-500 dark:text-slate-400">
        Engineering is the pursuit of perfection 🏃.
      </p>
      <p className="hero-reveal mt-2 flex items-center gap-2 rounded-full border border-accent/40 px-4 py-1 text-sm">
        <span className="h-2 w-2 rounded-full bg-accent animate-pulse motion-reduce:animate-none" />
        shipping to production since 2019
      </p>
      <nav className="hero-reveal mt-4 flex flex-wrap justify-center gap-x-6 gap-y-2 text-lg">
        {sections.map((section) => (
          <a key={section.name} href={section.href} className="hover:text-accent">
            {section.name}
          </a>
        ))}
      </nav>
      <div className="hero-reveal flex flex-wrap justify-center gap-x-6 gap-y-2 text-slate-500 dark:text-slate-400">
        {social.map((link) => (
          <a key={link.name} href={link.url} className="hover:text-accent">
            {link.name}
          </a>
        ))}
      </div>
      <a
        href="#experience"
        aria-label="Scroll to experience"
        className="absolute bottom-8 animate-bounce motion-reduce:animate-none text-accent"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth={2}
          strokeLinecap="round"
          strokeLinejoin="round"
          className="h-10 w-10"
        >
          <path d="M12 5v14M5 12l7 7 7-7" />
        </svg>
      </a>
    </div>
  );
}
