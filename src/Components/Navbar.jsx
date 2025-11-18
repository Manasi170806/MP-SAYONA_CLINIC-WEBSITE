import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <div className="w-full shadow-md fixed top-0 bg-white z-50">
      <div className="max-w-7xl mx-auto flex justify-between items-center p-4">
        <h1 className="text-xl font-bold text-blue-600">Sayona Clinic</h1>

        <ul className="hidden md:flex gap-6 font-medium">
          <Link to="/">Home</Link>
          <Link to="/about">About</Link>
          <Link to="/services">Services</Link>
          <Link to="/gallery">Gallery</Link>
          <Link to="/contact">Contact</Link>
        </ul>
      </div>
    </div>
  );
}
