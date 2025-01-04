import React from "react";
import "./Hero.css";
import hero from "../../Images/heroimg.jpg";
import { useState, useEffect } from "react";
import AnchorLink from "react-anchor-link-smooth-scroll";
function Hero() {
  const [isFirstLine, setIsFirstLine] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setIsFirstLine((prev) => !prev);
    }, 1500); // Change line every 2 seconds
    return () => clearInterval(interval); // Cleanup on unmount
  }, []);
  return (
    <>
      <div className="flex flex-cols items-center justify-center">
        {" "}
        <img className="hero-img" src={hero} alt="" />
      </div>

      <div className="">
        <div
          className={` flex flex-cols items-center justify-center  transition-transform duration-500 ${
            isFirstLine ? "translate-x-0" : "translate-x-0"
          }`}
        >
          {isFirstLine ? (
            <h1 className=" firstline text-blue-500"> I'm Aman Rohilla 😇. </h1>
          ) : (
            <h1 className=" secondline text-red-500">
              I'm a Full-Stack Developer 👨🏼‍💻.
            </h1>
          )}
        </div>
      </div>

      <div id="home" className="hero">
        <h1>
          <span>I'am Software Engineer</span> from India.
        </h1>
        <p>
        I am a website developer from, USA with 1+ years of experience in HTML,CSS,JS and MERN Stack.
        </p>
        <div className="hero-action">
          <div className="hero-connect"><AnchorLink className="anchor-link" offset={50} href="#contact" >Connect With me</AnchorLink></div>
          <div className="hero-resume">My resume</div>
        </div>
      </div>
      </>
    /* </> */
  );
}

export default Hero;
