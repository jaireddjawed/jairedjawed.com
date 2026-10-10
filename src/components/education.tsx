import {JSX} from "react";
import Section from "@/components/section";
import SkillGrid from "@/components/skill-grid";
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
                  <span>
                    {degree.degree}
                    {degree.detail && (
                      <span className="block text-sm text-slate-500 dark:text-slate-400">
                        {degree.detail}
                      </span>
                    )}
                  </span>
                  {degree.graduated && (
                    <span className="text-sm text-slate-500 dark:text-slate-400 shrink-0">
                      {degree.graduated}
                    </span>
                  )}
                </li>
              ))}
            </ul>
            {school.note && (
              <p className="mt-3 text-sm text-slate-500 dark:text-slate-400">
                {school.note}
              </p>
            )}
          </div>
        ))}
      </div>

      <h3 className="dark:text-slate-100 font-semibold text-2xl mt-12 mb-6">
        Skills
      </h3>
      <SkillGrid groups={skills} />
    </Section>
  );
}
