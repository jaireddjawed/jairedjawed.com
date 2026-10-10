import Link from "next/link";
import {JSX, ReactNode} from "react";
import Section from "@/components/section";
import Tag from "@/components/tag";
import { tutoring } from "@/data/resume";

type TutoringProps = {
  // Rendered below the pitch in place of the "Book a session" button.
  booking?: ReactNode;
};

export default function Tutoring({ booking }: TutoringProps): JSX.Element {
  return (
    <Section id="tutoring" title="Tutoring">
      <div className="rounded-lg border border-slate-300 dark:border-slate-700 p-8 flex flex-col items-start gap-5">
        <p className="text-lg leading-relaxed">
          I also tutor coding one on one. I spent over three years tutoring
          boot camp students and was a teaching assistant at UC Riverside, so
          I can meet you wherever you are.
        </p>
        <div className="flex flex-wrap gap-2">
          {tutoring.subjects.map((subject) => (
            <Tag key={subject}>{subject}</Tag>
          ))}
        </div>
        {!booking && (
          <Link
            href="/tutoring"
            className="rounded-md bg-accent text-background px-5 py-2.5 font-semibold hover:opacity-80"
          >
            Book a session
          </Link>
        )}
      </div>
      {booking && <div className="mt-10">{booking}</div>}
    </Section>
  );
}
