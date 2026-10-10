import Link from "next/link";
import CalEmbed from "@/components/cal-embed";
import Seo from "@/components/seo";
import Tutoring from "@/components/tutoring";
import { tutoring } from "@/data/resume";

export default function TutoringPage() {
  return (
    <>
      <Seo
        title="Tutoring | Jaired Jawed"
        description="Book a one-on-one coding tutoring session with Jaired Jawed in full-stack development or data visualization."
        path="/tutoring"
      />
      <nav className="mx-auto max-w-4xl px-6 pt-10">
        <Link href="/" className="text-accent hover:underline">
          ← Jaired Jawed
        </Link>
      </nav>
      <Tutoring
        booking={<CalEmbed calLink={tutoring.calLink} namespace="tutoring-session" />}
      />
    </>
  );
}
