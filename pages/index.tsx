import Image from "next/image";
import { Sora, Hanken_Grotesk } from "next/font/google";
import Hero from "@/components/Hero";

const sora = Sora({ subsets: ["latin"] });
const hankenGrotesk = Hanken_Grotesk({ subsets: ["latin"] });

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
      <main id="blur" className="flex min-h-screen flex-col items-center justify-between px-4">
        <Hero font1={sora} font2={hankenGrotesk}/>
        <Hero font1={sora} font2={hankenGrotesk}/>
        <Hero font1={sora} font2={hankenGrotesk}/>
        <Hero font1={sora} font2={hankenGrotesk}/>
        <Hero font1={sora} font2={hankenGrotesk}/>
      </main>
    </>
  );
}
