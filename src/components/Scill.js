import React from "react";
import { motion } from "framer-motion";
import { fadeIn } from "../variants";
import { SiJavascript, SiTailwindcss, SiTypescript } from "react-icons/si";
import { GrReactjs } from "react-icons/gr";
import { AiFillHtml5 } from "react-icons/ai";
import { IoLogoCss3 } from "react-icons/io";
import { DiGit } from "react-icons/di";
import { BsGithub } from "react-icons/bs";

const Scill = () => {
  return (
    <section className="section" id="scill">
      <div className="container mx-auto">
        <div className="flex-col gap-y-8 lg:flex-row lg:items-center">
          <div className="flex justify-center">
            <motion.h2
              variants={fadeIn("up", 0.4)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: false, amount: 0.4 }}
              className="h2 leading-tight text-accent"
            >
              My Scills.
            </motion.h2>
          </div>
          <div className="flex justify-center flex-wrap gap-x-10 gap-y-10">
            <motion.div
              variants={fadeIn("up", 0.4, "left", 0.4)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: false, amount: 0.7 }}
              className="w-60 h-60 py-20 border rounded-2xl text-center"
            >
              <i className="text-5xl flex justify-center mb-3 ease-in duration-300 hover:scale-125">
                <SiJavascript />
              </i>
              <p className="h3">JavaScript</p>
            </motion.div>
            <motion.div
              variants={fadeIn("up", 0.4, "left", 0.4)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: false, amount: 0.7 }}
              className="w-60 h-60 py-20 border rounded-2xl text-center"
            >
              <i className="text-5xl flex justify-center mb-3 ease-in duration-300 hover:scale-125">
                <GrReactjs />
              </i>
              <p className="h3">React</p>
            </motion.div>
            <motion.div
              variants={fadeIn("up", 0.4, "left", 0.4)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: false, amount: 0.7 }}
              className="w-60 h-60 py-20 border rounded-2xl text-center"
            >
              <i className="text-5xl flex justify-center mb-3 ease-in duration-300 hover:scale-125">
                <SiTypescript />
              </i>
              <p className="h3">TypeScript</p>
            </motion.div>

            <motion.div
              variants={fadeIn("up", 0.4, "left", 0.4)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: false, amount: 0.7 }}
              className="w-60 h-60 py-20 border rounded-2xl text-center"
            >
              <i className="text-5xl flex justify-center mb-3 ease-in duration-300 hover:scale-125">
                <AiFillHtml5 />
              </i>
              <p className="h3">HTML</p>
            </motion.div>

            <motion.div
              variants={fadeIn("up", 0.4, "left", 0.4)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: false, amount: 0.7 }}
              className="w-60 h-60 py-20 border rounded-2xl text-center"
            >
              <i className="text-5xl flex justify-center mb-3 ease-in duration-300 hover:scale-125">
                <IoLogoCss3 />
              </i>
              <p className="h3">CSS</p>
            </motion.div>
            <motion.div
              variants={fadeIn("up", 0.4, "left", 0.4)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: false, amount: 0.7 }}
              className="w-60 h-60 py-20 border rounded-2xl text-center"
            >
              <i className="text-5xl flex justify-center mb-3 ease-in duration-300 hover:scale-125">
                <DiGit />
              </i>
              <p className="h3">Git</p>
            </motion.div>
            <motion.div
              variants={fadeIn("up", 0.4, "left", 0.4)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: false, amount: 0.7 }}
              className="w-60 h-60 py-20 border rounded-2xl text-center"
            >
              <i className="text-5xl flex justify-center mb-3 ease-in duration-300 hover:scale-125">
                <BsGithub />
              </i>
              <p className="h3">GitHub</p>
            </motion.div>
            <motion.div
              variants={fadeIn("up", 0.4, "left", 0.4)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: false, amount: 0.7 }}
              className="w-60 h-60 py-20 border rounded-2xl text-center"
            >
              <i className="text-5xl flex justify-center mb-3 ease-in duration-300 hover:scale-125">
                <SiTailwindcss />
              </i>
              <p className="h3">TailvindCSS</p>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Scill;
