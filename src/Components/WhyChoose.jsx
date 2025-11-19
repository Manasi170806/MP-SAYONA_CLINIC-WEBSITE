import React from "react";
import { Shield, Heart, Zap, Award, Users, Clock } from "lucide-react";

export default function WhyChoose() {
  const features = [
    {
      icon: <Shield size={28} />,
      title: "Advanced Dermat-Approved Technology",
      desc: "USFDA-approved lasers, anti-ageing tech, facials, and hair regrowth treatments—all backed by science.",
    },
    {
      icon: <Heart size={28} />,
      title: "Comfortable, Expert-Guided Sessions",
      desc: "All treatments are performed by certified dermatologists using safe & effective protocols.",
    },
    {
      icon: <Zap size={28} />,
      title: "Visible Results from First Few Sessions",
      desc: "Hair reduction, pigmentation, or glow—you’ll see real change within a few visits.",
    },
    {
      icon: <Award size={28} />,
      title: "Safe for All Skin & Hair Types",
      desc: "Customized for Indian skin tones & hair textures—oily, dry, or sensitive.",
    },
  ];

  return (
    <section className="bg-black py-20 px-6">
      <h3 className="text-center text-4xl font-bold mb-3 text-yellow-500">
        Why Choose <span className="text-yellow-400">Sayona Clinic?</span>
      </h3>
      <p className="text-center text-gray-300 mb-12 max-w-3xl mx-auto">
        India’s most trusted skin & hair clinic offering advanced dermatological solutions for every concern.
      </p>

      <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-8">
        {features.map((f, idx) => (
          <article
            key={idx}
            className="bg-gradient-to-br from-yellow-500 to-yellow-600 rounded-2xl p-6 shadow-xl hover:shadow-2xl transition duration-300 hover:-translate-y-2"
          >
            <div className="flex items-start gap-4">
              <div className="flex-shrink-0 w-14 h-14 rounded-full bg-black text-yellow-500 flex items-center justify-center shadow-md ring-4 ring-yellow-300/30">
                {f.icon}
              </div>

              <div className="flex-1">
                <h4 className="text-black font-semibold text-lg mb-2">{f.title}</h4>
                <p className="text-black/70 text-sm leading-relaxed">{f.desc}</p>
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
