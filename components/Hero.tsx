import UseAnimations from "react-useanimations";
import github from "react-useanimations/lib/github";
import linkedin from "react-useanimations/lib/linkedin";
import twitter from "react-useanimations/lib/twitter";
import mail from "react-useanimations/lib/mail";

import React, { useEffect, useRef } from "react";
import lottie from "lottie-web";

const Hero = ({ displayFont }: any) => {
  const container: any = useRef(null);

  useEffect(() => {
    lottie.loadAnimation({
      container: container.current,
    });
    return () => {
      lottie.destroy();
    };
  }, []);

  return (
    <div className="z-10 text-center min-h-screen flex flex-col gap-6 justify-center items-center">
      <h1
        className={`${displayFont.className} font-serif text-4xl md:text-6xl font-medium text-stone-900 text-opacity-80`}
      >
        Kelsie Murphy
      </h1>
      <p className={" text-xl md:text-2xl font-light text-stone-700"}>
        I like to design things, and then I build them.
      </p>
      <ul className="flex gap-3">
        <li>
          <a href="https://github.com/kelsiesmurphy" target="_blank">
            <UseAnimations
              animation={github}
              strokeColor={"#44403c"}
              loop={true}
              size={40}
            />
          </a>
        </li>
        <li>
          <a href="https://www.linkedin.com/in/kelsiesmurphy/" target="_blank">
            <UseAnimations
              animation={linkedin}
              strokeColor={"#44403c"}
              loop={true}
              size={40}
            />
          </a>
        </li>
        <li>
          <a href="https://twitter.com/kelsiesmurphy" target="_blank">
            <UseAnimations
              animation={twitter}
              strokeColor={"#44403c"}
              size={40}
            />
          </a>
        </li>
        <li>
          <a href="mailto:kelsie@kelsiesmurphy.com">
            <UseAnimations
              animation={mail}
              strokeColor={"#44403c"}
              loop={true}
              size={40}
            />
          </a>
        </li>
      </ul>
    </div>
  );
};

export default Hero;
