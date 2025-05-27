import { useState } from "react";
import { motion } from "framer-motion";
import Header from "../components/pageComponents/Header";
import Footer from "../components/pageComponents/Footer";
import PhysicsCursor from "../components/ui/PhysicsCursor";
import ParticleBackground from "../components/experimental/ParticleBackground";
import ScrollReveal from "../components/animated/ScrollReveal";
import { useTheme } from "../context/ThemeContext";

// Import logos (replace with your actual logo paths)
import mernLogo from "../asset/images/projects/1.png";
import frontendLogo from "../asset/images/projects/1.png";
import backendLogo from "../asset/images/projects/1.png";
import teachingLogo from "../asset/images/projects/1.png";

const Service = () => {
  const [activeTab, setActiveTab] = useState("all");
  const { theme } = useTheme();

  // Services data
  const services = [
    {
      id: 1,
      title: "Frontend Development",
      description:
        "Building responsive, interactive user interfaces with React and modern CSS frameworks",
      icon: frontendLogo,
      category: "development",
      features: [
        "React.js  Applications",
        "Responsive Design",
        "State Management (Redux/Context)",
        "Performance Optimization",
        "Accessibility Compliance",
      ],
      price: "Starting at $50/project",
    },
    {
      id: 2,
      title: "Backend Development",
      description:
        "Creating robust server-side applications with Node.js, Express, and database integration",
      icon: backendLogo,
      category: "development",
      features: [
        "RESTful API Development",
        "Database Design (MongoDB/PostgreSQL)",
        "Authentication & Authorization",
        "Server Deployment & CI/CD",
        "Microservices Architecture",
      ],
      price: "Starting at $100/project",
    },
    {
      id: 3,
      title: "Full-Stack MERN Solutions",
      description:
        "Complete web applications from front to back using MongoDB, Express, React, and Node.js",
      icon: mernLogo,
      category: "development",
      features: [
        "End-to-End Web Applications",
        "Real-time Features with Socket.io",
        "Payment Gateway Integration",
        "Cloud Deployment (AWS/Vercel)",
        "Maintenance & Support",
      ],
      price: "Starting at $200/project",
    },
    {
      id: 4,
      title: "MERN Stack Mentorship",
      description:
        "Personalized 1-on-1 coaching to master the MERN stack from fundamentals to advanced concepts",
      icon: teachingLogo,
      category: "education",
      features: [
        "Customized Learning Path",
        "Project-Based Curriculum",
        "Code Reviews & Best Practices",
        "Interview Preparation",
        "Career Guidance",
      ],
      price: "$20/hour or $100/month",
    },

    {
      id: 5,
      title: "Workshops & Training",
      description:
        "Group training sessions for teams looking to upskill in modern web development",
      icon: teachingLogo,
      category: "education",
      features: [
        "Corporate Training Programs",
        "Hands-on Workshops",
        "Team Building Exercises",
        "Custom Training Materials",
        "Post-Training Support",
      ],
      price: "Custom quotes available",
    },
  ];

  // Filter services based on active tab
  const filteredServices =
    activeTab === "all"
      ? services
      : services.filter((service) => service.category === activeTab);

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
              My Services
            </h1>
            <div className="w-20 h-1 mx-auto my-4 bg-gradient-to-r from-yellow-400 to-yellow-600" />
            <p className="max-w-2xl mx-auto text-lg text-gray-600 dark:text-gray-300">
              Comprehensive solutions for your web development needs - from
              building applications to teaching the MERN stack
            </p>
          </div>

          {/* Service categories */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {["all", "development", "education"].map((tab) => (
              <motion.button
                key={tab}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setActiveTab(tab)}
                className={`px-6 py-2 text-sm font-medium capitalize transition-all rounded-full ${
                  activeTab === tab
                    ? "bg-yellow-500 text-white"
                    : "bg-gray-100 text-gray-700 hover:bg-gray-200 dark:bg-gray-800 dark:text-gray-300 dark:hover:bg-gray-700"
                }`}
              >
                {tab === "all" ? "All Services" : tab}
              </motion.button>
            ))}
          </div>

          {/* Services grid */}
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {filteredServices.map((service) => (
              <motion.div
                key={service.id}
                whileHover={{ y: -10 }}
                className="flex flex-col overflow-hidden transition-shadow duration-300 bg-white border border-gray-200 rounded-xl dark:border-gray-700 dark:bg-gray-800 hover:shadow-lg"
              >
                <div className="p-6 text-center">
                  <div className="flex items-center justify-center w-20 h-20 mx-auto mb-4 overflow-hidden rounded-full bg-gray-50 dark:bg-gray-700">
                    <img
                      src={service.icon}
                      alt={service.title}
                      className="object-contain w-12 h-12"
                    />
                  </div>
                  <h3 className="mb-2 text-xl font-semibold text-gray-900 dark:text-white">
                    {service.title}
                  </h3>
                  <p className="mb-4 text-gray-600 dark:text-gray-300">
                    {service.description}
                  </p>
                  <div className="px-4 py-3 mb-4 text-sm font-medium text-yellow-700 rounded-lg bg-yellow-50 dark:bg-yellow-900/30 dark:text-yellow-50">
                    {service.price}
                  </div>
                </div>

                <div className="flex-1 p-6 pt-0">
                  <h4 className="mb-3 font-medium text-gray-900 dark:text-white">
                    Includes:
                  </h4>
                  <ul className="space-y-2">
                    {service.features.map((feature, index) => (
                      <li key={index} className="flex items-start">
                        <svg
                          className="w-5 h-5 mt-0.5 mr-2 text-yellow-500 flex-shrink-0"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M5 13l4 4L19 7"
                          />
                        </svg>
                        <span className="text-gray-600 dark:text-gray-300">
                          {feature}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="p-6 pt-0">
                  <motion.a
                    whileHover={{ scale: 1.03 }}
                    whileTap={{ scale: 0.97 }}
                    href="/Contact" // Link to your contact section
                    className="block w-full px-4 py-3 text-sm font-medium text-center text-white transition-all bg-yellow-500 rounded-md hover:bg-yellow-600"
                  >
                    Get Started
                  </motion.a>
                </div>
              </motion.div>
            ))}
          </div>

          {/* CTA Section */}
          <div className="px-6 py-12 mt-16 bg-gray-100 rounded-xl dark:bg-gray-800">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="mb-4 text-3xl font-bold text-gray-900 dark:text-white">
                Ready to build something amazing?
              </h2>
              <p className="mb-8 text-lg text-gray-600 dark:text-gray-300">
                Whether you need a custom web application, expert guidance, or
                team training, I can help bring your vision to life.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <motion.a
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  href="#contact"
                  className="px-6 py-3 text-sm font-medium text-white transition-all bg-yellow-500 rounded-md hover:bg-yellow-600 sm:text-base"
                >
                  Contact Me
                </motion.a>
                <motion.a
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  href="/projects"
                  className="px-6 py-3 text-sm font-medium text-gray-700 transition-all bg-white border border-gray-300 rounded-md hover:bg-gray-50 dark:bg-gray-700 dark:text-gray-300 dark:border-gray-600 dark:hover:bg-gray-600 sm:text-base"
                >
                  View My Work
                </motion.a>
              </div>
            </div>
          </div>
        </ScrollReveal>
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Service;
