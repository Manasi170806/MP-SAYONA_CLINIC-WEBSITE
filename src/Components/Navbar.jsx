import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import logo from "../assets/logo.png";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [shrink, setShrink] = useState(false);
  const location = useLocation();

  // SHRINK ON SCROLL
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 30) setShrink(true);
      else setShrink(false);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const menuItems = [
    { name: "HOME", path: "/" },
    { name: "ABOUT US", path: "/about" },
    // { name: "OUR SERVICES", path: "/services" },
    { name: "TECHNOLOGY", path: "/technology" },
    { name: "CONTACT US", path: "/contact" },
  ];

  return (
    <>
      {/* NAVBAR */}
      <nav
        className={`
          w-full fixed top-0 left-0 z-50 
          backdrop-blur-xl
          border-b border-yellow-500/20 
          transition-all duration-300 
          ${shrink ? "py-2 bg-black/70 shadow-lg" : "py-4 bg-black/90 shadow-md"}
        `}
      >
        <div className="max-w-[1300px] mx-auto flex items-center justify-between px-4">

          {/* Logo */}
          <img
            src={logo}
            alt="logo"
            className={`transition-all duration-300 ${
              shrink ? "w-24" : "w-32"
            } drop-shadow-[0_0_10px_rgba(255,255,0,0.25)]`}
          />

          {/* Desktop Menu */}
          <ul className="hidden md:flex gap-10 text-lg font-semibold text-yellow-400">
            {menuItems.map((item, i) => (
              <Link
                key={i}
                to={item.path}
                className="relative group transition-all duration-300"
              >
                <span
                  className={`${
                    location.pathname === item.path
                      ? "text-yellow-300"
                      : "text-yellow-400"
                  }`}
                >
                  {item.name}
                </span>

                {/* Active + Hover Underline */}
                <span
                  className={`
                    absolute left-0 -bottom-1 bg-yellow-500 rounded-full transition-all duration-300
                    ${location.pathname === item.path ? "w-full" : "w-0 group-hover:w-full"}
                  `}
                ></span>
              </Link>
            ))}
          </ul>

          {/* Hamburger */}
          <button
            onClick={() => setOpen(true)}
            className={`md:hidden text-yellow-400 text-4xl transition-all duration-300 ${
              open ? "opacity-0 -rotate-90" : "opacity-100 rotate-0"
            }`}
          >
            ☰
          </button>
        </div>
      </nav>

      {/* BACKDROP */}
      {open && (
        <div
          className="fixed inset-0 bg-black/60 backdrop-blur-sm z-40 animate-fadeIn"
          onClick={() => setOpen(false)}
        ></div>
      )}

      {/* MOBILE DRAWER */}
      <div
        className={`fixed top-0 right-0 h-full w-[70%] bg-black text-yellow-400 p-6 z-50 shadow-2xl
          transition-transform duration-500 ease-out
          ${open ? "translate-x-0" : "translate-x-full"}
        `}
      >
        <button
          onClick={() => setOpen(false)}
          className="text-yellow-400 text-4xl absolute top-4 right-4 transition-transform duration-300 hover:rotate-90"
        >
          ✕
        </button>

        {/* Drawer Menu */}
        <ul className="flex flex-col gap-8 text-xl font-semibold mt-20">
          {menuItems.map((item, i) => (
            <Link
              key={i}
              to={item.path}
              onClick={() => setOpen(false)}
              className={`transition-all duration-300 hover:text-yellow-200 hover:translate-x-2
                ${location.pathname === item.path ? "text-yellow-300" : ""}
              `}
            >
              {item.name}
            </Link>
          ))}
        </ul>
      </div>

      {/* Animations */}
      <style>
        {`
        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        .animate-fadeIn {
          animation: fadeIn .3s ease-in forwards;
        }
        `}
      </style>
    </>
  );
}
