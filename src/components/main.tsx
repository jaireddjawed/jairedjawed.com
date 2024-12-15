import dynamic from "next/dynamic";

const ParticlesBg = dynamic(() => import("particles-bg"), { ssr: false });

function Banner() {
  return (
    <div className="border border-white p-3 m-2 mb-6 rounded-full text-center">
      Tutoring service resumes on <strong>Jan 6, 2025</strong>. Reserve a
      tutoring session in advance{" "}
      <a href="https://tutoring.jairedjawed.com" className="text-blue-600">
        here
      </a>
      .
    </div>
  );
}

export default function Main() {
  return (
    <div className="w-screen h-screen flex flex-col items-center justify-center gap-3">
      <ParticlesBg bg={true} type="polygon" />
      <Banner />
      <h1 className="dark:text-slate-100 font-semibold text-7xl text-center">
        Jaired Jawed
      </h1>
      <h3 className="dark:text-slate-300 font-semibold text-2xl text-center">
        Software Engineer at HashiCorp, Inc.
      </h3>
    </div>
  );
}
