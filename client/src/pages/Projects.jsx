import { useState } from "react";
import { motion } from "framer-motion";
import Header from "../components/pageComponents/Header";
import Footer from "../components/pageComponents/Footer";
import ParticleBackground from "../components/experimental/ParticleBackground";
import PhysicsCursor from "../components/ui/PhysicsCursor";
import ScrollReveal from "../components/animated/ScrollReveal";

const Projects = () => {
  const [activeFilter, setActiveFilter] = useState("All");
  const projects = [
    {
      id: 1,
      title: "Ableton",
      image: "/images/1.png",
      technologies: ["HTML", "CSS", "JavaScript"],
      category: "JavaScript",
      link: "https://github.com/Bush1122/Ableton.git",
    },
    {
      id: 2,
      title: "Constra",
      description: "Enhanced workflow using HTML, CSS, Bootstrap, React.js",
      image: "/images/2.png",
      technologies: ["HTML", "Bootstrap", "React"],
      category: "React",
      link: "https://www.linkedin.com/posts/bushra-yousaf-9b6675240_webdevelopment-javascript-html-activity-7218691521133371392-2TgT",
    },
    {
      id: 3,
      title: "Namud-e-Sehar Foundation",
      description: "Drag and drop task board with authentication",
      image: "/images/3.png",
      technologies: ["React", "Node.js", "Express"],
      category: "React",
      link: "https://www.linkedin.com/posts/bushra-yousaf-9b6675240_linkedin-techforgood-reactjs-activity-7259083468955914240-9VWT",
    },
    {
      id: 4,
      title: "Pluse",
      description: "Online reservation system",
      image: "/images/4.png",
      technologies: ["HTML", "Bootstrap", "JavaScript"],
      category: "JavaScript",
      link: "https://github.com/Bush1122/Pluse.git",
    },
    {
      id: 5,
      title: "Online Store",
      description: "Weather data with 5-day forecast",
      image: "/images/5.png",
      technologies: ["HTML", "Bootstrap", "React"],
      category: "React",
      link: "#",
    },
    {
      id: 6,
      title: "ATS CV Checker",
      description: "Dashboard with interactive charts",
      image: "/images/6.png",
      technologies: ["HTML", "Bootstrap", "JavaScript"],
      category: "React",
      link: "https://www.facebook.com/share/r/19CXvwUVnF/",
    },
    {
      id: 7,
      title: "Online Quran Service",
      description: "Marketing landing page with animations",
      image: "/images/7.png",
      technologies: ["HTML", "Bootstrap", "React"],
      category: "React",
      link: "https://www.linkedin.com/posts/bushra-yousaf-9b6675240_reduxjs-softwaredevelopment-ezitech-activity-7234435288205324289-3E5F",
    },
    {
      id: 8,
      title: "Travel Ticket (CRUD)",
      description: "Admin panel with CRUD",
      image: "/images/8.png",
      technologies: ["React", "Node.js", "MongoDB"],
      category: "Redux",
      link: "https://youtu.be/tK-2LOAWgzg?si=TXMQ-Irp169xB23_",
    },
    {
      id: 9,
      title: "Notepad App",
      description: "CRUD with Node.js and MongoDB",
      image: "/images/10.png",
      technologies: ["React", "Node.js", "MongoDB"],
      category: "React",
      link: "https://www.linkedin.com/posts/bushra-yousaf-9b6675240_nodejs-expressjs-ejs-activity-7225744621472014337-iVZe",
    },
    {
      id: 10,
      title: "CRUD operations",
      description: "Full CRUD admin panel",
      image: "/images/11.png",
      technologies: ["React", "Node.js", "MongoDB"],
      category: "React",
      link: "https://www.linkedin.com/posts/bushra-yousaf-9b6675240_nodejs-expressjs-ejs-activity-7228362366478909440-PiGQ",
    },
    {
      id: 11,
      title: "User App",
      description: "Admin panel for users",
      image: "/images/12.png",
      technologies: ["React", "Node.js", "MongoDB"],
      category: "React",
      link: "https://www.linkedin.com/posts/bushra-yousaf-9b6675240_webdevelopment-fullstackdevelopment-javascript-activity-7236337059467063298-1vpQ",
    },
  ];

  const filters = ["All", "React", "JavaScript", "Bootstrap", "Node.js"];

  const filteredProjects =
    activeFilter === "All"
      ? projects
      : projects.filter(
          (project) =>
            project.technologies.some((tech) =>
              tech.toLowerCase().includes(activeFilter.toLowerCase())
            ) || project.category.toLowerCase() === activeFilter.toLowerCase()
        );

  return (
    <div className="relative min-h-screen bg-gray-50 dark:bg-gray-900">
      <div className="absolute inset-0 -z-10">
        <ParticleBackground />
      </div>
      <PhysicsCursor />
      <Header />

      <main className="container relative z-20 px-4 py-8 mx-auto">
        <ScrollReveal delay={0.2}>
          <div className="mb-10 text-center mt-14">
            <h1 className="text-3xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-5xl">
              My Projects
            </h1>
            <div className="w-20 h-1 mx-auto my-4 bg-gradient-to-r from-yellow-400 to-yellow-600" />
            <p className="max-w-2xl mx-auto text-lg text-gray-600 dark:text-gray-300">
              Projects showcasing different technologies and skills.
            </p>
          </div>

          <div className="flex flex-wrap justify-center gap-2 mb-8">
            {filters.map((filter) => (
              <motion.button
                key={filter}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setActiveFilter(filter)}
                className={`px-3 py-1 text-sm rounded ${
                  activeFilter === filter
                    ? "bg-yellow-500 text-white"
                    : "bg-gray-100 text-gray-700 hover:bg-gray-200 dark:bg-gray-800 dark:text-gray-300 dark:hover:bg-gray-700"
                }`}
              >
                {filter}
              </motion.button>
            ))}
          </div>

          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {filteredProjects.map((project) => (
              <motion.div
                key={project.id}
                whileHover={{ y: -5 }}
                className="overflow-hidden bg-white rounded-lg shadow dark:bg-gray-800"
              >
                <div className="relative">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="object-cover w-full h-48"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
                  <div className="absolute bottom-0 left-0 right-0 p-4">
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech) => (
                        <span
                          key={tech}
                          className="px-2 py-1 text-xs font-medium text-white bg-black rounded-full bg-opacity-70"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="mb-2 text-xl font-semibold text-gray-900 dark:text-white">
                    {project.title}
                  </h3>
                  {project.description && (
                    <p className="mb-4 text-gray-600 dark:text-gray-300">
                      {project.description}
                    </p>
                  )}
                  <div className="flex justify-between">
                    <motion.a
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-4 py-2 text-sm font-medium text-white transition-all bg-yellow-500 rounded-md hover:bg-yellow-600"
                    >
                      View Project
                    </motion.a>
                    <motion.a
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center px-4 py-2 text-sm font-medium text-gray-700 transition-all bg-gray-100 rounded-md dark:text-gray-300 dark:bg-gray-700 hover:bg-gray-200 dark:hover:bg-gray-600"
                    >
                      Code
                      <svg
                        className="w-4 h-4 ml-1"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"
                        />
                      </svg>
                    </motion.a>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {filteredProjects.length === 0 && (
            <div className="py-10 text-center text-gray-600 dark:text-gray-400">
              No projects found.
            </div>
          )}
        </ScrollReveal>
      </main>

      <Footer />
    </div>
  );
};

export default Projects;
