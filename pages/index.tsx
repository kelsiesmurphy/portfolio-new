import Hero from "@/components/Hero";
import About from "@/components/About";
import Footer from "@/components/Footer";
import Projects from "@/components/Projects";
import { Sora, Hanken_Grotesk } from "next/font/google";

const sora = Sora({ subsets: ["latin"], variable: "--font-sora" });
const hankenGrotesk = Hanken_Grotesk({
  subsets: ["latin"],
  variable: "--font-hanken",
});

export default function Home() {
  /* -- Glow effect -- */

  if (typeof window !== "undefined") {
    const blob = document.getElementById("blob");

    window.onpointermove = (event) => {
      const { clientX, clientY } = event;
      blob?.animate(
        {
          left: `${clientX}px`,
          top: `${clientY}px`,
        },
        { duration: 20000, fill: "forwards" }
      );
    };
  }

  return (
    <>
      <div id="blob"></div>
      <main
        id="blur"
        className={`${hankenGrotesk.variable} font-sans xl:h-screen flex snap-y snap-mandatory overflow-scroll flex-col items-center px-4`}
      >
        <Hero displayFont={sora}/>
        <About displayFont={sora}/>
        <Projects displayFont={sora}/>
        <Footer/>
      </main>
    </>
  );
}
