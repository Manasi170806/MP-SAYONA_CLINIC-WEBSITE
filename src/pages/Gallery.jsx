import SectionTitle from "../Components/SectionTitle";

export default function Gallery() {
  return (
    <div className="pt-24">
      <SectionTitle title="Clinic Gallery" />

      <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-6 p-4">
        <div className="h-60 bg-gray-200 rounded"></div>
        <div className="h-60 bg-gray-200 rounded"></div>
        <div className="h-60 bg-gray-200 rounded"></div>
        <div className="h-60 bg-gray-200 rounded"></div>
      </div>
    </div>
  );
}
