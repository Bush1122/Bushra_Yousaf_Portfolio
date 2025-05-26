import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Header from "../components/pageComponents/Header";
import Footer from "../components/pageComponents/Footer";
import PhysicsCursor from "../components/ui/PhysicsCursor";
import ParticleBackground from "../components/experimental/ParticleBackground";
import ScrollReveal from "../components/animated/ScrollReveal";
import { useTheme } from "../context/ThemeContext";
import projects1 from "../asset/images/projects/1.png";
import projects2 from "../asset/images/projects/2.png";
import projects3 from "../asset/images/projects/3.png";
import projects4 from "../asset/images/projects/4.png";
import projects5 from "../asset/images/projects/5.png";
import projects6 from "../asset/images/projects/6.png";
import projects7 from "../asset/images/projects/7.png";
import projects8 from "../asset/images/projects/8.png";
import projects9 from "../asset/images/projects/9.png";
import projects10 from "../asset/images/projects/10.png";
import projects11 from "../asset/images/projects/11.png";
import projects12 from "../asset/images/projects/12.png";

const Projects = () => {
  const [activeFilter, setActiveFilter] = useState("All");
  const { theme } = useTheme();

  // Projects data
  const projects = [
    {
      id: 1,
      title: "E-commerce Website",
      description:
        "A full-featured online store with product listings, cart, and checkout",
      image: projects1,
      technologies: ["React", "Redux", "Node.js", "MongoDB"],
      category: "React",
      link: "#",
    },
    {
      id: 2,
      title: "Portfolio Template",
      description: "Responsive portfolio template with dark/light mode",
      image: projects2,
      technologies: ["HTML", "CSS", "JavaScript"],
      category: "JavaScript",
      link: "#",
    },
    {
      id: 3,
      title: "Task Management App",
      description: "Drag and drop task board with user authentication",
      image: projects3,
      technologies: ["React", "Node.js", "Express"],
      category: "React",
      link: "#",
    },
    {
      id: 4,
      title: "Restaurant Website",
      description: "Menu display with online reservation system",
      image: projects4,
      technologies: ["Bootstrap", "JavaScript"],
      category: "JavaScript",
      link: "#",
    },
    {
      id: 5,
      title: "Weather Dashboard",
      description: "Real-time weather data with 5-day forecast",
      image: projects5,
      technologies: ["HTML", "CSS", "JavaScript"],
      category: "JavaScript",
      link: "#",
    },
    {
      id: 6,
      title: "Social Media Dashboard",
      description: "Analytics dashboard with interactive charts",
      image: projects6,
      technologies: ["React", "Redux", "Node.js"],
      category: "React",
      link: "#",
    },
    {
      id: 7,
      title: "Landing Page",
      description: "Marketing landing page with animated sections",
      image: projects7,
      technologies: ["HTML", "Bootstrap"],
      category: "Bootstrap",
      link: "#",
    },
    {
      id: 8,
      title: "Admin Dashboard",
      description: "Complete admin panel with CRUD operations",
      image: projects8,
      technologies: ["React", "Node.js", "MongoDB"],
      category: "React",
      link: "#",
    },
    {
      id: 9,
      title: "Admin Dashboard",
      description: "Complete admin panel with CRUD operations",
      image: projects9,
      technologies: ["React", "Node.js", "MongoDB"],
      category: "React",
      link: "#",
    },

    {
      id: 10,
      title: "Admin Dashboard",
      description: "Complete admin panel with CRUD operations",
      image: projects10,
      technologies: ["React", "Node.js", "MongoDB"],
      category: "React",
      link: "#",
    },
    {
      id: 11,
      title: "Admin Dashboard",
      description: "Complete admin panel with CRUD operations",
      image: projects11,
      technologies: ["React", "Node.js", "MongoDB"],
      category: "React",
      link: "#",
    },
    {
      id: 12,
      title: "Admin Dashboard",
      description: "Complete admin panel with CRUD operations",
      image: projects12,
      technologies: ["React", "Node.js", "MongoDB"],
      category: "React",
      link: "#",
    },
  ];

  // Filter projects based on active filter
  const filteredProjects =
    activeFilter === "All"
      ? projects
      : projects.filter(
          (project) =>
            project.technologies.some((tech) =>
              tech.toLowerCase().includes(activeFilter.toLowerCase())
            ) || project.category.toLowerCase() === activeFilter.toLowerCase()
        );

  // Available filters
  const filters = [
    "All",
    "React",
    "Redux",
    "JavaScript",
    "Bootstrap",
    "Node.js",
  ];

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
              Here are some of my completed projects showcasing different
              technologies and skills
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
                  <div className="relative overflow-hidden h-60">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="object-cover w-full h-full transition-transform duration-500 hover:scale-105"
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
                    <p className="mb-4 text-gray-600 dark:text-gray-300">
                      {project.description}
                    </p>
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
            </AnimatePresence>
          </div>

          {/* Empty state */}
          {filteredProjects.length === 0 && (
            <div className="py-12 text-center">
              <h3 className="text-xl font-medium text-gray-700 dark:text-gray-300">
                No projects found for this filter
              </h3>
              <p className="mt-2 text-gray-500 dark:text-gray-400">
                Try selecting a different technology filter
              </p>
            </div>
          )}
        </ScrollReveal>
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Projects;
