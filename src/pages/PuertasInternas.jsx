import React from 'react';
import SpaceDetail from '../components/SpaceDetail';

const puertasInternasData = [
  {
    element: "Puerta",
    finish:
      "Tablero MDP con recubrimiento melánico acabado en roble claro o roble cenizo. Tono beige grisáceo con vetas suaves que imitan la textura de la madera.",
    image: "/images/puerta-interna.png",
  },
  {
    element: "Cerradura",
    finish: "Chapa de manija negra",
    image: "/images/cerradura-puerta-interna.png",
  },
];

const PuertasInternas = () => {
  return (
    <SpaceDetail
      title="Puertas Internas"
      imageSrc="/images/render-puertas-internas.png"
      finishes={puertasInternasData}
    />
  );
};

export default PuertasInternas;
