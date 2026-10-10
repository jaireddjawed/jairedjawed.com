import {JSX, ReactNode} from "react";

type SectionProps = {
  id: string;
  title: string;
  // Use 1 for the main heading of a page.
  level?: 1 | 2;
  children: ReactNode;
};

export default function Section({ id, title, level = 2, children }: SectionProps): JSX.Element {
  const Heading = level === 1 ? "h1" : "h2";

  return (
    <section id={id} className="relative bg-background px-6 py-16 scroll-mt-4">
      <div className="mx-auto max-w-4xl">
        <p className="text-accent text-sm mb-2" aria-hidden="true">
          {`// ${id}`}
        </p>
        <Heading className="dark:text-slate-100 font-semibold text-4xl mb-10">
          {title}
        </Heading>
        {children}
      </div>
    </section>
  );
}
