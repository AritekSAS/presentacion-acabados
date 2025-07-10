export default function SpaceCard({ space }) {
  return (
    <div className="border p-4 rounded shadow">
      <h2 className="text-xl font-bold">{space?.name}</h2>
      <p>{space?.description}</p>
    </div>
  );
}