import Image from "next/image";
import UseAnimations from "react-useanimations";
import github from "react-useanimations/lib/github";

const Project = ({ project, displayFont, index }: any) => {
  return (
    <div className={`z-10 snap-start h-screen flex flex-wrap gap-6 items-center justify-between ${index % 2 === 1 ? "flex-row-reverse" : "flex-row"}`}>
      <div className="space-y-6 max-w-[260px]">
        <Image
          src={project.logo}
          alt={project.project_name + " Logo"}
          width="200"
          height="0"
        />
        <h2
          className={`${displayFont.className} font-serif text-xl md:text-2xl font-medium text-stone-900 text-opacity-80`}
        >
          {project.title}
        </h2>
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

      <a
        href={project.link}
        className="aspect-[1440/960] max-w-[819px] hover:shadow-lg shadow-gray-500 transition-shadow duration-500 p-1 bg-gray-400 rounded-xl bg-clip-padding backdrop-filter backdrop-blur-md bg-opacity-30 border border-gray-100"
        target="_blank"
      >
        <div className="pb-2.5 pt-1.5 px-1 flex gap-2">
          <div className="bg-white bg-opacity-50 hover:bg-opacity-100 transition-all duration-300 rounded-full aspect-square w-3" />
          <div className="bg-white bg-opacity-50 hover:bg-opacity-100 transition-all duration-300 rounded-full aspect-square w-3" />
          <div className="bg-white bg-opacity-50 hover:bg-opacity-100 transition-all duration-300 rounded-full aspect-square w-3" />
        </div>
        <Image
          src={project.image}
          alt={project.alt_image}
          width="0"
          height="0"
          className="rounded-b-lg rounded-t-md"
        />
      </a>
    </div>
  );
};

export default Project;
