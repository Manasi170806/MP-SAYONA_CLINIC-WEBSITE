import { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../assets/logo.png";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <>
      {/* NAVBAR */}
      <nav className="w-full bg-black text-yellow-500 fixed top-0 left-0 z-50">
        <div className="max-w-[1300px] mx-auto flex items-center justify-between px-4 py-4">

          {/* Logo */}
          <img src={logo} alt="logo" className="w-32" />

          {/* Desktop Menu */}
          <ul className="hidden md:flex gap-6 animate-slideDown text-lg font-semibold">
            <Link to="/" className=" hover:text-yellow-800">HOME</Link>
            <Link to="/about" className=" hover:text-yellow-800">ABOUT US</Link>
            <Link to="/services" className=" hover:text-yellow-800">OUR SERVICES</Link>
            <Link to="/technology" className=" hover:text-yellow-800">TECHNOLOGY</Link>
            <Link to="/contact" className=" hover:text-yellow-800">CONTACT US</Link>
          </ul>

          {/* Mobile Hamburger */}
          <button
            onClick={() => setOpen(true)}
            className="md:hidden text-yellow-400 text-3xl"
          >
            ☰
          </button>
        </div>
      </nav>

      {/* BACKDROP */}
      {open && (
        <div
          className="fixed inset-0 bg-black/40 backdrop-blur-sm z-40"
          onClick={() => setOpen(false)}
        ></div>
      )}

      {/* RIGHT SIDE DRAWER */}
      <div
        className={`fixed top-0 right-0 h-full w-[60%] bg-black text-yellow-400 p-6 z-50 shadow-xl
        transition-transform duration-300 ${open ? "translate-x-0" : "translate-x-full"}`}
      >
        {/* CLOSE BUTTON inside drawer */}
        <button
          onClick={() => setOpen(false)}
          className="text-yellow-400 text-3xl absolute top-4 right-4"
        >
          ✕
        </button>

        {/* MENU LINKS */}
        <ul className="flex flex-col gap-6 text-lg font-semibold mt-16">
          <Link to="/" onClick={() => setOpen(false)}>HOME</Link>
          <Link to="/about" onClick={() => setOpen(false)}>ABOUT US</Link>
          <Link to="/services" onClick={() => setOpen(false)}>OUR SERVICES</Link>
          <Link to="/technology" onClick={() => setOpen(false)}>TECHNOLOGY</Link>
          <Link to="/contact" onClick={() => setOpen(false)}>CONTACT US</Link>
        </ul>
      </div>
    </>
  );
}
