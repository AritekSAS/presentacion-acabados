import React from 'react';
import SpaceDetail from '../components/SpaceDetail';

const pisosGeneralData = [
  {
    element: "Piso",
    finish:
      "Piso cerámico de 30x60 cm apariencia maderada color almendra. Guarda escobas blancos.",
    image: "/images/piso-general.png",
  },
];

const PisosGeneral = () => {
  return (
    <SpaceDetail
      title="Pisos General"
      imageSrc="/images/render-pisos-general.png"
      finishes={pisosGeneralData}
    />
  );
};

export default PisosGeneral;
