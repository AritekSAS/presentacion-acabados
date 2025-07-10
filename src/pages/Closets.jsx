import React from 'react';
import SpaceDetail from '../components/SpaceDetail';

const finishes = [
  {
    element: "Cuerpo del closet",
    finish: "Módulos abiertos y entrepaños con tablero MDP acabado roble claro o cenizo.",
    image: "/images/closet-cuerpo.png",
  },
  {
    element: "Cajones",
    finish: "Cajones en MDP con correderas metálicas. Diseño sin manijas visibles.",
    image: "/images/closet-cajones.png",
  },
  {
    element: "Tubos de colgar",
    finish: "Tubos metálicos color aluminio satinado.",
    image: "/images/closet-tubo.png",
  }
];

const Closets = () => {
  return (
    <SpaceDetail
      title="Closets y Vestier"
      imageSrc="/images/render-closet.png"
      finishes={finishes}
    />
  );
};

export default Closets;
