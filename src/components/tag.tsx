import {JSX, ReactNode} from "react";

export default function Tag({ children }: { children: ReactNode }): JSX.Element {
  return (
    <span className="rounded-full border border-accent/40 text-accent px-3 py-0.5 text-sm">
      {children}
    </span>
  );
}
