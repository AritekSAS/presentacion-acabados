import React from 'react';
import { useNavigate } from 'react-router-dom';

const IntroAcabados = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate('/espacios');
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center text-center p-8">
      <h1 className="text-3xl font-bold mb-4">🎨 Paleta de colores del proyecto</h1>
      <p className="text-base mb-4 max-w-xl">
        Estos son los tonos base que usamos para definir los acabados y ambientes de tu vivienda. Reflejan una propuesta equilibrada y moderna, pensada para resaltar la armonía entre espacios interiores y exteriores.
      </p>
      <img
        src="/images/paleta-colores.png"
        alt="Paleta de colores del proyecto"
        className="max-w-md w-full mb-6"
      />
      <button
        onClick={handleClick}
        className="bg-gray-800 text-white px-6 py-3 rounded-lg shadow hover:bg-gray-700"
      >
        Explorar acabados
      </button>
    </div>
  );
};

export default IntroAcabados;