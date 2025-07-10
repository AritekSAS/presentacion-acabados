import React from 'react';
import SpaceDetail from '../components/SpaceDetail';

const puertasFachadasData = [
  {
    element: 'Puerta Principal',
    finish: 'Madera pintada verde – Cerradura negra mate con manija y llave',
    image: 'https://github.com/AritekSAS/presentacion-acabados/blob/main/public/images/puerta-principal.png?raw=true',
  },
  {
    element: 'Puerta Lateral (entrada secundaria)',
    finish: 'Madera pintada verde – Cerradura negra mate con manija y llave',
    image: 'https://github.com/AritekSAS/presentacion-acabados/blob/main/public/images/puerta-lateral.png?raw=true',
  },
  {
    element: 'Puerta Terraza habitación secundaria',
    finish: 'Madera pintada verde – Cerradura chapa de manija negra',
    image: 'https://github.com/AritekSAS/presentacion-acabados/blob/main/public/images/puerta-terraza.png?raw=true',
  },
];

const PuertasFachadas = () => {
  return (
    <SpaceDetail
      title="Puertas de Fachada"
      imageSrc="https://github.com/AritekSAS/presentacion-acabados/blob/main/public/images/render-puertas-fachadas.png?raw=true"
      finishes={puertasFachadasData}
    />
  );
};

export default PuertasFachadas;
