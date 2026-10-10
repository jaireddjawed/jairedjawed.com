import Link from "next/link";
import Portfolio from "@/components/portfolio";
import Section from "@/components/section";
import Seo from "@/components/seo";
import { projects, webDevelopment, webDevelopmentJsonLd } from "@/data/resume";

const quoteLink = `mailto:${webDevelopment.email}?subject=${encodeURIComponent("Website project")}`;

export default function WebDevelopmentPage() {
  return (
    <>
      <Seo
        title="Website Design and Development for Small Businesses | Jaired Jawed"
        description="Custom websites, online stores, and booking systems for small businesses, designed and built by Jaired Jawed. Email for a quote."
        path="/web-development"
        jsonLd={webDevelopmentJsonLd}
      />
      <nav className="mx-auto max-w-4xl px-6 pt-10">
        <Link href="/" className="text-accent hover:underline">
          ← Jaired Jawed
        </Link>
      </nav>

      <Section id="websites" title="Website Design and Development" level={1}>
        <p className="text-lg leading-relaxed">
          I design and build websites for small businesses: sites that take
          orders, book appointments, and process payments, not just look
          good. I&apos;m a software engineer at HashiCorp, and I bring the
          same care to a café&apos;s storefront that I do to production
          infrastructure.
        </p>
        <a
          href={quoteLink}
          className="mt-8 inline-block rounded-md bg-accent text-background px-5 py-2.5 font-semibold hover:opacity-80"
        >
          Email me for a quote
        </a>
      </Section>

      <Section id="services" title="What I Build">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {webDevelopment.services.map((service) => (
            <div
              key={service.title}
              className="rounded-lg border border-slate-300 dark:border-slate-700 p-6"
            >
              <h3 className="dark:text-slate-100 font-semibold text-xl">
                {service.title}
              </h3>
              <p className="mt-2 leading-relaxed">{service.description}</p>
            </div>
          ))}
        </div>
      </Section>

      <Portfolio
        title="Recent Work"
        intro="Live sites I designed and built for clients. Click any of them to see it running."
        items={projects.filter((project) => project.client)}
      />

      <Section id="process" title="How It Works">
        <ol className="flex flex-col gap-8 border-l border-slate-300 dark:border-slate-700 pl-6">
          {webDevelopment.process.map((step, index) => (
            <li key={step.title}>
              <p className="text-accent text-sm">{`0${index + 1}`}</p>
              <h3 className="dark:text-slate-100 font-semibold text-xl">
                {step.title}
              </h3>
              <p className="mt-1 leading-relaxed">{step.description}</p>
            </li>
          ))}
        </ol>
      </Section>

      <Section id="quote" title="Get a Quote">
        <div className="rounded-lg border border-slate-300 dark:border-slate-700 p-8">
          <p className="text-lg leading-relaxed">
            Every project is different, so I price each one individually.
            Email me and I&apos;ll get back to you with questions and a quote.
            It helps if you include:
          </p>
          <ul className="mt-4 list-disc pl-5 flex flex-col gap-2 leading-relaxed">
            <li>What your business does.</li>
            <li>What you need the site to do (sell, book, inform).</li>
            <li>Whether you have an existing site, logo, or branding.</li>
            <li>When you&apos;d like to launch.</li>
          </ul>
          <a
            href={quoteLink}
            className="mt-8 inline-block rounded-md bg-accent text-background px-5 py-2.5 font-semibold hover:opacity-80"
          >
            {webDevelopment.email}
          </a>
        </div>
      </Section>
    </>
  );
}
