import Link from "next/link";
import Experience from "@/components/experience";
import Seo from "@/components/seo";
import { experience } from "@/data/resume";

export default function ExperiencePage() {
  return (
    <>
      <Seo
        title="Experience | Jaired Jawed"
        description="Jaired Jawed's full work history, from HashiCorp Vault engineering to internships, teaching, and contract work."
        path="/experience"
      />
      <nav className="mx-auto max-w-4xl px-6 pt-10">
        <Link href="/" className="text-accent hover:underline">
          ← Jaired Jawed
        </Link>
      </nav>
      <Experience jobs={experience} />
    </>
  );
}
