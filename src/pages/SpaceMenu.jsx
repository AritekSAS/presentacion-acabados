import React from 'react';
import { useNavigate } from 'react-router-dom';

const spaces = [
  { name: 'Puerta Principal y Exteriores', path: '/espacios/puertas-fachadas' },
  { name: 'Puertas Interiores', path: '/espacios/puertas-internas' },
  { name: 'Piso Interior General', path: '/espacios/pisos-general' },
  { name: 'Piso Exteriores', path: '/espacios/pisos-externos' },
  { name: 'Cocina', path: '/espacios/cocina' },
  { name: 'Área de Servicio', path: '/espacios/area-servicio' },
  { name: 'Baño Social', path: '/espacios/bano-social' },
  { name: 'Baños Habitaciones', path: '/espacios/banos-habitaciones' },
  { name: 'Closets y Vestier', path: '/espacios/closets' },
  { name: 'Adicionales', path: '/espacios/adicionales' },
];

const SpaceMenu = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-white p-8 flex flex-col items-center">
      <div className="flex flex-col items-center mt-6 mb-4 text-center">
        <h3 className="text-lg font-semibold">🎨 Paleta de colores del proyecto</h3>
        <p className="text-base mb-4 max-w-xl">
          Estos son los tonos base que usamos para definir los acabados y ambientes de tu vivienda. Reflejan una propuesta equilibrada y moderna, pensada para resaltar la armonía entre espacios interiores y exteriores.
        </p>
        <img
          src="https://github.com/AritekSAS/presentacion-acabados/blob/main/public/images/paleta-colores.png?raw=true"
          alt="Paleta de colores del proyecto"
          className="max-w-md w-full"
        />
      </div>
      <h2 className="text-3xl font-bold text-gray-800 mb-6 text-center">
        Seleccione un Espacio
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full max-w-2xl">
        {spaces.map((space) => (
          <button
            key={space.name}
            onClick={() => navigate(space.path)}
            className="bg-gray-200 hover:bg-gray-300 text-gray-800 py-4 px-6 rounded-lg shadow transition text-xl"
          >
            {space.name}
          </button>
        ))}
      </div>
    </div>
  );
};

export default SpaceMenu;
