import {JSX, ReactNode} from "react";
import Section from "@/components/section";
import { Job } from "@/data/resume";

type ExperienceProps = {
  jobs: Job[];
  id?: string;
  title?: string;
  children?: ReactNode;
};

function renderDetail(detail: string): ReactNode[] {
  return detail.split(/(\[[^\]]+\]\([^)]+\))/).map((part) => {
    const link = part.match(/^\[([^\]]+)\]\(([^)]+)\)$/);
    if (!link) {
      return part;
    }
    return (
      <a
        key={link[2]}
        href={link[2]}
        target="_blank"
        rel="noopener noreferrer"
        className="text-accent underline hover:no-underline"
      >
        {link[1]}
      </a>
    );
  });
}

export default function Experience({
  jobs,
  id = "experience",
  title = "Experience",
  children,
}: ExperienceProps): JSX.Element {
  return (
    <Section id={id} title={title}>
      <ol className="flex flex-col gap-10 border-l border-slate-300 dark:border-slate-700 pl-6">
        {jobs.map((job) => (
          <li key={`${job.company}-${job.title}`}>
            <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-x-4">
              <h3 className="dark:text-slate-100 font-semibold text-xl">
                {job.title}
              </h3>
              <span className="text-sm text-slate-500 dark:text-slate-400 shrink-0">
                {job.dates}
              </span>
            </div>
            <p className="text-slate-600 dark:text-slate-400">
              {job.company}
              {job.location && ` · ${job.location}`}
            </p>
            {job.note && (
              <p className="text-sm italic text-slate-500 dark:text-slate-400">
                {renderDetail(job.note)}
              </p>
            )}
            {job.details.length > 0 && (
              <ul className="mt-3 list-disc pl-5 flex flex-col gap-2 leading-relaxed">
                {job.details.map((detail) => (
                  <li key={detail}>{renderDetail(detail)}</li>
                ))}
              </ul>
            )}
          </li>
        ))}
      </ol>
      {children}
    </Section>
  );
}
