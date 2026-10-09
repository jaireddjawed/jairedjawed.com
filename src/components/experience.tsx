import {JSX} from "react";
import Section from "@/components/section";
import { experience } from "@/data/resume";

export default function Experience(): JSX.Element {
  return (
    <Section id="experience" title="Experience">
      <ol className="flex flex-col gap-10 border-l border-slate-300 dark:border-slate-700 pl-6">
        {experience.map((job) => (
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
                {job.note}
              </p>
            )}
            {job.details.length > 0 && (
              <ul className="mt-3 list-disc pl-5 flex flex-col gap-2 leading-relaxed">
                {job.details.map((detail) => (
                  <li key={detail}>{detail}</li>
                ))}
              </ul>
            )}
          </li>
        ))}
      </ol>
    </Section>
  );
}
