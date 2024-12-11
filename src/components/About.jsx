import ShyamAboutimg from "../assets/ShyamAboutimg.jpg";
import { ABOUT_TEXT } from "../constants";
import { motion } from "framer-motion";

function About() {
  return (
    <div className="border-b border-neutral-900 pb-16">
      {/* Section Title */}
      <h1 className="my-20 text-center text-4xl font-bold">
        About <span className="text-neutral-500">Me</span>
      </h1>

      {/* Content Wrapper */}
      <div className="flex flex-wrap">
        {/* Image Section */}
        <motion.div
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: -100 }}
          transition={{ duration: 0.5 }}
          className="w-full lg:w-1/2 lg:p-8 flex items-center justify-center"
        >
          <img
            className="w-90 h-90 rounded-2xl shadow-lg"
            src={ShyamAboutimg}
            alt="About Me"
          />
        </motion.div>

        {/* Text Section */}
        <motion.div
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: 100 }}
          transition={{ duration: 0.5 }}
          className="w-full lg:w-1/2 px-8 flex items-center"
        >
          <div className="max-w-xl text-center lg:text-left">
          <p className="text-lg leading-snug whitespace-pre-line">
  {ABOUT_TEXT}
</p>
          </div>
        </motion.div>
      </div>
    </div>
  );
}

export default About;
