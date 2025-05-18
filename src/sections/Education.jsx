import { motion } from "framer-motion";
import { FaGraduationCap, FaCalendarAlt, FaUniversity } from "react-icons/fa";

const educationDetails = [
  {
    degree: "Master's of Computer Application",
    institute: "St. Wilfred's College of Computer Science's",
    location: "Mumbai, India",
    year: "2023 - 2025",
    grade: "Graduated with First Class",
  },
  {
    degree: "B.Sc in Computer Science",
    institute: "D.G Ruparel College of Science",
    location: "Mumbai, India",
    year: "2020 - 2023",
    grade: "Graduated with First Class",
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { x: -30, opacity: 0 },
  visible: {
    x: 0,
    opacity: 1,
    transition: {
      duration: 0.6,
    },
  },
};

const Education = () => {
  return (
    <section id="education" className="w-full flex justify-center mb-8">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="bg-white w-[90%] rounded-lg shadow-lg ring ring-gray-200 p-8 flex flex-col items-center"
      >
        <h2 className="text-2xl font-roboto font-bold mb-8 text-violet-700">
          EDUCATION
        </h2>

        <motion.div
          className="w-full max-w-3xl"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {educationDetails.map((item, index) => (
            <motion.div
              key={index}
              className="relative pl-10 pb-12 last:pb-0"
              variants={itemVariants}
            >
              {/* Timeline line */}
              {index < educationDetails.length - 1 && (
                <div className="absolute left-4 top-4 h-full w-0.5 bg-violet-300"></div>
              )}

              {/* Timeline dot */}
              <div className="absolute left-0 top-0 w-8 h-8 rounded-full bg-violet-100 flex items-center justify-center ring-2 ring-violet-600">
                <FaGraduationCap className="text-violet-700" size={16} />
              </div>

              {/* Content Card */}
              <motion.div
                className="bg-gradient-to-br from-violet-50 to-white border border-gray-200 rounded-lg p-6 shadow-md"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
              >
                <div className="flex flex-wrap justify-between items-center mb-2">
                  <h3 className="text-lg font-bold text-gray-800">
                    {item.degree}
                  </h3>
                  <div className="flex items-center text-sm text-violet-700 font-medium bg-violet-100 px-3 py-1 rounded-full">
                    <FaCalendarAlt className="mr-2" size={14} />
                    {item.year}
                  </div>
                </div>
                <div className="flex items-center text-sm text-gray-700 mb-2">
                  <FaUniversity className="mr-2" size={16} />
                  {item.institute}, {item.location}
                </div>
                <p className="text-sm italic text-gray-600">{item.grade}</p>
              </motion.div>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Education;
