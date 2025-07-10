import React from 'react';
import SpaceDetail from '../components/SpaceDetail';

const puertasFachadasData = [
  {
    element: 'Puerta Principal',
    finish: 'Madera pintada verde – Cerradura negra mate con manija y llave',
    image: '/images/puerta-principal.jpg',
  },
  {
    element: 'Puerta Lateral (entrada secundaria)',
    finish: 'Madera pintada verde – Cerradura negra mate con manija y llave',
    image: '/images/puerta-secundaria.jpg',
  },
  {
    element: 'Puerta Terraza habitación secundaria',
    finish: 'Madera pintada verde – Cerradura chapa de manija negra',
    image: '/images/puerta-terraza.jpg',
  },
];

const PuertasFachadas = () => {
  return (
    <SpaceDetail
      title="Puertas de Fachada"
      imageSrc="/images/render-puertas-fachadas.jpg"
      finishes={puertasFachadasData}
    />
  );
};

export default PuertasFachadas;
