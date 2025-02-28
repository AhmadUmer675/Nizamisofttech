import { designer } from "../aboutData";
import { motion } from "framer-motion";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "../../ui/carousel";

const DesigningT = () => {
  return (
    <div>
      <motion.h1
        initial={{ x: -10, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="  my-[7rem] text-center text-4xl sm:text-4xl lg:text-5xl font-semibold text-gray-800 dark:text-neutral-200"
      >
        Designing Department
      </motion.h1>
      <Carousel
        opts={{
          align: "center",
        }}
        className="w-full ml-9"
      >
        <CarouselContent>
          {designer.map((data, index) => (
            <CarouselItem key={index} className=" lg:basis-1/3 540:basis-1/2">
              <motion.div
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                whileHover={{
                  scale: 1.05,
                  background: "#ED5561",
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
                  <img src={data.pic} alt="pics" className="h-[15rem]  md:h-[20rem] md:w-[16rem] xl:h-[22rem] xl:w-[18rem] rounded-2xl border" />
                </div>

                <div className="mt-3">
                  <h3 className="text-2xl font-semibold text-gray-800 sm:text-3xl lg:text-4xl dark:text-neutral-200">{data.name}</h3>
                </div>
                <div className="mt-3">
                  <h3 className="text-xl text-gray-800 sm:text-2xl dark:text-neutral-200">{data.position}</h3>
                </div>
                <div className="mt-3">
                  <img loading="lazy" decoding="async" src={data.expix} alt="type logo" className="h-16" />
                </div>
              </motion.div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </div>
  );
};

export default DesigningT;
