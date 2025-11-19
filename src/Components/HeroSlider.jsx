import React, { useState, useEffect, useRef } from "react";

// Import images
import img1 from "../assets/slider1.jpg";
import img2 from "../assets/slider2.jpg";
import img3 from "../assets/slider3.jpg";
import img4 from "../assets/slider4.jpg";
import img5 from "../assets/slider5.jpg";

export default function HeroSlider() {
  const slides = [img1, img2, img3, img4, img5];
  const [current, setCurrent] = useState(0);
  const slideRef = useRef(null);

  // Auto slide every 5 sec
  useEffect(() => {
    const timer = setInterval(() => {
      nextSlide();
    }, 5000);

    return () => clearInterval(timer);
  });

  // NEXT
  const nextSlide = () => {
    setCurrent((prev) => prev + 1);
  };

  // PREV
  const prevSlide = () => {
    if (current === 0) {
      setCurrent(slides.length - 1);
    } else {
      setCurrent((prev) => prev - 1);
    }
  };

  // Smooth infinite loop logic
  useEffect(() => {
    if (current === slides.length) {
      setTimeout(() => {
        slideRef.current.style.transition = "none";
        setCurrent(0);
      }, 700);

      setTimeout(() => {
        slideRef.current.style.transition = "transform 0.7s ease-in-out";
      }, 750);
    }
  }, [current]);

  return (
    <div className="relative w-full h-[420px] md:h-[520px] overflow-hidden">

      {/* Slides */}
      <div
        ref={slideRef}
        className="flex transition-transform duration-700"
        style={{
          transform: `translateX(-${current * 100}%)`,
        }}
      >
        {/* Original images */}
        {slides.map((src, i) => (
          <img
            key={i}
            src={src}
            className="w-full flex-shrink-0 object-cover h-[420px] md:h-[520px]"
          />
        ))}

        {/* Duplicate first image at end */}
        <img
          src={slides[0]}
          className="w-full flex-shrink-0 object-cover h-[420px] md:h-[520px]"
        />
      </div>

      {/* Left Arrow */}
      <button
        onClick={prevSlide}
        className="absolute top-1/2 left-4 -translate-y-1/2 bg-black/40 hover:bg-black/60 text-white p-3 rounded-full"
      >
        ❮
      </button>

      {/* Right Arrow */}
      <button
        onClick={nextSlide}
        className="absolute top-1/2 right-4 -translate-y-1/2 bg-black/40 hover:bg-black/60 text-white p-3 rounded-full"
      >
        ❯
      </button>
    </div>
  );
}
