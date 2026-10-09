import Head from "next/head";
import Main from "@/components/main";
import Experience from "@/components/experience";
import Education from "@/components/education";
import Portfolio from "@/components/portfolio";

export default function Index() {
  return (
    <>
      <Head>
        <title>Jaired Jawed | Software Engineer</title>
      </Head>
      <Main />
      <Experience />
      <Education />
      <Portfolio />
    </>
  );
}
