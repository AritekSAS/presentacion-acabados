import React from 'react';
import SpaceDetail from '../components/SpaceDetail';

const cocinaData = [
  {
    element: 'Piso',
    finish: 'Porcelanato Beige Mate 60x60',
    image: '/images/piso-cocina.jpg',
  },
  {
    element: 'Paredes',
    finish: 'Pintura Vinilo Blanco',
    image: '/images/pared-cocina.jpg',
  },
  {
    element: 'Techo',
    finish: 'Drywall con pintura blanca',
    image: '/images/techo-cocina.jpg',
  },
  {
    element: 'Grifería',
    finish: 'Grifería monocontrol negra mate',
    image: '/images/griferia-cocina.jpg',
  },
  {
    element: 'Otros',
    finish: 'Mueble inferior madera clara',
    image: '/images/mueble-cocina.jpg',
  },
];

const Cocina = () => {
  return (
    <SpaceDetail
      title="Cocina"
      imageSrc="/images/render-cocina.jpg"
      finishes={cocinaData}
    />
  );
};

export default Cocina;
