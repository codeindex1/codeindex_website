import React from "react";
import { TeamCard } from "../components";
import { hadi, hamid } from "../assets";
import {
  AiOutlineLinkedin,
  AiOutlineGithub,
  AiOutlineFacebook,
  AiOutlineInstagram,
} from "react-icons/ai";

export default function Team() {
  return (
    <div className="min-h-screen overflow-x-hidden pb-10" id="team">
      <div className="lg:px-32 overflow-hidden w-full mt-32">
        <h1 className="font-inter text-5xl font-semibold text-gray-800">
          Meet Our Team
        </h1>

        <div className="grid grid-cols-3 gap-16 mt-10">
          <div className="">
            <p className="text-lg font-inter mt-2 text-gray-800 indent-8 text-justify font-medium">
              We as a team commit to a strong responsibilities about what we are
              offering to the customers. Our team member tries to do the best in
              order to gain customers satisfaction.
            </p>
          </div>
          <div className="col-span-2">
            <section className="grid grid-cols-3 gap-x-32 gap-y-4">
              <TeamCard
                image={hadi}
                name="Hadi Alizada"
                position="Frontend Developer"
                socialAccounts={[
                  {
                    icon: (
                      <AiOutlineInstagram className="w-10 h-10 text-gray-800 p-2 bg-white rounded-full" />
                    ),
                    link: "",
                  },
                  {
                    icon: (
                      <AiOutlineFacebook className="w-10 h-10 text-gray-800 p-2 bg-white rounded-full" />
                    ),
                    link: "",
                  },
                  {
                    icon: (
                      <AiOutlineLinkedin className="w-10 h-10 text-gray-800 p-2 bg-white rounded-full" />
                    ),
                    link: "",
                  },
                  {
                    icon: (
                      <AiOutlineGithub className="w-10 h-10 text-gray-800 p-2 bg-white rounded-full" />
                    ),
                    link: "",
                  },
                ]}
              />
              <TeamCard
                image={hamid}
                name="Hamid Faramarz"
                position="Mobile Developer"
                socialAccounts={[
                  {
                    icon: (
                      <AiOutlineInstagram className="w-10 h-10 text-gray-800 p-2 bg-white rounded-full" />
                    ),
                    link: "",
                  },
                  {
                    icon: (
                      <AiOutlineFacebook className="w-10 h-10 text-gray-800 p-2 bg-white rounded-full" />
                    ),
                    link: "",
                  },
                  {
                    icon: (
                      <AiOutlineLinkedin className="w-10 h-10 text-gray-800 p-2 bg-white rounded-full" />
                    ),
                    link: "",
                  },
                  {
                    icon: (
                      <AiOutlineGithub className="w-10 h-10 text-gray-800 p-2 bg-white rounded-full" />
                    ),
                    link: "",
                  },
                ]}
              />
              <TeamCard
                image={hamid}
                name="Hamid Faramarz"
                position="Mobile Developer"
                socialAccounts={[
                  {
                    icon: (
                      <AiOutlineInstagram className="w-10 h-10 text-gray-800 p-2 bg-white rounded-full" />
                    ),
                    link: "",
                  },
                  {
                    icon: (
                      <AiOutlineFacebook className="w-10 h-10 text-gray-800 p-2 bg-white rounded-full" />
                    ),
                    link: "",
                  },
                  {
                    icon: (
                      <AiOutlineLinkedin className="w-10 h-10 text-gray-800 p-2 bg-white rounded-full" />
                    ),
                    link: "",
                  },
                  {
                    icon: (
                      <AiOutlineGithub className="w-10 h-10 text-gray-800 p-2 bg-white rounded-full" />
                    ),
                    link: "",
                  },
                ]}
              />
              <TeamCard
                image={hamid}
                name="Hamid Faramarz"
                position="Mobile Developer"
                socialAccounts={[
                  {
                    icon: (
                      <AiOutlineInstagram className="w-10 h-10 text-gray-800 p-2 bg-white rounded-full" />
                    ),
                    link: "",
                  },
                  {
                    icon: (
                      <AiOutlineFacebook className="w-10 h-10 text-gray-800 p-2 bg-white rounded-full" />
                    ),
                    link: "",
                  },
                  {
                    icon: (
                      <AiOutlineLinkedin className="w-10 h-10 text-gray-800 p-2 bg-white rounded-full" />
                    ),
                    link: "",
                  },
                  {
                    icon: (
                      <AiOutlineGithub className="w-10 h-10 text-gray-800 p-2 bg-white rounded-full" />
                    ),
                    link: "",
                  },
                ]}
              />
            </section>
          </div>
        </div>
      </div>
    </div>
  );
}
