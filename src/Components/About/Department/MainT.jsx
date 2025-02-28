import React from "react";
import { Main } from "../aboutData";
import { motion } from "framer-motion";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "../../../Components/ui/carousel";

const MainT = () => {
  return (
    <div>
      <section>
        <motion.h1
          initial={{ x: -10, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="  my-[7rem] text-center text-4xl sm:text-4xl lg:text-5xl font-semibold text-gray-800 dark:text-neutral-200"
        >
          Main Department
        </motion.h1>

        <div>
          <Carousel
            opts={{
              align: "center",
            }}
            className="w-full ml-9 xl:mx-[38rem]"
          >
            <CarouselContent>
              {Main.map((data, index) => (
                <CarouselItem key={index} className="">
                  <motion.div
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    whileHover={{
                      scale: 1,
                      background: "#3316FB",
                      color: "white",
                      transform: "translateY(-5px)",
                    }}
                    transition={{
                      duration: 0.4,
                    }}
                    whileTap={{ scale: 1 }}
                    className="h-[30rem] w-[22rem] md:h-[38rem] md:w-[28rem] xl:h-[42rem] xl:w-[32rem]  drop-shadow-2xl   cursor-pointer border  flex flex-col justify-center items-center gap-y-5  rounded-[3rem] rounded-br-none text-center p-4 md:p-5  "
                  >
                    {/* <!-- Icon --> */}
                    <div className="flex mx-auto text-6xl rounded-lg sm:text-7xl bg-gradient-to-br from-blue-600 to-violet-600">
                      <img
                        src={data.pic}
                        alt="data pic"
                        loading="lazy"
                        className="h-[15rem]  md:h-[20rem] md:w-[16rem] xl:h-[22rem] xl:w-[18rem] rounded-2xl border"
                      />
                    </div>

                    <div className="mt-3">
                      <h3 className="text-2xl font-semibold text-gray-800 sm:text-3xl lg:text-4xl dark:text-neutral-200">
                        {data.name}
                      </h3>
                    </div>
                    <div className="mt-3">
                      <h3 className="text-xl text-gray-800 sm:text-2xl dark:text-neutral-200">
                        {data.position}
                      </h3>
                    </div>
                    <div className="mt-3">
                      <img
                        src={data.expix}
                        alt="logo pic"
                        loading="lazy"
                        className="h-16"
                      />
                    </div>
                  </motion.div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
          </Carousel>
        </div>
      </section>
    </div>
  );
};

export default MainT;
