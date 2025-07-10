import React, { useState } from 'react';
import RequestChangeForm from './RequestChangeForm';
import Modal from './Modal';
import { useNavigate } from 'react-router-dom';

const SpaceDetail = ({ title, imageSrc, imageSrc2, finishes }) => {
  const [showForm, setShowForm] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-white p-6 flex flex-col items-center">
      <div className="w-full max-w-4xl flex justify-start mb-2">
        <button
          onClick={() => navigate("/espacios")}
          className="text-blue-600 underline hover:text-blue-800"
        >
          ← Volver al Menú
        </button>
      </div>

      <h1 className="text-3xl font-bold text-gray-800 mb-4">{title}</h1>

      {/* Contenedor de una o dos imágenes */}
      <div className={`flex ${imageSrc2 ? 'flex-wrap md:flex-nowrap justify-center gap-4' : 'justify-center'}`}>
        {imageSrc && (
          <div className="flex flex-col gap-4 items-center w-full max-w-4xl mb-6">
            <img
              src={imageSrc}
              alt={`Render de ${title}`}
              className="w-full max-w-2xl rounded-lg shadow"
            />
            {imageSrc2 && (
              <img
                src={imageSrc2}
                alt={`Render adicional de ${title}`}
                className="w-full max-w-2xl rounded-lg shadow"
              />
            )}
          </div>
        )}
        {imageSrc2 && (
          <img
            src={imageSrc2}
            alt={`Render de ${title} 2`}
            className="w-full max-w-2xl mb-6 rounded-lg shadow"
          />
        )}
      </div>

      <table className="w-full max-w-4xl table-auto border border-gray-300 mb-8">
        <thead>
          <tr className="bg-gray-100 text-left">
            <th className="p-2 border">Elemento</th>
            <th className="p-2 border">Acabado</th>
            <th className="p-2 border">Referencia</th>
          </tr>
        </thead>
        <tbody>
          {finishes.map((item, index) => (
            <tr key={index} className="border-t">
              <td className="p-2 border">{item.element}</td>
              <td className="p-2 border">{item.finish}</td>
              <td
                className="p-2 border text-blue-600 underline cursor-pointer"
                onClick={() => setSelectedImage(item.image)}
              >
                Ver imagen
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
          space={title}
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

export default SpaceDetail;

