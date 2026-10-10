import {JSX} from "react";
import { social } from "@/data/resume";

export default function Footer(): JSX.Element {
  return (
    <footer className="relative bg-background px-6 py-10 border-t border-slate-300 dark:border-slate-700">
      <div className="mx-auto max-w-4xl flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 text-sm text-slate-500 dark:text-slate-400">
        <p>© {new Date().getFullYear()} Jaired Jawed</p>
        <div className="flex flex-wrap gap-x-6 gap-y-2">
          {social.map((link) => (
            <a key={link.name} href={link.url} className="hover:text-accent">
              {link.name}
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}
