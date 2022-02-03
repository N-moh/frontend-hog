import "./intro.scss";
import { init } from "ityped";
import React,{ useEffect, useRef } from "react";

export default function Intro() {
  const textRef = useRef();

  useEffect(() => {
    init(textRef.current, {
      showCursor: true,
      backDelay: 1500,
      backSpeed:60,
      strings: ["Graduates", "Designers", "Data Scientists"],
    });
  }, []);

  return (
    <div className="intro" id="intro">
      <div className="left">
        <div className="imgContainer">
          <img src="assets/logo2.png" alt="" />
        </div>
      </div>
      <div className="right">
        <div className="wrapper">
        
          <h2>The Developer Academy</h2>
          
          <h3>
            Hire our <span ref={textRef}></span>
          </h3>
        </div>
        {/* <a href="#login"> */}
          <img src="/assets/hire.jpg" alt="" />
        {/* </a> */}
      </div>
    </div>
  );
}