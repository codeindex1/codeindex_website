import React from "react";
import Image from "next/image";

export default function ServiceCard({ image, title, description }) {
  return (
    <div className="w-[18rem] border-2 rounded-lg shadow-custom hover:shadow-xl hover:shadow-white shadow-white">
      <Image
        src={image}
        width={200}
        height={200}
        className="w-full h-[10rem] object-cover"
      />
      <div className=" my-3">
        <h3 className="px-4 text-xl font-semibold font-inter text-gray-700">
          {title}
        </h3>
        <p className="px-4 mt-2 text-justify indent-8 font-inter font-medium ">
          {description}
        </p>
      </div>
    </div>
  );
}
