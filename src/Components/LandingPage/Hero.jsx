import React from "react";
import { TypeAnimation } from "react-type-animation";
import { FaInstagram } from "react-icons/fa6";
import { FaFacebook } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { motion } from "framer-motion";
import vector from "/vector.png";

import hero from "/hero.png";

const Hero = () => {
  return (
    <>
      <img
        src={vector}
        alt="vector"
        loading="lazy"
        className="left-0 hw -z-10"
      />
      <main className="relative flex flex-wrap items-center justify-between md:h-screen md:flex-nowrap md:p-8 lg:p-0 gap-y-24">
        <article className=" md:max-w-[40%]  mt-[8rem] md:m-0">
          <div className="pb-6 text-4xl xl:text-[2.9rem]">
            <motion.h1
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="px-5 py-4 mb-4 text-white bg-purple w-max rounded-xl "
            >
              We Deal In
            </motion.h1>
            <motion.div
              initial={{ opacity: 0, x: -100 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <TypeAnimation
                sequence={[
                  "Mobile App",
                  1000,
                  "Web App",
                  1000,
                  "Graphics design",
                  1000,
                  "E-commerce",
                  1000,
                  "Custom Software",
                  1000,
                  "Software Quality",
                  1000,
                ]}
                wrapper="span"
                speed={50}
                style={{
                  fontSize: "2.9rem",
                  display: "inline-block",
                  marginTop: "10px",
                  marginBottom: "10px",
                }}
                repeat={Infinity}
              />
            </motion.div>
          </div>
          <motion.div
            initial={{ opacity: 0, x: -100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            className=" text-2xl lg:text-4xl mt-4 lg:mt-0 xl:leading-[3rem]  py- xl:w-[500px]"
          >
            <span className="font-bold "> Nizami's Soft Tech</span> is a leading
            provider of Mobile and Web Application solutions, specializing in
            React Native, MERN, and Laravel technologies, backed by a strong,
            skilled team dedicated to delivering innovative, high-quality
            solutions tailored to efficiently meet diverse client needs.
            <div>
              <motion.ul
                initial={{ opacity: 0, x: -100 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 1.2 }}
                className="list-none flex items-center mt-14 mb-12 gap-10 md:gap-24 w-full text-[3.5rem] "
              >
                <li className="transition-all hover:scale-125">
                  <a href="" className=" text-mpurple text-pink animate-bounce">
                    <FaInstagram className=" animate-bounce" />
                  </a>
                </li>
                <li className="transition-all hover:scale-125">
                  <a href="" className="text-blue">
                    <FaFacebook className=" animate-bounce" />
                  </a>
                </li>
                <li className="transition-all hover:scale-125">
                  <a href="" className="text-blue">
                    <FaTwitter className="delay-150 animate-bounce" />
                  </a>
                </li>
                <li className="transition-all hover:scale-125">
                  <a href="" className=" text-blue">
                    <FaLinkedin className="delay-100 animate-bounce" />
                  </a>
                </li>
              </motion.ul>
            </div>
          </motion.div>
        </article>

        <motion.article className="  md:max-w-[60%]   relative  md:mx-0 flex items-center justify-center  mx-auto">
          <motion.img
            initial={{ opacity: 0 }}
            whileInView={{ scale: 1 }}
            transition={{ duration: 0.5, delay: 1.2 }}
            src={hero}
            alt="Image 1"
            className=" 420:h-[30rem] lg:h-[40rem] xl:h-[45rem] "
          />
        </motion.article>
      </main>
    </>
  );
};

export default Hero;
