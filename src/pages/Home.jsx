import HeroSlider from "../Components/HeroSlider";
import SectionTitle from "../Components/SectionTitle";
import ServiceCard from "../Components/ServiceCard";

export default function Home() {
  return (
    <div className="pt-20">

      <HeroSlider />

      <SectionTitle title="Why Choose Sayona Clinic?" />
      <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-6 p-4">
        <ServiceCard name="Experienced Doctors" />
        <ServiceCard name="Advanced Technology" />
        <ServiceCard name="Affordable Treatment" />
      </div>

      <SectionTitle title="Our Core Values" />
      <div className="max-w-7xl mx-auto grid grid-cols-3 gap-4 p-4">
        <div className="h-32 bg-gray-200 rounded"></div>
        <div className="h-32 bg-gray-200 rounded"></div>
        <div className="h-32 bg-gray-200 rounded"></div>
      </div>

    </div>
  );
}
