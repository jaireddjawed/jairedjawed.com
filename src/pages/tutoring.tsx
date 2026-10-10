import Link from "next/link";
import CalEmbed from "@/components/cal-embed";
import Experience from "@/components/experience";
import Section from "@/components/section";
import Seo from "@/components/seo";
import SkillGrid from "@/components/skill-grid";
import Tag from "@/components/tag";
import { experience, tutoring } from "@/data/resume";

export default function TutoringPage() {
  return (
    <>
      <Seo
        title="Coding Tutoring | Jaired Jawed"
        description={`One-on-one coding tutoring with Jaired Jawed in full-stack development and data visualization. ${tutoring.price} ${tutoring.priceUnit}.`}
        path="/tutoring"
      />
      <nav className="mx-auto max-w-4xl px-6 pt-10">
        <Link href="/" className="text-accent hover:underline">
          ← Jaired Jawed
        </Link>
      </nav>

      <Section id="tutoring" title="One-on-One Coding Tutoring">
        <p className="text-lg leading-relaxed">
          I&apos;m a software engineer at HashiCorp who spent over three years
          tutoring coding boot camp students and taught undergraduates as a
          teaching assistant at UC Riverside. Bring a project, a class, or a
          concept that isn&apos;t clicking, and we&apos;ll work through it
          together.
        </p>
        <div className="mt-6 flex flex-wrap gap-2">
          {tutoring.subjects.map((subject) => (
            <Tag key={subject}>{subject}</Tag>
          ))}
        </div>
        <a
          href="#book"
          className="mt-8 inline-block rounded-md bg-accent text-background px-5 py-2.5 font-semibold hover:opacity-80"
        >
          Book a session
        </a>
      </Section>

      <Section id="topics" title="What I Tutor">
        <SkillGrid groups={tutoring.topics} />
        <p className="mt-6 text-slate-600 dark:text-slate-400">
          Not sure whether your topic fits?{" "}
          <a href="mailto:me@jairedjawed.com" className="text-accent underline hover:no-underline">
            Email me
          </a>{" "}
          before you book.
        </p>
      </Section>

      <Section id="pricing" title="Pricing">
        <div className="rounded-lg border border-slate-300 dark:border-slate-700 p-8">
          <p className="flex flex-wrap items-baseline gap-x-3">
            <span className="font-heading dark:text-slate-100 font-semibold text-5xl">
              {tutoring.price}
            </span>
            <span className="text-lg text-slate-600 dark:text-slate-400">
              {tutoring.priceUnit}
            </span>
          </p>
          <ul className="mt-6 list-disc pl-5 flex flex-col gap-2 leading-relaxed">
            <li>One hour, one on one, focused on what you want to cover.</li>
            <li>Pick any open time on the calendar below.</li>
            <li>
              <span className="text-accent">Money-back guarantee.</span>{" "}
              {tutoring.guarantee}
            </li>
          </ul>
        </div>
      </Section>

      <Section id="expectations" title="What to Expect">
        <ul className="list-disc pl-5 flex flex-col gap-3 leading-relaxed">
          <li>
            <span className="dark:text-slate-100 font-semibold">
              An hour goes quickly.
            </span>{" "}
            It&apos;s enough to work through one topic, a stubborn bug, or a
            piece of a project. It isn&apos;t enough to cover a whole course
            or build an entire app.
          </li>
          <li>
            <span className="dark:text-slate-100 font-semibold">
              Come with specific questions.
            </span>{" "}
            Sessions go best when you bring the questions, code, error
            messages, or assignment you&apos;re stuck on, so we can start on
            what matters right away.
          </li>
          <li>
            <span className="dark:text-slate-100 font-semibold">
              Bigger goals take more than one session.
            </span>{" "}
            If you&apos;re learning a new stack or working on a larger
            project, we&apos;ll decide together what to tackle first and what
            to leave for next time.
          </li>
        </ul>
      </Section>

      <Experience
        id="background"
        title="Teaching Experience"
        jobs={experience.filter((job) => job.teaching)}
      />

      <Section id="book" title="Book a Session">
        <CalEmbed calLink={tutoring.calLink} namespace="tutoring-session" />
      </Section>
    </>
  );
}
