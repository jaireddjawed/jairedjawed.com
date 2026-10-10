import {JSX} from "react";
import Tag from "@/components/tag";
import { SkillGroup } from "@/data/resume";

export default function SkillGrid({ groups }: { groups: SkillGroup[] }): JSX.Element {
  return (
    <dl className="grid grid-cols-1 sm:grid-cols-[auto_1fr] gap-x-6 gap-y-3">
      {groups.map((group) => (
        <div key={group.label} className="contents">
          <dt className="dark:text-slate-100 font-semibold">{group.label}</dt>
          <dd className="flex flex-wrap gap-2">
            {group.items.map((item) => (
              <Tag key={item}>{item}</Tag>
            ))}
          </dd>
        </div>
      ))}
    </dl>
  );
}
