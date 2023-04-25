import Image from "next/image";
import logomark from "../public/logomark.png";
import { projects } from "../constants/projects";
import Link from "next/link";

const PidNavigation = ({ currentProject }: any) => {
  return (
    <div className="w-full md:mt-12 px-4 md:px-24 z-10 gap-6">
      <div className="flex py-6 justify-center md:justify-between items-center gap-4 flex-wrap">
        <Link href="/" className="min-w-[200px] md:min-w-0 flex justify-center">
          <Image
            alt="Kelsie Murphy Logo"
            src={logomark}
            width="60"
            height="0"
          />
        </Link>
        <ul className="flex flex-col md:flex-row gap-6 text-stone-500 text-center">
          {projects.map((project, index) => {
            return (
              <li
                key={index}
                className={`hover:underline ${
                  currentProject === project ? "underline" : ""
                }`}
              >
                <Link href={`/${project.id}`}>{project.project_name}</Link>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
};

export default PidNavigation;
