import React, { useContext } from "react";
import { motion } from "framer-motion";
import { Data } from "./servicesData";
import vector2 from "/vector2.png";
import vector from "/vector.png";
import "../../index.css";

const Services = () => {
  return (
    <>
      <img
        src={vector}
        alt="vector"
        loading="lazy"
        className="left-0 top-0 xl:top-[9rem] hw -z-10"
      />
      <main className="w-full h-max">
        <div>
          <motion.h1
            initial={{ x: -100, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.5 }}
            className=" text-center text-blue font-bold my-[7rem] md:my-[14rem] text-[2.6rem] sm:text-6xl  text-gray-800 dark:text-neutral-200"
          >
            Services We Provide
          </motion.h1>
        </div>

        <main className="w-full mx-auto md:my-[10rem] ">
          <section className="grid grid-cols-1 gap-12 540:grid-cols-2 lg:grid-cols-3 place-items-center lg:gap-24">
            {Data.map((data, index) => {
              return (
                <motion.div
                  key={index}
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  whileHover={{
                    scale: 1.1,
                    cursor: "pointer",
                    background: "#445AFB",
                    color: "white",
                    transitionDuration: ".3s",
                    transform: "translateY(-5px)",
                    transition: "background-color ",
                  }}
                  transition={{
                    duration: 0.4,
                  }}
                  className="overflow-hidden relative h-[39rem]  w-[25rem] lg:h-[42rem] md:w-[29rem] xl:w-[32rem]   cursor-pointer border  flex flex-col justify-center items-center gap-y-5  rounded-3xl shadow-2xl  text-center py-6 "
                >
                  {/* <!-- Icon --> */}
                  <div className="flex items-center justify-center p-3 mx-auto text-6xl sm:text-7xl">
                    <img
                      src={data.image}
                      alt="service pic"
                      loading="lazy"
                      className="h-[15rem]   lg:h-[17rem]"
                    />
                  </div>

                  <div className="mt-3">
                    <h3 className="px-4 text-[1.4rem] font-semibold text-gray-800 sm:text-3xl lg:text-[2rem]">
                      {data.name}
                    </h3>
                  </div>
                  <div className="mt-3">
                    <h3 className="p-4 text-xl text-gray-800 sm:text-2xl">
                      {data.description}
                    </h3>
                  </div>

                  <img
                    src={vector2}
                    alt="vector"
                    loading="lazy"
                    className="absolute h-[40rem] -z-10  opacity-80"
                  />
                </motion.div>
              );
            })}
          </section>
          <div>
            <motion.h1
              initial={{ x: -100, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.5 }}
              className=" text-center text-blue font-bold my-[7rem] md:my-[14rem] text-[2.6rem] sm:text-6xl  text-gray-800 dark:text-neutral-200"
            >
              Coming Soon.......
            </motion.h1>
          </div>
        </main>
      </main>
    </>
  );
};

export default Services;
