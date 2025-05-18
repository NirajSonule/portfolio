import { motion } from "motion/react";

const Hero = () => {
  return (
    <section className="relative w-full min-h-screen flex justify-center mb-8">
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1, ease: "easeOut" }}
        className="absolute flex items-center justify-center w-[90%] h-full rounded-lg shadow-lg ring ring-gray-200 text-center overflow-hidden"
      >
        {/* Background Pulses */}
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 0.3, y: 0 }}
          transition={{ delay: 0.2, duration: 1 }}
          className="absolute top-[-4rem] left-[-4rem] w-80 h-80 bg-pink-400 rounded-full filter blur-3xl z-0"
        ></motion.div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 0.3, y: 0 }}
          transition={{ delay: 0.4, duration: 1 }}
          className="absolute bottom-[-3rem] right-[-3rem] w-72 h-72 bg-blue-400 rounded-full filter blur-3xl z-0"
        ></motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 0.3, scale: 1 }}
          transition={{ delay: 0.6, duration: 1 }}
          className="absolute top-[30%] left-[40%] w-60 h-60 bg-violet-400 rounded-full filter blur-3xl z-0"
        ></motion.div>

        {/* Text Content */}
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.8, duration: 1 }}
          className="relative z-10 p-8"
        >
          <h2 className="text-4xl font-roboto">
            I'm{" "}
            <span className="bg-gradient-to-t text-transparent inline-block from-amber-500 to-amber-300 bg-clip-text">
              Niraj Sonule
            </span>
          </h2>
          <h2 className="text-6xl font-bold font-roboto inline-block text-transparent bg-gradient-to-t from-neutral-950 to-gray-400 bg-clip-text">
            FRONTEND DEVELOPER
          </h2>
          <p className="text-md font-bold font-roboto text-zinc-500 mt-4">
            Passionate about building clean, responsive, and user-friendly web
            interfaces.
          </p>
          <button
            onClick={() => {
              const a = document.createElement("a");
              a.href = "/resume.pdf";
              a.download = "Niraj_Sonule_Resume.pdf";
              a.click();
            }}
            className="mt-8 px-8 py-3 bg-violet-600 text-white font-semibold rounded-lg hover:bg-violet-700 transition duration-200 cursor-pointer"
          >
            Download Resume
          </button>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;
