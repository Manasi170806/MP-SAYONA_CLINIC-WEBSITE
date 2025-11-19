import { Link } from "react-router-dom";
import { FaPhone, FaMapMarkerAlt, FaEnvelope } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-[#0a0a0a] text-gray-300 pt-14 pb-6">

      {/* TOP SECTION */}
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10">

        {/* Company */}
        <div>
          <h3 className="text-yellow-500 font-bold text-lg mb-4">COMPANY</h3>
          <ul className="space-y-2">
            <li><Link to="/" className="hover:text-yellow-400">Home</Link></li>
            <li><Link to="/about" className="hover:text-yellow-400">About Us</Link></li>
            <li><Link to="/services" className="hover:text-yellow-400">Facilities</Link></li>
            <li><Link to="/treatments" className="hover:text-yellow-400">Treatments</Link></li>
            <li><Link to="/team" className="hover:text-yellow-400">Our Team</Link></li>
            <li><Link to="/contact" className="hover:text-yellow-400">Contact Us</Link></li>
          </ul>
        </div>

        {/* Facilities */}
        <div>
          <h3 className="text-yellow-500 font-bold text-lg mb-4">FACILITIES</h3>
          <ul className="space-y-2">
            <li>Chemical Peeling</li>
            <li>Micro Dermabrasion</li>
            <li>Radiocautery</li>
            <li>Cryotherapy</li>
            <li>Phototherapy</li>
            <li>Laser Therapy</li>
          </ul>
        </div>

        {/* Treatments */}
        <div>
          <h3 className="text-yellow-500 font-bold text-lg mb-4">TREATMENTS</h3>
          <ul className="space-y-2">
            <li>Skin Lightening</li>
            <li>Pigmentation</li>
            <li>Warts, Moles</li>
            <li>Melasma</li>
            <li>Freckles</li>
            <li>Open Pores Treatment</li>
            <li>Dark Circle Treatment</li>
            <li>Under Eye Brightening</li>
            <li>Facial Glow Treatment</li>
            <li>Skin Tightening</li>
            <li>Stretch Marks Removal</li>
            <li>Tattoo Removal Laser</li>

          </ul>
        </div>

        {/* Contact */}
        <div>
          <h3 className="text-yellow-500 font-bold text-lg mb-4">CONTACT US</h3>

          <div className="flex items-start gap-3">
            <FaMapMarkerAlt className="text-yellow-500 mt-1" />
            <p>S-12, Vastu Luxuria Business Hub, Near VR Mall, Surat</p>
          </div>

          <div className="flex items-start gap-3 mt-4">
            <FaPhone className="text-yellow-500 mt-1" />
            <p>
              0261-3515683<br />
              +91 98254 24867
            </p>
          </div>

          <div className="flex items-start gap-3 mt-4">
            <FaEnvelope className="text-yellow-500 mt-1" />
            <p>sayonaclinichelp@gmail.com</p>
          </div>
        </div>

      </div>

      {/* BOTTOM COPYRIGHT STRIP */}
      <div className="border-t border-gray-700 mt-12 pt-4">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between text-sm text-gray-400">
          <p>© {new Date().getFullYear()} Sayona Clinic. All Rights Reserved.</p>
          <p className="mt-2 md:mt-0">Designed By Manasi Patel</p>
        </div>
      </div>

    </footer>
  );
}
