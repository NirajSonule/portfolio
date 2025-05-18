import { motion, AnimatePresence } from "framer-motion"; // Correct import for motion and AnimatePresence
import { useState } from "react";
import { Link } from "react-scroll"; // Import Link from react-scroll for smooth scrolling
import logo from "../assets/logo.png";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <motion.header
      initial={{ y: -50, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="sticky top-0 left-0 w-full bg-gradient-to-b from-white to-transparent z-50 py-4 flex justify-center items-center"
    >
      <nav className="w-[90%] h-full bg-white flex justify-between items-center rounded-xl py-2 px-6 md:px-12 shadow-lg shadow-violet-50 ring ring-gray-200 relative">
        {/* Logo for mobile */}
        <div className="md:hidden">
          <img src={logo} alt="logo" className="w-10 h-10" />
        </div>

        {/* Hamburger menu */}
        <button
          className="md:hidden text-violet-600 focus:outline-none"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-6 h-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            {isMenuOpen ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            )}
          </svg>
        </button>

        {/* Desktop Menu */}
        <ul className="hidden md:flex w-full justify-between items-center font-roboto font-semibold">
          <li>
            <Link
              to="about"
              smooth={true}
              duration={500}
              className="transition-all duration-300 ease-in-out hover:text-violet-600 cursor-pointer"
            >
              About
            </Link>
          </li>
          <li>
            <Link
              to="projects"
              smooth={true}
              duration={500}
              className="transition-all duration-300 ease-in-out hover:text-violet-600 cursor-pointer"
            >
              Projects
            </Link>
          </li>
          <li>
            <a href="">
              <img
                src={logo}
                alt="logo"
                className="w-10 h-10 cursor-pointer hover:rotate-12 transition duration-300"
                onClick={scrollToTop}
              />
            </a>
          </li>
          <li>
            <Link
              to="skills"
              smooth={true}
              duration={500}
              className="transition-all duration-300 ease-in-out hover:text-violet-600 cursor-pointer"
            >
              Skills
            </Link>
          </li>
          <li>
            <Link
              to="education"
              smooth={true}
              duration={500}
              className="transition-all duration-300 ease-in-out hover:text-violet-600 cursor-pointer"
            >
              Education
            </Link>
          </li>
        </ul>

        {/* Mobile Dropdown Menu with animation */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.ul
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
              className="absolute top-full mt-2 left-0 w-full bg-white shadow-md rounded-lg flex flex-col items-center gap-4 py-4 md:hidden font-roboto font-semibold"
            >
              {["About", "Projects", "Skills", "Education"].map((item) => (
                <li key={item}>
                  <Link
                    to={item.toLowerCase()}
                    smooth={true}
                    duration={500}
                    className="transition-all duration-300 ease-in-out hover:text-violet-600 curspo"
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </motion.ul>
          )}
        </AnimatePresence>
      </nav>
    </motion.header>
  );
};

export default Header;
