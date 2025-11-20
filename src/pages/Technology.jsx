import React from "react";
import { motion } from "framer-motion";

export default function TechnologySection() {
  const technologies = [
   { id: 1, img: "../src/assets/tech1.avif", title: "Laser Technology" },
    { id: 2, img: "../src/assets/tech2.jpg", title: "Acne Treatment" },
    { id: 3, img: "../src/assets/tech3.jpg", title: "Chemical Peeling" },
    { id: 4, img: "../src/assets/tech4.avif", title: "Nail Disease Management" },
    { id: 5, img: "../src/assets/tech5.webp", title: "Glow Treatment System" },
    { id: 6, img: "../src/assets/tech6.jpg", title: "Pigmentation Device" },
    { id: 7, img: "../src/assets/tech7.webp", title: "Medical LED Therapy" },
    { id: 8, img: "../src/assets/tech8.jpg", title: "Wart Removal" },
    { id: 9, img: "../src/assets/tech9.jpg", title: "Facial Rejuvenation" },
    { id: 10, img: "../src/assets/tech10.jpg", title: "Allergy Diagnosis and Treatment" },
    { id: 11, img: "../src/assets/tech11.avif", title: "Hair Fall Treatment" },
    { id: 12, img: "../src/assets/tech12.jpg", title: "Bride and Groom Facial Treatment" },
  ];

  return (
    <section className="bg-black py-16 px-4">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-yellow-500 mb-6">
          Our Advanced Technologies
        </h2>
        <p className="text-gray-300 max-w-2xl mx-auto mb-12">
          We use world‑class machines to ensure safe, effective and long‑lasting
          results.
        </p>

        {/* 3 Columns Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {technologies.map((item, index) => (
            <motion.div
              key={item.id}
              className="bg-[#111] rounded-xl overflow-hidden shadow-lg"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              whileHover={{ scale: 1.05, boxShadow: "0 15px 30px rgba(255, 195, 0, 0.5)" }}
            >
              <img
                src={item.img}
                alt={item.title}
                className="w-full h-52 object-cover" // Bigger box height
              />
              <div className="p-6"> {/* More padding */}
                <h3 className="text-white font-semibold text-lg">
                  {item.title}
                </h3>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
