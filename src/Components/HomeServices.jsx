import React from "react";

export default function Services() {
  const items = [
    {
      title: "Pigmentation",
      img: "../src/assets/home1.jpeg",
    },
    {
      title: "Hydra Facial",
      img: "../src/assets/home2.webp",
    },
    {
      title: "Acne & Pimple",
      img: "../src/assets/home3.jpeg",
    },
    {
      title: "Hair Laser Removal",
      img: "../src/assets/home4.jpeg",
    },
    {
      title: "Anti-Aging",
      img: "../src/assets/home5.jpeg",
    },
    {
      title: "Chemical Peel",
      img: "../src/assets/home6.jpeg",
    },
    {
      title: "Microdermabrasion",
      img: "../src/assets/home7.jpg",
    },
    {
      title: "Under-Eye",
      img: "../src/assets/home8.jpeg",
    },
  ];

  return (
    <div className="bg-black py-20">
      <h1 className="text-yellow-400 text-center text-4xl font-bold mb-10">
        Our Services
      </h1>

      <div className="max-w-6xl mx-auto grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-8 px-4">
        {items.map((item, i) => (
          <div
            key={i}
            className="
              relative h-48 rounded-2xl overflow-hidden group
              shadow-md shadow-yellow-500/20 border border-yellow-500/30
              hover:scale-105 transition-all duration-500 ease-out cursor-pointer
            "
          >
            {/* Image */}
            <img
              src={item.img}
              alt={item.title}
              className="w-full h-full object-cover group-hover:scale-110 transition-all duration-700"
            />

            {/* Dark overlay */}
            <div className="absolute inset-0 bg-black/50 group-hover:bg-black/30 transition-all duration-500"></div>

            {/* Title */}
            <h2 className="absolute bottom-3 left-4 text-white text-lg font-bold drop-shadow-md group-hover:text-yellow-300 transition-all duration-500">
              {item.title}
            </h2>
          </div>
        ))}
      </div>
    </div>
  );
}
