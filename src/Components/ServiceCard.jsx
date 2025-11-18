export default function ServiceCard({ name }) {
  return (
    <div className="bg-white shadow-md p-6 rounded-lg hover:shadow-xl transition">
      <div className="h-32 bg-gray-200 rounded mb-4"></div>
      <h3 className="font-semibold text-lg">{name}</h3>
    </div>
  );
}
