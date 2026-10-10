import Head from "next/head";
import {JSX} from "react";

const siteUrl = "https://jairedjawed.com";

type SeoProps = {
  title: string;
  description: string;
  path: string;
};

export default function Seo({ title, description, path }: SeoProps): JSX.Element {
  const url = `${siteUrl}${path}`;
  const image = `${siteUrl}/og.png`;

  return (
    <Head>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="robots" content="noimageindex" />
      <link rel="canonical" href={url} />
      <meta property="og:type" content="website" />
      <meta property="og:site_name" content="Jaired Jawed" />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={url} />
      <meta property="og:image" content={image} />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      <meta property="og:image:alt" content="Jaired Jawed, Software Engineer at HashiCorp, an IBM Company" />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />
    </Head>
  );
}
