import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Header from "../components/pageComponents/Header";
import Footer from "../components/pageComponents/Footer";
import PhysicsCursor from "../components/ui/PhysicsCursor";
import ParticleBackground from "../components/experimental/ParticleBackground";
import ScrollReveal from "../components/animated/ScrollReveal";
import { useTheme } from "../context/ThemeContext";

const Projects = () => {
  const [activeFilter, setActiveFilter] = useState("All");
  const [selectedProject, setSelectedProject] = useState(null);
  const { theme } = useTheme();

  const projects = [
    {
      id: 1,
      title: "Ableton",
      description: "Ableton landing page clone",
      image: "/images/1.png",
      technologies: ["HTML", "CSS", "JavaScript"],
      category: "JavaScript",
      link: "https://github.com/Bush1122/Ableton.git",
      date: "Jan 2023",
    },
    {
      id: 2,
      title: "Constra",
      description: "Construction company website",
      image: "/images/2.png",
      technologies: ["HTML", "Bootstrap", "React"],
      category: "React",
      link: "https://www.linkedin.com/posts/bushra-yousaf-9b6675240_webdevelopment-javascript-html-activity-7218691521133371392-2TgT",
      date: "Mar 2023",
    },
    {
      id: 3,
      title: "Namud-e-Sehar Foundation",
      description: "NGO website for charity foundation",
      image: "/images/3.png",
      technologies: ["React", "Node.js", "Express"],
      category: "React",
      link: "https://www.linkedin.com/posts/bushra-yousaf-9b6675240_linkedin-techforgood-reactjs-activity-7259083468955914240-9VWT",
      date: "Jun 2023",
    },
    {
      id: 4,
      title: "Pluse",
      description: "E-commerce website for electronics",
      image: "/images/4.png",
      technologies: ["HTML", "Bootstrap", "JavaScript"],
      category: "JavaScript",
      link: "https://github.com/Bush1122/Pluse.git",
      date: "Aug 2023",
    },
    {
      id: 5,
      title: "Online Store",
      description: "Weather data with 5-day forecast",
      image: "/images/5.png",
      technologies: ["HTML", "Bootstrap", "React"],
      category: "React",
      link: "#",
      date: "Aug 2023",
    },
    {
      id: 6,
      title: "ATS CV Checker",
      description: "Dashboard with interactive charts",
      image: "/images/6.png",
      technologies: ["HTML", "Bootstrap", "JavaScript"],
      category: "React",
      link: "https://www.facebook.com/share/r/19CXvwUVnF/",
      date: "Aug 2023",
    },
    {
      id: 7,
      title: "Online Quran Service",
      description: "Marketing landing page with animations",
      image: "/images/7.png",
      technologies: ["HTML", "Bootstrap", "React"],
      category: "React",
      link: "https://www.linkedin.com/posts/bushra-yousaf-9b6675240_reduxjs-softwaredevelopment-ezitech-activity-7234435288205324289-3E5F",
      date: "Aug 2023",
    },
    {
      id: 8,
      title: "Travel Ticket (CRUD)",
      description: "Admin panel with CRUD",
      image: "/images/8.png",
      technologies: ["React", "Node.js", "MongoDB"],
      category: "Redux",
      link: "https://youtu.be/tK-2LOAWgzg?si=TXMQ-Irp169xB23_",
      date: "Aug 2023",
    },
    {
      id: 9,
      title: "Notepad App",
      description: "CRUD with Node.js and MongoDB",
      image: "/images/10.png",
      technologies: ["React", "Node.js", "MongoDB"],
      category: "React",
      link: "https://www.linkedin.com/posts/bushra-yousaf-9b6675240_nodejs-expressjs-ejs-activity-7225744621472014337-iVZe",
      date: "Aug 2023",
    },
  ];

  const filters = ["All", "React", "JavaScript", "Bootstrap", "Node.js", "PHP"];

  const filteredProjects =
    activeFilter === "All"
      ? projects
      : projects.filter(
          (project) =>
            project.category === activeFilter ||
            project.technologies.some(
              (tech) => tech.toLowerCase() === activeFilter.toLowerCase()
            )
        );

  return (
    <div className="relative min-h-screen overflow-x-hidden">
      {/* Background and cursor effects */}
      <ParticleBackground particleDensity={80} />
      <PhysicsCursor />

      {/* Header */}
      <Header />

      {/* Main content */}
      <main className="container relative z-10 px-6 py-20 mx-auto">
        <ScrollReveal delay={0.2}>
          <div className="mb-12 text-center">
            <h1 className="text-4xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-5xl">
              My Projects
            </h1>
            <div className="w-20 h-1 mx-auto my-4 bg-gradient-to-r from-yellow-400 to-yellow-600" />
            <p className="max-w-2xl mx-auto text-lg text-gray-600 dark:text-gray-300">
              Collection of my work showcasing different technologies and skills
            </p>
          </div>

          {/* Filter buttons */}
          <div className="flex flex-wrap justify-center gap-3 mb-12">
            {filters.map((filter) => (
              <motion.button
                key={filter}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setActiveFilter(filter)}
                className={`px-4 py-2 text-sm font-medium transition-all rounded-md ${
                  activeFilter === filter
                    ? "bg-yellow-500 text-white"
                    : "bg-gray-100 text-gray-700 hover:bg-gray-200 dark:bg-gray-800 dark:text-gray-300 dark:hover:bg-gray-700"
                }`}
              >
                {filter}
              </motion.button>
            ))}
          </div>

          {/* Projects grid */}
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            <AnimatePresence>
              {filteredProjects.map((project) => (
                <motion.div
                  key={project.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.4 }}
                  className="overflow-hidden transition-shadow duration-300 bg-white rounded-lg shadow-lg dark:bg-gray-800 hover:shadow-xl"
                >
                  <div
                    className="relative overflow-hidden cursor-pointer h-60"
                    onClick={() => setSelectedProject(project)}
                  >
                    <img
                      src={project.image}
                      alt={project.title}
                      className="object-cover w-full h-full transition-transform duration-500 hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
                    <div className="absolute bottom-0 left-0 right-0 p-4">
                      <h3 className="text-xl font-semibold text-white">
                        {project.title}
                      </h3>
                      <p className="text-sm text-gray-200">
                        {project.description}
                      </p>
                    </div>
                  </div>
                  <div className="p-6">
                    <div className="flex justify-between mb-3">
                      <span className="text-sm font-medium text-gray-500 dark:text-gray-400">
                        Created: {project.date}
                      </span>
                      <span className="px-2 py-1 text-xs font-medium text-yellow-800 bg-yellow-100 rounded-full dark:bg-yellow-900/30 dark:text-yellow-200">
                        {project.category}
                      </span>
                    </div>
                    <div className="flex flex-wrap gap-2 mt-4">
                      {project.technologies.map((tech) => (
                        <span
                          key={tech}
                          className="px-2 py-1 text-xs font-medium text-gray-700 bg-gray-100 rounded-full dark:text-gray-300 dark:bg-gray-700"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                    <div className="flex gap-3 mt-4">
                      <motion.a
                        whileHover={{ scale: 1.03 }}
                        whileTap={{ scale: 0.97 }}
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex-1 px-4 py-2 text-sm font-medium text-center text-white transition-all bg-yellow-500 rounded-md hover:bg-yellow-600"
                      >
                        View Project
                      </motion.a>
                      <motion.button
                        whileHover={{ scale: 1.03 }}
                        whileTap={{ scale: 0.97 }}
                        onClick={() => setSelectedProject(project)}
                        className="flex-1 px-4 py-2 text-sm font-medium text-center text-gray-700 transition-all bg-gray-100 rounded-md dark:text-gray-300 dark:bg-gray-700 hover:bg-gray-200 dark:hover:bg-gray-600"
                      >
                        Details
                      </motion.button>
                    </div>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>

          {/* Empty state */}
          {filteredProjects.length === 0 && (
            <div className="py-12 text-center">
              <h3 className="text-xl font-medium text-gray-700 dark:text-gray-300">
                No projects found for this category
              </h3>
              <p className="mt-2 text-gray-500 dark:text-gray-400">
                Try selecting a different filter
              </p>
            </div>
          )}
        </ScrollReveal>
      </main>

      {/* Project Details Modal */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black bg-opacity-80"
            onClick={() => setSelectedProject(null)}
          >
            <motion.div
              initial={{ scale: 0.9 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.9 }}
              className="relative w-full max-w-4xl bg-white rounded-lg shadow-2xl dark:bg-gray-800"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                className="absolute p-1 text-gray-400 rounded-full top-4 right-4 hover:text-gray-500 dark:hover:text-gray-300"
                onClick={() => setSelectedProject(null)}
              >
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
              <div className="p-6">
                <h3 className="mb-2 text-2xl font-semibold text-gray-900 dark:text-white">
                  {selectedProject.title}
                </h3>
                <p className="mb-4 text-gray-600 dark:text-gray-300">
                  {selectedProject.description}
                </p>
                <div className="flex flex-wrap items-center gap-4 mb-6">
                  <span className="text-gray-600 dark:text-gray-300">
                    Created: {selectedProject.date}
                  </span>
                  <span className="px-3 py-1 text-sm font-medium text-yellow-800 bg-yellow-100 rounded-full dark:bg-yellow-900/30 dark:text-yellow-200">
                    {selectedProject.category}
                  </span>
                </div>
                <div className="overflow-hidden rounded-lg">
                  <img
                    src={selectedProject.image}
                    alt={selectedProject.title}
                    className="object-contain w-full h-auto max-h-[60vh]"
                  />
                </div>
                <div className="flex flex-wrap gap-2 mt-6">
                  {selectedProject.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 text-sm font-medium text-gray-700 bg-gray-100 rounded-full dark:text-gray-300 dark:bg-gray-700"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="mt-6">
                  <a
                    href={selectedProject.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block px-6 py-2 font-medium text-white transition-all bg-yellow-500 rounded-md hover:bg-yellow-600"
                  >
                    Visit Project
                  </a>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Projects;
