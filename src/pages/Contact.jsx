import React, { useState } from "react";

export default function ContactPage() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    service: "Skin Treatment",
    date: "",
    message: "",
    consent: false,
  });
  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState({ loading: false, success: null, error: null });

  function validate() {
    const e = {};
    if (!form.name.trim()) e.name = "Name is required";
    if (!form.email.match(/^[^@\s]+@[^@\s]+\.[^@\s]+$/)) e.email = "Valid email required";
    if (!form.phone.match(/^[0-9]{7,15}$/)) e.phone = "Enter phone digits (7-15)";
    if (!form.message.trim()) e.message = "Message is required";
    if (!form.consent) e.consent = "Please accept to be contacted";
    return e;
  }

  async function handleSubmit(e) {
    e.preventDefault();
    const eobj = validate();
    setErrors(eobj);
    if (Object.keys(eobj).length) return;

    try {
      setStatus({ loading: true, success: null, error: null });
      await new Promise((r) => setTimeout(r, 900));
      setStatus({ loading: false, success: "Request sent! We'll call you soon.", error: null });
      setForm({ name: "", email: "", phone: "", service: "Skin Treatment", date: "", message: "", consent: false });
    } catch (err) {
      setStatus({ loading: false, success: null, error: "Failed to send, try again." });
    }
  }

  return (
    <div className="min-h-screen bg-black text-white p-6 md:p-12">
      <div className="max-w-6xl mx-auto space-y-8">

        {/* Top Section: Contact Info + Form */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">

          {/* Unique Contact Info Cards with Opening Hours */}
          <aside className="space-y-6">
            <div className="bg-gray-900 border-l-4 border-yellow-400 p-6 rounded-xl shadow-lg hover:shadow-yellow-400 transition duration-300">
              <div className="flex items-center gap-4">
                <span className="text-yellow-400 text-2xl">📍</span>
                <div>
                  <p className="text-yellow-400 font-semibold">Address</p>
                  <p className="text-gray-300 text-sm">33, Uma Plaza, opp. Prayosha star building, nr. New Police station, Dindoli, Surat, Karadva, Gujarat 394210</p>
                </div>
              </div>
            </div>

            <div className="bg-gray-900 border-l-4 border-yellow-400 p-6 rounded-xl shadow-lg hover:shadow-yellow-400 transition duration-300">
              <div className="flex items-center gap-4">
                <span className="text-yellow-400 text-2xl">⏰</span>
                <div>
                  <p className="text-yellow-400 font-semibold">Opening Hours</p>
                  <p className="text-gray-300 text-sm">Mon - Sat: 9:30 AM - 8:00 PM</p>
                  <p className="text-gray-300 text-sm">Sun: Closed</p>
                </div>
              </div>
            </div>

            <div className="bg-gray-900 border-l-4 border-yellow-400 p-6 rounded-xl shadow-lg hover:shadow-yellow-400 transition duration-300">
              <div className="flex items-center gap-4">
                <span className="text-yellow-400 text-2xl">📞</span>
                <div>
                  <p className="text-yellow-400 font-semibold">Phone</p>
                  <a href="tel:+916353952412" className="text-gray-300 hover:text-yellow-400 text-sm">+91 63539 52412</a>
                </div>
              </div>
            </div>

            <div className="bg-gray-900 border-l-4 border-yellow-400 p-6 rounded-xl shadow-lg hover:shadow-yellow-400 transition duration-300">
              <div className="flex items-center gap-4">
                <span className="text-yellow-400 text-2xl">✉️</span>
                <div>
                  <p className="text-yellow-400 font-semibold">Email</p>
                  <a href="mailto:sayonaclinichelp@gmail.com" className="text-gray-300 hover:text-yellow-400 text-sm">sayonaclinichelp@gmail.com</a>
                </div>
              </div>
            </div>
          </aside>

          {/* Appointment Form */}
          <div className="bg-gray-900 rounded-2xl p-6 shadow-lg border border-yellow-400">
            <h3 className="text-xl font-semibold text-yellow-400">Book a Consultation</h3>
            <p className="text-gray-300 text-sm mt-1">Fill the form and our team will get back to you.</p>

            <form onSubmit={handleSubmit} className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium">Full name</label>
                <input
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                  className={`mt-1 w-full rounded-lg border p-3 text-sm text-gray-400 focus:outline-none focus:ring-2 focus:ring-yellow-400 ${errors.name ? 'border-red-500' : 'border-gray-300'}`}
                  placeholder="Your name"
                />
                {errors.name && <p className="text-red-500 text-xs mt-1">{errors.name}</p>}
              </div>

              <div>
                <label className="block text-sm font-medium">Email</label>
                <input
                  value={form.email}
                  onChange={(e) => setForm({ ...form, email: e.target.value })}
                  className={`mt-1 w-full rounded-lg border p-3 text-sm text-gray-400 focus:outline-none focus:ring-2 focus:ring-yellow-400 ${errors.email ? 'border-red-500' : 'border-gray-300'}`}
                  placeholder="you@example.com"
                />
                {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email}</p>}
              </div>

              <div>
                <label className="block text-sm font-medium">Phone</label>
                <input
                  value={form.phone}
                  onChange={(e) => setForm({ ...form, phone: e.target.value })}
                  className={`mt-1 w-full rounded-lg border p-3 text-sm text-gray-400 focus:outline-none focus:ring-2 focus:ring-yellow-400 ${errors.phone ? 'border-red-500' : 'border-gray-300'}`}
                  placeholder="e.g. 9123456789"
                />
                {errors.phone && <p className="text-red-500 text-xs mt-1">{errors.phone}</p>}
              </div>

              <div>
                <label className="block text-sm font-medium">Service</label>
                <select
                  value={form.service}
                  onChange={(e) => setForm({ ...form, service: e.target.value })}
                  className="mt-1 w-full rounded-lg border p-3 text-sm text-gray-400 focus:outline-none focus:ring-2 focus:ring-yellow-400 border-gray-300"
                >
                  <option>Skin Treatment</option>
                  <option>Laser Hair Reduction</option>
                  <option>PRP Hair Treatment</option>
                  <option>Scar / Pigmentation</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium">Preferred date (optional)</label>
                <input
                  type="date"
                  value={form.date}
                  onChange={(e) => setForm({ ...form, date: e.target.value })}
                  className="mt-1 w-full rounded-lg border p-3 text-sm text-gray-400 focus:outline-none focus:ring-2 focus:ring-yellow-400 border-gray-300"
                />
              </div>

              <div className="md:col-span-2">
                <label className="block text-sm font-medium">Message</label>
                <textarea
                  value={form.message}
                  onChange={(e) => setForm({ ...form, message: e.target.value })}
                  className={`mt-1 w-full rounded-lg border p-3 text-sm h-28 text-gray-400 focus:outline-none focus:ring-2 focus:ring-yellow-400 ${errors.message ? 'border-red-500' : 'border-gray-300'}`}
                  placeholder="Your concern or question"
                />
                {errors.message && <p className="text-red-500 text-xs mt-1">{errors.message}</p>}
              </div>

              <div className="md:col-span-2 flex items-center gap-3">
                <input id="consent" type="checkbox" checked={form.consent} onChange={(e) => setForm({ ...form, consent: e.target.checked })} className="h-4 w-4" />
                <label htmlFor="consent" className="text-sm text-gray-300">I agree to be contacted by Sayona Clinic regarding my inquiry.</label>
              </div>
              {errors.consent && <p className="text-red-500 text-xs md:col-span-2">{errors.consent}</p>}

              <div className="md:col-span-2 flex items-center justify-between">
                <div>
                  <button
                    type="submit"
                    disabled={status.loading}
                    className="inline-flex items-center gap-2 rounded-lg bg-yellow-400 text-black px-4 py-2 text-sm font-medium shadow hover:bg-yellow-500 disabled:opacity-60"
                  >
                    {status.loading ? 'Sending...' : 'Request Appointment'}
                  </button>

                  <button
                    type="button"
                    onClick={() => {
                      setForm({ name: "", email: "", phone: "", service: "Skin Treatment", date: "", message: "", consent: false });
                      setErrors({});
                      setStatus({ loading: false, success: null, error: null });
                    }}
                    className="ml-3 text-sm text-gray-300 hover:underline"
                  >
                    Clear
                  </button>
                </div>

                <div className="text-sm text-green-400">{status.success}</div>
                <div className="text-sm text-red-500">{status.error}</div>
              </div>
            </form>
          </div>

        </div>

        {/* Map Below */}
        <div className="bg-gray-900 rounded-2xl p-6 shadow-lg border border-yellow-400">
          <h4 className="text-lg font-semibold text-yellow-400">Find us</h4>
          <div className="relative w-full h-64 md:h-96 mt-3 rounded-lg overflow-hidden border border-yellow-400">
            <iframe
              title="Sayona Clinic Map"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3721.241666049894!2d72.87847537525975!3d21.14277878053527!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be0516bda29f0ab%3A0xe01ed870742d0a6f!2sSayona%20Skin%20Hair%20Laser%20Clinic!5e0!3m2!1sen!2sin!4v1763524847966!5m2!1sen!2sin"
              className="absolute top-0 left-0 w-full h-full border-0"
              loading="lazy"
            />
          </div>
        </div>

      </div>

      {/* Footer */}
      <footer className="mt-12 bg-gray-900 text-gray-300 border-t border-yellow-400 p-6 text-center">
        <p className="text-yellow-400 font-semibold">© 2025 Sayona Clinic. All Rights Reserved.</p>
        <p className="text-sm mt-1">Follow us on 
          <a href="#" className="text-yellow-400 hover:underline ml-1">Instagram</a>, 
          <a href="#" className="text-yellow-400 hover:underline ml-1">Facebook</a>
        </p>
      </footer>
    </div>
  );
}