import React from "react";
import { motion } from "framer-motion";
import { FaMapLocationDot } from "react-icons/fa6";
import { FaPhoneAlt } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import vector from "/vector.png";
import "../../index.css";

const Contact = () => {
  return (
    <>
      <img
        src={vector}
        alt="vector"
        loading="lazy"
        className="left-0 top-0 xl:top-[9rem] hw -z-10"
      />
      <main className="w-full mx-auto my-[10rem]">
        <motion.h1
          initial={{ x: -100, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.5 }}
          className=" text-center text-blue font-bold my-[7rem] md:my-[14rem] text-[2.6rem] sm:text-6xl  text-gray-800 dark:text-neutral-200"
        >
          Contact us
        </motion.h1>
        <div className="w-full p-16 bg-white border rounded-xl bg-opacity-20">
          <main className="justify-between md:flex">
            <section className=" text-[#4A4A4A]">
              <div className="space-y-6 text-center md:text-left">
                <motion.h1
                  initial={{ x: -100, opacity: 0 }}
                  whileInView={{ x: 0, opacity: 1 }}
                  transition={{ duration: 0.8 }}
                  className="text-4xl font-semibold text-blue sm:text-5xl lg:text-6xl "
                >
                  Let's talk
                </motion.h1>
                <motion.p
                  initial={{ x: -100, opacity: 0 }}
                  whileInView={{ x: 0, opacity: 1 }}
                  transition={{ duration: 0.96 }}
                  className="sm:text-lg md:w-[17rem] lg:w-[34rem] lg:text-2xl"
                >
                  Questions, comments, or suggestions? Simply fill in the form
                  and we’ll be in touch shortly.
                </motion.p>
                <motion.h1
                  initial={{ x: -100, opacity: 0 }}
                  whileInView={{ x: 0, opacity: 1 }}
                  transition={{ duration: 0.5 }}
                  className="py-8 text-4xl font-semibold text-blue sm:text-5xl lg:text-6xl"
                >
                  Contact
                </motion.h1>
              </div>

              <motion.div
                initial={{ x: 100, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.5 }}
                className="flex flex-wrap items-start justify-start gap-4 my-10 md:flex-col 540:justify-center 540:gap-x-10 md:text-lg lg:text-2xl xl:space-y-12 xl:mt-8"
              >
                <ul className="">
                  <li className="space-y-4 ">
                    <FaMapLocationDot className=" text-5xl text-[#445AFB]" />

                    <p className="w-[12rem] md:w-[19rem] ">
                      New Multan 60000, Multan Punjab,Pakistan
                    </p>
                  </li>
                </ul>

                <ul className="sm:mt-4">
                  <li className="space-y-4 ">
                    <FaPhoneAlt className="text-5xl text-blue" />

                    <p>+92-318-2668034</p>
                  </li>
                </ul>
                <ul className="sm:mt-4">
                  <li className="grid space-y-4 540:place-items-center md:place-items-start">
                    <MdEmail className="text-5xl text-blue" />
                    <p className="text-center">talha.nizami01@gmail.com</p>
                  </li>
                </ul>
              </motion.div>
            </section>

            <section className=" shadow-3xl    540:w-[40rem] xl:w-[50rem] ">
              <form
                autoComplete="off"
                className="grid grid-rows-4 grid-cols-2 gap-3 h-[16rem] md:h-[25rem] lg:h-[30rem] "
              >
                <motion.input
                  initial={{ x: -100, opacity: 0 }}
                  whileInView={{ x: 0, opacity: 1 }}
                  transition={{ duration: 0.3 }}
                  className="h-[3rem] md:h-[5.5rem]  text-lg xl:text-2xl rounded-xl p-2 border border-[#999999] focus:outline-blue col-span-2 540:col-span-1"
                  placeholder="First Name*"
                  autoComplete="off"
                />
                <motion.input
                  initial={{ x: 100, opacity: 0 }}
                  whileInView={{ x: 0, opacity: 1 }}
                  transition={{ duration: 0.5 }}
                  className="h-[3rem] md:h-[5.5rem]  text-lg xl:text-2xl rounded-xl p-2 border border-[#999999] focus:outline-blue col-span-2 540:col-span-1"
                  placeholder="Last Name*"
                  autoComplete="off"
                />
                <motion.input
                  initial={{ x: -100, opacity: 0 }}
                  whileInView={{ x: 0, opacity: 1 }}
                  transition={{ duration: 0.7 }}
                  className="h-[3rem] md:h-[5.5rem]  text-lg xl:text-2xl rounded-xl p-2 border border-[#999999] focus:outline-blue col-span-2"
                  placeholder="Email*"
                  type="email"
                  autoComplete="off"
                />
                <motion.input
                  initial={{ x: 100, opacity: 0 }}
                  whileInView={{ x: 0, opacity: 1 }}
                  transition={{ duration: 0.9 }}
                  className="h-[3rem] md:h-[5.5rem]  text-lg xl:text-2xl  rounded-xl p-2 border border-[#999999] focus:outline-blue  col-span-2"
                  placeholder="Phone Number*"
                  type="number"
                  autoComplete="off"
                />
              </form>
              <motion.textarea
                initial={{ x: -100, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                transition={{ duration: 1 }}
                className="w-full h-[10rem] p-2  text-lg xl:text-2xl resize-y rounded-xl px-2 border border-[#999999] focus:outline-purple"
                placeholder="Your message ..."
                autoComplete="off"
              />

              <div className="flex justify-center transition-all hover:scale-105 ">
                <button
                  initial={{ opacity: 0, x: -50 }}
                  animate={{ opacity: 1, x: 0 }}
                  whileHover={{ backgroundColor: "#eee" }}
                  transition={{ duration: 0.6, delay: 0.9 }}
                  className="rounded-xl bg-gradient-to-r from-[#00458B] to-[#486db0]  w-full py-4 mt-8 col-span-2 text-center lg:py-6 text-white text-2xl hover:cursor-pointer"
                >
                  Send Message
                </button>
              </div>
            </section>
          </main>
        </div>
      </main>
    </>
  );
};

export default Contact;
