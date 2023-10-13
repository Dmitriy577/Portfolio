import React from "react";

import { useInView } from "react-intersection-observer";
import { motion } from "framer-motion";
import { fadeIn } from "../variants";
import { Link } from "react-scroll";

const About = () => {
  const [ref] = useInView({
    threshold: 0.5,
  });
  return (
    <section id="about" className="section" ref={ref}>
      <div className="container  mx-auto">
        <div className="flex flex-col gap-y-10 lg:flex-row lg:items-center lg:gap-x-20 lg:gap-y-0 h-screen">
          <motion.div
            variants={fadeIn("left", 0.5)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.3 }}
            className="flex-1 bg-about bg-cotain bg-no-repeat h-[400px] mix-blend-lighten bg-top"
          ></motion.div>
          <motion.div
            variants={fadeIn("right", 0.3)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.3 }}
            className="flex-1"
          >
            <h2 className="h2 text-accent">About me.</h2>
            <h3 className="h3 mb-4">
              I'm a Freelance Front-end Developer with over 2 years of
              experiance.
            </h3>
            <p className="mb-8 text-justify">
              I am actively seeking employment opportunities in this field. With
              my expertise in front-end development including HTML. CSS. and
              JavaScript, along with my proficiency in React. I am will-equipped
              to create engaging and responsive user interfaces I am eager to
              contribute my skills and knowledge to a dynamic team and help
              build exceptional web applications
            </p>
            <div className="flex gap-x-8 items-center">
              <Link
                to="contact"
                activeClass="active"
                smooth={true}
                spy={true}
                className="flex cursor-pointer btn btn-lg items-center justify-center"
              >
                Contact me
              </Link>
              <Link
                to="work"
                activeClass="active"
                smooth={true}
                spy={true}
                className="flex cursor-pointer text-gradient btn-link items-center justify-center"
              >
                My portfolio
              </Link>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
