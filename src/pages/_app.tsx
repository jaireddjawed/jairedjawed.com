import "@/styles/globals.css";
import type { AppProps } from "next/app";
import Footer from "@/components/footer";
import { IBM_Plex_Mono, JetBrains_Mono } from "next/font/google";

const ibmPlexMono = IBM_Plex_Mono({
  subsets: ["latin"],
  weight: ["400", "600"],
  style: ["normal", "italic"],
  variable: "--font-ibm-plex-mono",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains-mono",
});

export default function App({ Component, pageProps }: AppProps) {
  return (
    <div className={`${ibmPlexMono.variable} ${jetbrainsMono.variable} font-mono`}>
      <Component {...pageProps} />
      <Footer />
    </div>
  );
}
