import React from "react";
import Image from "next/image";

export default function ProjectCard({
  image,
  urls,
  title,
  description,
  techs,
}) {
  return (
    <div className="w-[20rem] bg-gray-300 rounded-xl">
      <Image
        src={image}
        width={300}
        height={300}
        className="w-full object-fill rounded-xl"
      />
    </div>
  );
}
