import { adventuregrid, adventuregridLogo, pickup, pickupLogo, planetcareer, planetcareerLogo, surveyflow, surveyflowLogo } from "../assets/index";

export const projects = [
    {
      id: "1",
      logo: planetcareerLogo,
      project_name: "PlanetCareer",
      title: "Building a job board and application tracker for sustainable, green careers.",
      technology: ["NextJS", "Supabase", "TailwindCSS", "Node.js", "Typescript"],
      image: planetcareer,
      alt_image: "Homepage of PlanetCareer website",
      link: "https://www.planetcareer.co.uk/",
      github: "https://github.com/kelsiesmurphy/planetcareer",
    },
    {
      id: "2",
      logo: pickupLogo,
      project_name: "Pickup",
      title: "Collaborating on a litter picking platform for communities.",
      technology: ["React", "Java (Spring)", "TailwindCSS"],
      image: pickup,
      alt_image: "Homepage of Pickup website",
      link: "https://www.joinpickup.co/",
      github: "https://github.com/kelsiesmurphy/pickup",
    },
    {
      id: "3",
      logo: surveyflowLogo,
      project_name: "Surveyflow",
      title: "Modern surveys in minutes that helps you understand your customers on a deeper level",
      technology: ["React", "Supabase", "TailwindCSS", "Typescript"],
      image: surveyflow,
      alt_image: "omepage of Surveyflow website",
      link: "https://surveyflow.vercel.app/",
      github: "https://github.com/kelsiesmurphy/surveyflow",
    },
    {
      id: "4",
      logo: adventuregridLogo,
      project_name: "AdventureGrid",
      title: "An e-commerce tool selling adventure packages across Scotland",
      technology: ["Python", "Flask", "PostgreSQL", "HTML", "CSS (styled components)"],
      image: adventuregrid,
      alt_image: "Homepage of AdventureGrid website",
      link: "https://kelsiesmurphy.pythonanywhere.com/",
      github: "https://github.com/kelsiesmurphy/adventuregrid",
    },
  ];
  