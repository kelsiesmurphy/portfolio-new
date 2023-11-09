import Image from "next/image";
import headshot from "../public/kelsie.jpg";

const About = ({ displayFont }: any) => {
  return (
    <div className="z-10 w-full max-w-5xl min-h-screen flex flex-col gap-6 py-24">
      <h2
        className={`${displayFont.className} text-2xl text-center md:text-left md:text-3xl font-medium text-stone-900 text-opacity-80`}
      >
        About Me
      </h2>
      <div className="flex flex-wrap-reverse gap-6 items-end justify-center md:justify-start">
        <div className="text-lg md:text-xl max-w-2xl font-light text-stone-700 flex flex-col gap-3">
          <p>
            Hello! My name is Kelsie and I enjoy designing and building software
            and websites with a focus on user experience.
          </p>
          <p>
            I am a software engineer with BJSS, a technology and engineering consultancy. I have also worked on the Volunteer App with the Scottish Tech Army. I studied at CodeClan, and continued my learning in the BJSS Academy.
          </p>
          <p>
            When I'm not coding, you might catch me performing magic, juggling,
            or playing piano.
          </p>
          <p>
            If you want to say hello, reach out to me at <a className="font-medium underline" href="mailto:kelsie@kelsiesmurphy.com">kelsie@kelsiesmurphy.com</a>
          </p>
          <div className="space-y-3 mt-4">
            <h3
              className={`${displayFont.className} text-lg font-medium text-stone-900 text-opacity-80`}
            >
              Here are a few technologies I've been working with recently:
            </h3>
            <ul className="list-disc list-inside columns-2">
              <li>Typescript</li>
              <li>Javascript (ES6+)</li>
              <li>Java</li>
              <li>Python</li>
              <li>React</li>
              <li>NextJS</li>
              <li>Node.js</li>
              <li>Supabase</li>
            </ul>
          </div>
        </div>
        <Image
          src={headshot}
          width="0"
          height="0"
          className="rounded-full shadow-md max-w-[120px] md:max-w-[280px]"
          alt="Kelsie Murphy smiling in a green field"
        />
      </div>
    </div>
  );
};

export default About;
