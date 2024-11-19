
import { motion } from "framer-motion";
import { EXPERIENCES } from "../constants";

const containerVariant = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 1,
      staggerChildren: 0.8,
    },
  },
};

const itemVariant = {
  hidden: { opacity: 0, x: -20 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.5 },
  },
};

const techVariant = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: { opacity: 1, scale: 1, transition: { duration: 0.3 } },
};

const Experience = () => {
  return (
    <div className="border-b border-neutral-900 pb-4 lg:px-0 px-5" id="experience">
      <motion.h2
      whileInView={{ opacity: 1, y: 0 }}
      initial={{ opacity: 0, y: -100 }}
      transition={{ duration: 1.5 }}
      className="my-20 text-center text-4xl">EXPERIENCE</motion.h2>
      <motion.div
        className="mx-auto max-w-6xl"
        initial="hidden"
        whileInView="visible"
        variants={containerVariant}
        viewport={{ once: true }}
      >
        {EXPERIENCES.map((experience, index) => (
          <motion.div
            key={index}
            className="mb-8 flex flex-wrap lg:justify-center"
            variants={itemVariant}
          >
            {/* Year Section */}
            <div className="w-full lg:w-1/4">
              <motion.p
               whileInView={{ opacity: 1, y: 0 }}
               initial={{ opacity: 0, y: -100 }}
               transition={{ duration: 1.5 }}
              
              className="mb-2 text-sm text-neutral-400" variants={itemVariant}>
                {experience.year}
              </motion.p>
            </div>
            
            {/* Role, Description, and Technologies */}
            <div className="w-full max-w-xl lg:w-3/4">
              <motion.h6 
               whileInView={{ opacity: 1, y: 0 }}
               initial={{ opacity: 0, y: -100 }}
               transition={{ duration: 1.5 }}
              className="mb-2 font-semibold" variants={itemVariant}>
                {experience.role} -{" "}
                <span className="text-sm text-white">{experience.company}</span>
              </motion.h6>
              <motion.p 
               whileInView={{ opacity: 1, y: 0 }}
               initial={{ opacity: 0, y: -100 }}
               transition={{ duration: 1.5 }}
               className="mb-4 text-neutral-400" variants={itemVariant}>
                {experience.description}
              </motion.p>
              <motion.div
               whileInView={{ opacity: 1, y: 0 }}
               initial={{ opacity: 0, y: -100 }}
               transition={{ duration: 1.5 }} className="flex flex-wrap" variants={containerVariant}>
                {experience.technologies.map((tech, index) => (
                  <motion.span
                  whileInView={{ opacity: 1, y: 0 }}
                  initial={{ opacity: 0, y: -100 }}
                  transition={{ duration: 1.5 }}
                    key={index}
                    className="mr-2 mt-4 rounded bg-neutral-900 px-2 py-1 text-sm font-medium text "
                    variants={techVariant}
                  >
                    {tech}
                  </motion.span>
                ))}
              </motion.div>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};

export default Experience;