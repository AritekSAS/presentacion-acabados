export default function RequestChangeForm() {
  return (
    <form className="space-y-4">
      <div>
        <label className="block mb-1">Solicitud:</label>
        <textarea className="border p-2 w-full" />
      </div>
      <button className="bg-green-500 text-white px-4 py-2 rounded">
        Enviar
      </button>
    </form>
  );
}

