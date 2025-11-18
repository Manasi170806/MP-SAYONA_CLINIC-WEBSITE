import SectionTitle from "../Components/SectionTitle";
import ServiceCard from "../Components/ServiceCard";

export default function Services() {
  return (
    <div className="pt-24">
      <SectionTitle title="Our Services" />

      <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-6 p-4">
        <ServiceCard name="Laser Hair Removal" />
        <ServiceCard name="Acne Treatment" />
        <ServiceCard name="Skin Whitening" />
        <ServiceCard name="Hair PRP" />
        <ServiceCard name="Skin Polishing" />
        <ServiceCard name="Anti-Aging Treatment" />
      </div>
    </div>
  );
}
