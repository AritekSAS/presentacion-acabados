import React, { useState } from 'react';
import RequestChangeForm from './RequestChangeForm';
import Modal from './Modal';
import { useNavigate } from 'react-router-dom';

const SpaceDetail = ({
  title,
  imageSrc,
  imageSrc2,
  finishes,
  note,
  extraNote,
}) => {
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
       <div className="flex flex-col items-center">
        {imageSrc && (
          <img
            src={imageSrc}
            alt={`Render de ${title}`}
            className="max-w-3xl mx-auto my-4 rounded-lg shadow"
          />    
        )}
        {imageSrc2 && (
          <img
            src={imageSrc2}
            alt={`Render adicional de ${title}`}
            className="max-w-3xl mx-auto my-4 rounded-lg shadow"
          />
        )}
      </div>

      {note && (
        <p className="text-center mt-4 text-base bg-[#f9fafb] p-4 rounded-md shadow-sm max-w-4xl">
          {note}
        </p>
      )}
       {extraNote && (
        <p className="text-center mt-2 text-base bg-[#f9fafb] p-4 rounded-md shadow-sm max-w-4xl">
          {extraNote}
        </p>
      )}
           
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

