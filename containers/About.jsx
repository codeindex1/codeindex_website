import React from "react";
import { motion } from "framer-motion";
import { ServiceCard } from "../components";
import { AiOutlinePhone } from "react-icons/ai";
import { service1, service2, service3 } from "../assets";

export default function About() {
  return (
    <>
      <section className="min-h-screen  px-32 overflow-x-hidden" id="about">
        <div className="w-full mt-32">
          <h1 className="font-inter text-5xl font-semibold text-gray-800">
            About Us
          </h1>
          <div className="grid grid-cols-3 gap-16 ">
            <div className="mt-5">
              <p className="text-justify indent-10 font-inter text-semibold text-lg">
                Established in 2022, we are an experienced team of consultants,
                developers and support engineers with the credentials to
                produce, support and maintain mid-scale digital transformation
                projects.
              </p>
              <p className="mt-2 text-justify font-inter text-semibold text-lg">
                Our projects typically combine APIs, web applications and mobile
                applications, using the latest technologies and frameworks to
                solve complex business requirements. We have a track record of
                delivering world-class results that achieve impressive returns
                on investment.
              </p>

              <motion.button
                whileInView={{ x: [100, 0] }}
                transition={{ duration: 1 }}
                className="flex items-center mt-8 px-8 py-3 tracking-wide border-2 rounded-lg text-gray-700 bg-white font-inter text-xl font-semibold hover:shadow-sm hover:border-cyan-400 transition duration-200 ease-linear"
              >
                Contact Us{" "}
                <AiOutlinePhone className="text-3xl ml-2 animate-pulse" />
              </motion.button>
            </div>
            <div className="col-span-2">
              <div className="grid grid-cols-3 gap-8">
                <ServiceCard
                  image={service1}
                  title="UI/UX Designing"
                  description="We specialize in UX design and API development to help businesses create seamless user experiences and integrations."
                />
                <ServiceCard
                  image={service2}
                  title="API & Web Developemnt"
                  description="We offer a full range of web development services to help businesses establish a strong online presence."
                />
                <ServiceCard
                  image={service3}
                  title="Mobile App Development"
                  description="Native and cross-platform apps for business. Our capabilities include API integration, geo, payment acceptance, hardware integration and more."
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
