"use client";
import React, { useRef, useEffect } from "react";
import Image from "next/image";
import { gsap } from "gsap";

export default function HeroSection() {
  const ref1 = useRef(null);
  const ref2 = useRef(null);
  const ref3 = useRef(null);

  useEffect(() => {
    const animate1 = () => {
      gsap.fromTo(
        ref1.current,
        { x: window.innerWidth },
        {
          x: -window.innerWidth,
          ease: "none",
          duration: 8,
          onComplete: animate1,
        }
      );
    };

    const animate2 = () => {
      gsap.fromTo(
        ref2.current,
        { x: -window.innerWidth },
        {
          x: window.innerWidth,
          ease: "none",
          duration: 8,
          onComplete: animate2,
        }
      );
    };
    const animate3 = () => {
      gsap.fromTo(
        ref3.current,
        { x: window.innerWidth },
        {
          x: -window.innerWidth,
          ease: "none",
          duration: 10,
          onComplete: animate3,
        }
      );
    };

    animate1();
    animate2();
    animate3();
  }, []);

  return (
    <div>
    <div className="mt-32 overflow-hidden items-center justify-center">
      <p ref={ref1} className=" text-gray-400 text-8xl">
        FLAVOURS FUSION FLAVOURS
      </p>
      <p ref={ref2} className=" text-gray-400 text-8xl mt-12">
        FLAVOURS FUSION FLAVOURS
      </p>

      <p ref={ref3} className="text-gray-400 text-8xl mt-12">
        FUSION FLAVOURS FUSION
      </p>
    </div>

    </div>
  );
}
