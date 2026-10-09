import Image from "next/image";
import {JSX} from "react";
import Section from "@/components/section";
import { projects } from "@/data/resume";

export default function Portfolio(): JSX.Element {
  return (
    <Section id="portfolio" title="Portfolio">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {projects.map((project) => (
          <article
            key={project.title}
            className="overflow-hidden rounded-lg border border-slate-300 dark:border-slate-700 bg-background transition duration-200 ease-out hover:scale-105 hover:shadow-xl motion-reduce:transition-none motion-reduce:hover:scale-100"
          >
            <a href={project.url} target="_blank" rel="noopener noreferrer">
              <Image
                src={project.image}
                alt={`Screenshot of ${project.title}`}
                width={1568}
                height={966}
                className="aspect-[16/10] w-full object-cover object-top"
              />
            </a>
            <div className="p-5">
              <h3 className="dark:text-slate-100 font-semibold text-xl">
                <a
                  href={project.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:underline"
                >
                  {project.title}
                </a>
              </h3>
              <p className="text-slate-600 dark:text-slate-400">{project.tagline}</p>
              {project.details.length > 0 && (
                <ul className="mt-3 list-disc pl-5 flex flex-col gap-2 text-sm leading-relaxed">
                  {project.details.map((detail) => (
                    <li key={detail}>{detail}</li>
                  ))}
                </ul>
              )}
            </div>
          </article>
        ))}
      </div>
    </Section>
  );
}
