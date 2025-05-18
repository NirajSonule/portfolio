import { motion } from "framer-motion";

const Footer = () => {
  const currentYear = new Date().getFullYear(); // Dynamically fetch the current year

  return (
    <footer className="w-full flex justify-center">
      <div className="flex flex-col items-center justify-start w-[90%] rounded-lg shadow-lg ring ring-gray-200 p-4">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="max-w-screen-lg mx-auto text-center text-gray-600"
        >
          {/* Footer Text with copyright */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.5 }}
            className="text-sm text-gray-600"
          >
            © {currentYear} Niraj Sonule. All rights reserved. Crafted with{" "}
            <span className="mx-1 text-violet-500">❤️</span> using React &
            Tailwind
          </motion.p>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
