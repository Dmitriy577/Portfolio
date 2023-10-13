import React, { useState } from "react";
import { motion } from "framer-motion";
import { fadeIn } from "../variants";
import Accordion from "./Accordion";
import { Link } from "react-scroll";

const Services = () => {
  const [open, setOpen] = useState(false);
  const toggle = (index) => {
    if (open === index) {
      return setOpen(null);
    }
    setOpen(index);
  };

  const accord = [
    {
      title: "Feb 2023 - Present",
      work: "FRONT-END DEVELOPER (freelancer)",
      g1: "- Creating web opps and support of existing ones",
      g2: "- Development of website design and structure",
    },
    {
      title: "Jul 2018 - Feb 2023",
      work: "Help-Desk supervisor (PrivatBank)",
      g1: "- Analysis and solution of technological problems arising in the work of Bank employees.",
      g2: "- Identification of technical problems arising in the work of Bank employees.",
    },
    {
      title: "Jun 2014 - Jul 2018",
      work: "Help-Desk (PrivatBank)",
      g1: "- Identification of technological and technical errors in the operation of the Bank’s software systems that arise among bank clients.",
      g2: "- Analysis and solution of problems that arise when working with clients complexes of the Bank.",
    },
  ];

  return (
    <section className="section" id="services">
      <div className="container mx-auto">
        <div className="flex flex-col lg:flex-row">
          <motion.div
            variants={fadeIn("right", 0.3)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.3 }}
            className="flex-1 lg:bg-services lg:bg-bottom bg-no-repeat mix-blend-lighten mb-12 lg:mb-0"
          >
            <h2 className="h2 text-accent mb-10">Expiriants.</h2>
            <Link
              to="work"
              activeClass="active"
              smooth={true}
              spy={true}
              className="flex cursor-pointer btn btn-lg items-center justify-center w-52"
            >
              See my work
            </Link>
          </motion.div>
          <motion.div
            variants={fadeIn("left", 0.5)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.3 }}
            className="flex-1"
          >
            {accord.map((data, index) => {
              return (
                <Accordion
                  key={index}
                  open={index === open}
                  title={data.title}
                  work={data.work}
                  g1={data.g1}
                  g2={data.g2}
                  g3={data.g3}
                  toggle={() => toggle(index)}
                />
              );
            })}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Services;
