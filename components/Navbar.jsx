import React from "react";
import Link from "next/link";
import { useState, useEffect } from "react";
import SocialIcon from "./SocialIcon";
import { motion } from "framer-motion";
import { navVariants } from "../utils/motion";

export default function Navbar() {
  const [scrollPosition, setScrollPosition] = useState(0);

  const handleScroll = () => {
    const position = window.pageYOffset;
    setScrollPosition(position);
  };
  useEffect(() => {
    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  const navigations = [
    "home",
    "about",
    "team",
    "projects",
    "blog",
    "testimonials",
    "contact",
  ];
  return (
    <motion.nav
      variants={navVariants}
      initial="hidden"
      whileInView="show"
      className={`flex py-4 justify-between items-center px-32 fixed w-full z-50 ${
        scrollPosition === 0 ? "bg-transparent" : "bg-white"
      }`}
    >
      <div className="font-inter text-xl font-bold">
        {" "}
        <span className="text-[#0BBEF2]">Code</span>Index
      </div>
      <div className="z-50">
        <ul className="flex space-x-6">
          {navigations.map((navigation) => (
            <li key={navigation}>
              <Link
                href={`#${navigation}`}
                className="font-inter capitalize text-md tracking-wide font-medium hover:border-b-[2.5px] border-cyan-900 transition duration-500 ease-in-out"
              >
                {navigation}
              </Link>
            </li>
          ))}
        </ul>
      </div>
      <div className="z-50">
        <SocialIcon />
      </div>
    </motion.nav>
  );
}
