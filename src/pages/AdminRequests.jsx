import { useEffect, useState } from 'react';

export default function AdminRequests() {
  const [requests, setRequests] = useState([]);

  useEffect(() => {
    const stored = JSON.parse(localStorage.getItem('changeRequests') || '[]');
    setRequests(stored);
  }, []);

  return (
    <div className="min-h-screen p-8">
      <h1 className="text-2xl font-bold mb-4">Solicitudes de cambio</h1>
      {requests.length === 0 ? (
        <p>No hay solicitudes registradas.</p>
      ) : (
        <table className="table-auto w-full border-collapse">
          <thead>
            <tr className="bg-gray-100">
              <th className="border p-2 text-left">Página</th>
              <th className="border p-2 text-left">Solicitud</th>
              <th className="border p-2 text-left">Fecha</th>
            </tr>
          </thead>
          <tbody>
            {requests.map((req, idx) => (
              <tr key={idx} className="border-t">
                <td className="border p-2">{req.page}</td>
                <td className="border p-2 whitespace-pre-wrap">{req.text}</td>
                <td className="border p-2">
                  {new Date(req.date).toLocaleString()}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
}
