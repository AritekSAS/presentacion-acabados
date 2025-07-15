import { useState } from 'react';

export default function RequestChangeForm({ space, onClose }) {
  const [text, setText] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!text.trim()) return;

    const newRequest = {
      page: space,
      text: text.trim(),
      date: new Date().toISOString(),
    };

    const stored = JSON.parse(localStorage.getItem('changeRequests') || '[]');
    stored.push(newRequest);
    localStorage.setItem('changeRequests', JSON.stringify(stored));

    setSubmitted(true);
    setText('');
  };

  return (
    <div
      className="fixed inset-0 bg-black/70 flex items-center justify-center z-50"
      onClick={onClose}
    >
      <div
        className="bg-white p-6 rounded shadow w-11/12 max-w-md relative"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute top-2 right-2 text-xl text-gray-600"
        >
          ✕
        </button>

        {submitted ? (
          <div className="text-center space-y-4">
            <p>¡Gracias! Tu solicitud ha sido enviada.</p>
            <button
              onClick={onClose}
              className="bg-gray-700 text-white px-4 py-2 rounded"
            >
              Cerrar
            </button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block mb-1">
                Solicitud para <span className="font-semibold">{space}</span>:
              </label>
              <textarea
                className="border p-2 w-full"
                value={text}
                onChange={(e) => setText(e.target.value)}
              />
            </div>
            <button
              type="submit"
              className="bg-green-500 text-white px-4 py-2 rounded disabled:opacity-50"
              disabled={!text.trim()}
            >
              Enviar
            </button>
          </form>
        )}
      </div>
    </div>
  );
}