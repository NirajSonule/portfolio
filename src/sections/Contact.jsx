import { motion } from "framer-motion";
import {
  FaEnvelope,
  FaPhoneAlt,
  FaMapMarkerAlt,
  FaGithub,
  FaLinkedin,
  FaTwitter,
} from "react-icons/fa";

const Contact = () => {
  const handleSubmit = () => {
    alert("Form submission not yet set up");
  };

  return (
    <section id="contact" className="w-full flex justify-center mb-8">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="bg-white flex flex-col items-center justify-start w-[90%] rounded-lg shadow-lg ring ring-gray-200 p-8"
      >
        <h2 className="text-2xl font-roboto font-bold mb-8 text-violet-700">
          CONTACT
        </h2>

        <div className="w-full grid grid-cols-1 md:grid-cols-5 gap-8 max-w-6xl">
          {/* Left Column */}
          <motion.div
            className="md:col-span-2 space-y-6"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            {/* Contact Information */}
            <motion.div
              className="border border-gray-200 rounded-lg shadow-md ring ring-gray-200 p-6"
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
            >
              <h3 className="text-xl font-semibold text-violet-700 mb-4 border-b pb-2">
                Contact Information
              </h3>
              <div className="space-y-4 text-sm">
                <div className="flex items-start space-x-4">
                  <FaEnvelope className="text-violet-600 mt-1" />
                  <div>
                    <p className="text-gray-600">Email</p>
                    <a
                      href="mailto:niraj.sonule@example.com"
                      className="text-gray-900 hover:text-violet-600"
                    >
                      niraj.sonule@example.com
                    </a>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <FaPhoneAlt className="text-violet-600 mt-1" />
                  <div>
                    <p className="text-gray-600">Phone</p>
                    <a
                      href="tel:+919876543210"
                      className="text-gray-900 hover:text-violet-600"
                    >
                      +91 73503 21478
                    </a>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <FaMapMarkerAlt className="text-violet-600 mt-1" />
                  <div>
                    <p className="text-gray-600">Location</p>
                    <p className="text-gray-900">
                      Badlapur, Maharashtra, India
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Social Media */}
            <motion.div
              className="border border-gray-200 rounded-lg shadow-md ring ring-gray-200 p-6"
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
            >
              <h3 className="text-xl font-semibold text-violet-700 mb-4 border-b pb-2">
                Let's Connect
              </h3>
              <p className="text-gray-600 mb-4">
                Follow me on social media to stay updated.
              </p>
              <div className="flex space-x-4">
                <a
                  href="https://github.com/NirajSonule"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-600 hover:text-violet-600 transition-colors"
                >
                  <FaGithub size={24} />
                </a>
                <a
                  href="https://www.linkedin.com/in/nirajsonule/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-600 hover:text-violet-600 transition-colors"
                >
                  <FaLinkedin size={24} />
                </a>
                <a
                  href="https://x.com/nirajsonule07"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-600 hover:text-violet-600 transition-colors"
                >
                  <FaTwitter size={24} />
                </a>
              </div>
            </motion.div>
          </motion.div>

          {/* Right Column – Contact Form */}
          <motion.div
            className="md:col-span-3 border border-gray-200 shadow-md ring ring-gray-200 rounded-lg p-6"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            <h3 className="text-xl font-semibold text-violet-700 mb-4 border-b pb-2">
              Send Me a Message
            </h3>

            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="text-sm font-semibold text-gray-700 mb-2 block">
                    Name
                  </label>
                  <input
                    type="text"
                    placeholder="Your Name"
                    required
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-violet-500 transition duration-200"
                  />
                </div>
                <div>
                  <label className="text-sm font-semibold text-gray-700 mb-2 block">
                    Email
                  </label>
                  <input
                    type="email"
                    placeholder="Your Email"
                    required
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-violet-500 transition duration-200"
                  />
                </div>
              </div>

              <div>
                <label className="text-sm font-semibold text-gray-700 mb-2 block">
                  Subject
                </label>
                <input
                  type="text"
                  placeholder="Subject"
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-violet-500 transition duration-200"
                />
              </div>

              <div>
                <label className="text-sm font-semibold text-gray-700 mb-2 block">
                  Message
                </label>
                <textarea
                  placeholder="Your Message"
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-violet-500 transition duration-200 h-32"
                ></textarea>
              </div>

              <button
                type="button"
                onClick={handleSubmit}
                className="w-full py-3 bg-violet-600 text-white rounded-lg hover:bg-violet-700 transition-all duration-300"
              >
                Submit
              </button>
            </form>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};

export default Contact;
