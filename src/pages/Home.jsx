import React from 'react';
import { useNavigate } from 'react-router-dom';

const Home = () => {
  const navigate = useNavigate();

  const handleViewFinishes = () => {
    navigate('/espacios');
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-[#F5F5F5] p-8 font-sans text-[#333]">
      <h1 className="text-4xl font-bold text-[#2F2F2F] mb-4 text-center">
        Presentación de Acabados
      </h1>
      <h2 className="text-lg font-semibold text-[#A86A44] mb-6 text-center">
        Proyecto: Casa Marilu - San Sebastian
      </h2>
      <img
        src="https://github.com/AritekSAS/presentacion-acabados/blob/main/public/images/11.png?raw=true"
        alt="Render de fachada"
        className="max-w-md w-full mb-8 rounded-lg shadow-lg"
      />
      <p className="text-[#4D4D4D] text-center max-w-xl mb-8 text-lg">
        Bienvenido a la presentación de los acabados de su vivienda. Aquí podrá visualizar cómo quedarán los espacios de su casa. Cualquier ajuste es posible, sujeto a revisión y cotización adicional.
      </p>
      <button
        onClick={handleViewFinishes}
        className="bg-[#A6A88C] hover:bg-[#8F9476] text-white px-6 py-3 rounded-full text-lg font-medium shadow transition"
      >
        Ver Acabados
      </button>
    </div>
  );
};

export default Home;

