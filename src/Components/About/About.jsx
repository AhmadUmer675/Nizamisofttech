import { motion } from "framer-motion";
import aboutpic from "/about.png";
import MainT from "./Department/MainT";
import MernT from "./Department/MernT";
import LaravelT from "./Department/LaravelT";
import vector from "/vector.png";
import "../../index.css";
import DesigningT from "./Department/Designing";

const About = () => {
  return (
    <>
      <img
        src={vector}
        alt="vector"
        loading="lazy"
        className="left-0 top-0 xl:top-[9rem] hw -z-10"
      />
      <main className="px-4 py-10 mx-auto sm:px-6 lg:px-8 lg:py-0 lg:my-[10rem] lg:max-w-full">
        <section className="h-[85vh]">
          <div>
            <motion.h1
              initial={{ x: -100, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.5 }}
              className=" text-center text-blue font-bold my-16 text-[2.55rem] sm:text-6xl  text-gray-800 dark:text-neutral-200"
            >
              About Our Company
            </motion.h1>
          </div>
          <main className=" h-max md:flex  justify-between items-center  pt-8 md:pt-[7rem]">
            <motion.section
              initial={{ opacity: 0, y: -100 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
            >
              <div className=" text-2xl lg:text-4xl md:w-[300px] lg:w-[550px] xl:leading-[3.2rem]  ">
                At
                <span className="font-bold underline text-blue animate-pulse">
                  {" "}
                  Nizami's Soft Tech
                </span>{" "}
                we specialize in delivering high-tier mobile and web
                applications. Our expertise spans across React Native for mobile
                apps, and the MERN stack and Laravel for web solutions. With a
                commitment to efficiency and excellence, we take pride in
                providing efficent services that ensure client success.
              </div>
            </motion.section>
            <section className="flex items-center justify-center pt-16 md:pt-0">
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ scale: 1 }}
                transition={{ duration: 0.5, delay: 0.5 }}
                className=""
              >
                <img
                  src={aboutpic}
                  alt="aboutpic"
                  className="md:ml-16 540:h-[35rem] xl:h-[45rem]"
                />
              </motion.div>
            </section>
          </main>
        </section>

        <section className="my-[10rem]">
          {/* Main Team Section */}
          <div>
            <motion.h1
              initial={{ x: -100, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.5 }}
              className=" text-center my-[10rem] text-5xl sm:text-6xl  text-blue font-bold text-gray-800 dark:text-neutral-200"
            >
              Meet Our Team
            </motion.h1>
          </div>
          <div>
            <MainT />
          </div>

          <div>
            <LaravelT />
          </div>
          <div>
            <MernT />
          </div>
          <div>
            <DesigningT />
          </div>
        </section>
      </main>
    </>
  );
};

export default About;
