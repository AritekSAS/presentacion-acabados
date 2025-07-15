import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import RequestChangeForm from '../components/RequestChangeForm';
import Modal from '../components/Modal';

const cocinaData = [
  {
    element: "Muebles",
    finish: "Tablero MDP, con recubrimiento melánico color HUMO mate",
    image: "/images/cocina-mueble.png",
  },
  {
    element: "Mesón",
    finish: "Granito negro San Gabriel",
    image: "/images/cocina-meson.png",
  },
  {
    element: "Lavaplatos",
    finish: "Lavaplatos De Sobreponer 53x43 Cm Inox",
    image: "/images/cocina-lavaplatos.png",
  },
  {
    element: "Manijas",
    finish: "Manija Cajón Tubular/cilíndrica Liviana",
    image: "/images/cocina-manijas.png",
  },
];

const Cocina = () => {
  const [showForm, setShowForm] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-white p-6 flex flex-col items-center">
      <div className="w-full max-w-4xl flex justify-start mb-2">
        <button
          onClick={() => navigate('/espacios')}
          className="text-blue-600 underline hover:text-blue-800"
        >
          ← Volver al Menú
        </button>
      </div>

      <h1 className="text-3xl font-bold text-gray-800 mb-4">Cocina</h1>

      <div className="flex flex-col items-center">
        <img
          src="/images/render-cocina2.png"
          alt="Render de Cocina"
          className="w-full max-w-2xl mx-auto my-4 max-h-[400px] sm:max-h-[500px] object-contain rounded-lg shadow"
        />
      </div>

      {/* Bloque informativo sobre almacenamiento */}
      <div className="bg-[#f9fafb] p-4 rounded-md shadow-sm max-w-4xl w-full mt-2">
        <h2 className="text-xl font-semibold mb-2 text-center">Almacenamiento de Cocina</h2>
        <p className="text-center">
          Aunque esta cocina no incluye muebles superiores, los muebles inferiores proporcionan aproximadamente 5.63 m² de almacenamiento, suficiente para una cocina familiar amplia. Además, todo queda al alcance sin necesidad de subirse a una escalera.
        </p>
        <div className="flex items-center justify-between mt-4">
          <span className="text-xs sm:text-sm whitespace-nowrap">Cocina pequeña (3.0 m²)</span>
          <div className="relative flex-1 mx-4">
            <div className="bg-gray-300 h-2 rounded" />
            <div className="absolute left-[72%] -top-3 flex flex-col items-center">
              <div className="w-0 h-0 border-l-4 border-r-4 border-b-8 border-transparent border-b-green-600"></div>
              <span className="text-xs mt-2 whitespace-nowrap">Su cocina: 5.63 m²</span>
            </div>
          </div>
          <span className="text-xs sm:text-sm whitespace-nowrap">Cocina grande (7.0 m²)</span>
        </div>
      </div>

      <table className="w-full max-w-4xl table-auto border border-gray-300 mb-8 mt-4">
        <thead>
          <tr className="bg-gray-100 text-left">
            <th className="p-2 border">Elemento</th>
            <th className="p-2 border">Acabado</th>
            <th className="p-2 border">Referencia</th>
          </tr>
        </thead>
        <tbody>
          {cocinaData.map((item, index) => (
            <tr key={index} className="border-t">
              <td className="p-2 border">{item.element}</td>
              <td className="p-2 border">{item.finish}</td>
              <td className="p-2 border text-center">
                <img
                  src={item.image}
                  alt={`Imagen de ${item.element}`}
                  className="w-16 h-16 object-cover cursor-pointer mx-auto"
                  onClick={() => setSelectedImage(item.image)}
                />
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      <button
        onClick={() => setShowForm(true)}
        className="bg-gray-700 text-white px-6 py-2 rounded hover:bg-gray-800"
      >
        Solicitar cambio
      </button>

      {showForm && (
        <RequestChangeForm
          space="Cocina"
          onClose={() => setShowForm(false)}
        />
      )}

      <Modal
        isOpen={!!selectedImage}
        imageSrc={selectedImage}
        onClose={() => setSelectedImage(null)}
      />
    </div>
  );
};

export default Cocina;
