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
    title="Pisos Exteriores"
    imageSrc="https://github.com/AritekSAS/presentacion-acabados/blob/main/public/images/render-pisos-externos.png?raw=true"
    finishes={pisosExternosFinishes}
  />
);

export default PisosExternos;

