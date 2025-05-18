import {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaReact,
  FaGitAlt,
  FaGithub,
  FaFigma,
} from "react-icons/fa";
import { SiBlender } from "react-icons/si";
import { motion } from "framer-motion";

const skills = [
  { name: "HTML", icon: <FaHtml5 className="text-orange-600" /> },
  { name: "CSS", icon: <FaCss3Alt className="text-blue-500" /> },
  { name: "JavaScript", icon: <FaJs className="text-yellow-400" /> },
  { name: "React", icon: <FaReact className="text-cyan-400" /> },
  { name: "Git", icon: <FaGitAlt className="text-red-500" /> },
  { name: "GitHub", icon: <FaGithub className="text-gray-800" /> },
  { name: "Figma", icon: <FaFigma className="text-pink-500" /> },
  { name: "Blender", icon: <SiBlender className="text-orange-500" /> },
];

const Skill = () => {
  return (
    <section id="skills" className="w-full flex justify-center mb-8">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="bg-white flex flex-col items-center justify-start w-[90%] rounded-lg shadow-lg ring ring-gray-200 p-8"
      >
        <h2 className="text-2xl text-violet-700 font-roboto font-bold mb-8">
          SKILL'S
        </h2>

        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 xl:grid-cols-8 gap-6">
          {skills.map((skill, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: 30 }} // initial state with horizontal movement
              whileInView={{ opacity: 1, x: 0 }} // visible state with no movement
              transition={{
                delay: 0.1 * index, // staggered effect by delay based on index
                duration: 0.6, // animation duration for each skill
                ease: "easeOut", // ease-out effect
              }}
              className="flex flex-col items-center justify-center bg-gray-100 hover:bg-violet-200 transition-all p-4 rounded-lg shadow-md"
            >
              <div className="text-4xl mb-2">{skill.icon}</div>
              <p className="font-medium">{skill.name}</p>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default Skill;
