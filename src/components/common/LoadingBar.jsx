import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import React, { useRef } from "react";
import { useLocation } from "react-router-dom";

const LoadingBar = (props) => {
  const location = useLocation().pathname;
  const loadingBars = useRef(null);
  const pageRef = useRef(null);
  useGSAP(
    function () {
      const timeLine = gsap.timeline();
      timeLine.to(loadingBars.current, {
        display: "block",
      });
      timeLine.from(".transition-bars", {
        height: 0,
        stagger: {
          amount: -0.2,
        },
      });
      timeLine.to(".transition-bars", {
        y: "100%",
        stagger: {
          amount: -0.25,
        },
      });
      timeLine.to(loadingBars.current, {
        display: "none",
      });
      timeLine.to(".transition-bars", {
        y: "0%",
      });

      gsap.from(pageRef.current, {
        opacity: 0,
        delay: 1.25,
      });
    },
    [location]
  );

  return (
    <div>
      <div className="text-white">
        <div ref={loadingBars} className="h-screen w-screen fixed z-20 flex">
          <div className="h-full w-full flex">
            <div className="transition-bars"></div>
            <div className="transition-bars"></div>
            <div className="transition-bars"></div>
            <div className="transition-bars"></div>
            <div className="transition-bars"></div>
          </div>
        </div>
      </div>
      <div ref={pageRef}>
        {props.children}
      </div>
    </div>
  );
};

export default LoadingBar;
