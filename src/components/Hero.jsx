import { useState, useEffect } from "react";
import profilePic1 from "../assets/profile.jpg";
import profilePic2 from "../assets/me.jpg";
import { motion } from "framer-motion";

const containerVariants = {
  hidden: { opacity: 0, x: -100 },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.5,
      staggerChildren: 0.5,
    },
  },
};

const childVariants = {
  hidden: { opacity: 0, x: -100 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.5 } },
};

const Hero = () => {
  const [currentImage, setCurrentImage] = useState(profilePic1);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prevImage) => (prevImage === profilePic1 ? profilePic2 : profilePic1));
    }, 5000); // Change every 5 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="pb-4 lg:mb-36">
      <div className="flex flex-wrap lg:flex-row-reverse">
        <div className="w-full lg:w-1/2">
          <div className="flex justify-center lg:p-8">
            <motion.img
              src={currentImage}
              alt="Abhiram S Anand"
              className="border border-stone-900 rounded-3xl"
              width={350}
              initial={{ x: 100, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.5 }}
            />
          </div>
        </div>
        <div className="w-full lg:w-1/2">
          <motion.div
            initial={{ x: -100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            variants={containerVariants}
            className="flex flex-col items-center lg:items-start mt-10"
          >
            <motion.h2
              variants={childVariants}
              className="pb-2 text-4xl tracking-tighter lg:text-8xl"
            >
              Abhiram S Anand
            </motion.h2>
            <span className="bg-gradient-to-r from-stone-300 to-stone-600 bg-clip-text text-lg lg:text-3xl text-transparent sm:justify-center">
              MERN STACK DEVELOPER
            </span>
            <p className="my-2 max-w-lg py-6 text-xl leading-relaxed tracking-tighter">
              I am a dedicated MERN Stack Developer with a strong analytical approach to problem-solving. I have experience building web applications using React, Express.js, Node.js, Bootstrap, CSS, and HTML. My hands-on experience includes coding, debugging, and completing projects during my internship. I am skilled in managing databases with MongoDB and MySQL. I seek a role in a competitive organization to apply my skills, drive results, and contribute value. Eager to join a dynamic team and grow professionally.
            </p>
            <a
              href="/abhiram.pdf"
              target="_blank"
              download
              className="bg-white rounded-full p-4 text-sm text-stone-800 mb-10"
            >
              Download Resume
            </a>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
