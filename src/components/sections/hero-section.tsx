"use client";

import React from "react";
import Image from "next/image";

import { motion } from "framer-motion";

import { ArrowTopRightIcon } from "@radix-ui/react-icons";

const HeroSection = () => {
  return (
    <motion.section
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1.5 }}
    >
      <div className="container mx-auto flex flex-col items-center px-4 py-12 md:flex-row md:py-24">
        <div className="flex-1 md:pr-8">
          <h1 className="mb-6 text-2xl font-bold capitalize md:text-6xl">
            LEARN <br />
            AND FIND THE <br />
            RIGHT <br />
            CHAMBER FOR <br />
            YOUR NEEDS
            <br />
          </h1>
          <p className="mb-8 text-lg text-gray-700">
            Simplify hyperbaric oxygen therapy with access to the <br />
            latest research, protocols and personalised guidance. <br />
            Sustainable over time.
          </p>

          <ArrowTopRightIcon className="h-48 w-48 text-gray-500 opacity-60 hover:text-gray-600" />
        </div>

        <div className="mt-8 flex-1 md:mt-0 md:pl-8">
          <div className="relative">
            <div className="absolute inset-0 skew-y-12 transform bg-red-400" />
            <Image
              src={
                "https://hbothq-bucket.s3.ap-southeast-2.amazonaws.com/chambers/gallery/1.png"
              }
              alt="Creative Studio"
              width={800}
              height={600}
              className="relative z-10"
            />
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default HeroSection;
