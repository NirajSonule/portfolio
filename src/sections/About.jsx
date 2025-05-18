import { motion } from "framer-motion";

const About = () => {
  return (
    <section id="about" className="w-full flex justify-center mb-8">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="bg-white flex flex-col items-center justify-start w-[90%] rounded-lg shadow-lg ring ring-gray-200 p-8"
      >
        <h2 className="text-2xl text-violet-700 font-roboto font-bold mb-6">
          ABOUT
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 w-full">
          {/* Personal Details */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.1, duration: 0.6 }}
            className="bg-gradient-to-br from-blue-300 to-blue-100 rounded-lg p-8 transition-all duration-300 shadow-md ring ring-blue-50"
          >
            <h2 className="text-xl font-roboto font-semibold">
              Personal Details
            </h2>
            <p className="text-md font-roboto text-gray-800">
              Hi, I'm Niraj Sonule, a passionate Frontend Developer from
              Badlapur. I hold a BSc in Computer Science and a Master of
              Computer Applications (MCA). Although I’m at the beginning of my
              professional journey, my academic background and internship
              experience have given me a solid understanding of web development
              fundamentals.
              <br />
              I’m eager to learn and collaborate, and I’m looking forward to the
              opportunity to bring my enthusiasm and technical skills to new
              projects.
              <br />
              Feel free to explore my work, and don't hesitate to reach out for
              collaborations or opportunities!
            </p>
          </motion.div>

          {/* Interests & Hobbies */}
          <div className="grid grid-rows-2 gap-4">
            {/* Interests */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="bg-gradient-to-br from-teal-300 to-teal-100 rounded-lg p-8 transition-all duration-300 shadow-md ring ring-teal-50"
            >
              <h2 className="text-xl font-roboto font-semibold">Interests</h2>
              <ul className="list-disc pl-5">
                {["Dancing", "Drawing", "Playing Video Games"].map((item) => (
                  <li key={item}>
                    <p className="text-md font-roboto text-gray-800">{item}</p>
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Hobbies */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3, duration: 0.6 }}
              className="bg-gradient-to-br from-purple-300 to-purple-100 rounded-lg p-8 transition-all duration-300 shadow-md ring ring-purple-50"
            >
              <h2 className="text-xl font-roboto font-semibold">Hobbies</h2>
              <ul className="list-disc pl-5">
                {["Dancing", "Drawing", "Playing Video Games"].map((item) => (
                  <li key={item}>
                    <p className="text-md font-roboto text-gray-800">{item}</p>
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default About;
