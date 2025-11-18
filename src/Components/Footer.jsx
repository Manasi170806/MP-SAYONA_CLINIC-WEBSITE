export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 py-10 mt-20">
      <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-10 p-4">

        <div>
          <h2 className="text-xl font-semibold mb-3">Sayona Clinic</h2>
          <p>Skin • Hair • Laser Treatment</p>
        </div>

        <div>
          <h2 className="font-semibold mb-3">Quick Links</h2>
          <ul className="space-y-1">
            <li>Home</li>
            <li>About</li>
            <li>Services</li>
            <li>Gallery</li>
            <li>Contact</li>
          </ul>
        </div>

        <div>
          <h2 className="font-semibold mb-3">Contact Info</h2>
          <p>📍 Surat, Gujarat</p>
          <p>📞 +91 98765 43210</p>
          <p>✉️ sayonaclinic@gmail.com</p>
        </div>

      </div>

      <p className="text-center text-sm text-gray-500 mt-5">
        © 2025 Sayona Clinic. All Rights Reserved.
      </p>
    </footer>
  );
}
