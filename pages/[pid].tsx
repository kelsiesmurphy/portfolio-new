import { useRouter } from "next/router";
import { projects } from "../constants/projects";
import { useEffect, useState } from "react";
import UseAnimations from "react-useanimations";
import github from "react-useanimations/lib/github";
import Image from "next/image";
import { Sora, Hanken_Grotesk } from "next/font/google";
import PidNavigation from "@/components/PidNavigation";
import Footer from "@/components/Footer";

const sora = Sora({ subsets: ["latin"], variable: "--font-sora" });
const hankenGrotesk = Hanken_Grotesk({
  subsets: ["latin"],
  variable: "--font-hanken",
});

const SelectedProject = () => {
  const router = useRouter();
  const { pid } = router.query;

  const [project, setProject] = useState<any>();

  useEffect(() => {
    const newProject = projects.filter((project) => project.id === pid)[0];
    setProject(newProject);
  }, [pid]);

  if (project) {
    return (
      <>
        <div id="blob"></div>
        <main
          id="blur"
          className={`${hankenGrotesk.className} z-10 min-h-screen font-sans flex items-center flex-col gap-6 px-4`}
        >
          <PidNavigation currentProject={project}/>
          <div className="max-w-7xl py-6 md:py-24 flex gap-12 flex-wrap">
            <div className="space-y-6 lg:max-w-[320px]">
              <Image
                src={project.logo}
                alt={project.project_name + " Logo"}
                width="0"
                height="0"
                className="w-[160px] md:w-[200px] aspect-[200/57] mb-6"
              />
              <h1
                className={`${sora.className} font-serif text-lg md:text-2xl font-medium text-stone-900 text-opacity-80`}
              >
                {project.title}
              </h1>
              <ul className="flex flex-wrap gap-4">
                {project.technology.map((techItem: any, index: number) => {
                  return (
                    <li key={index} className="text-stone-500">
                      {techItem}
                    </li>
                  );
                })}
              </ul>
              <a
                href={project.github}
                target="_blank"
                className="flex bg-white hover:bg-stone-100 border border-stone-300 shadow-sm text-stone-700 py-2 px-3.5 rounded-lg transition-colors items-center justify-center md:max-w-[160px] gap-2"
              >
                <UseAnimations
                  animation={github}
                  strokeColor={"#44403c"}
                  loop={true}
                  autoPlay={true}
                  size={24}
                />
                Github
              </a>
            </div>
            <div className="text-lg md:text-2xl max-w-2xl font-light text-stone-700 flex flex-col gap-3">
              <p>{project.content_p1}</p>
              <p>{project.content_p2}</p>
            </div>
          </div>
        <Footer />
        </main>
      </>
    );
  }
  else {
    return (
      <p>Error: failed to load project</p>
    )
  }
};

export default SelectedProject;
