import dynamic from "next/dynamic";
import {JSX} from "react";

const ParticlesBg = dynamic(() => import("particles-bg"), { ssr: false });

export default function Main(): JSX.Element  {
  return (
    <div className="w-screen h-screen flex flex-col items-center justify-center gap-3">
      <ParticlesBg bg={true} type="polygon" />
      <h1 className="dark:text-slate-100 font-semibold text-7xl text-center">
        Jaired Jawed
      </h1>
      <h3 className="dark:text-slate-300 font-semibold text-2xl text-center">
        Software Engineer at HashiCorp, Inc.
      </h3>
    </div>
  );
}
