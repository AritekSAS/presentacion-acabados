import React from 'react';
import SpaceDetail from '../components/SpaceDetail';

const AreaServicio = () => {
  const finishes = [
    {
      element: "Lavadero",
      finish: "Lavadero prefabricado de granito pulido con base en concreto",
      image: "/images/lavadero.png",
    },
  ];

  return (
    <SpaceDetail
      title="Área de Servicio"
      imageSrc="/images/render-area-servicio.png"
      finishes={finishes}
    />
  );
};

export default AreaServicio;
