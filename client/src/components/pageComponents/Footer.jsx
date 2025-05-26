import { motion } from "framer-motion";
import {
  FaGithub,
  FaLinkedin,
  FaTwitter,
  FaEnvelope,
  FaHeart,
} from "react-icons/fa";
import { useTheme } from "../../context/ThemeContext";

const footerLinks = [
  { name: "Home", path: "/" },
  { name: "About", path: "/about" },
  { name: "Projects", path: "/projects" },
  { name: "Contact", path: "/contact" },
];

const socialLinks = [
  {
    icon: <FaGithub />,
    url: "https://github.com/yourusername",
    name: "GitHub",
  },
  {
    icon: <FaLinkedin />,
    url: "https://linkedin.com/in/yourprofile",
    name: "LinkedIn",
  },
  {
    icon: <FaTwitter />,
    url: "https://twitter.com/yourhandle",
    name: "Twitter",
  },
  { icon: <FaEnvelope />, url: "mailto:your@email.com", name: "Email" },
];

export default function Footer() {
  const { theme } = useTheme();

  const currentYear = new Date().getFullYear();

  return (
    <motion.footer
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className={`relative mt-20 border-t ${
        theme === "dark"
          ? "border-gray-800 bg-gray-900"
          : "border-gray-200 bg-gray-50"
      }`}
    >
      {/* Decorative elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(5)].map((_, i) => (
          <motion.div
            key={i}
            className={`absolute rounded-full ${
              theme === "dark" ? "bg-yellow-500/10" : "bg-yellow-500/5"
            }`}
            style={{
              width: Math.random() * 100 + 50,
              height: Math.random() * 100 + 50,
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, (Math.random() - 0.5) * 30],
              x: [0, (Math.random() - 0.5) * 30],
              opacity: [0.1, 0.3, 0.1],
            }}
            transition={{
              duration: Math.random() * 10 + 10,
              repeat: Infinity,
              repeatType: "reverse",
            }}
          />
        ))}
      </div>

      <div className="container px-6 py-12 mx-auto max-w-7xl">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-4">
          {/* Brand section */}
          <div className="space-y-4">
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="flex items-center space-x-2"
            >
              <span
                className={`text-2xl font-bold ${
                  theme === "dark" ? "text-yellow-400" : "text-yellow-600"
                }`}
              >
                Bushra.Y
              </span>
            </motion.div>
            <p
              className={`${
                theme === "dark" ? "text-gray-400" : "text-gray-600"
              }`}
            >
              Crafting beautiful digital experiences with React and modern web
              technologies.
            </p>
          </div>

          {/* Quick links */}
          <div>
            <h3
              className={`text-sm font-semibold uppercase tracking-wider ${
                theme === "dark" ? "text-gray-300" : "text-gray-900"
              }`}
            >
              Quick Links
            </h3>
            <ul className="mt-4 space-y-2">
              {footerLinks.map((link) => (
                <motion.li
                  key={link.name}
                  whileHover={{ x: 5 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <a
                    href={link.path}
                    className={`text-base transition-colors ${
                      theme === "dark"
                        ? "text-gray-400 hover:text-yellow-400"
                        : "text-gray-600 hover:text-yellow-600"
                    }`}
                  >
                    {link.name}
                  </a>
                </motion.li>
              ))}
            </ul>
          </div>

          {/* Contact info */}
          <div>
            <h3
              className={`text-sm font-semibold uppercase tracking-wider ${
                theme === "dark" ? "text-gray-300" : "text-gray-900"
              }`}
            >
              Contact
            </h3>
            <ul className="mt-4 space-y-2">
              <li
                className={`${
                  theme === "dark" ? "text-gray-400" : "text-gray-600"
                }`}
              >
                your@email.com
              </li>
              <li
                className={`${
                  theme === "dark" ? "text-gray-400" : "text-gray-600"
                }`}
              >
                +1 (123) 456-7890
              </li>
            </ul>
          </div>

          {/* Social links */}
          <div>
            <h3
              className={`text-sm font-semibold uppercase tracking-wider ${
                theme === "dark" ? "text-gray-300" : "text-gray-900"
              }`}
            >
              Connect
            </h3>
            <div className="flex mt-4 space-x-4">
              {socialLinks.map((link) => (
                <motion.a
                  key={link.name}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ y: -3, scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  className={`p-2 text-lg rounded-full transition-colors ${
                    theme === "dark"
                      ? "text-gray-400 hover:text-yellow-400 hover:bg-gray-800"
                      : "text-gray-600 hover:text-yellow-600 hover:bg-gray-100"
                  }`}
                  aria-label={link.name}
                >
                  {link.icon}
                </motion.a>
              ))}
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div
          className={`pt-12 mt-12 border-t ${
            theme === "dark" ? "border-gray-800" : "border-gray-200"
          }`}
        >
          <div className="flex flex-col items-center justify-between md:flex-row">
            <p
              className={`text-sm ${
                theme === "dark" ? "text-gray-500" : "text-gray-400"
              }`}
            >
              &copy; {currentYear} Bushra Yousaf. All rights reserved.
            </p>
            <motion.p
              className="flex items-center mt-4 text-sm md:mt-0"
              whileHover={{ scale: 1.05 }}
            >
              <span
                className={`mr-1 ${
                  theme === "dark" ? "text-gray-500" : "text-gray-400"
                }`}
              >
                Made with
              </span>
              <FaHeart
                className={`mx-1 ${
                  theme === "dark" ? "text-red-400" : "text-red-500"
                }`}
              />
              <span
                className={`ml-1 ${
                  theme === "dark" ? "text-gray-500" : "text-gray-400"
                }`}
              >
                in React
              </span>
            </motion.p>
          </div>
        </div>
      </div>
    </motion.footer>
  );
}
