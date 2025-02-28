import React from "react";
import { FaInstagram } from "react-icons/fa6";
import { FaFacebook } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";

const Footer = () => {
  return (
    <>
      <footer className="sm:flex items-center h-[10rem]  justify-between md:h-[6rem]  border-t-[1px] mx-6 md:mx-16 mt-[4.5rem] md:mt-0">
        {" "}
        <div className="text-xl text-center lg:text-2xl pt-9 sm:p-0">
          <span>&copy;</span> Copyright 2024 - Ahmad Developer
        </div>{" "}
        <div>
          <div
            initial={{ opacity: 0, x: -100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 4 }}
            className="list-none flex items-center justify-center mt-14 mb-12 gap-10 md:gap-14 w-full text-[3.5rem] "
          >
            <li className="transition-all hover:scale-125">
              <a href="" className=" text-mpurple text-pink">
                <FaInstagram />
              </a>
            </li>
            <li className="transition-all hover:scale-125">
              <a href="" className="text-blue">
                <FaFacebook />
              </a>
            </li>
            <li className="transition-all hover:scale-125">
              <a href="" className="text-blue">
                <FaTwitter />
              </a>
            </li>
            <li className="transition-all hover:scale-125">
              <a href="" className=" text-blue">
                <FaLinkedin />
              </a>
            </li>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
