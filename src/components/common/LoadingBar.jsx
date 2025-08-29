import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import React, { useRef } from "react";

const LoadingBar = () => {
  const loadingBars = useRef(null);
  useGSAP(function () {
     const timeLine = gsap.timeline()
        timeLine.to(loadingBars.current, {
            display: 'block',
        })
        timeLine.from('.transition-bars', {
            height: 0,
            stagger: {
                amount: -0.2
            }
        })
        timeLine.to('.transition-bars', {
            y: '100%',
            stagger: {
                amount: -0.25
            }
        })
        timeLine.to(loadingBars.current, {
            display: 'none'
        })
        timeLine.to('.transition-bars', {
            y: '0%',
        })
    });
  return (
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
  );
};

export default LoadingBar;
