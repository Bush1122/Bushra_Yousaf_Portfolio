import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useTheme } from "../../context/ThemeContext";
// Animation variants
const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.3,
    },
  },
};

const item = {
  hidden: { y: -20, opacity: 0 },
  show: { y: 0, opacity: 1 },
};

const mobileMenu = {
  open: {
    opacity: 1,
    height: "auto",
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2,
    },
  },
  closed: {
    opacity: 0,
    height: 0,
    transition: {
      staggerChildren: 0.05,
      staggerDirection: -1,
    },
  },
};

const mobileItem = {
  open: {
    y: 0,
    opacity: 1,
    transition: { type: "spring", stiffness: 300, damping: 24 },
  },
  closed: {
    y: 50,
    opacity: 0,
    transition: { duration: 0.2 },
  },
};

const navLinks = [
  { path: "/About", name: "About" },
  { path: "/Projects", name: "Projects" },
  { path: "/Service", name: "Service" },
  { path: "/Certificate", name: "Certificate" },
  { path: "/Contact", name: "Contact" },
];

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const { theme, toggleTheme } = useTheme();
  const location = useLocation();

  return (
    <header className="relative text-white shadow-xl bg-gradient-to-r from-gray-900 to-gray-800">
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ type: "spring", stiffness: 100 }}
        className="fixed top-0 z-50 w-full border-b border-gray-700/50 backdrop-blur-md bg-gray-900/80"
      >
        <div className="px-6 mx-auto max-w-7xl sm:px-8 lg:px-10">
          <div className="flex items-center justify-between h-20">
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Link to="/" className="flex items-center">
                <h1 className="text-3xl font-extrabold tracking-tighter text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-yellow-600">
                  Bushra.Y
                </h1>
              </Link>
            </motion.div>

            <div className="flex items-center space-x-6">
              {/* Desktop Navigation */}
              <motion.div
                className="hidden md:flex"
                variants={container}
                initial="hidden"
                animate="show"
              >
                {navLinks.map((link, i) => (
                  <motion.div key={link.path} variants={item}>
                    <Link
                      to={link.path}
                      className={`flex items-center px-3 me-5 py-2 text-sm font-medium uppercase tracking-wider transition-all duration-300 ${
                        location.pathname === link.path
                          ? "text-yellow-400 border-b-2 border-yellow-400"
                          : "text-gray-300 hover:text-yellow-400 hover:scale-105"
                      }`}
                    >
                      {link.name}
                    </Link>
                  </motion.div>
                ))}
              </motion.div>

              {/* Theme Toggle */}
              <motion.button
                onClick={toggleTheme}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                className="p-2 rounded-full bg-gray-800/50 hover:bg-gray-700/70"
                aria-label="Toggle theme"
              >
                {theme === "dark" ? (
                  <motion.span
                    animate={{ rotate: 360, scale: [1, 1.2, 1] }}
                    transition={{ duration: 0.5 }}
                  >
                    ☀️
                  </motion.span>
                ) : (
                  <motion.span
                    animate={{ rotate: 360, scale: [1, 1.2, 1] }}
                    transition={{ duration: 0.5 }}
                  >
                    🌙
                  </motion.span>
                )}
              </motion.button>

              {/* Mobile Menu Button */}
              <motion.div
                className="md:hidden"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                <button
                  onClick={() => setIsOpen(!isOpen)}
                  className="p-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-400 focus:ring-opacity-50"
                  aria-label="Toggle menu"
                >
                  {isOpen ? (
                    <X size={28} className="text-yellow-400" />
                  ) : (
                    <Menu size={28} />
                  )}
                </button>
              </motion.div>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial="closed"
              animate="open"
              exit="closed"
              variants={mobileMenu}
              className="overflow-hidden md:hidden bg-gray-900/95"
            >
              <motion.div className="flex flex-col px-6 py-4 space-y-2">
                {navLinks.map((link) => (
                  <motion.div
                    key={link.path}
                    variants={mobileItem}
                    whileHover={{ x: 10 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Link
                      to={link.path}
                      onClick={() => setIsOpen(false)}
                      className={`flex items-center px-4 py-3 text-lg font-medium rounded-lg transition-all ${
                        location.pathname === link.path
                          ? "bg-gray-800 text-yellow-400"
                          : "text-gray-300 hover:bg-gray-800 hover:text-yellow-400"
                      }`}
                    >
                      <span className="mr-3">{link.icon}</span>
                      {link.name}
                    </Link>
                  </motion.div>
                ))}
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.nav>

      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        {[...Array(5)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full bg-yellow-400/10"
            style={{
              width: Math.random() * 100 + 50,
              height: Math.random() * 100 + 50,
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, (Math.random() - 0.5) * 50],
              x: [0, (Math.random() - 0.5) * 50],
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
    </header>
  );
}
