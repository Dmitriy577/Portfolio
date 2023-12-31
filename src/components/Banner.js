import React from "react";
import Image from "../assets/avatar.png";
import { FaGithub, FaLinkedin, FaTelegram } from "react-icons/fa";
import { TypeAnimation } from "react-type-animation";
import { motion } from "framer-motion";
import { fadeIn } from "../variants";
import { Link } from "react-scroll";

const Banner = () => {
  return (
    <section
      className="min-h-[85vh] lg:min-h[78vh] flex items-center"
      id="home"
    >
      <div className="container mx-auto">
        <div className="flex flex-col gap-y-8 lg:flex-row lg:items-center">
          <div className="flex-1 text-center font-secondary lg:text-left">
            <motion.h1
              variants={fadeIn("up", 0.4)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: false, amount: 0.7 }}
              className="text-[55px] font-bold leading-[0.8] lg:text-[110px]"
            >
              Dmitriy <span>Matviichuk</span>
            </motion.h1>
            <motion.div
              variants={fadeIn("up", 0.3)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: false, amount: 0.7 }}
              className="mb-6 text-[36px] lg:text-[60px] font-secondary font-semibold uppercase leading-[1]"
            >
              <span className="mr-4">I am a</span>
              <TypeAnimation
                sequence={["Front-and", 2000, "Developer", 2000]}
                speed={50}
                className="text-accent"
                wrapper="span"
                repeat="infinite"
              />
            </motion.div>
            <motion.p
              variants={fadeIn("up", 0.5)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: false, amount: 0.7 }}
              className="h3 max-w-[455px] text-center mb-8 mx-auto"
            >
              welcome to my website
            </motion.p>
            <motion.div
              variants={fadeIn("up", 0.6)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: false, amount: 0.7 }}
              className="flex max-w-max gap-x-6 items-center mb-12 mx-auto "
            >
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
            </motion.div>
            <motion.div
              variants={fadeIn("up", 0.7)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: false, amount: 0.7 }}
              className="flex text-[30px] gap-x-8 max-w-max mx-auto"
            >
              <a href="https://github.com/Dmitriy577">
                <FaGithub />
              </a>
              <a href="https://www.linkedin.com/in/%D0%B4%D0%BC%D0%B8%D1%82%D1%80%D0%B8%D0%B9-%D0%BC%D0%B0%D1%82%D0%B2%D0%B8%D0%B9%D1%87%D1%83%D0%BA-38b88a184/">
                <FaLinkedin />
              </a>
              <a href="https://t.me/DimitriyMat">
                <FaTelegram />
              </a>
            </motion.div>
          </div>
          <motion.div
            variants={fadeIn("down", 0.5)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.7 }}
            className="hidden lg:flex flex-1 max-w-[320px] lg:max-w-[482px]"
          >
            <img src={Image} alt="" className="opacity-80" />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Banner;
