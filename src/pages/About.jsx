import React from "react";

export default function AboutUs() {
return ( <section className="max-w-6xl mx-auto px-4 py-12 space-y-12">

  {/* ===== Dr. Sneha Patel Box ===== */}
  <div className="bg-[#0e0e0e] rounded-2xl p-8 md:p-12 shadow-xl flex flex-col md:flex-row items-center gap-12 -mt-6">
    {/* Left Photo */}
    <div className="w-full md:w-1/2 flex justify-center md:justify-start transform transition duration-700 hover:scale-105 -mt-4 ml-10">
      <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-2xl overflow-hidden shadow-2xl">
        {/* Glow Ring */}
        <div className="absolute inset-0 rounded-2xl  from-yellow-400/30 to-yellow-600/30 blur-xl"></div>
        {/* Animated Border */}
        <div className="absolute inset-0 rounded-2xl border border-yellow-400/20 transition-all duration-700 hover:border-yellow-400/60"></div>
        {/* Image */}
        <img
          src="../src/assets/mam.png"
          alt="Dr. Sneha M. Patel"
          className="w-full h-full object-cover rounded-2xl shadow-lg"
        />
      </div>
    </div>

    {/* Right Content */}
    <div className="w-full md:w-1/2 text-white space-y-4">
      <h2 className="text-3xl md:text-4xl font-bold text-yellow-400">Dr. Sneha M. Patel</h2>
      <p className="uppercase tracking-wider text-sm text-yellow-300 font-medium">B.H.M.S.</p>
      <p className="text-gray-200 leading-relaxed">
        Dr. Sneha M. Patel is a highly skilled and compassionate professional dedicated to enhancing the confidence and well-being of her patients. With a Bachelor of Homeopathic Medicine and Surgery (B.H.M.S.) degree, Dr. Patel combines her holistic medical background with expertise in advanced skin, hair, and laser treatments.
      </p>
      <p className="text-gray-300 leading-relaxed">
        She specializes in treatments including Carbon Facials, Hydrafacials, Permanent Hair Removal, and Chemical Peeling, all delivered with precision and the latest technology.
      </p>

      {/* Buttons */}
      <div className="flex flex-col sm:flex-row gap-3 mt-4">
        <a
          href="/contact"
          className="px-5 py-2 rounded-lg bg-yellow-400 text-black font-semibold shadow-lg hover:scale-105 transition"
        >
          Book Appointment
        </a>
        <a
          href="tel:+911234567890"
          className="px-5 py-2 rounded-lg border border-yellow-400 text-yellow-400 font-medium hover:bg-yellow-400 hover:text-black transition text-center"
        >
          Call Clinic
        </a>
      </div>

      {/* Clinic Timings */}
      <p className="text-gray-400 text-sm mt-6">
       <b> Clinic timings :</b> Mon - Sat : 9:30 AM - 1:30 PM <br /> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;4:30 PM - 8:00 PM <br />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Sun : Closed
      </p>

      {/* Philosophy Box */}
      <div className="mt-6 p-4 rounded-xl bg-white/5 border border-white/10 backdrop-blur-lg transition hover:scale-[1.02]">
        <h4 className="text-xl font-semibold text-yellow-400 mb-2">Our Philosophy</h4>
        <p className="text-gray-300 text-sm leading-relaxed">
          "Skincare is transformation — our goal is to help you glow with confidence."
        </p>
      </div>
    </div>
  </div>

  {/* ===== Clinic About Box (Text Only) ===== */}
  <div className="bg-[#1a1a1a] rounded-2xl p-8 md:p-12 shadow-xl">
    <div className="text-white space-y-4">
      <h2 className="text-3xl md:text-4xl font-bold mb-2 text-yellow-400">About Sayona Clinic </h2>
      <br />
      <p className="text-lg md:text-xl leading-relaxed">
        Welcome to Sayona Skin Hair Laser Clinic, Surat – your ultimate destination for radiant skin, confident beauty, and unparalleled care. At our clinic, we believe that glowing skin is not just a luxury but a lifestyle, and we’re here to make it accessible for everyone. Under the expert guidance of highly skilled professionals, we offer a range of advanced skin and hair treatments tailored to your unique needs. From Carbon Facials and Hydrafacials to Permanent Hair Removal and Chemical Peeling, our services are designed to rejuvenate, refresh, and redefine your natural beauty.
      </p>
      <p className="text-lg md:text-xl leading-relaxed">
       Our clinic combines cutting-edge technology with a soothing and luxurious ambience, ensuring a relaxing and transformative experience for every client. Whether you’re preparing for a special occasion or seeking long-term solutions for your skin and hair, Sayona Skin Hair Laser Clinic is your trusted partner in achieving your beauty goals.
      </p>
    </div>
  </div>

</section> );
}