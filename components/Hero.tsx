import { useState } from "react";
import UseAnimations from "react-useanimations";
import github from "react-useanimations/lib/github";
import linkedin from "react-useanimations/lib/linkedin";
import twitter from "react-useanimations/lib/twitter";
// import linkedin2 from "../public/linkedin.json"

import React, { useEffect, useRef } from "react";
import lottie from "lottie-web";

const Hero = ({ font1, font2 }: any) => {

  const container:any = useRef(null);

  useEffect(() => {
    lottie.loadAnimation({
      container: container.current,
    });
    return () => {
      lottie.destroy();
    };
  }, []);

  return (
    <div className="z-10 min-h-screen flex flex-col gap-6 justify-center items-center">
      <h1
        className={
          font1.className +
          " text-4xl md:text-6xl font-medium text-stone-900 text-opacity-80"
        }
      >
        Kelsie Murphy
      </h1>
      <p
        className={
          font2.className + " text-xl md:text-2xl font-light text-stone-700"
        }
      >
        Developer & Designer
      </p>
      <ul className="flex gap-3">
        <li>
          <a href="https://github.com/kelsiesmurphy" target="_blank">
              <UseAnimations animation={github} strokeColor={'#44403c'} loop={true} size={40} />
          </a>
        </li>
        <li>
          <a href="https://www.linkedin.com/in/kelsiesmurphy/" target="_blank">
              <UseAnimations animation={linkedin} strokeColor={'#44403c'} loop={true} size={40} />
          </a>
        </li>
        <li>
          <a href="https://twitter.com/kelsiesmurphy" target="_blank">
              <UseAnimations animation={twitter} strokeColor={'#44403c'} size={40} />
          </a>
        </li>
      </ul>
    </div>
  );
};

export default Hero;
