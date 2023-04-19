import Image from "next/image";
import headshot from "../public/kelsie.jpg";

const About = ({ displayFont }: any) => {
  return (
    <div className="z-10 w-full max-w-5xl snap-start min-h-screen flex flex-col gap-6 py-24">
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
            I studied to be a music teacher at the University of Aberdeen,
            before discovering a passion for software development. I've
            previously worked with tools such as Webflow and Bubble.io, before
            re-training as a software developer.
          </p>
          <p>
            I've had the privilege of working with an Australian agency shipping
            software in an agile team using Bubble.io, and I'm currently
            volunteering with the Scottish Tech Army to develop their Volunteer
            App.
          </p>
          <p>
            When I'm not coding, you might catch me performing magic, juggling,
            or playing piano.
          </p>
          <div className="space-y-3 mt-4">
            <h3 className={`${displayFont.className} text-lg font-medium text-stone-900 text-opacity-80`}>
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
