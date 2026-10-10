import {JSX, ReactNode} from "react";

type SectionProps = {
  id: string;
  title: string;
  children: ReactNode;
};

export default function Section({ id, title, children }: SectionProps): JSX.Element {
  return (
    <section id={id} className="relative bg-background px-6 py-16 scroll-mt-4">
      <div className="mx-auto max-w-4xl">
        <p className="text-accent text-sm mb-2" aria-hidden="true">
          {`// ${id}`}
        </p>
        <h2 className="dark:text-slate-100 font-semibold text-4xl mb-10">
          {title}
        </h2>
        {children}
      </div>
    </section>
  );
}
