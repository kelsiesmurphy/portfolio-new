import { adventuregrid, adventuregridLogo, pickup, pickupLogo, planetcareer, planetcareerLogo, surveyflow, surveyflowLogo } from "../assets/index";

export const projects = [
    {
      id: "planetcareer",
      logo: planetcareerLogo,
      project_name: "PlanetCareer",
      title: "Building a job board and application tracker for sustainable, green careers.",
      technology: ["NextJS", "Supabase", "TailwindCSS", "Node.js", "Typescript"],
      image: planetcareer,
      alt_image: "Homepage of PlanetCareer website",
      link: "https://www.planetcareer.co.uk/",
      github: "https://github.com/kelsiesmurphy/planetcareer",
      content_p1: "PlanetCareer started as a need of mine, as I was looking for employment opportunities and needed a tool to track my job applications. I was also having difficulties finding roles with sustainable, green values, and decided to design a job board as part of the project.",
      content_p2: "I chose NextJS, Typescript and TailwindCSS for the front-end of the application, and implemented the back-end of the app using Supabase. I learned a great deal about PostgreSQL, Row-level security and database triggers and functions in this project, and I expanded my knowledge in the front-end designing and building a responsive table and custom dropdowns. This is a project I intend to continue working on fo the forseeable future, as I will no doubt use it myself."
    },
    {
      id: "pickup",
      logo: pickupLogo,
      project_name: "Pickup",
      title: "Collaborating on a litter picking platform for communities.",
      technology: ["React", "Java (Spring)", "TailwindCSS"],
      image: pickup,
      alt_image: "Homepage of Pickup website",
      link: "https://www.joinpickup.co/",
      github: "https://github.com/kelsiesmurphy/pickup",
      content_p1: "Pickup is a community network for organising litter picking events and allow the users to track the litter collected in a leaderboard format. It is a web application with the front-end built in React, the back-end built in Java Spring, the hosting on Vercel and Neon/Digital Ocean respectively, and we even have an AWS S3 bucket set up for image storage. The authentication in the app is handled by Auth0.",
      content_p2: "I built this app with two CodeClan classmates, Kyle Fenlon and Josh Montgomery, for our capstone project, and I learned so much building this full stack app, from the hosting to the adoption of TailwindCSS for the styling. The back-end has some really useful RESTful endpoints to hit to get statistics, and we can load hundreds of thousands of litter items in our database. I spent most of my time in the front-end, but built out the data loading part of the back-end, where it fills the database with dummy data, pulling from two different APIs to add random user and location data."
    },
    {
      id: "surveyflow",
      logo: surveyflowLogo,
      project_name: "Surveyflow",
      title: "Modern surveys in minutes that helps you understand your customers on a deeper level",
      technology: ["React", "Supabase", "TailwindCSS", "Typescript"],
      image: surveyflow,
      alt_image: "omepage of Surveyflow website",
      link: "https://surveyflow.vercel.app/",
      github: "https://github.com/kelsiesmurphy/surveyflow",
      content_p1: "Surveyflow is a SAAS tool that handled post-purchase surveys for small business owners, designed and built as a personal project over 4 months. Key parts of the project include the authentication process and the pocketbase integration. It is built with Next.js, Typescript, PocketBase and TailwindCSS for styling.",
      content_p2: "My personal goals for this project were to stretch my knowledge and learn new technologies I had not learned whilst studying. I chose Next.js and Typescript initially, but ultimately decided that learning two technologies at once made development extremely slow, so I switched NextJS with React, and focused on the Typescript implementation. My next step for this project would be to implement the subscription functionality with Stripe, and market it to potential users."
    },
    {
      id: "adventuregrid",
      logo: adventuregridLogo,
      project_name: "AdventureGrid",
      title: "An e-commerce tool selling adventure packages across Scotland",
      technology: ["Python", "Flask", "PostgreSQL", "HTML", "CSS (styled components)"],
      image: adventuregrid,
      alt_image: "Homepage of AdventureGrid website",
      link: "https://kelsiesmurphy.pythonanywhere.com/",
      github: "https://github.com/kelsiesmurphy/adventuregrid",
      content_p1: "AdventureGrid is a fictional site that sells adventure packages around Scotland. For my first solo CodeClan project, I built the admin dashboard, as well as the landing page. It is a CRUD web application that runs the backend of the AdventureGrid site, managing experiences and users, using RESTful routes, a PostgreSQL database and Python (Flask).",
      content_p2: "I really enjoyed the styling of this project, and thinking through the user experience carefully. One of the key difficulties I encountered was actually the hosting of the demonstration site, as I had never hosted a Flask site before. I will return to the project in the future to add the e-commerce functionality."
    },
  ];
  