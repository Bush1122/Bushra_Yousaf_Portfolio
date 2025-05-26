import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Header from "../components/pageComponents/Header";
import Footer from "../components/pageComponents/Footer";
import PhysicsCursor from "../components/ui/PhysicsCursor";
import ParticleBackground from "../components/experimental/ParticleBackground";
import ScrollReveal from "../components/animated/ScrollReveal";
import { useTheme } from "../context/ThemeContext";
// Import certificate images (replace with your actual certificate paths)
import cert1 from "../asset/certificates/1.jpg";
import cert2 from "../asset/certificates/2.jpg";
import cert3 from "../asset/certificates/3.jpg";
import cert4 from "../asset/certificates/4.jpg";
import cert5 from "../asset/certificates/5.jpg";

const Certificate = () => {
  const [activeFilter, setActiveFilter] = useState("All");
  const [selectedCert, setSelectedCert] = useState(null);
  const { theme } = useTheme();

  // Certificates data
  const certificates = [
    {
      id: 1,
      title: "React Developer Certification",
      issuer: "Meta (Coursera)",
      date: "June 2023",
      image: cert1,
      category: "Frontend",
      skills: ["React", "Redux", "React Router"],
    },
    {
      id: 2,
      title: "Node.js Backend Specialist",
      issuer: "Udemy",
      date: "April 2023",
      image: cert2,
      category: "Backend",
      skills: ["Node.js", "Express", "REST APIs"],
    },
    {
      id: 3,
      title: "MERN Stack Mastery",
      issuer: "Scrimba",
      date: "March 2023",
      image: cert3,
      category: "Fullstack",
      skills: ["MongoDB", "Express", "React", "Node.js"],
    },
    {
      id: 4,
      title: "JavaScript Advanced Concepts",
      issuer: "Frontend Masters",
      date: "February 2023",
      image: cert4,
      category: "Frontend",
      skills: ["ES6+", "Async Programming", "Design Patterns"],
    },
    {
      id: 4,
      title: "JavaScript Advanced Concepts",
      issuer: "Frontend Masters",
      date: "February 2023",
      image: cert5,
      category: "Frontend",
      skills: ["ES6+", "Async Programming", "Design Patterns"],
    },
  ];

  // Available filters
  const filters = ["All", "Frontend", "Backend", "Fullstack", "DevOps"];

  // Filter certificates based on active filter
  const filteredCerts =
    activeFilter === "All"
      ? certificates
      : certificates.filter((cert) => cert.category === activeFilter);

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
              My Certifications
            </h1>
            <div className="w-20 h-1 mx-auto my-4 bg-gradient-to-r from-yellow-400 to-yellow-600" />
            <p className="max-w-2xl mx-auto text-lg text-gray-600 dark:text-gray-300">
              Official recognition of my skills and knowledge in various
              technologies
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

          {/* Certificates grid */}
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            <AnimatePresence>
              {filteredCerts.map((cert) => (
                <motion.div
                  key={cert.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.4 }}
                  className="overflow-hidden transition-shadow duration-300 bg-white rounded-lg shadow-lg dark:bg-gray-800 hover:shadow-xl"
                >
                  <div
                    className="relative overflow-hidden cursor-pointer h-60"
                    onClick={() => setSelectedCert(cert)}
                  >
                    <img
                      src={cert.image}
                      alt={cert.title}
                      className="object-cover w-full h-full transition-transform duration-500 hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
                    <div className="absolute bottom-0 left-0 right-0 p-4">
                      <h3 className="text-xl font-semibold text-white">
                        {cert.title}
                      </h3>
                      <p className="text-sm text-gray-200">{cert.issuer}</p>
                    </div>
                  </div>
                  <div className="p-6">
                    <div className="flex justify-between mb-3">
                      <span className="text-sm font-medium text-gray-500 dark:text-gray-400">
                        Issued: {cert.date}
                      </span>
                      <span className="px-2 py-1 text-xs font-medium text-yellow-800 bg-yellow-100 rounded-full dark:bg-yellow-900/30 dark:text-yellow-200">
                        {cert.category}
                      </span>
                    </div>
                    <div className="flex flex-wrap gap-2 mt-4">
                      {cert.skills.map((skill) => (
                        <span
                          key={skill}
                          className="px-2 py-1 text-xs font-medium text-gray-700 bg-gray-100 rounded-full dark:text-gray-300 dark:bg-gray-700"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                    <motion.button
                      whileHover={{ scale: 1.03 }}
                      whileTap={{ scale: 0.97 }}
                      onClick={() => setSelectedCert(cert)}
                      className="w-full px-4 py-2 mt-4 text-sm font-medium text-white transition-all bg-yellow-500 rounded-md hover:bg-yellow-600"
                    >
                      View Certificate
                    </motion.button>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>

          {/* Empty state */}
          {filteredCerts.length === 0 && (
            <div className="py-12 text-center">
              <h3 className="text-xl font-medium text-gray-700 dark:text-gray-300">
                No certificates found for this category
              </h3>
              <p className="mt-2 text-gray-500 dark:text-gray-400">
                Try selecting a different filter
              </p>
            </div>
          )}
        </ScrollReveal>
      </main>

      {/* Certificate Modal */}
      <AnimatePresence>
        {selectedCert && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black bg-opacity-80"
            onClick={() => setSelectedCert(null)}
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
                onClick={() => setSelectedCert(null)}
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
                  {selectedCert.title}
                </h3>
                <div className="flex flex-wrap items-center gap-4 mb-6">
                  <span className="text-gray-600 dark:text-gray-300">
                    Issued by: {selectedCert.issuer}
                  </span>
                  <span className="px-3 py-1 text-sm font-medium text-yellow-800 bg-yellow-100 rounded-full dark:bg-yellow-900/30 dark:text-yellow-200">
                    {selectedCert.category}
                  </span>
                  <span className="text-gray-500 dark:text-gray-400">
                    Date: {selectedCert.date}
                  </span>
                </div>
                <div className="overflow-hidden rounded-lg">
                  <img
                    src={selectedCert.image}
                    alt={selectedCert.title}
                    className="object-contain w-full h-auto max-h-[70vh]"
                  />
                </div>
                <div className="flex flex-wrap gap-2 mt-6">
                  {selectedCert.skills.map((skill) => (
                    <span
                      key={skill}
                      className="px-3 py-1 text-sm font-medium text-gray-700 bg-gray-100 rounded-full dark:text-gray-300 dark:bg-gray-700"
                    >
                      {skill}
                    </span>
                  ))}
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

export default Certificate;
