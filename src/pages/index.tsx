import Link from "next/link";
import Main from "@/components/main";
import Experience from "@/components/experience";
import Location from "@/components/location";
import Education from "@/components/education";
import OffTheClock from "@/components/off-the-clock";
import Portfolio from "@/components/portfolio";
import Seo from "@/components/seo";
import Tutoring from "@/components/tutoring";
import { experience, personJsonLd } from "@/data/resume";

export default function Index() {
  return (
    <>
      <Seo
        title="Jaired Jawed | Software Engineer"
        description="Software Engineer at HashiCorp, an IBM Company, working on Vault and Kubernetes. I also build production web apps for small businesses and tutor full-stack development."
        path="/"
        jsonLd={personJsonLd}
      />
      <Main />
      <Experience jobs={experience.filter((job) => job.featured)}>
        <Link href="/experience" className="mt-10 inline-block font-semibold text-accent hover:underline">
          View full experience →
        </Link>
      </Experience>
      <Education />
      <Portfolio />
      <Tutoring />
      <OffTheClock />
      <Location />
    </>
  );
}
