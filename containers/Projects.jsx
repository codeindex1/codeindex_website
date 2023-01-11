import React, { useState } from "react";
import { ProjectCard } from "../components";
import { project1 } from "../assets";

export default function Projects() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const changeCategory = (name) => {
    setSelectedCategory(name);
  };
  return (
    <div className="min-h-screen px-32 bg-slate-50">
      <section className="">
        <h1 className="font-inter text-5xl font-semibold text-gray-800 pt-32 text-center">
          Our Projects
        </h1>

        <div className="w-full">
          <div className="flex lg:space-x-4 items-center justify-center mt-5">
            {["All", "Mobile App", "Web", "Desktop", "UI/UX"].map((item) => (
              <div
                onClick={() => changeCategory(item)}
                className={`${
                  item === selectedCategory
                    ? "px-3 py-1 border-2 rounded-md font-inter text-lg font-semibold  cursor-pointer bg-slate-700 text-white hover:bg-slate-700 hover:text-white transition duration-200 ease-in-out"
                    : "px-3 py-1 border-2 rounded-md font-inter text-lg font-semibold text-gray-700 cursor-pointer hover:bg-slate-700 hover:text-white transition duration-200 ease-in-out"
                }`}
                key={item}
              >
                {item}
              </div>
            ))}
          </div>

          <section className="grid grid-cols-3 mt-10 gap-x-16">
            <ProjectCard image={project1} />
          </section>
        </div>
      </section>
    </div>
  );
}
