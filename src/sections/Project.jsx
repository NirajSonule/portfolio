import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FiExternalLink, FiChevronLeft, FiChevronRight } from "react-icons/fi";
import { FaGithub } from "react-icons/fa";

import gamify_img from "../assets/project/gamify-img.png";

// Project data - replace with your actual projects
const projectData = [
  {
    id: 1,
    title: "Gamify",
    description:
      "Gamify is a web application designed to help users discover new games based on their preferences and ratings. The platform allows users to rate games, track their favorites, and receive personalized game recommendations, making it easier to find your next gaming adventure.",
    tech: ["React", "TailwindCSS", "Mongo DB", "Node JS"],
    image: gamify_img,
    githubUrl: "https://github.com/NirajSonule/Gamify",
    liveUrl: "#",
  },
  {
    id: 2,
    title: "Farmacy",
    description:
      "Farmacy project allows users to book hospital beds in advance and purchase medicines online.",
    tech: ["PHP", "HTML", "CSS", "JS", "MY SQL"],
    image: "/api/placeholder/600/380",
    githubUrl: "https://github.com/NirajSonule/Farmacy",
    liveUrl: "#",
  },
  {
    id: 3,
    title: "Mystic Dark: Arena",
    description:
      "Mystic Dark: Arena is an intense, interactive card game where two players clash in a mystical battleground of strategy, spells, and shadowy forces. Build your deck, unleash powerful combos, and outmaneuver your opponent in a world where every move could shift the balance between victory and defeat. Choose your path – light or dark – and battle for dominance in the ever-shifting Arena.",
    tech: ["React", "TailwindCSS", "Mongo DB", "Node JS"],
    image: "/api/placeholder/600/380",
    githubUrl: "https://github.com/NirajSonule/mystic-dark",
    liveUrl: "#",
  },
];

