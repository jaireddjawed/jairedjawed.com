import {JSX} from "react";
import Section from "@/components/section";
import { laMap } from "@/data/la-map";

export default function Location(): JSX.Element {
  return (
    <Section id="location" title="Greater Los Angeles">
      <figure className="overflow-hidden rounded-lg border border-slate-300 dark:border-slate-700">
        <svg
          viewBox={`-10 -10 ${laMap.width + 20} ${laMap.height + 20}`}
          role="img"
          aria-label="Dot map of the Greater Los Angeles coastline with a pin on Los Angeles"
          className="w-full text-slate-400 dark:text-slate-600"
        >
          <path
            d={laMap.dots}
            stroke="currentColor"
            strokeWidth={3}
            strokeLinecap="round"
            fill="none"
          />
          <circle
            cx={laMap.pin.x}
            cy={laMap.pin.y}
            r={7}
            className="fill-accent animate-ping motion-reduce:animate-none origin-center [transform-box:fill-box]"
          />
          <circle
            cx={laMap.pin.x}
            cy={laMap.pin.y}
            r={7}
            className="fill-accent stroke-background"
            strokeWidth={2}
          />
        </svg>
        <figcaption className="flex flex-wrap justify-between gap-x-6 gap-y-1 border-t border-slate-300 dark:border-slate-700 px-5 py-3 text-sm text-slate-500 dark:text-slate-400">
          <span>Based in Greater Los Angeles, working remotely</span>
          <span>34.05° N, 118.24° W</span>
        </figcaption>
      </figure>
    </Section>
  );
}
