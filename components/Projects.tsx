import { projects } from "../constants/projects"
import Project from "./Project";

const Projects = ({ displayFont }: any) => {
  return (
    <div className="w-full z-10 flex gap-6 max-w-6xl">
      <ul className="flex-1">
        {projects.map((project, index) => {
          return (
            <li key={index}>
              <Project project={project} displayFont={displayFont} index={index}/>
            </li>
          )
        })}
      </ul>
    </div>
  );
};

export default Projects;
