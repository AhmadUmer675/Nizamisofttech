import React from "react";
import { motion } from "framer-motion";
import { laraveldata } from "./portfolioData";
import vector from "/vector.png";
import "../../index.css";

const Portfolio = () => {
  return (
    <>
      <img
        src={vector}
        alt="vector"
        loading="lazy"
        className="left-0 top-0 xl:top-[9rem] hw -z-10"
      />
      <div className=" h-max w-full my-[10rem]">
        <main>
          <div>
            <motion.h1
              initial={{ x: -100, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.5 }}
              className=" text-center text-blue font-bold my-[7rem] md:my-[14rem] text-[2.6rem] sm:text-6xl  text-gray-800 dark:text-neutral-200"
            >
              Our Best Projects
            </motion.h1>
          </div>

          <main>
            <section className="grid grid-cols-1 gap-12 540:grid-cols-2 lg:grid-cols-3 place-items-center lg:gap-24">
              {laraveldata.map((data, index) => {
                return (
                  <motion.div
                    key={index}
                    initial={{ x: -100, opacity: 0 }}
                    whileInView={{ x: 0, opacity: 100, delay: 2 }}
                    whileHover={{
                      scale: 1.1,
                      cursor: "pointer",
                      background: "#459CB8",
                      color: "white",
                      width: "34rem",
                      transition: "background-color ",
                    }}
                    transition={{
                      duration: 0.4,
                      delay: 0.2,
                    }}
                    className="overflow-hidden relative flex flex-col justify-center items-center  w-[25rem] lg:h-[46rem] md:w-[29rem] xl:w-[32rem]   cursor-pointer border  gap-y-5  rounded-3xl shadow-2xl  text-center py-6 xl:gap-6"
                  >
                    {/* <!-- Icon --> */}
                    <div className="flex items-center justify-center p-3 mx-auto text-6xl sm:text-7xl">
                      <img
                        src={data.image}
                        alt="data pic"
                        loading="lazy"
                        className="h-[15rem]   lg:h-[17rem]"
                      />
                    </div>

                    <div>
                      <h3 className="text-2xl font-semibold text-gray-800 sm:text-3xl lg:text-4xl ">
                        {data.name}
                      </h3>
                    </div>
                    <div>
                      <h3 className="p-6 text-xl text-gray-800 sm:text-2xl">
                        {data.detail}
                      </h3>
                    </div>
                    <div>
                      <img
                        src={data.type}
                        alt="Type pic"
                        loading="lazy"
                        className="h-16"
                      />
                    </div>
                    <div>
                      <a href={data.link} target="_blank" rel="noreferrer">
                        <motion.button
                          whileHover={{
                            width: "14rem",
                            borderRadius: "3rem",
                          }}
                          transition={{
                            duration: 0.3,
                            ease: "easeInOut",
                            background: "#3490FF",
                            color: "white",
                          }}
                          className=" bg-black text-white w-[10rem] py-3 rounded-xl text-xl "
                        >
                          Visit Site
                        </motion.button>
                      </a>
                    </div>
                  </motion.div>
                );
              })}
            </section>
          </main>
        </main>
      </div>
    </>
  );
};

export default Portfolio;
