import { FaBootstrap } from "react-icons/fa";
import { SiAdobephotoshop } from "react-icons/si";
import { RiTailwindCssFill } from "react-icons/ri";
import { TbBrandFigma } from "react-icons/tb";
import { motion } from "framer-motion";
const iconVariants = (duration) => ({
   initial: { y: -10 },
   animate: {
     y: [10, -10],
     transition: {
       duration: duration,
       ease: "linear",
       repeat: Infinity,
       repeatType: "reverse",
     },
   },
 });
const DesignFrameworks = () => {
  return (
    <div className="pb-24">
    <motion.h2
    whileInView={{ opacity: 1, y: 0 }}
    initial={{ opacity: 0, y: -100 }}
    transition={{ duration: 1.5 }}
     className="my-20 text-center text-4xl" >DESIGN FRAMEWORKS</motion.h2>
    <motion.div
  whileInView={{ opacity: 1, x: 0 }}
  initial={{ opacity: 0, x: 100 }} // Changed x to 100 for right to left transition
  transition={{ duration: 1.5 }}
    className="flex flex-wrap items-center justify-center gap-4">
       <motion.div initial="initial" animate="animate" variants={iconVariants(2.5)}>
        <FaBootstrap className="text-7xl text-cyan-400"/>
       </motion.div>
       <motion.div initial="initial" animate="animate" variants={iconVariants(3)} className="p-4">
          <TbBrandFigma className="text-7xl text-blue-900"/>
       </motion.div>
     
       <motion.div initial="initial" animate="animate" variants={iconVariants(5)} className="p-4">
          <RiTailwindCssFill className="text-7xl text-blue-400"/>
       </motion.div>
       <motion.div initial="initial" animate="animate" variants={iconVariants(6)} className="p-4">
          <SiAdobephotoshop className="text-7xl text-blue-500"/>
       </motion.div>
       
    </motion.div>
    </div>
  )
}

export default DesignFrameworks