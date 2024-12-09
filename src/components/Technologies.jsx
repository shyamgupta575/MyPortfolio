import { RiReactjsLine } from "react-icons/ri"; // React
import { SiHtml5, SiCss3, SiBootstrap, SiJavascript, SiMongodb, SiNextdotjs, SiGit, SiMysql } from "react-icons/si"; // Other icons
import {motion} from "framer-motion";

const iconVariants = (duration)=>({
    initial:{y:-10},
    animate:{
        y:[10,-10],
        transition:{
            duration: duration,
            ease:"linear",
            repeat:Infinity,
            repeatType:"reverse"
        },
    },
})

function Technologies() {
  return (
    <div>
      <motion.h2 
      whileInView={{opacity:1,y:0}}
      initial={{opacity:0,y:-100}}
      transition={{duration:1.5}}
      className="my-20 text-center text-4xl">Technologies</motion.h2>
      <motion.div 
      whileInView={{opacity:1,x:0}}
      initial={{opacity:0,x:-100}}
      transition={{duration:1.5}}
      className="flex flex-wrap items-center justify-center gap-4">
        {/* HTML */}
        <motion.div
        variants={iconVariants(2.5)}
        initial="initial"
        animate="animate"
         className="rounded-2xl border-4 border-neutral-800 p-4">
          <SiHtml5 className="text-7xl text-orange-600" />
        </motion.div>
        {/* CSS */}
        <motion.div 
        variants={iconVariants(3)}
        initial="initial"
        animate="animate"
        className="rounded-2xl border-4 border-neutral-800 p-4">
          <SiCss3 className="text-7xl text-blue-600" />
        </motion.div>
        {/* Bootstrap */}
        <motion.div
        variants={iconVariants(5)}
        initial="initial"
        animate="animate"
        className="rounded-2xl border-4 border-neutral-800 p-4">
          <SiBootstrap className="text-7xl text-purple-600" />
        </motion.div>
        {/* JavaScript */}
        <motion.div
        variants={iconVariants(4)}
        initial="initial"
        animate="animate"
        className="rounded-2xl border-4 border-neutral-800 p-4">
          <SiJavascript className="text-7xl text-yellow-500" />
        </motion.div>
        {/* SQL */}
        <motion.div 
        variants={iconVariants(2)}
        initial="initial"
        animate="animate"
        className="rounded-2xl border-4 border-neutral-800 p-4">
          <SiMysql className="text-7xl text-blue-500" />
        </motion.div>
        {/* MongoDB */}
        <motion.div 
        variants={iconVariants(3)}
        initial="initial"
        animate="animate"
        className="rounded-2xl border-4 border-neutral-800 p-4">
          <SiMongodb className="text-7xl text-green-600" />
        </motion.div>
        {/* React */}
        <motion.div 
        variants={iconVariants(5)}
        initial="initial"
        animate="animate"
        className="rounded-2xl border-4 border-neutral-800 p-4">
          <RiReactjsLine className="text-7xl text-cyan-400" />
        </motion.div>
        {/* Next.js */}
        <motion.div 
        variants={iconVariants(2)}
        initial="initial"
        animate="animate"
        className="rounded-2xl border-4 border-neutral-800 p-4">
          <SiNextdotjs className="text-7xl text-black" />
        </motion.div>
        {/* Git */}
        <motion.div
        variants={iconVariants(6)}
        initial="initial"
        animate="animate" 
        className="rounded-2xl border-4 border-neutral-800 p-4">
          <SiGit className="text-7xl text-red-600" />
        </motion.div>
      </motion.div>
    </div>
  );
}

export default Technologies;
