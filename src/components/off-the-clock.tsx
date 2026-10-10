import Image from "next/image";
import {JSX} from "react";
import Section from "@/components/section";
import Tag from "@/components/tag";
import { interests } from "@/data/resume";

export default function OffTheClock(): JSX.Element {
  return (
    <Section id="off-the-clock" title="Off the Clock">
      <div className="flex flex-wrap gap-2">
        {interests.hobbies.map((hobby) => (
          <Tag key={hobby}>{hobby}</Tag>
        ))}
      </div>
      <p className="mt-6 text-lg leading-relaxed">{interests.story}</p>
      <div className="mt-10 grid grid-cols-2 md:grid-cols-4 gap-4">
        {interests.photos.map((photo) => (
          <figure
            key={photo.src}
            className="overflow-hidden rounded-lg border border-slate-300 dark:border-slate-700"
          >
            <Image
              src={photo.src}
              alt={photo.alt}
              width={768}
              height={1024}
              unoptimized
              className="aspect-[3/4] w-full object-cover"
            />
            <figcaption className="px-3 py-2 text-sm text-slate-500 dark:text-slate-400">
              {photo.caption}
            </figcaption>
          </figure>
        ))}
      </div>
    </Section>
  );
}
