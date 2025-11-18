import SectionTitle from "../Components/SectionTitle";

export default function Contact() {
  return (
    <div className="pt-24 max-w-7xl mx-auto p-4">

      <SectionTitle title="Quick Contact" />

      <div className="grid md:grid-cols-2 gap-10 mt-6">
        
        <div>
          <h3 className="text-xl font-semibold mb-2">Contact Details</h3>
          <p>📍 Address: Surat, Gujarat</p>
          <p>📞 Phone: +91 98765 43210</p>
          <p>✉️ Email: sayonaclinic@gmail.com</p>
        </div>

        <div className="h-64 bg-gray-200 rounded">
          {/* Google Map Embed */}
        </div>

      </div>

    </div>
  );
}
