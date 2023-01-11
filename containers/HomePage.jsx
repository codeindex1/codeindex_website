import React from "react";
import { Navbar } from "../components";
import { shape, robot } from "../assets";
import { motion } from "framer-motion";
import Typewriter from "typewriter-effect";
import Image from "next/image";
import { BsArrowDownShort } from "react-icons/bs";
export default function HomePage() {
  return (
    <div className="h-screen bg-white">
      <Navbar />
      <div
        whileInView={{ x: [100, 0] }}
        transition={{ duration: 0.75 }}
        className="w-[35rem] h-screen overflow-x-hidden absolute top-0 right-0"
      >
        <Image
          src={robot}
          width={300}
          height={299}
          className="w-full h-screen"
        />
      </div>
      <section className="flex">
        <div className="mx-32 mt-[15rem]">
          <h1
            whileInView={{ x: [-100, 0] }}
            transition={{ duration: 0.5 }}
            className="font-inter text-7xl font-[900] text-gray-800 "
          >
            We Code Delightful <br />
            <p className="pb-2 mt-2 bg-clip-text text-transparent bg-gradient-to-r from-[#2E3192] to-[#1BFFFF]">
              Digital Experiences
            </p>
          </h1>

          <p className="text-2xl text-gray-700 font-medium font-inter mt-10 w-[40rem]">
            <Typewriter
              className="mt-4"
              onInit={(typewriter) => {
                typewriter
                  .typeString("")
                  .callFunction(() => {})
                  .pauseFor(100)
                  .deleteAll()
                  .callFunction(() => {})
                  .start();
              }}
              options={{
                strings: [
                  "We strive to make your work easier by working hard to deliver high-quality solutions.",
                ],
                autoStart: true,
                loop: true,
              }}
            />
          </p>

          <button
            whileInView={{ x: [-100, 0] }}
            transition={{ duration: 0.5 }}
            className="flex items-center mt-8 px-8 py-3 tracking-wide border-2 rounded-lg text-gray-700 bg-white font-inter text-xl font-semibold hover:shadow-sm hover:border-cyan-400 transition duration-200 ease-linear"
          >
            Get Started{" "}
            <BsArrowDownShort className="text-3xl ml-2 animate-bounce" />
          </button>
        </div>
        <div></div>
      </section>
    </div>
  );
}
