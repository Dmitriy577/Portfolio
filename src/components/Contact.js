import React from "react";
import { motion } from "framer-motion";
import { fadeIn } from "../variants";
import { useState, useEffect } from "react";
import { FaLinkedin, FaTelegram } from "react-icons/fa";
import { BsTelephoneFill } from "react-icons/bs";
import { GrMail } from "react-icons/gr";

const Contact = () => {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [emailDirty, setEmailDirty] = useState(false);
  const [nameDirty, setNameDirty] = useState(false);
  const [emailError, setEmailError] = useState("ghjklhjk;lk;");
  const [nameError, setNameError] = useState("dfflhpnlo[pl");
  const [formValid, setFormValid] = useState(false);

  useEffect(() => {
    if (emailError || nameError) {
      setFormValid(false);
    } else {
      setFormValid(true);
    }
  }, [emailError, nameError]);

  const emailHandler = (e) => {
    setEmail(e.target.value);
    const re =
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if (!re.test(String(e.target.value).toLowerCase())) {
      setEmailError("djh");
    } else {
      setEmailError("");
    }
  };

  const nameHandler = (e) => {
    setName(e.target.value);
    if (e.target.value.length < 3 || e.target.value.length > 15) {
      setNameError("gergbtr");
      if (e.target.value) {
        setNameError("gget");
      }
    } else {
      setNameError("");
    }
  };

  const blurHandler = (el) => {
    switch (el.target.name) {
      case "email":
        setEmailDirty(true);
        break;
      case "name":
        setNameDirty(true);
        break;
      default:
        break;
    }
  };

  return (
    <section className="py-16 lg:section" id="contact">
      <div className="container mx-auto">
        <div className="flex flex-col lg:flex-row">
          <motion.div
            className="flex-1 flex justify-start items-center bg-transparent py-3 outline-none w-full placeholder:text-white focus:border-accent tansition-all"
            variants={fadeIn("right", 0.3)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.3 }}
          >
            <div>
              <h4 className="uppercase text-accent lg:text-[30px] font-medium mb-2 tracking-wide">
                Get in Toch
              </h4>
              <h2 className="text-[45px] lg:text-[55px] leading-none mb-12  uppercase">
                Let's go
              </h2>
            </div>
            <div className="flex text-[30px] gap-x-8 max-w-max mx-auto">
              <a href="tel:+380502377663">
                <BsTelephoneFill />
              </a>
              <a href="mailto:matdimav@gmail.com">
                <GrMail />
              </a>
              <a href="https://www.linkedin.com/in/%D0%B4%D0%BC%D0%B8%D1%82%D1%80%D0%B8%D0%B9-%D0%BC%D0%B0%D1%82%D0%B2%D0%B8%D0%B9%D1%87%D1%83%D0%BA-38b88a184/">
                <FaLinkedin />
              </a>
              <a href="https://t.me/DimitriyMat">
                <FaTelegram />
              </a>
            </div>
          </motion.div>
          <motion.form
            variants={fadeIn("left", 0.5)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.3 }}
            className="flex-1 border rounded-2xl flex flex-col gap-y-6 pb-24 p-6 items-start"
          >
            <input
              className="bg-transparent border-b py-3 outline-none w-full placeholder:text-white focus:border-accent tansition-all"
              type="name"
              placeholder="Your name"
              value={name}
              onBlur={(el) => blurHandler(el)}
              onChange={(el) => nameHandler(el)}
            />
            {nameDirty && nameError && (
              <div className="text-blue-600">{nameError}</div>
            )}
            <input
              className="bg-transparent border-b py-3 outline-none w-full placeholder:text-white focus:border-accent tansition-all"
              type="email"
              placeholder="Your email"
              id="email"
              value={email}
              onBlur={(el) => blurHandler(el)}
              onChange={(el) => emailHandler(el)}
            />
            {emailDirty && emailError && (
              <h2 style={{ color: "red" }}>{emailError}</h2>
            )}

            <textarea
              className="bg-transparent border-b py-3 outline-none w-full placeholder:text-white focus:border-accent tansition-all resize-none mb-12"
              placeholder="Your message"
            ></textarea>
            <button disabled={!formValid} className="btn btn-lg">
              Send massage
            </button>
          </motion.form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
