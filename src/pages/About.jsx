import SectionTitle from "../Components/SectionTitle";

export default function About() {
  return (
    <div className="pt-24 max-w-7xl mx-auto p-4">
      <SectionTitle title="About Our Clinic" />

      <p className="text-lg leading-relaxed">
        Sayona Clinic provides advanced skin, hair & laser treatment
        with modern technology and expert doctors.
      </p>

      <div className="mt-6 bg-gray-200 h-60 rounded"></div>

      <h2 className="text-2xl font-semibold mt-10">Clinic Timings</h2>
      <p>Opening: 10:00 AM</p>
      <p>Closing: 8:00 PM</p>
    </div>
  );
}
