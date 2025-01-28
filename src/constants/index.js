import GrowIT from "../assets/projects/GrowIT.jpg";
import Lamentis from "../assets/projects/Lamentis.jpg";
import modeling from "../assets/projects/modeling.jpg";
import BlogApp from "../assets/projects/BlogApp.jpg";
import portfoliophoto from "../assets/projects/portfoliophoto.jpg";


export const HERO_CONTENT = `I am pursuing my MCA from Manipal University, Jaipur, Rajasthan. I am seeking an innovating and challenging career in a 
growth-oriented organization, which offers challenging opportunities and utilizes my knowledge & skills, and enables to 
progress my career. Skilled in various languages like C, C++, Java, React, Python and SQL, MongoDB.`;

export const ABOUT_TEXT = `Hi, I’m Shyam Gupta, a passionate web developer with expertise in HTML, CSS, JavaScript, React, and full-stack technologies. I’ve completed my Master’s in Computer Applications (MCA) from Manipal University, achieving academic excellence with a GPA of 8.2.
I’ve honed my skills as a Frontend Development Intern at Lamentis Software Pvt. Ltd. and Roton Consultancy Pvt. Ltd., building responsive, user-friendly web interfaces and collaborating with senior developers to integrate frontend and backend systems.
In addition to professional experience, I’ve worked on various freelance projects, including content writing, graphic design, and website development, tailored to clients' needs.
I thrive on solving complex problems, managing time effectively, and leading projects. My recent full-stack blog platform built with Next.js and MongoDB highlights my ability to create scalable, user-centric applications.
When I’m not coding, I enjoy exploring new technologies, refining my skills, and embracing challenges. Let’s create something amazing together!`;

export const EXPERIENCES = [
  {
    year: "Feb 2024 - Aug 2024",
    role: "Frontend Development Intern",
    company: "Lamentis Software Pvt. Ltd.",
    description: `Completed 6-month internship specializing in HTML, CSS, JavaScript, and React. Collaborated with 
              senior developers to integrate frontend interfaces with backend systems, ensuring seam- less functionality. 
              Demonstrated adaptability and a strong eagerness to learn in a fast-paced development environment. 
`,
    technologies: ["Javascript", "React.js", "Next.js", "mongoDB"],
  },
  {
    year: "Jun 2021 - Dec 2021",
    role: "Business Development Associate(BDA)",
    company: "Roton Consultancy, Jaipur",
    description: `Assisted in lead generation and market research, identifying potential clients and opportunities.  
                Enhanced communication skills through client outreach and supported the sales team in strategizing business growth.`,
    technologies: ["HTML", "CSS", "Vue.js", "mySQL"],
  },
  {
    year: "Jun 2021 - Dec 2021",
    role: "Frontend Developer Intern",
    company: "Roton Consultancy, Jaipur",
    description: `Designed and developed interactive front-end interfaces using HTML, CSS, and JavaScript, enhancing user experience and 
                  responsiveness. Collaborated on data integration to dynamically display content, streamlining user interactions and 
                  improving interface functionality. `,
    technologies: ["Lead Generation", "Market Research", "Client Communication", "Sales Strategy"]

  },
];

export const PROJECTS = [
  {
    title: "IT Services Website",
    image: GrowIT,
    description:
      "The GrowIT website is a one-stop platform for showcasing a company’s expertise in web design, app development, digital marketing, and graphic designing. This project reflects my ability to create professional websites that effectively communicate business services and cater to diverse audience needs.",
    technologies: ["HTML", "CSS", "Bootstrap", "JavaScript"],
    link: "https://growitservices.netlify.app/", // Add the link to the live website
  },
  {
    title: "Portfolio Website",
    image: portfoliophoto,
    description:
      "A personal portfolio website showcasing projects, skills, and contact information.",
    technologies: ["HTML", "CSS", "React", "Tailwindcss"],
    link: "https://myportfolioshyam.netlify.app/", // Add the link to the live website
  },
  {
    title: "Blogging Platform",
    image: BlogApp,
    description:
      "Developed a dynamic full-stack blog platform using Next.js and MongoDB, implementing features such as user authentication for secure access, CRUD functionalities for blog management, and a commenting system to enhance user engagement.",
    technologies: ["HTML", "CSS", "React", "Next", "MongoDB"],
    link: "https://eternatech.netlify.app/", // Add the link to the live website
  },
];

export const CONTACT = {
  address: "6, Vyas Mohalla Begas, Jaipur ",
  phoneNo: "+91 7239882623 ",
  email: "shyamgupta7239@gmail.com",
};
