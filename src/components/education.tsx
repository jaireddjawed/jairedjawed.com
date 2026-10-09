import {JSX} from "react";
import Section from "@/components/section";
import { education, skills } from "@/data/resume";

export default function Education(): JSX.Element {
  return (
    <Section id="education" title="Education">
      <div className="flex flex-col gap-8">
        {education.map((school) => (
          <div key={school.school}>
            <h3 className="dark:text-slate-100 font-semibold text-xl">
              {school.school}
            </h3>
            <p className="text-slate-600 dark:text-slate-400">{school.location}</p>
            <ul className="mt-3 flex flex-col gap-1">
              {school.degrees.map((degree) => (
                <li key={degree.degree} className="flex justify-between gap-4">
                  <span>{degree.degree}</span>
                  <span className="text-sm text-slate-500 dark:text-slate-400 shrink-0">
                    {degree.graduated}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <h3 className="dark:text-slate-100 font-semibold text-2xl mt-12 mb-6">
        Skills
      </h3>
      <dl className="grid grid-cols-1 sm:grid-cols-[auto_1fr] gap-x-6 gap-y-3">
        {skills.map((group) => (
          <div key={group.label} className="contents">
            <dt className="dark:text-slate-100 font-semibold">{group.label}</dt>
            <dd className="flex flex-wrap gap-2">
              {group.items.map((item) => (
                <span
                  key={item}
                  className="rounded-full border border-slate-300 dark:border-slate-700 px-3 py-0.5 text-sm"
                >
                  {item}
                </span>
              ))}
            </dd>
          </div>
        ))}
      </dl>
    </Section>
  );
}