const ProjectCard = ({ project, position, onCardClick, isCenter }) => {
  const [isHovered, setIsHovered] = useState(false);

  // Position styles based on card location (left, center, right)
  const positionStyles = {
    left: {
      zIndex: 10,
      x: "-15%",
      y: "5%",
      scale: 0.9,
      opacity: 0.7,
      rotateY: "5deg",
    },
    center: {
      zIndex: 30,
      x: "0%",
      y: "5%",
      scale: 1,
      opacity: 1,
      rotateY: "0deg",
    },
    right: {
      zIndex: 10,
      x: "15%",
      y: "5%",
      scale: 0.9,
      opacity: 0.7,
      rotateY: "-5deg",
    },
    hidden: {
      zIndex: 0,
      x: position === "left" ? "-50%" : "50%",
      y: "10%",
      scale: 0.8,
      opacity: 0,
      rotateY: position === "left" ? "15deg" : "-15deg",
    },
  };

  return (
    <motion.div
      className="absolute top-0 left-0 right-0 w-full h-full"
      initial={positionStyles.hidden}
      animate={positionStyles[position]}
      transition={{
        type: "spring",
        stiffness: 300,
        damping: 30,
        duration: 0.5,
      }}
      onClick={() => onCardClick(project.id)}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      style={{ cursor: isCenter ? "default" : "pointer", touchAction: "none" }}
    >
      <div className="w-full h-full relative rounded-xl overflow-hidden bg-white shadow-xl border border-gray-100">
        {/* Project Image as Background */}
        <div className="relative w-full h-full">
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-full object-cover"
          />

          {/* Gradient Overlay - always visible but stronger on hover */}
          <motion.div
            className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-black/20"
            animate={{
              opacity: isHovered && isCenter ? 0.95 : 0.5,
            }}
            transition={{ duration: 0.3 }}
          />

          {/* Project Info - Only visible on hover and when the card is in center */}
          <AnimatePresence>
            {isHovered && isCenter && (
              <motion.div
                className="absolute inset-0 flex flex-col justify-end p-8"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 20 }}
                transition={{ duration: 0.3 }}
              >
                <h3 className="text-3xl font-bold text-white mb-3">
                  {project.title}
                </h3>
                <p className="text-gray-200 mb-4">{project.description}</p>

                {/* Tech Stack */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tech.map((tech, i) => (
                    <span
                      key={i}
                      className="px-3 py-1 text-xs font-medium bg-white/10 backdrop-blur-sm text-white rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Action Buttons */}
                <div className="flex space-x-4">
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    className="flex items-center px-4 py-2 bg-white/10 backdrop-blur-sm hover:bg-white/20 text-white rounded-lg transition-colors"
                  >
                    <FaGithub size={16} className="mr-2" />
                    GitHub
                  </a>
                  <a
                    href={project.liveUrl}
                    className="flex items-center px-4 py-2 bg-violet-600 hover:bg-violet-700 text-white rounded-lg transition-colors"
                  >
                    <FiExternalLink size={16} className="mr-2" />
                    Live Demo
                  </a>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </motion.div>
  );
};

const Project = () => {
  const [centerIndex, setCenterIndex] = useState(0);

  const getPosition = (index) => {
    const totalProjects = projectData.length;

    // Calculate the relative position
    if (index === centerIndex) return "center";

    // Find the previous and next indices with wrapping
    const prevIndex = (centerIndex - 1 + totalProjects) % totalProjects;
    const nextIndex = (centerIndex + 1) % totalProjects;

    if (index === prevIndex) return "left";
    if (index === nextIndex) return "right";

    return "hidden";
  };

  const handleCardClick = (projectId) => {
    // Find the index of the clicked project
    const newCenterIndex = projectData.findIndex((p) => p.id === projectId);
    if (newCenterIndex !== -1) {
      setCenterIndex(newCenterIndex);
    }
  };

  // Navigation controls
  const navigatePrev = () => {
    setCenterIndex(
      (prevIndex) => (prevIndex - 1 + projectData.length) % projectData.length
    );
  };

  const navigateNext = () => {
    setCenterIndex((prevIndex) => (prevIndex + 1) % projectData.length);
  };

  // Auto-rotate the carousel (disabled when hovering)
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  useEffect(() => {
    if (!isAutoPlaying) return;

    const interval = setInterval(() => {
      navigateNext();
    }, 5000);

    return () => clearInterval(interval);
  }, [isAutoPlaying, centerIndex]);

  return (
    <section
      id="projects"
      className="w-full flex justify-center mb-8 font-roboto"
      onMouseEnter={() => setIsAutoPlaying(false)}
      onMouseLeave={() => setIsAutoPlaying(true)}
    >
      <div className="flex flex-col items-center justify-start w-[90%] rounded-lg shadow-lg ring ring-gray-200 p-8 relative overflow-hidden">
        {/* Background Elements */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 0.05, x: 0 }}
          transition={{ duration: 1 }}
          className="absolute top-20 left-10 w-64 h-64 bg-violet-400 rounded-full filter blur-3xl z-0"
        ></motion.div>

        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 0.05, x: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="absolute bottom-20 right-10 w-80 h-80 bg-blue-400 rounded-full filter blur-3xl z-0"
        ></motion.div>

        <div className="relative z-10 w-full">
          {/* Section Header */}
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-4"
          >
            <h2 className="text-2xl font-roboto font-bold text-violet-700">
              PROJECT'S
            </h2>
          </motion.div>

          {/* Carousel Container */}
          <div className="relative w-4/5 mx-auto h-96 md:h-[32rem] mb-12">
            <div className="absolute inset-0">
              {/* Project Cards */}
              {projectData.map((project, index) => (
                <ProjectCard
                  key={project.id}
                  project={project}
                  position={getPosition(index)}
                  onCardClick={handleCardClick}
                  isCenter={getPosition(index) === "center"}
                />
              ))}
            </div>
          </div>

          <div className="flex justify-center items-center mb-8">
            <motion.button
              onClick={navigatePrev}
              className="bg-violet-600 hover:bg-violet-700 text-white w-10 h-10 rounded-full flex items-center justify-center mr-6"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <FiChevronLeft size={24} />
            </motion.button>

            <h3 className="text-lg font-bold text-black px-4">
              {projectData[centerIndex]?.title || "Project"}
            </h3>

            <motion.button
              onClick={navigateNext}
              className="bg-violet-600 hover:bg-violet-700 text-white w-10 h-10 rounded-full flex items-center justify-center ml-6"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <FiChevronRight size={24} />
            </motion.button>
          </div>

          {/* Navigation Dots */}
          <div className="flex justify-center space-x-2 mb-4">
            {projectData.map((_, index) => (
              <motion.button
                key={index}
                className={`w-2 h-2 rounded-full ${
                  index === centerIndex ? "bg-violet-600" : "bg-gray-300"
                }`}
                onClick={() => setCenterIndex(index)}
                whileHover={{ scale: 1.2 }}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Project;
