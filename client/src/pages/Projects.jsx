import { useState } from "react";
import { motion } from "framer-motion";
import Header from "../components/pageComponents/Header";
import Footer from "../components/pageComponents/Footer";
import ScrollReveal from "../components/animated/ScrollReveal";
import ParticleBackground from "../components/experimental/ParticleBackground";
import PhysicsCursor from "../components/ui/PhysicsCursor";

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
    // ... add your other projects here
  ];

  const filters = ["All", "React", "JavaScript", "Bootstrap", "Node.js", "php"];

  const filteredProjects =
    activeFilter === "All"
      ? projects
      : projects.filter((project) => {
          const filterLower = activeFilter.toLowerCase();

          const matchCategory =
            typeof project.category === "string" &&
            project.category.toLowerCase() === filterLower;

          const matchTechnology =
            Array.isArray(project.technologies) &&
            project.technologies.some(
              (tech) => tech.toLowerCase() === filterLower
            );

          return matchCategory || matchTechnology;
        });

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

          {/* Filter Buttons */}
          <div className="flex flex-wrap justify-center gap-2 mb-8">
            {filters.map((filter) => (
              <motion.button
                key={filter}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setActiveFilter(filter)}
                className={`px-3 py-1 text-sm rounded transition ${
                  activeFilter === filter
                    ? "bg-yellow-500 text-white shadow"
                    : "bg-gray-100 text-gray-700 hover:bg-gray-200 dark:bg-gray-800 dark:text-gray-300 dark:hover:bg-gray-700"
                }`}
              >
                {filter}
              </motion.button>
            ))}
          </div>

          {/* Projects Grid */}
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {filteredProjects.map((project) => (
              <motion.div
                key={project.id}
                whileHover={{ scale: 1.02 }}
                className="flex flex-col overflow-hidden bg-white rounded-lg shadow hover:shadow-lg dark:bg-gray-800"
              >
                <img
                  src={project.image}
                  alt={project.title}
                  className="object-cover w-full h-48 sm:h-56"
                />

                <div className="p-4 flex flex-col flex-grow">
                  <h3 className="mb-2 text-xl font-bold text-gray-800 dark:text-white">
                    {project.title}
                  </h3>

                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.map((tech, index) => (
                      <span
                        key={index}
                        className="px-2 py-1 text-xs font-semibold text-gray-800 bg-yellow-100 rounded dark:bg-yellow-700 dark:text-white"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block w-full text-center px-4 py-2 mt-auto text-sm font-semibold text-white bg-yellow-500 rounded-lg shadow hover:bg-yellow-600 transition-all duration-300 ease-in-out"
                  >
                    View Project
                  </a>
                </div>
              </motion.div>
            ))}

            {filteredProjects.length === 0 && (
              <div className="col-span-full text-center text-gray-500">
                No projects found.
              </div>
            )}
          </div>
        </ScrollReveal>
      </main>

      <Footer />
    </div>
  );
};

export default Projects;
