import React from 'react';
import SpaceDetail from '../components/SpaceDetail';

const pisosExternosFinishes = [
  {
    element: "Piso exterior",
    finish: "Baldosa tipo cemento 60x60 cm, color gris claro, superficie antiderrapante",
    image: "/images/piso-exterior.png",
  },
];

const PisosExternos = () => (
  <SpaceDetail
    title="Pisos Externos"
    imageSrc="/images/render-pisos-externos.png"
    finishes={pisosExternosFinishes}
  />
);

export default PisosExternos;

