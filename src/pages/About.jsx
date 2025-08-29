import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import React, { useRef } from "react";

const About = () => {
  const image = useRef(null);
  const imageRef = useRef(null);
  const imagesArray = [
    "https://i.pinimg.com/736x/f9/9f/72/f99f72ae9e021bfab0a5adb3e322a781.jpg",
    "https://i.pinimg.com/736x/ae/b4/4d/aeb44d2680ffa850c2a0af0edcf977bf.jpg",
    "https://i.pinimg.com/736x/53/00/5b/53005b43555a4d2fdef6ed2d0ce9109c.jpg",
    "https://i.pinimg.com/1200x/3a/b7/68/3ab768f790c3f60d4fe78874e2d78829.jpg",
    "https://i.pinimg.com/736x/06/5e/b6/065eb64318822d769b9f14add8eb9fd3.jpg",
    "https://i.pinimg.com/736x/df/78/6b/df786b8726e8c43bb086b7c41d5a9fde.jpg",
    "https://i.pinimg.com/736x/79/a6/50/79a6500ac9d2137758df98fd4a4a2864.jpg",
    "https://i.pinimg.com/736x/cd/2b/99/cd2b99ae8ed032185579bf9319f6f9a0.jpg",
    "https://i.pinimg.com/736x/d5/80/6e/d5806ecc88f8a396f8aff32b85a52fea.jpg",
    "https://i.pinimg.com/736x/77/35/47/773547f513ad17fb10d08ea7fa49e982.jpg",
    "https://i.pinimg.com/736x/c0/b6/1c/c0b61c5b4f774a5c4cdf3be64e43220f.jpg",
  ];
  gsap.registerPlugin(ScrollTrigger);
  useGSAP(function () {
    gsap.to(image.current, {
      scrollTrigger: {
        trigger: image.current,
        start: "top 20%",
        end: "top -50%",
        pin: true,
        onUpdate: (elem) => {
          let imageIndex;
          if (elem.progress < 1) {
            imageIndex = Math.floor(elem.progress * imagesArray.length);
          } else {
            imageIndex = imagesArray.length - 1;
          }
          imageRef.current.src = imagesArray[imageIndex];
        },
      },
    });
  });
  return (
    <div>
      <div className="first-section p-5">
        <div
          className="absolute h-[25vw] w-[20vw] bg-black top-50 right-[30vw] rounded-3xl overflow-hidden"
          ref={image}
        >
          <img ref={imageRef} className="h-full w-full object-cover opacity-75" src="" />
        </div>
        <div className="relative font-[Primary]">
          <div className="mt-[50vh]">
            <h1 className="uppercase text-[20vw] leading-[17vw] text-center">
              Four <br /> S3as
            </h1>
          </div>
          <div className="text-5xl text-left mt-20 pr-[35vw]">
            A brand, to us, isn't just a logo or a product. It's a ship with a
            soul, a voice, a compass, a heartbeat. Ignore that, and you might
            sail fast, but you'll never leave a wake. We believe in stories that
            last longer than trends, and in creativity that sails further than
            ego.
          </div>
        </div>
      </div>
      <div className="section-2 h-screen"></div>
    </div>
  );
};

export default About;
