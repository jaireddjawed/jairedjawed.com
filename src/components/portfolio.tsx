import Image from "next/image";
import {JSX, ReactNode} from "react";
import Section from "@/components/section";
import Tag from "@/components/tag";
import { Project, projects } from "@/data/resume";

type PortfolioProps = {
  title?: string;
  intro?: ReactNode;
  items?: Project[];
  children?: ReactNode;
};

export default function Portfolio({
  title = "Portfolio",
  intro = "No to-do apps here. Real businesses, real customers, real money. If anything breaks, I hear about it.",
  items = projects,
  children,
}: PortfolioProps): JSX.Element {
  return (
    <Section id="portfolio" title={title}>
      <p className="-mt-6 mb-10 text-lg text-slate-600 dark:text-slate-400">
        {intro}
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {items.map((project) => {
          const image = (
            <Image
              src={project.image}
              alt={`Screenshot of ${project.title}`}
              width={1568}
              height={966}
              className="aspect-[16/10] w-full object-cover object-top"
            />
          );

          return (
            <article
              key={project.title}
              className="overflow-hidden rounded-lg border border-slate-300 dark:border-slate-700 bg-background transition duration-200 ease-out hover:scale-105 hover:border-accent hover:shadow-xl motion-reduce:transition-none motion-reduce:hover:scale-100"
            >
              {project.url ? (
                <a href={project.url} target="_blank" rel="noopener noreferrer">
                  {image}
                </a>
              ) : (
                image
              )}
              <div className="p-5">
                <h3 className="dark:text-slate-100 font-semibold text-xl">
                  {project.url ? (
                    <a
                      href={project.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:underline"
                    >
                      {project.title}
                    </a>
                  ) : (
                    project.title
                  )}
                </h3>
                <p className="text-slate-600 dark:text-slate-400">{project.tagline}</p>
                {project.stack.length > 0 && (
                  <div className="mt-3 flex flex-wrap gap-2">
                    {project.stack.map((item) => (
                      <Tag key={item}>{item}</Tag>
                    ))}
                  </div>
                )}
                {project.details.length > 0 && (
                  <ul className="mt-3 list-disc pl-5 flex flex-col gap-2 text-sm leading-relaxed">
                    {project.details.map((detail) => (
                      <li key={detail}>{detail}</li>
                    ))}
                  </ul>
                )}
              </div>
            </article>
          );
        })}
      </div>
      {children}
    </Section>
  );
}
