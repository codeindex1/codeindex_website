import React from "react";
import Image from "next/image";
import Link from "next/link";

export default function TeamCard({ image, name, position, socialAccounts }) {
  return (
    <div className="w-[18rem] bg-gray-50 rounded-xl">
      <div className="w-full py-4">
        <Image
          src={image}
          width={200}
          height={200}
          className="w-[8rem] h-[8rem] m-auto rounded-full mb-3 p-1"
        />
        <h3 className="text-center text-xl font-bold font-inter text-gray-800 tracking-wider">
          {name}
        </h3>
        <h6 className="text-center px-3 py-1 bg-white rounded-lg mx-12 text-md text-gray-600 mt-3 font-medium font-inter tracking-wide">
          {position}
        </h6>
        <div className="flex justify-evenly mt-5 mx-10">
          {socialAccounts.map((account) => (
            <Link className="" href={account.link}>
              {account.icon}
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
