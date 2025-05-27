import { useState, useEffect } from "react";
import Header from "../components/pageComponents/Header";
import Footer from "../components/pageComponents/Footer";
import PhysicsCursor from "../components/ui/PhysicsCursor";
import ParticleBackground from "../components/experimental/ParticleBackground";
import ScrollReveal from "../components/animated/ScrollReveal";
import profileImage from "../asset/images/projects/PersonalProfile.png";
import { motion, AnimatePresence } from "framer-motion";
import { useTheme } from "../context/ThemeContext";

// Skills data
const skills = [
  { name: "React", level: 90 },
  { name: "JavaScript", level: 85 },
  { name: "Node.js", level: 80 },
  { name: "MongoDB", level: 75 },
  { name: "CSS/Tailwind", level: 85 },
  { name: "Redux", level: 80 },
  { name: "PHP", level: 70 },
];

export default function About() {
  const [expandedBio, setExpandedBio] = useState(false);
  const [expandSkills, setExpandedSkills] = useState(false);
  const [experienceSkills, setExperienceSkills] = useState(false);
  const [activeTab, setActiveTab] = useState("about");
  const { theme } = useTheme();

  // Social links
  const socialLinks = [
    { name: "GitHub", url: "https://github.com/Bush1122" },
    {
      name: "LinkedIn",
      url: "https://www.linkedin.com/in/bushra-yousaf-9b6675240/",
    },
    { name: "facebook", url: "https://www.facebook.com/ahnhi.malik/" },
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
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="flex flex-col items-center gap-12 lg:flex-row"
        >
          {/* Text column */}
          <div className="w-full lg:w-1/2">
            <ScrollReveal delay={0.2}>
              <div className="mb-10">
                <h1 className="text-4xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-5xl">
                  About Me
                </h1>
                <div className="w-20 h-1 my-4 bg-gradient-to-r from-yellow-400 to-yellow-600" />
              </div>

              {/* Tab navigation */}
              <div className="flex mb-8 border-b border-gray-200 dark:border-gray-700">
                {["about", "skills", "experience"].map((tab) => (
                  <button
                    key={tab}
                    onClick={() => setActiveTab(tab)}
                    className={`px-4 py-2 font-medium text-sm capitalize transition-all ${
                      activeTab === tab
                        ? "text-yellow-500 border-b-2 border-yellow-500"
                        : "text-gray-500 hover:text-gray-700 dark:hover:text-gray-300"
                    }`}
                  >
                    {tab}
                  </button>
                ))}
              </div>

              {/* Tab content */}
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeTab}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.3 }}
                  className="prose prose-lg dark:prose-invert max-w-none"
                >
                  {activeTab === "about" && (
                    <>
                      <p className="mb-6 text-lg leading-relaxed">
                        I'm{" "}
                        <span className="font-semibold text-yellow-500">
                          Bushra Yousaf
                        </span>
                        , a passionate React Developer with a Bachelor's degree
                        in Computer Science, dedicated to crafting engaging and
                        interactive web experiences.
                      </p>

                      <p className="mb-6 text-lg leading-relaxed">
                        With expertise in product design and e-commerce
                        functionalities using{" "}
                        <span className="font-semibold">Redux</span> and{" "}
                        <span className="font-semibold">Context API</span>, I
                        also bring strong backend development skills including{" "}
                        <span className="font-semibold">Express.js</span>,{" "}
                        <span className="font-semibold">MongoDB</span>, and
                        authentication systems.
                      </p>

                      <AnimatePresence>
                        {expandedBio && (
                          <motion.p
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: "auto" }}
                            exit={{ opacity: 0, height: 0 }}
                            className="mb-6 overflow-hidden text-lg leading-relaxed"
                          >
                            This full-stack expertise allows me to build
                            comprehensive web applications that are both
                            user-friendly and robust. I'm particularly
                            interested in performance optimization and creating
                            accessible, responsive interfaces.
                          </motion.p>
                        )}
                      </AnimatePresence>

                      <motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        onClick={() => setExpandedBio(!expandedBio)}
                        className="px-4 py-2 mt-2 text-sm font-medium text-white transition-all bg-yellow-500 rounded-md hover:bg-yellow-600"
                      >
                        {expandedBio ? "Show Less" : "Read More"}
                      </motion.button>
                    </>
                  )}

                  {activeTab === "skills" && (
                    <div className="space-y-6">
                      {skills
                        .slice(0, expandSkills ? skills.length : 3)
                        .map((skill) => (
                          <div key={skill.name} className="space-y-2">
                            <div className="flex justify-between">
                              <span className="font-medium">{skill.name}</span>
                              <span>{skill.level}%</span>
                            </div>
                            <div className="w-full h-2 bg-gray-200 rounded-full dark:bg-gray-700">
                              <motion.div
                                initial={{ width: 0 }}
                                animate={{ width: `${skill.level}%` }}
                                transition={{ duration: 1, delay: 0.3 }}
                                className="h-full rounded-full bg-gradient-to-r from-yellow-400 to-yellow-600"
                              />
                            </div>
                          </div>
                        ))}

                      <motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        onClick={() => setExpandedSkills(!expandSkills)}
                        className="px-4 py-2 mt-2 text-sm font-medium text-white transition-all bg-yellow-500 rounded-md hover:bg-yellow-600"
                      >
                        {expandSkills ? "Show Less" : "Show More"}
                      </motion.button>
                    </div>
                  )}

                  {activeTab === "experience" && (
                    <div className="space-y-6">
                      <div className="p-6 border border-gray-200 rounded-lg dark:border-gray-700">
                        <h3 className="text-xl font-semibold">
                          Frontend Developer InternShip
                        </h3>
                        <p className="text-gray-500 dark:text-gray-400">
                          Ezitech • March-2024 To July-2024
                        </p>
                        <ul className="mt-4 space-y-2 list-disc list-inside">
                          <li>
                            Developed responsive web applications using React
                            and Redux
                          </li>
                          <li>
                            Optimized performance leading to 30% faster load
                            times
                          </li>
                          <li>
                            Implemented CI/CD pipelines for automated
                            deployments
                          </li>
                        </ul>
                      </div>

                      <AnimatePresence>
                        {experienceSkills && (
                          <motion.div
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: "auto" }}
                            exit={{ opacity: 0, height: 0 }}
                            className="p-6 border border-gray-200 rounded-lg dark:border-gray-700"
                          >
                            <h3 className="text-xl font-semibold">
                              Backend Developer InternShip
                            </h3>
                            <p className="text-gray-500 dark:text-gray-400">
                              Ezitech • Jan-2025 To cont..
                            </p>
                            <ul className="mt-4 space-y-2 list-disc list-inside">
                              <li>
                                Built and maintained company website using React
                              </li>
                              <li>
                                Collaborated with design team to implement UI/UX
                                improvements
                              </li>
                              <li>
                                Assisted in backend API development with Node.js
                              </li>
                            </ul>
                          </motion.div>
                        )}
                      </AnimatePresence>

                      <motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        onClick={() => setExperienceSkills(!experienceSkills)}
                        className="px-4 py-2 mt-2 text-sm font-medium text-white transition-all bg-yellow-500 rounded-md hover:bg-yellow-600"
                      >
                        {experienceSkills ? "Show Less" : "Show More"}
                      </motion.button>
                    </div>
                  )}
                </motion.div>
              </AnimatePresence>

              {/* Social links */}
              <div className="flex mt-8 space-x-4">
                {socialLinks.map((link) => (
                  <motion.a
                    key={link.name}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ y: -3 }}
                    className="p-2 text-gray-700 transition-colors rounded-full dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800"
                  >
                    <span className="sr-only">{link.name}</span>
                    <span className="text-lg">
                      {link.icon || link.name.charAt(0)}
                    </span>
                  </motion.a>
                ))}
              </div>
            </ScrollReveal>
          </div>

          {/* Image column */}
          <div className="flex justify-center w-full lg:w-1/2">
            <ScrollReveal delay={0.4}>
              <motion.div
                className="relative w-full max-w-md"
                whileHover={{ scale: 1.02 }}
              >
                <div className="relative w-64 h-64 mx-auto overflow-hidden rounded-full shadow-3xl">
                  <motion.img
                    src={profileImage}
                    alt="Bushra Yousaf"
                    className="w-full h-full object-start"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.5, delay: 0.4 }}
                  />
                  <div className="absolute inset-0 rounded-full bg-gradient-to-t from-black/30 via-transparent to-transparent" />
                </div>
                <motion.div
                  className="absolute border-2 border-yellow-500 border-dotted rounded-full border-spacing-3 -inset-4 -z-10"
                  animate={{ rotate: 360 }}
                  transition={{
                    repeat: Infinity,
                    ease: "linear",
                    duration: 4,
                  }}
                />
              </motion.div>
              {/* Download resume button */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8 }}
                className="mt-8 text-center"
              >
                <a
                  href="/path-to-resume.pdf"
                  download
                  className="inline-flex items-center px-6 py-3 text-sm font-medium text-yellow-700 transition-colors border border-transparent rounded-md shadow-sm bg-yellow-50 hover:bg-yellow-100 dark:text-yellow-50 dark:bg-yellow-900/30 dark:hover:bg-yellow-800/50"
                >
                  Download Resume
                  <svg
                    className="w-4 h-4 ml-2"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"
                    />
                  </svg>
                </a>
              </motion.div>
            </ScrollReveal>
          </div>
        </motion.div>
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}
