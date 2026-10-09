import dynamic from "next/dynamic";
import {JSX} from "react";
import { social } from "@/data/resume";

const ParticlesBg = dynamic(() => import("particles-bg"), { ssr: false });

const sections = [
  { name: "Experience", href: "#experience" },
  { name: "Education", href: "#education" },
  { name: "Portfolio", href: "#portfolio" },
];

export default function Main(): JSX.Element  {
  return (
    <div className="relative w-full h-screen flex flex-col items-center justify-center gap-3 px-6">
      <ParticlesBg bg={true} type="polygon" />
      <h1 className="dark:text-slate-100 font-semibold text-7xl text-center">
        Jaired Jawed
      </h1>
      <h3 className="dark:text-slate-300 font-semibold text-2xl text-center">
        Software Engineer at HashiCorp, an IBM Company
      </h3>
      <nav className="mt-4 flex flex-wrap justify-center gap-x-6 gap-y-2 text-lg">
        {sections.map((section) => (
          <a key={section.name} href={section.href} className="hover:underline">
            {section.name}
          </a>
        ))}
      </nav>
      <div className="flex flex-wrap justify-center gap-x-6 gap-y-2 text-slate-500 dark:text-slate-400">
        {social.map((link) => (
          <a key={link.name} href={link.url} className="hover:underline">
            {link.name}
          </a>
        ))}
      </div>
      <a
        href="#experience"
        aria-label="Scroll to experience"
        className="absolute bottom-8 animate-bounce motion-reduce:animate-none text-slate-500 dark:text-slate-400 hover:text-foreground"
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
