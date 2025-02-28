import React, { useState } from "react";
import logo from "/signature.png";
import { HiMiniBars3BottomRight } from "react-icons/hi2";
import { ImCross } from "react-icons/im";
import { navs } from "./navs";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState(0);

  const openModal = () => {
    setOpen(!open);
  };
  return (
    <>
      <motion.nav
        initial={{ opacity: 0, y: -200 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="flex justify-between items-center h-[7rem] lg:h-[9rem] border-b-[0.05rem]  mx-6 md:mx-16"
      >
        <div>
          <img
            src={logo}
            className="h-20 cursor-pointer lg:h-28 w-fit"
            alt="logo"
          />
        </div>
        <div>
          <div
            className="text-5xl animate-pulse text-purple md:hidden"
            onClick={openModal}
          >
            <HiMiniBars3BottomRight />
          </div>
          {open && (
            <div className="z-10 model w-screen min-h-screen relative mt-[60rem] rounded-xl  bg-opacity-50  [background:radial-gradient(125%_175%_at_160%_80%,#fff_0%,#63e_100%)]  transition-all">
              <div
                className="absolute top-0 right-0 p-16 text-3xl opacity-60"
                onClick={openModal}
              >
                <ImCross />
              </div>
              <div className="grid place-items-center gap-16 pt-[7rem] text-white model ">
                {navs.map((links, index) => {
                  return (
                    <ul
                      initial={{ opacity: 0, x: -50 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.6, delay: 0.9 }}
                      key={index}
                      className="flex text-4xl font-semibold "
                      onClick={() => {
                        setActive(index);
                      }}
                    >
                      <Link
                        to={`/${links.toLowerCase()}`}
                        onClick={openModal}
                        className={`${
                          active === index
                            ? "relative cursor-pointer transition-all text-3xl lg:text-4xl p-5 rounded-full nav-link "
                            : " cursor-pointer transition-all text-3xl lg:text-4xl p-5 rounded-full  "
                        }`}
                      >
                        {links}
                      </Link>
                    </ul>
                  );
                })}
                <p className="inline-flex items-center gap-3 mt-16">
                  <span className="text-xl">&copy;</span> Copyright 2024 - Ahmad
                  Developer
                </p>
              </div>
            </div>
          )}

          {/* Main screen navbar */}

          <div className="items-center hidden gap-3 md:flex ">
            {navs.map((links, index) => {
              return (
                <ul
                  key={index}
                  className=""
                  onClick={() => {
                    setActive(index);
                  }}
                >
                  <Link
                    to={`/${links.toLowerCase()}`}
                    className={`${
                      active === index
                        ? "relative cursor-pointer transition-all text-3xl lg:text-4xl p-5 rounded-full nav-link "
                        : " cursor-pointer transition-all text-3xl lg:text-4xl p-5 rounded-full  "
                    }`}
                  >
                    {links}
                  </Link>
                </ul>
              );
            })}
          </div>
        </div>
      </motion.nav>
    </>
  );
};

export default Navbar;
